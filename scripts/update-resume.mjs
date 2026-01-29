import fs from 'node:fs/promises';
import path from 'node:path';
import { fileURLToPath } from 'node:url';
import { createRequire } from 'node:module';
import { GoogleGenerativeAI } from '@google/generative-ai';

const require = createRequire(import.meta.url);
const pdfParse = require('pdf-parse');

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const repoRoot = path.resolve(__dirname, '..');

const pdfPath =
  process.env.RESUME_PDF_PATH ||
  path.join(repoRoot, 'resume', 'resume.pdf');
const outputPath = path.join(repoRoot, 'src', 'data', 'resume.json');

const apiKey = process.env.GEMINI_API_KEY;
if (!apiKey) {
  throw new Error(
    'Missing GEMINI_API_KEY. Add it to .env before running update-resume.'
  );
}

async function readPdfText(filePath) {
  try {
    await fs.access(filePath);
  } catch {
    throw new Error(`Resume PDF not found at: ${filePath}`);
  }
  const buffer = await fs.readFile(filePath);
  const { text } = await pdfParse(buffer);
  return text;
}

function extractJson(text) {
  const start = text.indexOf('{');
  const end = text.lastIndexOf('}');
  if (start === -1 || end === -1 || end <= start) {
    throw new Error('Model response did not contain JSON.');
  }
  const jsonText = text.slice(start, end + 1);
  return JSON.parse(jsonText);
}

function normalizeUrl(value) {
  if (!value || typeof value !== 'string') return '';
  let v = value.trim();
  if (!v) return '';
  if (v.startsWith('mailto:') || v.startsWith('tel:')) return v;
  if (v.startsWith('http://') || v.startsWith('https://')) return v;
  if (v.startsWith('www.')) return `https://${v}`;
  if (v.startsWith('github/')) return `https://github.com/${v.slice(7)}`;
  if (v.startsWith('linkedin/')) {
    const tail = v.slice(9);
    return `https://linkedin.com/in/${tail.replace(/^in\//, '')}`;
  }
  if (v.includes('github.com/')) return `https://${v.replace(/^https?:\/\//, '')}`;
  if (v.includes('linkedin.com/')) {
    const cleaned = v.replace(/^https?:\/\//, '');
    const path = cleaned.split('linkedin.com/')[1] || '';
    if (!path.startsWith('in/')) {
      return `https://linkedin.com/in/${path.replace(/^\//, '')}`;
    }
    return `https://${cleaned}`;
  }
  if (v.includes('twitter.com/')) return `https://${v.replace(/^https?:\/\//, '')}`;
  if (v.includes('.com') || v.includes('.io') || v.includes('.dev')) {
    return `https://${v.replace(/^https?:\/\//, '')}`;
  }
  return v;
}

function extractLinksFromText(text) {
  const findFirst = (regex) => {
    const match = text.match(regex);
    return match ? match[0] : '';
  };

  return {
    github: findFirst(/https?:\/\/(www\.)?github\.com\/[^\s)]+|github\.com\/[^\s)]+/i),
    linkedin: findFirst(/https?:\/\/(www\.)?linkedin\.com\/[^\s)]+|linkedin\.com\/[^\s)]+/i),
    twitter: findFirst(/https?:\/\/(www\.)?twitter\.com\/[^\s)]+|twitter\.com\/[^\s)]+/i),
    website: findFirst(/https?:\/\/[^\s)]+|www\.[^\s)]+/i)
  };
}

function normalizeResume(data, sourceText) {
  const safeString = (val) => (typeof val === 'string' ? val.trim() : '');
  const safeArray = (val) => (Array.isArray(val) ? val : []);

  const basics = data.basics || {};
  const links = basics.links || {};
  const extracted = extractLinksFromText(sourceText || '');

  return {
    basics: {
      name: safeString(basics.name),
      role: safeString(basics.role),
      summary: safeString(basics.summary),
      location: safeString(basics.location),
      email: safeString(basics.email),
      phone: safeString(basics.phone),
      website: normalizeUrl(basics.website || extracted.website),
      links: {
        github: normalizeUrl(links.github || extracted.github),
        linkedin: normalizeUrl(links.linkedin || extracted.linkedin),
        twitter: normalizeUrl(links.twitter || extracted.twitter),
        portfolio: normalizeUrl(links.portfolio)
      }
    },
    experience: safeArray(data.experience).map((item) => ({
      title: safeString(item?.title),
      company: safeString(item?.company),
      date: safeString(item?.date),
      description: safeString(item?.description),
      tech: safeArray(item?.tech).map(safeString).filter(Boolean)
    })),
    education: safeArray(data.education).map((item) => ({
      degree: safeString(item?.degree),
      school: safeString(item?.school),
      date: safeString(item?.date),
      details: safeString(item?.details)
    })),
    skills: safeArray(data.skills).map((item) => ({
      title: safeString(item?.title),
      items: safeArray(item?.items).map(safeString).filter(Boolean)
    })),
    projects: safeArray(data.projects).map((item) => ({
      title: safeString(item?.title),
      category: safeString(item?.category),
      description: safeString(item?.description),
      tags: safeArray(item?.tags).map(safeString).filter(Boolean),
      links: {
        github: normalizeUrl(item?.links?.github),
        live: normalizeUrl(item?.links?.live)
      }
    })),
    cta: {
      availability: safeString(data?.cta?.availability),
      message: safeString(data?.cta?.message)
    }
  };
}

async function main() {
  console.log(`Reading resume: ${pdfPath}`);
  const pdfText = await readPdfText(pdfPath);

  const genAI = new GoogleGenerativeAI(apiKey);
  const model = genAI.getGenerativeModel({ model: 'gemini-2.5-flash-lite' });

  const prompt = `
You are extracting a resume into structured JSON for a portfolio site.
Return ONLY valid JSON that matches this schema exactly (no markdown, no backticks):

{
  "basics": {
    "name": "",
    "role": "",
    "summary": "",
    "location": "",
    "email": "",
    "phone": "",
    "website": "",
    "links": { "github": "", "linkedin": "", "twitter": "", "portfolio": "" }
  },
  "experience": [
    { "title": "", "company": "", "date": "", "description": "", "tech": [""] }
  ],
  "education": [
    { "degree": "", "school": "", "date": "", "details": "" }
  ],
  "skills": [
    { "title": "", "items": [""] }
  ],
  "projects": [
    {
      "title": "",
      "category": "",
      "description": "",
      "tags": [""],
      "links": { "github": "", "live": "" }
    }
  ],
  "cta": { "availability": "", "message": "" }
}

Rules:
- Keep dates exactly as written in the resume when possible.
- If a field is missing, use an empty string or empty array.
- Summarize long descriptions to 1-2 sentences max.
- Tech stack should be an array of keywords.

Resume text:
${pdfText}
`;

  const result = await model.generateContent({
    contents: [{ role: 'user', parts: [{ text: prompt }] }],
    generationConfig: {
      temperature: 0.2,
      responseMimeType: 'application/json'
    }
  });

  const rawText = result.response.text();
  const parsed = extractJson(rawText);
  const normalized = normalizeResume(parsed, pdfText);

  await fs.mkdir(path.dirname(outputPath), { recursive: true });
  await fs.writeFile(outputPath, JSON.stringify(normalized, null, 2), 'utf8');

  console.log(`Wrote: ${outputPath}`);
}

main().catch((err) => {
  console.error('Failed to update resume:', err);
  process.exit(1);
});

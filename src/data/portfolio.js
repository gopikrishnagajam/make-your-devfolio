const portfolio = {
  identity: {
    name: 'Gopi Krishna Gajam',
    role: 'AI, Data & Software Engineer',
    eyebrow: 'Applied AI · Data engineering · Cloud systems',
    headline: 'I build intelligent systems—from raw data to reliable products.',
    intro:
      'My work spans AI services, data pipelines, backend architecture, and cloud delivery. I enjoy connecting those layers: shaping messy data, building the system around it, and shipping an experience people can depend on.',
    location: 'Dallas, Texas',
    availability: 'Open to AI, data, cloud, and software engineering roles',
    email: 'gopikrishnagajam@gmail.com',
    phone: '+1 (469) 434-4746',
    contentNote: 'Draft portfolio — deeper project stories and original writing are being added.',
    links: {
      github: 'https://github.com/gopikrishnagajam',
      linkedin: 'https://www.linkedin.com/in/gopikrishnagajam',
    },
  },

  now: {
    label: 'Current direction',
    title: 'Production AI built on trustworthy data and observable infrastructure',
    description:
      'I am interested in the complete lifecycle: ingestion and validation, retrieval and inference, API delivery, cloud deployment, and the feedback loops that keep a system accurate and reliable.',
    topics: ['RAG and agents', 'Data quality', 'Pipeline orchestration', 'Cloud reliability'],
  },

  highlights: [
    { value: '100+', label: 'Production APIs built' },
    { value: '45%', label: 'Data processing improvement' },
    { value: '500+', label: 'Concurrent WebSockets supported' },
  ],

  capabilities: [
    {
      number: '01',
      title: 'Applied AI',
      description: 'Grounded AI features and services designed around evidence, structured outputs, deterministic tools, and measurable behavior.',
      skills: ['LLMs', 'RAG', 'FAISS', 'Embeddings', 'MCP', 'Function calling', 'Evaluation'],
    },
    {
      number: '02',
      title: 'Data Engineering',
      description: 'Reliable ingestion and transformation workflows that turn operational data into validated, analysis-ready datasets.',
      skills: ['Python', 'SQL', 'Pandas', 'Airflow', 'ETL/ELT', 'Data quality', 'PostgreSQL'],
    },
    {
      number: '03',
      title: 'Backend Systems',
      description: 'APIs and real-time services built with explicit contracts, secure access, thoughtful schemas, and performance under load.',
      skills: ['FastAPI', 'Django', 'Node.js', 'REST', 'WebSockets', 'Redis', 'JWT/RBAC'],
    },
    {
      number: '04',
      title: 'Cloud & MLOps',
      description: 'Containerized delivery, infrastructure automation, CI/CD, monitoring, and cost-aware optimization across AWS and GCP.',
      skills: ['AWS', 'GCP', 'Docker', 'Kubernetes', 'Terraform', 'GitHub Actions', 'Monitoring'],
    },
  ],

  featuredProjects: [
    {
      number: '01',
      title: 'Resume RAG Career Copilot',
      category: 'RAG systems case study',
      tagline: 'Career analysis that stays grounded in what a résumé actually says.',
      overview:
        'A full-stack RAG application for comparing multiple résumé versions with a job description. It supports match scoring, gap analysis, skill suggestions, bullet rewriting, and evidence-backed questions about a candidate’s experience.',
      problem:
        'Generic career chatbots can invent qualifications, provide vague advice, and repeatedly send entire résumés to an LLM. Multiple résumé versions also make it difficult to trace which experience supports an answer.',
      approach:
        'I built a section-aware ingestion and retrieval pipeline. Résumé chunks are embedded locally, indexed in FAISS, joined with Supabase metadata, deduplicated, and passed to Claude under explicit grounding and structured-output rules.',
      architecture: ['Résumé upload', 'Section-aware parser', 'MiniLM embeddings', 'FAISS + Supabase', 'Claude output modes'],
      decisions: [
        'Chunked by résumé section and bullet boundaries instead of arbitrary token windows.',
        'Used a local 384-dimensional MiniLM model and FAISS for low-cost interactive retrieval.',
        'Kept vectors in an ID-mapped FAISS index while Supabase stores text, ownership, and metadata.',
        'Separated four analysis modes into distinct prompts and typed response schemas.',
      ],
      outcomes: [
        'Implemented upload, hash-based duplicate detection, listing, chunk inspection, and coordinated deletion.',
        'Made answers traceable by returning the résumé evidence used for retrieval-backed responses.',
        'Added tests for section parsing, vector search, persistence, empty indexes, and deletion by résumé.',
      ],
      reflection:
        'Grounding is not a single prompt instruction. It depends on meaningful chunks, traceable retrieval, explicit schemas, conservative generation settings, and a clear response when evidence is missing.',
      next:
        'Add a retrieval evaluation set, support OCR for scanned résumés, and move from a local flat index when the collection outgrows single-user scale.',
      tech: ['FastAPI', 'Streamlit', 'FAISS', 'Supabase', 'MiniLM', 'Claude'],
      links: { github: 'https://github.com/gopikrishnagajam/Resume-RAG-Career-Copilot' },
    },
    {
      number: '02',
      title: 'AI-Powered Job Market Data Pipeline',
      category: 'Data and AI case study',
      tagline: 'Turning fragmented job postings into trustworthy signals about the market.',
      overview:
        'An Airflow-orchestrated pipeline that ingests job postings from a public API, validates and normalizes role metadata, loads curated records into PostgreSQL, and generates AI-assisted summaries of skills and hiring trends.',
      problem:
        'Job-posting data is inconsistent and repetitive: titles vary, skills appear in free text, company and location fields are incomplete, and raw records are not immediately useful for comparing demand over time.',
      approach:
        'I organized the workflow as explicit ingestion, validation, transformation, loading, and summarization stages. PostgreSQL holds the curated source of truth; AI operates on validated data and aggregates rather than replacing deterministic transformations.',
      architecture: ['Public job API', 'Airflow ingestion', 'Validation + normalization', 'PostgreSQL', 'LLM trend summaries'],
      decisions: [
        'Separated extraction, transformation, loading, and summarization into observable pipeline stages.',
        'Normalized skills, companies, locations, and role metadata before computing trends.',
        'Applied validation before persistence so downstream analysis works from curated records.',
        'Used LLMs for interpretation and summaries while keeping data preparation deterministic.',
      ],
      outcomes: [
        'Produced analysis-ready PostgreSQL records from inconsistent public job-posting data.',
        'Created a repeatable workflow for identifying in-demand skills and changing hiring patterns.',
        'Made data-quality failures and transformation stages independently inspectable and rerunnable.',
      ],
      reflection:
        'AI becomes more useful when it sits at the end of a trustworthy data pipeline. Validation, lineage, and reproducible transformations determine whether a generated insight deserves confidence.',
      next:
        'Add incremental watermarks, historical backfills, pipeline-level alerting, data-quality dashboards, and evaluation for generated trend summaries.',
      tech: ['Python', 'Airflow', 'PostgreSQL', 'Pandas', 'LLMs', 'Data validation'],
      links: {},
    },
  ],

  lab: [
    {
      status: 'Built',
      title: 'StudyBuddy',
      type: 'Django collaboration app',
      description:
        'A collaborative learning platform with authentication, subject-based study groups, membership approval, capacity rules, profiles, and group discussions.',
      question: 'How should relational models and permissions support the social workflow around joining and managing a study group?',
      tags: ['Django', 'SQLite', 'Django ORM', 'Materialize CSS'],
      github: 'https://github.com/gopikrishnagajam/StudyBuddy',
    },
    {
      status: 'Built',
      title: 'MCP Tool-Using Chatbot',
      type: 'AI architecture experiment',
      description:
        'A Flask chatbot that separates model conversations from a discoverable MCP tool server communicating through JSON-RPC over stdio.',
      question: 'How can AI tools evolve independently from the application and model that consume them?',
      tags: ['Python', 'Flask', 'MCP', 'JSON-RPC', 'OpenRouter'],
      github: 'https://github.com/gopikrishnagajam/chatbot',
    },
    {
      status: 'Built',
      title: 'Daily DSA Writer',
      type: 'Automation experiment',
      description:
        'A scheduled Cloud Run pipeline that selects a new algorithms topic, generates a compact article, and persists state to avoid repetition.',
      question: 'What is the smallest reliable architecture for a useful autonomous content workflow?',
      tags: ['Python', 'Gemini', 'Cloud Run', 'GCS', 'SMTP'],
      github: 'https://github.com/gopikrishnagajam/daily-dsa-article',
    },
    {
      status: 'Built',
      title: 'Netflix Local ETL',
      type: 'Data engineering exercise',
      description:
        'A scheduled Python pipeline that cleans a Netflix titles dataset, detects new records, incrementally loads PostgreSQL, and records each run.',
      question: 'How can a small ETL job stay repeatable and avoid reloading data it has already processed?',
      tags: ['Python', 'Pandas', 'PostgreSQL', 'SQLAlchemy'],
      github: 'https://github.com/gopikrishnagajam/Local_ETL',
    },
    {
      status: 'Built',
      title: 'Vakalat',
      type: 'Multi-tenant legal SaaS',
      description:
        'A legal case and document-management platform with tenant-aware JWT/RBAC access, more than 50 REST endpoints, normalized PostgreSQL schemas, and containerized GCP delivery.',
      question: 'How should tenant isolation and permissions shape a workflow platform from its first schema and API?',
      tags: ['Node.js', 'PostgreSQL', 'React', 'Docker', 'GCP'],
      github: '',
    },
    {
      status: 'Built',
      title: 'Make Your DevFolio',
      type: 'Developer tooling experiment',
      description:
        'The original version of this portfolio: a React template that transformed a résumé PDF into structured site content through an AI extraction step.',
      question: 'How much friction can be removed from turning a résumé into a presentable starting point for a portfolio?',
      tags: ['React', 'Vite', 'Gemini', 'Docker'],
      github: 'https://github.com/gopikrishnagajam/make-your-devfolio',
    },
  ],

  principles: [
    {
      number: '01',
      title: 'Start with the workflow',
      description:
        'Technology earns its place by removing friction from a real task. I begin with the user’s decisions and constraints before choosing the stack.',
    },
    {
      number: '02',
      title: 'Make failure inspectable',
      description:
        'A system is easier to trust when failures leave useful evidence. Clear boundaries, logs, metrics, and intermediate artifacts are product features too.',
    },
    {
      number: '03',
      title: 'Prefer boring foundations',
      description:
        'Proven infrastructure creates room for experimentation where it matters. Novelty should be concentrated around the actual product advantage.',
    },
    {
      number: '04',
      title: 'Design for the next question',
      description:
        'The first version should be simple, but it should also make learning cheap. Good architecture helps a team discover what to build next.',
    },
  ],

  about: {
    headline: 'Interested in the whole path from data to decision to production.',
    paragraphs: [
      'My background crosses electrical engineering, graduate study in data engineering, production backend development, and applied AI. That mix makes me comfortable moving between a data-quality problem, an inference workflow, an API contract, and the cloud infrastructure supporting all three.',
      'At Dussap, I have worked across AI-enabled services, data and schema design, authentication, messaging, geolocation, checkout, caching, real-time connections, monitoring, and AWS/GCP delivery. I like roles where understanding the surrounding system is part of solving the problem.',
      'I am not attached to one job title. The common thread in the work I want is building dependable technical systems, learning from their behavior, and making complex capabilities useful to other people.',
    ],
    interests: ['Applied AI', 'Data platforms', 'MLOps', 'Cloud systems', 'Distributed systems', 'Developer tools', 'Teaching'],
    workingStyle: [
      'I make data quality, failure modes, and operational constraints visible early.',
      'I prefer small, observable releases over large invisible rewrites.',
      'I document schemas, assumptions, and decisions so the next engineer inherits context, not mysteries.',
    ],
  },

  journey: [
    {
      period: '2025 — Now',
      title: 'Software Engineer',
      place: 'Dussap, LLC',
      summary: 'Building production AI services, APIs, data workflows, real-time systems, and cloud infrastructure across AWS and GCP.',
    },
    {
      period: '2023 — 2025',
      title: 'M.S. Computer Engineering · Data Engineering',
      place: 'Southern Methodist University',
      summary: 'Deepened my work in data systems while teaching system-design strategies.',
    },
    {
      period: '2024',
      title: 'Software Engineer Intern',
      place: 'Dussap, LLC',
      summary: 'Worked across backend services, schemas, APIs, deployment, and production debugging.',
    },
    {
      period: '2022',
      title: 'B.Tech. Electrical Engineering',
      place: 'IIT Bombay',
      summary: 'Built the engineering foundation that led me toward software and data systems.',
    },
  ],

  contact: {
    heading: 'Working on a difficult AI, data, or systems problem?',
    message:
      'I am open to roles and collaborations across applied AI, data engineering, cloud platforms, backend systems, and the spaces where those disciplines overlap.',
    prompts: ['Applied AI and ML systems', 'Data engineering and platforms', 'Cloud and MLOps', 'Backend and distributed systems'],
  },
};

export default portfolio;

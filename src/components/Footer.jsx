import portfolio from '../data/portfolio';

const Footer = () => (
  <footer className="relative z-20 w-full border-t border-white/10 bg-[#030014] py-8">
    <div className="mx-auto flex max-w-7xl flex-col justify-between gap-3 px-6 text-sm text-gray-500 md:flex-row">
      <p>© {new Date().getFullYear()} {portfolio.identity.name}</p>
      <p>Designed as a living record of work, questions, and ideas.</p>
    </div>
  </footer>
);

export default Footer;

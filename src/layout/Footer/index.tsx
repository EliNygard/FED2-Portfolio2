const Footer = () => {
  return (
    <footer className="bg-theme-secondary">
      <nav className="max-w-7xl md:m-auto px-7 py-11 md:py-14">
        <ul className="flex flex-col gap-8 md:flex-row md:justify-center md:gap-24">
          <li>
            <a
              href="https://www.linkedin.com/in/eli-nygard"
              target="_blank"
              rel="noopener noreferrer"
              className="hover-underline py-1.5"
            >
              Visit my <span className="uppercase">Linkedin</span>
            </a>
          </li>
          <li>
            <a
              href="https://github.com/EliNygard"
              target="_blank"
              rel="noopener noreferrer"
              className="hover-underline py-1.5"
            >
              Visit my <span className="uppercase">GitHub</span>
            </a>
          </li>
          <li>
            <a
              href="mailto:eli.nygard@gmail.com"
              className="hover-underline py-1.5"
            >
              Send me an <span className="uppercase">email</span>
            </a>
          </li>
        </ul>

        <div className="flex justify-center gap-2 mt-10 md:mt-14 text-sm text-font-secondary">
          <span className="uppercase">Portfolio</span>
          <span>Eli Nygård</span>
          <span>2025</span>
        </div>
      </nav>
    </footer>
  );
};

export default Footer;

const Footer = () => {
  return (
    <footer className="bg-theme-secondary">
      <nav className="max-w-7xl px-7 py-11 md:py-14">
        <ul className="flex flex-col gap-11 md:flex-row md:justify-center">
          <li className="hover-underline">
            <a
              href="https://www.linkedin.com/in/eli-nygard"
              target="_blank"
              rel="noopener noreferrer"
            >
              Visit my <span className="uppercase">Linkedin</span>
            </a>
          </li>
          <li className="hover-underline">
            <a
              href="https://github.com/EliNygard"
              target="_blank"
              rel="noopener noreferrer"
            >
              Visit my <span className="uppercase">GitHub</span>
            </a>
          </li>
          <li className="hover-underline">
            <a href="mailto:eli.nygard@gmail.com">
              Send me an <span className="uppercase">email</span>
            </a>
          </li>
        </ul>
      </nav>
    </footer>
  );
};

export default Footer;

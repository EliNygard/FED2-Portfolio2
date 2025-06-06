import { Link } from "react-router-dom";

const Header = () => {
  return (
    <header className="mb-20 mt-4 md:mt-8 mx-auto flex flex-col items-center">
      <Link to={"/"}>
        <div className="flex flex-col sm:flex-row gap-4 md:gap-10 items-center">
          <img src="/signature_5.png" alt="Logo" className="w-32 md:w-42" />
          <p>Front-end developer</p>
        </div>
      </Link>

      <nav className="mt-8">
        <ul className="flex flex-row flex-wrap justify-center items-center gap-8">
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
          {/* <li>
            <a
              href="mailto:eli.nygard@gmail.com"
              className="hover-underline py-1.5"
            >
              Send me an <span className="uppercase">email</span>
            </a>
          </li> */}
        </ul>
      </nav>
    </header>
  );
};

export default Header;

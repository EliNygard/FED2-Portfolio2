import { Link } from "react-router-dom";

const Header = () => {
  return (
    <header className="mb-20 mt-4 md:mt-8 mx-auto">
      <Link to={"/"}>
        <div className="flex flex-col md:flex-row gap-4 md:gap-10 items-center">
          <img src="/signature_5.png" alt="Logo" className="w-32 md:max-w-56" />
          <p>Front-end developer</p>
        </div>
      </Link>
    </header>
  );
};

export default Header;

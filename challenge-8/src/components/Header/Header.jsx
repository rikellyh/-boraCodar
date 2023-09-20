import logo from "../../assets/rocketseatlogo.svg";

const Header = () => {
  return (
    <header>
      <div className="Container__Header">
        <img src={logo} alt="logomarca" />
        <div>
          <a href="https://github.com/rikellyh/-boraCodar">Repositório</a>
          <a href="https://github.com/rikellyh">GitHub</a>
        </div>
      </div>
    </header>
  );
};

export default Header;

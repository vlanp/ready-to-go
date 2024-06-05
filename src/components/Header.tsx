import spaceShuttle from "../assets/img/space-shuttle.svg";

const Header = () => {
  return (
    <header>
      <img src={spaceShuttle} alt="space shuttle" />
      <h1>Ready To Go</h1>
    </header>
  );
};

export default Header;

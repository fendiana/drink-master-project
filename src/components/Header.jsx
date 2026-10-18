import Logo from "./logo";
import Navigation from "./Navigation";

const Header = () => {
  return (
    <header>
      <Logo />
      <Navigation />
      <button type="button" aria-label="Open user menu">
        User
      </button>
    </header>
  );
};

export default Header;

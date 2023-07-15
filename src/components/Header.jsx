import Logo from "./Logo";
import NavBar from "./NavBar";
import UserIcon from "./UserIcon";
import "../styles/Header.css";

function Header() {
  return (
    <header>
      <Logo />
      <NavBar />
      <UserIcon />
    </header>
  );
}

export default Header;

import NavBarStyles from "./NavBar.module.css";
const NavBar = () => {

    return (
      <nav className={NavBarStyles.navStyle}>
        <li>Home</li>
        <li>About</li>
        <li>Projects</li>
        <li>Contact</li>
      </nav>
    );
  };
  
  export default NavBar;
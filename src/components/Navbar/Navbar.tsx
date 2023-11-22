import { useState, useEffect } from "react";
// import { InView } from "react-intersection-observer";
import { NavStyle, Bar, MenuBar, NavItemsContainer } from "./styled.Navbar";
import { Link } from "react-router-dom"; // importing assets
import { images } from "../../constants";

const Navbar = () => {
  const [activeItem, setActiveItem] = useState<string>("home");
  const [showNav, setShowNav] = useState<boolean>(true); // keep track of whether to show the nav
  const [prevScrollPos, setPrevScrollPos] = useState<number>(0); // keep track of the previous scroll position
  const [clickNavBar, setClickNavBar] = useState<boolean>(false); // keep track of whether nav bar is clicked

  const navItems = [
    { label: "timeline", href: "#timeline" },
    { label: "Overview", href: "#overview" },
    { label: "FAQs", href: "#faqs" },
    // { label: "Contact", href: "#contact" },
    // { label: "Register", href: "#reviews" },
    // { label: "community", href: "#community" },
  ];

  const handleNavItemClick = (item: NavItemProps) => {
    setActiveItem(item.label);
    setClickNavBar(!clickNavBar);
  };

  const handleNavBarIconClick = () => {
    setClickNavBar(!clickNavBar);
  };

  const deviceWidth = window.innerWidth;

  useEffect(() => {
    if (deviceWidth < 900 && clickNavBar === false) {
      // if on mobile screen
      const handleScroll = () => {
        const currentScrollPos = window.pageYOffset;

        // hide the nav if scrolling down, show it if scrolling up
        setShowNav(prevScrollPos > currentScrollPos || currentScrollPos < 10);

        setPrevScrollPos(currentScrollPos);
      };

      window.addEventListener("scroll", handleScroll);

      return () => {
        window.removeEventListener("scroll", handleScroll);
      };
    }
    if (deviceWidth > 900) {
      const handleScroll = () => {
        const currentScrollPos = window.pageYOffset;

        // hide the nav if scrolling down, show it if scrolling up
        setShowNav(prevScrollPos > currentScrollPos || currentScrollPos < 10);

        setPrevScrollPos(currentScrollPos);
      };

      window.addEventListener("scroll", handleScroll);

      return () => {
        window.removeEventListener("scroll", handleScroll);
      };
    }
  }, [prevScrollPos, clickNavBar, deviceWidth]); // added a dependency for mobile screens

  return (
    <NavStyle shownav={showNav === true ? 1 : 0}>
      <div>
        <Link to="/">
          <img src={images.Logo} alt="logo" />
        </Link>
      </div>

      <ul className="big__screens">
        {navItems.map((item) => (
          <li key={item.label} onClick={() => handleNavItemClick(item)}>
            <a
              href={item.href}
              className={activeItem === item.label ? "active" : "inactive"}
            >
              {item.label}
            </a>
          </li>
        ))}
        <Link to="/contact"> Contact</Link>
        <Link to="/register">
          <button>Register</button>
        </Link>
      </ul>
      <NavItemsContainer className="small__screens" clicknav={clickNavBar}>
        {navItems.map((item) => (
          <li key={item.label} onClick={() => handleNavItemClick(item)}>
            <a
              href={item.href}
              className={activeItem === item.label ? "active" : "inactive"}
            >
              {item.label}
            </a>
            <Link to="/contact">Contact</Link>
          </li>
        ))}
        <Link to="/register">
          <button>Register</button>
        </Link>
      </NavItemsContainer>

      <MenuBar
        className="menu-bar"
        onClick={handleNavBarIconClick}
        clicknav={clickNavBar}
      >
        {/* <img src={images.MenuBar} /> */}
        <Bar className="bar" clicknav={clickNavBar} position="top"></Bar>
        <Bar className="bar" clicknav={clickNavBar} position="middle"></Bar>
        <Bar className="bar" clicknav={clickNavBar} position="bottom"></Bar>
      </MenuBar>
    </NavStyle>
  );
};

export default Navbar;

// types are written here because i want a clear view
type NavItemProps = {
  label: string;
  href: string;
};

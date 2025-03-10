import Link from "next/link";

export default function Navbar() {
  return (
    <>
      <ul id="myNavbar" className="navbar_nav">
        <li className="menu-item  menu-item-has-children dropdown dropdown_full position-static mega_menu nav-item">
          <Link href="/" className="dropdown-toggle nav-link">
            <span>Home</span>
          </Link>
        </li>
        <li className="menu-item menu-item-has-children dropdown nav-item">
          <Link href="/software" className="dropdown-toggle nav-link">
            <span>Software Features</span>
          </Link>
        </li>
        <li className="menu-item menu-item-has-children dropdown dropdown_full position-static mega_menu nav-item">
          <Link href="/services" className="dropdown-toggle nav-link">
            <span>Services</span>
          </Link>
        </li>
        <li className="menu-item menu-item-has-children dropdown nav-item">
          <Link href="/about" className="dropdown-toggle nav-link">
            <span>About Us</span>
          </Link>
        </li>
        <li className="menu-item menu-item-has-children dropdown nav-item">
          <Link href="/pricing" className="dropdown-toggle nav-link">
            <span>Pricing</span>
          </Link>
        </li>
        <li className="menu-item  menu-item-has-children dropdown nav-item">
          <Link href="/contact" className="dropdown-toggle nav-link">
            <span>Contact</span>
          </Link>
        </li>
      </ul>
    </>
  );
}

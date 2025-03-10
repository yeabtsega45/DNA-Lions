import Link from "next/link";
import { useRouter } from "next/router";
export default function Navbar() {
  const router = useRouter();

  return (
    <>
      {/* <ul className="sub-menu">
                <Link className={router.pathname == "/" ? "active" : ""}>Home Default</Link>
                <Link className={router.pathname == "/index-2" ? "active" : ""}>Home Interior</Link>
            </ul> */}
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

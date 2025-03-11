import Link from "next/link";

export default function FloatingMenu({ handleFloating, isFloating }) {
  return (
    <>
      <div
        className={`floating_menu_box ${isFloating ? "remove_floating" : ""}`}
      >
        <ul className="float_menu_box">
          <i className="close fa fa-times" onClick={handleFloating} />
          <li className="floating_menu_text active">
            <Link href="/"> Home </Link>
          </li>
          <li className="floating_menu_text ">
            <Link href="/software">Software Features </Link>
          </li>
          <li className="floating_menu_text ">
            <Link href="/services"> Services </Link>
          </li>
          <li className="floating_menu_text ">
            <Link href="/about"> About Us </Link>
          </li>
          <li className="floating_menu_text ">
            <Link href="/pricing"> Pricing </Link>
          </li>
          <li className="floating_menu_text">
            <Link href="/contact"> Contact </Link>
          </li>
        </ul>
      </div>
    </>
  );
}

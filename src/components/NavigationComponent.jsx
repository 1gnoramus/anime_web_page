import { Link, useLocation } from "react-router-dom";
export function NavigationComponent() {
  const location = useLocation();

  return (
    <nav>
      <Link to="/">
        <img
          src="https://www.pngmart.com/files/Anime-Logo-PNG-Transparent.png"
          alt=""
        />
      </Link>
      <ul>
        <li>
          <Link className={location.pathname == "/" ? "active" : ""} to="/">
            Home
          </Link>
        </li>
        <li>
          <Link
            className={location.pathname == "/about" ? "active" : ""}
            to="/about"
          >
            About
          </Link>
        </li>
        <li>
          <Link
            className={location.pathname == "/contacts" ? "active" : ""}
            to="/contacts"
          >
            Contacts
          </Link>
        </li>
      </ul>
    </nav>
  );
}

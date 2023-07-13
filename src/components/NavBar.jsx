import { NavLink } from "react-router-dom";

export default function NavBar() {
  return (
    <div>
      <h1>Pagina principal</h1>
      <nav>
        <ul>
          <li>
            <NavLink
              className={({ isActive }) => (isActive ? "active" : "")}
              to={"/"}
            >
              Home
            </NavLink>
          </li>
          <li>
            <NavLink
              className={({ isActive }) => (isActive ? "active" : "")}
              to={"/about"}
            >
              About
            </NavLink>
          </li>
          <li>
            <NavLink
              className={({ isActive }) => (isActive ? "active" : "")}
              to={"/users"}
            >
              Users
            </NavLink>
          </li>
        </ul>
      </nav>
    </div>
  );
}

import { Routes, Route, Link, NavLink } from "react-router";

function Header() {
  return (
    <>
      <Routes>
        <Route
          path="/settings"
          element={
            <div>
              <p>No apto para manzanas</p>
            </div>
          }
        />

        <Route
          path="/projects"
          element={
            <div>
              <p>No apto para manzanas</p>
            </div>
          }
        />
      </Routes>
      <nav>
        <ul>
          <li>
            <NavLink to="/overview">Overview</NavLink> {" | "}
            <NavLink to="/repositories">Repositories</NavLink> {" | "}
            <NavLink to="/packages">Packages</NavLink> {" | "}
            <NavLink to="/people">People</NavLink> {" | "}
            <NavLink to="/teams">Teams</NavLink> {" | "}
            <NavLink to="/projects">Projects</NavLink> {" | "}
            <NavLink to="/settings">Settings</NavLink>
          </li>
        </ul>
      </nav>
    </>
  );
}

export default Header;

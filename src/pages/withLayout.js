import { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { useThemeContext } from "../context/theme.context";

function withLayout(Component) {
  function Layout() {
    const location = useLocation();
    const [activeNav, setActiveNav] = useState("home");
    const { darkTheme, toggleTheme } = useThemeContext();

    useEffect(() => {
      let currentLoc = location.pathname.split("/");
      let current = currentLoc[1];

      switch (current) {
        case "about":
          setActiveNav("about");
          break;
        case "blog":
          setActiveNav("blog");
          break;
        default:
          setActiveNav("home");
          break;
      }
    }, [location.pathname]);

    return (
      <div className="layout">
        <header className="appbar">
          <span>Logo</span>
          <div>
            <nav>
              <span
                className={`nav-link ${activeNav === "home" ? "active" : ""}`}
              >
                <Link to="/">Home</Link>
              </span>
              <span
                className={`nav-link ${activeNav === "about" ? "active" : ""}`}
              >
                <Link to="/about">About</Link>
              </span>
              <span
                className={`nav-link ${activeNav === "blog" ? "active" : ""}`}
              >
                <Link to="/blog">Blog</Link>
              </span>
            </nav>
          </div>
          <div>
            <label className="switch">
              <input
                type="checkbox"
                value={darkTheme}
                className={`${darkTheme ? "dark-check" : "light-check"}`}
                onChange={(e) => toggleTheme(e.target.checked)}
              />
              <span className="slider round"></span>
            </label>
          </div>
        </header>
        <main
          className={`main-component ${darkTheme ? "main-component-dark" : ""}`}
        >
          <Component />
        </main>
        <footer>&copy; 2022 PreMEST</footer>
      </div>
    );
  }

  return Layout;
}

export default withLayout;

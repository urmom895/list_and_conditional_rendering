import "../styles/NavBar.css";

function Navbar({ user, notifications = 0 }) {
  return (
    <nav className="navbar">
      <h2>MyApp</h2>

      <div className="nav-links">
        {user ? (
          <>
            <span>Hi, {user.name}</span>
            <button type="button">Log out</button>
          </>
        ) : (
          <>
            <button type="button">Log in</button>
            <button type="button">Sign up</button>
          </>
        )}

        {user && user.role === "admin" && (
          <a href="#">Admin dashboard</a>
        )}

        {notifications > 0 && (
          <span className="notification">
            🔔 {notifications > 9 ? "9+" : notifications}
          </span>
        )}
      </div>
    </nav>
  );
}

export default Navbar;
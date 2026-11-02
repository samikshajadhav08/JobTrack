import { Bell, Search } from "lucide-react";

const Navbar = () => {
  return (
    <header className="navbar">
      <div>
        <h3>Dashboard</h3>
        <p>Welcome back! Here's your job search overview.</p>
      </div>

      <div className="navbar-actions">
        <button aria-label="Search">
          <Search />
        </button>

        <button aria-label="Notifications">
          <Bell />
        </button>

        <div className="avatar">S</div>
      </div>
    </header>
  );
};

export default Navbar;
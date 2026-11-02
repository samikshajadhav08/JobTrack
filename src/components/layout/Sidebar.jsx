import {
  LayoutDashboard,
  Briefcase,
  Settings,
  LogOut
} from "lucide-react";

const Sidebar = () => {
  const menuItems = [
    { name: "Dashboard", icon: LayoutDashboard },
    { name: "Applications", icon: Briefcase },
    { name: "Settings", icon: Settings },
  ];

  return (
    <aside className="sidebar">
      <h2 className="logo">JobTrack.</h2>

      <nav>
        {menuItems.map((item) => {
          const Icon = item.icon;

          return (
            <a href="#" className="nav-link" key={item.name}>
              <Icon size={20} />
              <span>{item.name}</span>
            </a>
          );
        })}
      </nav>

      <button className="logout">
        <LogOut size={20} />
        Logout
      </button>
    </aside>
  );
};

export default Sidebar;
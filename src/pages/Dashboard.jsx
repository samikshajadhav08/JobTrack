import StatCard from "../components/dashboard/StatCard";

const Dashboard = () => {
  const stats = [
    {
      id: 1,
      title: "Total Applications",
      count: 24,
      description: "All applications"
    },
    {
      id: 2,
      title: "Interviews",
      count: 8,
      description: "Interview opportunities"
    },
    {
      id: 3,
      title: "Offers",
      count: 3,
      description: "Offers received"
    },
    {
      id: 4,
      title: "Rejected",
      count: 5,
      description: "Unsuccessful applications"
    }
  ];

  return (
    <section className="dashboard">
      <div className="dashboard-heading">
        <h2>Overview</h2>
        <p>Track your job search progress.</p>
      </div>

      <div className="stats-grid">
        {stats.map((stat) => (
          <StatCard key={stat.id} {...stat} />
        ))}
      </div>
    </section>
  );
};

export default Dashboard;
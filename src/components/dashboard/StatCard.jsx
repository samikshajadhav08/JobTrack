const StatCard = ({ title, count, description }) => {
  return (
    <div className="stat-card">
      <p>{title}</p>
      <h2>{count}</h2>
      <small>{description}</small>
    </div>
  );
};

export default StatCard;
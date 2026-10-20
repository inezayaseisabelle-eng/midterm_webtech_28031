function ServiceCard({ icon, title, description }) {
  return (
    <article className="card service-card">
      <span className="service-icon" aria-hidden="true">
        {icon}
      </span>
      <h3>{title}</h3>
      <p>{description}</p>
    </article>
  );
}

export default ServiceCard;

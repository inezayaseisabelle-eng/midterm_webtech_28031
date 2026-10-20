function EventCard({ title, date, time, description }) {
  const eventDate = new Date(date + 'T00:00:00');
  const day = eventDate.getDate();
  const month = eventDate.toLocaleString('en-US', { month: 'short' });
  const fullDate = eventDate.toLocaleDateString('en-US', {
    weekday: 'long',
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  });

  return (
    <article className="card event-card">
      <div className="event-date" aria-hidden="true">
        <span className="event-day">{day}</span>
        <span className="event-month">{month}</span>
      </div>
      <div className="event-body">
        <h3>{title}</h3>
        <p className="event-meta">
          {fullDate} · {time}
        </p>
        <p>{description}</p>
      </div>
    </article>
  );
}

export default EventCard;

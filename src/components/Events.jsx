import SectionTitle from './SectionTitle.jsx';
import EventCard from './EventCard.jsx';
import { events } from '../data/libraryData.js';

function Events() {
  return (
    <section id="events" className="section">
      <div className="container">
        <SectionTitle
          title="Upcoming Events"
          subtitle="Join us — all events are free and open to the community."
        />
        <div className="grid">
          {events.map((event) => (
            <EventCard key={event.title} {...event} />
          ))}
        </div>
      </div>
    </section>
  );
}

export default Events;

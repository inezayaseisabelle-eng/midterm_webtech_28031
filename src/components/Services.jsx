import SectionTitle from './SectionTitle.jsx';
import ServiceCard from './ServiceCard.jsx';
import { services } from '../data/libraryData.js';

function Services() {
  return (
    <section id="services" className="section section-alt">
      <div className="container">
        <SectionTitle
          title="Our Services"
          subtitle="Everything you need to read, learn and grow — free for members."
        />
        <div className="grid">
          {services.map((service) => (
            <ServiceCard key={service.title} {...service} />
          ))}
        </div>
      </div>
    </section>
  );
}

export default Services;

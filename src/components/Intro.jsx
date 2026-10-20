import SectionTitle from './SectionTitle.jsx';

function Intro() {
  return (
    <section id="about" className="section">
      <div className="container">
        <SectionTitle title="Welcome to Bright Future Library" />
        <div className="intro-grid">
          <div className="intro-text">
            <p>
              Bright Future Library is a new community library created for
              everyone in our town — children, students, parents and lifelong
              learners. We offer a growing collection of books, quiet places to
              study, and free access to computers and the internet.
            </p>
            <p>
              A library is more than a building full of books. It is a safe,
              welcoming space where people can learn new skills, prepare for
              exams, discover new ideas and connect with their neighbours. By
              making knowledge available to all, we help build a stronger,
              better-educated community.
            </p>
          </div>
          <ul className="intro-stats">
            <li>
              <strong>5,000+</strong>
              <span>Books</span>
            </li>
            <li>
              <strong>20</strong>
              <span>Computers</span>
            </li>
            <li>
              <strong>6 days</strong>
              <span>Open weekly</span>
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
}

export default Intro;

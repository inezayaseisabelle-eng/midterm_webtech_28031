import SectionTitle from './SectionTitle.jsx';
import BookCard from './BookCard.jsx';
import { books } from '../data/libraryData.js';

function FeaturedBooks() {
  return (
    <section id="books" className="section section-alt">
      <div className="container">
        <SectionTitle
          title="Featured Books"
          subtitle="Staff picks available to borrow this month."
        />
        <div className="grid">
          {books.map((book) => (
            <BookCard key={book.title} {...book} />
          ))}
        </div>
      </div>
    </section>
  );
}

export default FeaturedBooks;

// Shows a cover image if one is provided, otherwise a simple coloured cover
function BookCard({ title, author, description, image, color }) {
  return (
    <article className="card book-card">
      {image ? (
        <img className="book-cover" src={image} alt={`Cover of ${title}`} />
      ) : (
        <div className="book-cover" style={{ backgroundColor: color }}>
          <span className="cover-title">{title}</span>
          <span className="cover-author">{author}</span>
        </div>
      )}
      <div className="book-body">
        <h3>{title}</h3>
        <p className="book-author">by {author}</p>
        <p>{description}</p>
      </div>
    </article>
  );
}

export default BookCard;

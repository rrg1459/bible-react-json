import './book.scss';

const Book = (props) => {

  const book = props.book;

  return (
    <div className="book">
      <div className="abbreviation">
        {book.abbreviation}
      </div>
      <div className="label">
        {book.label}
      </div>

    </div>
  );
};

export default Book;
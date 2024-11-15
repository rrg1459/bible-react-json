import './book.scss';

const Book = (props) => {

  const book = props.book;

  return (
    <div className="book">
      {book.abbreviation}
    </div>
  );
};

export default Book;
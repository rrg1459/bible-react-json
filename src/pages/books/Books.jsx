import Book from "../../components/book/Book.jsx"
import { books } from '../../bible/books';
import './books.scss';

console.log('xxx books-->: ', books);

const Books = () => {
  return (
    <div className="books">
      <div className="main">

        {books && (
          books.map((book) => (
            <Book key={book.id} book={book} />
          ))

        )}


      </div>
    </div>
  );
};

export default Books;
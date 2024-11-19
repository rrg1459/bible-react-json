import { useDispatch, useSelector } from 'react-redux';
// import { books } from '../../bible/books';
import { verses } from '../../bible/verses';
import { types } from '../../bible/types';
import { changeVerses, updateQuote } from '../../redux/quoteSlice';
import './book.scss';

const Book = (props) => {

  const dispatch = useDispatch();
  const selectQuote = (state) => state.quote;
  const { book } = useSelector(selectQuote);

  const handleSubmit = (e) => {
    e.preventDefault();
    const testament = props.book.testament_id === 1 ? 'Viejo Testamento' : 'Nuevo Testamento';
    const type = types.find((t) => t.id === props.book.type_id);
    const selectVerses = verses.filter((v) => v.book_id === props.book.id && v.chapter === 1);
    dispatch(updateQuote({
      book: {
        id: props.book.id,
        testament,
        label: props.book.label,
        abbreviation: props.book.abbreviation,
        chapters: props.book.chapters,
        type: type.label
      },
      chapter: 1,
      verse: 0
    }));
    dispatch(changeVerses(selectVerses));
  };

  return (
    <>
      {types && (
        <div className={`
          book
          ${types[props.book.type_id - 1].label}
          ${props.book.id === book.id ? 'selected-book' : ''} `}
          onClick={handleSubmit}
        >
          <div className="abbreviation">
            {props.book.abbreviation}
          </div>
          <div className="label">
            {props.book.label}
          </div>
        </div>
      )}
    </>
  );
};

export default Book;

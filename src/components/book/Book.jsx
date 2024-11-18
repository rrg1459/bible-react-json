import { useSelector } from 'react-redux';
import { types } from '../../bible/types';

import './book.scss';

const Book = (props) => {

  const { book } = useSelector((state) => state.quote);

  const handleSubmit = (e) => {
    e.preventDefault();
    // console.log('xxx current chapter-->: ', e.target.innerText);
    console.log('xxx book ID-->: ', props.book.id);
  }

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

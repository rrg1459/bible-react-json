import { types } from '../../bible/types';

import './book.scss';

const Book = (props) => {

  const book = props.book;

  return (
    <>
      {types && (
        <div className={`book ${types[book.type_id - 1].label}`}>
          <div className="abbreviation">
            {book.abbreviation}
          </div>
          <div className="label">
            {book.label}
          </div>
        </div>
      )}
    </>
  );
};

export default Book;

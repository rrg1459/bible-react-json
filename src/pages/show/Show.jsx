import Verses from "../verses/Verses.jsx"
import Books from "../books/Books.jsx"
import NumChapters from "../numChapters/NumChapters.jsx"
import NumVerses from "../numVerses/NumVerses.jsx"
import './show.scss';
import { useSelector } from "react-redux";

const Show = () => {

  const { book, verses, chapter, verse } = useSelector((state) => state.quote);

  console.log('xxx chapter-->: ', chapter);
  console.log('xxx verse-->: ', verse);

  return (
    <div className="show">
      <div className="parent">
        <div className="verses">
          <Verses />
        </div>
        <div className="books">
          <Books />
        </div>
        <div className="num-chapters">
          <NumChapters numChapters={book.chapters} />
        </div>
        <div className="num-verses">
          <NumVerses numVerses={verses.length} />
        </div>
      </div>
    </div>

  );
};

export default Show;
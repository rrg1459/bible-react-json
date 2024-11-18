import { useSelector } from "react-redux";
import NumChapters from "../../components/numChapters/NumChapters.jsx"
import NumVerses from "../../components/numVerses/NumVerses.jsx"
import Books from "../../components/books/Books.jsx"
import Verses from "../../components/verses/Verses.jsx"
import './show.scss';

const Show = () => {

  const { book, verses, chapter, verse } = useSelector((state) => state.quote);

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
          <NumChapters numChapters={book.chapters} chapter={chapter} />
        </div>
        <div className="num-verses">
          <NumVerses numVerses={verses.length} verse={verse} />
        </div>
      </div>
    </div>

  );
};

export default Show;
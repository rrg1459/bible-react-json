import Verses from "../verses/Verses.jsx"
import Books from "../books/Books.jsx"
import NumChapters from "../numChapters/NumChapters.jsx"
import NumVerses from "../numVerses/NumVerses.jsx"
import './show.scss';

const Show = () => {
  return (
    <div className="show">
      <div className="parent">
        <div className="verses">
          <Verses />
        </div>
        <div className="books">
          <Books />
        </div>
        <div className="numChapters">
          <NumChapters />
        </div>
        <div className="numVerses">
        <NumVerses />
        </div>
      </div>
    </div>

  );
};

export default Show;
import Verses from "../verses/Verses.jsx"
import Books from "../books/Books.jsx"
import NumChapters from "../numChapters/NumChapters.jsx"
import NumVerses from "../numVerses/NumVerses.jsx"
import './show.scss';

const Show = () => {
  return (
    <div className="show">
      <div class="parent">
        <div class="verses">
          <Verses />
        </div>
        <div class="books">
          <Books />
        </div>
        <div class="numChapters">
          <NumChapters />
        </div>
        <div class="numVerses">
        <NumVerses />
        </div>
      </div>
    </div>

  );
};

export default Show;
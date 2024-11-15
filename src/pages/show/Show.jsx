import Verses from "../verses/Verses.jsx"
import Books from "../books/Books.jsx"
import NumChapters from "../numChapters/NumChapters.jsx"
import NumVerses from "../numVerses/NumVerses.jsx"
import './show.scss';

const Show = () => {
  return (
    <div className="show">
      <div class="parent">
        <div class="div1">
          <Verses />
        </div>
        <div class="div2">
          <Books />
        </div>
        <div class="div3">
          <NumChapters />
        </div>
        <div class="div4">
        <NumVerses />
        </div>
      </div>
    </div>

  );
};

export default Show;
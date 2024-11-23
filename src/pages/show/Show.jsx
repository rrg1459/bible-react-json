import { useSelector } from "react-redux";
import { useState } from 'react';
import { useKeyPress } from "@uidotdev/usehooks";
import NumChapters from "../../components/numChapters/NumChapters.jsx"
import NumVerses from "../../components/numVerses/NumVerses.jsx"
import RefreshLanguage from "../../components/refreshLanguage/RefreshLanguage.jsx"
import Books from "../../components/books/Books.jsx"
import Verses from "../../components/verses/Verses.jsx"
import './show.scss';

const Show = () => {

  const selectQuote = (state) => state.quote;
  const { book, verses, chapter, verse } = useSelector(selectQuote);

  const [activeKey, setActiveKey] = useState("");

  const vowels = ['e', 'E', 'i', 'I'];

  useKeyPress("e", onKeyPress);
  useKeyPress("E", onKeyPress);
  useKeyPress("i", onKeyPress);
  useKeyPress("I", onKeyPress);

  function onKeyPress(e) {
    e.preventDefault();
    setActiveKey(e.key);
    setTimeout(() => {
      setActiveKey("");
    }, 0);
  }

  return (
    <>
    {(vowels.includes(activeKey)) && <RefreshLanguage activeKey={activeKey} />}
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
    </>

  );
};

export default Show;
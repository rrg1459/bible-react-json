import { useSelector } from "react-redux";
import { useEffect, useState } from 'react';
import { useKeyPress } from "@uidotdev/usehooks";
import NumChapters from "../../components/numChapters/NumChapters.jsx"
import NumVerses from "../../components/numVerses/NumVerses.jsx"
import RefreshLanguage from "../../components/refreshLanguage/RefreshLanguage.jsx"
import Books from "../../components/books/Books.jsx"
import Verses from "../../components/verses/Verses.jsx"
import './show.scss';

const Show = () => {

  const selectQuote = (state) => state.quote;
  const { language, book, verses, chapter, verse } = useSelector(selectQuote);

  useEffect(() => {
    document.title = language === 1 ? 'Reina Valera 1920' : 'King James Version'
  }, [language])

  const [activeKey, setActiveKey] = useState("");

  const vowels = ['s', 'S', 'e', 'E'];

  useKeyPress("s", onKeyPress);
  useKeyPress("S", onKeyPress);
  useKeyPress("e", onKeyPress);
  useKeyPress("E", onKeyPress);

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
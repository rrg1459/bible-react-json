import React, { useEffect, useState } from 'react';
import { useKeyPress } from "@uidotdev/usehooks";
import { books } from '../../bible/books';
import { verses } from '../../bible/verses';
import './sender.scss';

import Select from "react-select";

function Sender() {

  const [activeKey, setActiveKey] = useState("");
  const [testament, setTestament] = useState("");
  const [book, setBook] = useState("");
  const [chapter, setChapter] = useState(null);
  const [selectBooks, setSelectBooks] = useState(books);
  const [numChapters, setNumChapters] = useState([]);
  const [numVerses, setNumVerses] = useState([]);
  const [selectVerses, setSelectVerses] = useState(null);
  const [currentVerse, setCurrentVerse] = useState(null);

  const testaments = [
    { id: 1, label: "Antiguo Testamento" },
    { id: 2, label: "Nuevo Testamento" }
  ];

  useKeyPress("ArrowRight", onKeyPress);
  useKeyPress("ArrowLeft", onKeyPress);
  useKeyPress("ArrowUp", onKeyPress);
  useKeyPress("ArrowDown", onKeyPress);
  useKeyPress("PageUp", onKeyPress);
  useKeyPress("PageDown", onKeyPress);
  useKeyPress("d", onKeyPress);
  useKeyPress("D", onKeyPress);

  function onKeyPress(e) {
    e.preventDefault();
    setActiveKey(e.key);
    setTimeout(() => {
      setActiveKey("");
    }, 0);
  }

  useEffect(() => {
    if (!currentVerse) return; // Early return if data not loaded
    const forward = ['ArrowRight', 'ArrowDown', 'PageDown'];
    const backward = ['ArrowLeft', 'ArrowUp', 'PageUp'];
    if (forward.includes(activeKey) && currentVerse.verse < selectVerses.length) {
      setCurrentVerse(selectVerses[currentVerse.verse]);
    }
    if (backward.includes(activeKey) && currentVerse.verse > 1) {
      setCurrentVerse(selectVerses[currentVerse.verse - 2]);
    }
  }, [activeKey, currentVerse, selectVerses])

  useEffect(() => {
    if (!activeKey) return; // Early return if data not loaded
    localStorage.removeItem('quote');

  }, [activeKey])

  const handleChangeTestament = testament => {
    setTestament(testament);
    setNumChapters([]);
    setCurrentVerse(null);

    setNumVerses([]);
    setSelectBooks(books.filter((book) => book.testament_id === testament.id));
  };

  const handleChangeBook = book => {
    setNumChapters([...Array(book.chapters)].map((v, i) => i + 1));
    setSelectVerses(null);
    setCurrentVerse(null);
    setChapter(null);
    setNumVerses([]);
    setBook(book);
  };

  const handleChangeChapter = chapter => {
    setChapter(chapter.target.innerText);
    setCurrentVerse(null);
    setSelectVerses(verses.filter((verse) => verse.book_id === book.id && verse.chapter === Number(chapter.target.innerText)));
  };

  const handleChangeVerse = currentVerse => {
    setCurrentVerse(selectVerses[Number(currentVerse.target.innerText) - 1]);
  };

  useEffect(() => {
    if (!selectVerses) return; // Early return if data not loaded
    setNumVerses([...Array(selectVerses.length)].map((v, i) => i + 1));
  }, [selectVerses])

  useEffect(() => {
    if (!currentVerse) return; // Early return if data not loaded
    localStorage.setItem('quote', JSON.stringify(
      {
        'book': book.label,
        'chapter': currentVerse.chapter,
        'verse': currentVerse.verse,
        'text': currentVerse.text
      }
    ));
  }, [currentVerse, book])



  return (
    <>
      <div className="sender">
        <div className="testament">
          <div className="name">
            Testamento:
          </div>
          <Select options={testaments} value={testament} onChange={handleChangeTestament} />
        </div>

        <div className="book">
          <div className="name">
            Libro:
          </div>
          <Select options={selectBooks} value={book} onChange={handleChangeBook} />
        </div>

        <div className="chapter">
          {numChapters.length > 0 &&
            (
              <>
                <div className="name">
                  Capitulos:
                </div>
                {numChapters.map((c, idx) => {
                  return (
                    <button className={idx === (Number(chapter) - 1) ? 'current' : 'rest'} onClick={handleChangeChapter} key={c}>{c}</button>
                  )
                }
                )}
              </>
            )
          }

          {/* <span className={idx === idxActual ? 'actual' : 'letter'} key={idx}>{item} </span> */}

          <div className="verse">
            {numVerses.length > 0 &&
              (
                <>
                  <div className="name">
                    Versos:
                  </div>
                  {numVerses.map((v, idx) => {
                    return (
                      <button className={idx === (currentVerse?.verse - 1) ? 'current' : 'rest'} onClick={handleChangeVerse} key={v}>{v}</button>
                    )
                  }
                  )}
                </>
              )
            }
          </div>
        </div>
      </div>

      {currentVerse && (
        <>
          <br />
          <hr />
          <h2>{currentVerse.text}</h2>
          <h4>{book?.label} {chapter}:{currentVerse.verse}</h4>
        </>
      )}
    </>
  );
}

export default Sender;
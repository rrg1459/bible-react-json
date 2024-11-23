import { useEffect, useState } from 'react';
import { useKeyPress } from "@uidotdev/usehooks";
import { books } from '../../bible/books';
import { verses } from '../../bible/verses';
import './read.scss';

const Read = () => {
  const [selectedBook, setSelectedBook] = useState(null); // Use null for initial state
  const [chapter, setChapter] = useState(0);
  const [verse, setVerse] = useState(0);
  const [chapterVerses, setChapterVerses] = useState([]);
  const [actualVerse, setActualVerse] = useState(null);
  const [lengthVerse, setLengthVerse] = useState(0);
  const [activeKey, setActiveKey] = useState("");
  const [idxActual, setIdxActual] = useState(null);

  // Combine random book selection and chapter selection into one effect
  useEffect(() => {
    const randomBookIndex = Math.floor(Math.random() * books.length);
    const randomChapterIndex = Math.floor(Math.random() * books[randomBookIndex].chapters) + 1;

    setSelectedBook(books[randomBookIndex]);
    setChapter(randomChapterIndex);
  }, []);

  // Fetch verses only when book or chapter changes
  useEffect(() => {
    if (!selectedBook || !chapter) return; // Early return if data not loaded

    const filteredVerses = verses.filter(
      (v) => v.book_id === selectedBook.id && v.chapter === chapter
    );
    setChapterVerses(filteredVerses);
    setVerse(Math.floor(Math.random() * filteredVerses.length) + 1); // Random verse within chapter
  }, [selectedBook, chapter]);

  // Update displayed verse when verse number changes
  useEffect(() => {
    if (!chapterVerses.length) return; // Early return if no verses
    const selectedVerse = chapterVerses.find((v) => v.verse === verse);
    setActualVerse(selectedVerse?.text[0].split(' ') || ''); // Use optional chaining for safety
    setLengthVerse(selectedVerse?.text[0].split(' ').length);
  }, [verse, chapterVerses]);

  useKeyPress("ArrowRight", onKeyPress);
  useKeyPress("ArrowLeft", onKeyPress);
  useKeyPress("ArrowUp", onKeyPress);
  useKeyPress("ArrowDown", onKeyPress);
  useKeyPress("PageUp", onKeyPress);
  useKeyPress("PageDown", onKeyPress);

  function onKeyPress(e) {
    e.preventDefault();
    setActiveKey(e.key);
    setTimeout(() => {
      setActiveKey("");
    }, 0);
  }

  useEffect(() => {
    const forward = ['ArrowRight', 'ArrowDown', 'PageDown'];
    const backward = ['ArrowLeft', 'ArrowUp', 'PageUp'];
    if (forward.includes(activeKey) && idxActual < lengthVerse) {
      setIdxActual(idxActual + (idxActual === null ? 0 : 1))
    }
    if (backward.includes(activeKey) && idxActual >= 0) {
      setIdxActual(idxActual - 1)
    }
  }, [activeKey, idxActual, lengthVerse])

  return (
    <>
      <div className="read">
        <h2>{actualVerse && (
          actualVerse.map((item, idx) => {
            return (
              <span className={idx === idxActual ? 'actual' : 'letter'} key={idx}>{item} </span>
            )
          })
        )}
        </h2>
      </div>
      {console.log(selectedBook)}
      <h1 className="centrar">{selectedBook?.name} {chapter}:{verse}</h1>
    </>
  );
};

export default Read;
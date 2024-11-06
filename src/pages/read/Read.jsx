import { useEffect, useState } from 'react';
import { books } from '../../bible/books';
import { verses } from '../../bible/verses';
import './read.scss';

const Read = () => {
  const [selectedBook, setSelectedBook] = useState(null); // Use null for initial state
  const [chapter, setChapter] = useState(0);
  const [verse, setVerse] = useState(0);
  const [chapterVerses, setChapterVerses] = useState([]);
  const [actualVerse, setActualVerse] = useState(null);

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
    setActualVerse(selectedVerse?.text || ''); // Use optional chaining for safety
  }, [verse, chapterVerses]);

  return (
    <div className="read">
      {selectedBook && (
        <h3 className="testament">
          {selectedBook.testament_id === 1 ? 'Antiguo' : 'Nuevo'} Testamento
        </h3>
      )}
      <div className="name">
        {selectedBook?.name} {chapter}:{verse}
      </div>

      <h2>
        {actualVerse && <div className="actualVerse">{actualVerse}</div>}
      </h2>
    </div>
  );
};

export default Read;
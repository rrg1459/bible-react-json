import { useDispatch, useSelector } from 'react-redux';
import './verse.scss';
import { updateQuote } from '../../redux/quoteSlice';
import { useEffect, useState } from 'react';

const Verse = (props) => {

  const dispatch = useDispatch();
  const selectQuote = (state) => state.quote;
  const { book, chapter, language } = useSelector(selectQuote);
  const { currentVerse, verse, index } = props;
  const [numVerse, setNumverse] = useState(null);

  useEffect(() => {
    setNumverse(index + 1);
  }, [index])

  const handleSubmit = (e) => {
    e.preventDefault();
    // const numVerse = index + 1;
    dispatch(updateQuote({
      book,
      chapter,
      verse: numVerse,
      text:  currentVerse.text[language]
    }))
    localStorage.setItem('quote', JSON.stringify(
      {
        'book': book.label,
        'chapter': chapter,
        'verse': numVerse,
        'text': currentVerse.text[language]
      }
    ));
  };

  // const scrollToImportantText = () => {
    // const importantText = document.getElementById('3333');
    // importantText.scrollIntoView({ behavior: 'smooth' });
  // }

  return (
    <div
      className={`${(verse === index + 1) ? 'current-verse' : 'verse'}`}
      onClick={handleSubmit}
      >
      {index + 1}. {currentVerse.text[language]}
    </div>
  );
};

export default Verse;


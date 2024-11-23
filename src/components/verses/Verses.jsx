import { useSelector } from 'react-redux';
import './verses.scss';
import Verse from "../verse/Verse"


const Verses = () => {

  const selectQuote = (state) => state.quote;
  const { language, book, chapter, verses, verse, } = useSelector(selectQuote);

  return (
    <div className="verses">
      <div className="first">
        {book.label[language]} {chapter}
      </div>
      <div className="second">
        {verses && (
          verses.map((currentVerse, idx) => {
            return <Verse key={idx} currentVerse={currentVerse} verse={verse} index={idx} />
          })
        )}
      </div>
    </div>
  );
};

export default Verses;
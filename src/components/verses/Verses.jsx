import { useSelector } from 'react-redux';
import './verses.scss';
import Verse from "../verse/Verse"


const Verses = () => {

  // salm 119
  const { book, chapter, verses, verse } = useSelector((state) => state.quote);

  return (
    <div className="verses">
      <div className="first">
        {book.label} {chapter}
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
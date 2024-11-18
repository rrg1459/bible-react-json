import './verse.scss';

const Verse = (props) => {

  const { currentVerse, verse, index } = props;

  // const scrollToImportantText = () => {
    // const importantText = document.getElementById('3333');
    // importantText.scrollIntoView({ behavior: 'smooth' });
  // }

  return (
    <div className={`verse ${(verse === index + 1) ? 'current-verse' : ''}`} >
      {index + 1}. {currentVerse.text}
    </div>
  );
};

export default Verse;


import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { books } from "../../bible/books"
import { types } from "../../bible/types"
import { verses } from "../../bible/verses"
import { updateQuote, changeVerses } from "../../redux/quoteSlice";

const FirstQuote = () => {

  const dispatch = useDispatch();

  useEffect(() => {
    const numVerse = Math.ceil(Math.random() * 31102)
    const verse = verses.find((v) => v.id === numVerse);
    const book = books.find((b) => b.id === verse.book_id)
    const testament = book.testament_id === 1 ? 'Viejo Testamento' : 'Nuevo Testamento';
    const type = types.find((t) => t.id === book.type_id);
    const selectVerses = verses.filter((v) => v.book_id === book.id && v.chapter === verse.chapter);
    dispatch(updateQuote(
      {
        book: {
          testament: testament,
          label: book.label,
          abbreviation: book.abbreviation,
          chapters: book.chapters,
          type: type.label
        },
        "chapter": verse.chapter,
        "verse": verse.verse,
        "text": verse.text
        }
    ));
    dispatch(changeVerses(selectVerses));
  }, [dispatch])

  return null;
};

export default FirstQuote;
import styled from 'styled-components';

import './numVerses.scss';
import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { updateQuote } from "../../redux/quoteSlice";

const GridContainer = styled.div`
grid-template-columns: repeat(${(props) => props.column}, 1fr);
grid-template-rows: repeat(${(props) => props.row}, 1fr);
`;

const NumVerses = (props) => {

  const dispatch = useDispatch();
  const selectQuote = (state) => state.quote;
  const { book, chapter, verses, language } = useSelector(selectQuote);
  const [column, setColumn] = useState(null);
  const [row, setRow] = useState(null);
  const [num, setNum] = useState(null);
  const [numVerses, setNumVerses] = useState(null);

  useEffect(() => {

    const calc = Math.ceil(Math.sqrt(props.numVerses));
    setNum(calc > 8 ? 8 : calc);
    setNumVerses([...Array(props.numVerses)].map((v, i) => i + 1));
  }, [props.numVerses])

  useEffect(() => {
    setColumn(num);
    setRow(num);
  }, [num])

  const handleSubmit = (e) => {
    e.preventDefault();
    const verse = Number(e.target.innerText);
    const text = verses[verse - 1].text[language];
    dispatch(updateQuote({
      book,
      chapter,
      verse,
      text
    }))
    localStorage.setItem('quote', JSON.stringify(
      {
        'book': book.label[language],
        'chapter': chapter,
        'verse': verse,
        'text': text
      }
    ));
  };

  return (
    <div className="num-verses">
      <div className="main">
        <GridContainer column={column} row={row} className="grid-container">
          {numVerses?.map((x) =>
            <div
              key={x}
              className={`verse ${x === props.verse ? 'selected-verse' : ''}`}
              onClick={handleSubmit}
            >
              {x}
            </div>)
          }
        </GridContainer>
      </div>
    </div>
  );
};

export default NumVerses;

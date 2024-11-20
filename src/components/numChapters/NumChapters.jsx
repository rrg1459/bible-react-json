import styled from 'styled-components';

import './numChapters.scss';
import { useEffect, useState } from 'react';
import { changeVerses, updateQuote } from '../../redux/quoteSlice';
import { useDispatch, useSelector } from 'react-redux';
import { verses } from '../../bible/verses';

const GridContainer = styled.div`
    grid-template-columns: repeat(${(props) => props.column}, 1fr);
    grid-template-rows: repeat(${(props) => props.row}, 1fr);
  `;

const NumChapters = (props) => {

  const dispatch = useDispatch();
  const selectQuote = (state) => state.quote;
  const { book } = useSelector(selectQuote);
  const [column, setColumn] = useState(null);
  const [row, setRow] = useState(null);
  const [num, setNum] = useState(null);
  const [chapters, setChapters] = useState(null);

  useEffect(() => {
    const calc = Math.ceil(Math.sqrt(props.numChapters));
    setNum(calc > 8 ? 8 : calc);
    setChapters([...Array(props.numChapters)].map((v, i) => i + 1));
  }, [props.numChapters])

  useEffect(() => {
    setColumn(num);
    setRow(num);
  }, [num])

  const handleSubmit = (e) => {
    e.preventDefault();
    const chapter = Number(e.target.innerText);
    const selectVerses = verses.filter((v) => v.book_id === book.id && v.chapter === chapter);

    dispatch(changeVerses(selectVerses));
    dispatch(updateQuote({
      book,
      chapter,
      verse: 0
    }));
  };

  return (
    <div className="num-verses">
      <div className="main">
        <GridContainer column={column} row={row} className="grid-container">
          {chapters?.map((x) =>
            <div
              key={x}
              className={`chapter ${x === props.chapter ? 'selected-chapter' : ''}`}
              onClick={handleSubmit}
            >
              {x}
            </div>)}
        </GridContainer>
      </div>
    </div>
  );
};

export default NumChapters;

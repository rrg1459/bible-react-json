import styled from 'styled-components';

import './numVerses.scss';
import { useEffect, useState } from 'react';

const NumVerses = (props) => {

  const [column, setColumn] = useState(null);
  const [row, setRow] = useState(null);
  const [num, setNum] = useState(null);
  const [verses, setVerses] = useState(null);

  useEffect(() => {
    const calc = Math.floor(Math.sqrt(props.numVerses));
    setNum(calc * calc === props.numVerses ? calc : calc + 1);
    setVerses([...Array(props.numVerses)].map((v, i) => i + 1));
  }, [props.numVerses])

  useEffect(() => {
    setColumn(num);
    setRow(num);
  }, [num])

  const GridContainer = styled.div`
    grid-template-columns: repeat(${(props) => props.column}, 1fr);
    grid-template-rows: repeat(${(props) => props.row}, 1fr);
  `;

  return (
    <div className="num-verses">
      <div className="main">
        <GridContainer column={column} row={row} className="grid-container">
          {verses?.map((x) => <div key={x} className='verse'>{x}</div>)}
        </GridContainer>
      </div>
    </div>
  );
};

export default NumVerses;

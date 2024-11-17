import styled from 'styled-components';

import './numChapters.scss';
import { useEffect, useState } from 'react';

const NumChapters = (props) => {

  const [column, setColumn] = useState(null);
  const [row, setRow] = useState(null);
  const [num, setNum] = useState(null);
  const [chapters, setChapters] = useState(null);

  useEffect(() => {
    const calc = Math.floor(Math.sqrt(props.numChapters));
    setNum(calc * calc === props.numChapters ? calc : calc + 1);
    setChapters([...Array(props.numChapters)].map((v, i) => i + 1));
  }, [props.numChapters])

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
          {chapters?.map((x) => <div key={x} className='chapter'>{x}</div>)}
        </GridContainer>
      </div>
    </div>
  );
};

export default NumChapters;

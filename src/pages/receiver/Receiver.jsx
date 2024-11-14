import { useEffect, useState } from 'react';
import { useKeyPress } from "@uidotdev/usehooks";

import './receiver.scss';

function Receiver() {

  const [vers, setVers] = useState(JSON.parse(localStorage.getItem('quote')) || {});

  const [activeKey, setActiveKey] = useState("");
  const [idxActual, setIdxActual] = useState(null);
  const [lengthVerse, setLengthVerse] = useState(0);
  const [actualVerse, setActualVerse] = useState(null);

  // Update displayed verse when verse number changes
  useEffect(() => {
    // if (!vers.length) return; // Early return if no verses
    setIdxActual(null);
    setActualVerse(vers?.text.split(' ') || ''); // Use optional chaining for safety
    setLengthVerse(vers?.text.split(' ').length);
  }, [vers]);

  useKeyPress("ArrowRight", onKeyPress);
  useKeyPress("ArrowLeft", onKeyPress);
  useKeyPress("ArrowUp", onKeyPress);
  useKeyPress("ArrowDown", onKeyPress);
  useKeyPress("PageUp", onKeyPress);
  useKeyPress("PageDown", onKeyPress);

  function onKeyPress(e) {
    e.preventDefault();
    setActiveKey(e.key);
    setTimeout(() => {
      setActiveKey("");
    }, 0);
  }

  useEffect(() => {
    const forward = ['ArrowRight', 'ArrowDown', 'PageDown'];
    const backward = ['ArrowLeft', 'ArrowUp', 'PageUp'];
    if (forward.includes(activeKey) && idxActual < lengthVerse) {
      setIdxActual(idxActual + (idxActual === null ? 0 : 1))
    }
    if (backward.includes(activeKey) && idxActual >= 0) {
      setIdxActual(idxActual - 1)
    }
  }, [activeKey, idxActual, lengthVerse])

  window.addEventListener('storage', (event) => {
    if (event.key === 'quote') setVers(JSON.parse(event.newValue));
  });

  return (
    <>
      <div className={"receiver"}>
        <h2 className={actualVerse?.length === idxActual ? 'italic' : ''}>{actualVerse && (
          actualVerse.map((item, idx) => {
            return (
              <span className={idx === idxActual ? 'actual' : 'letter'} key={idx}>{item} </span>
            )
          })
        )}
        </h2>
      </div>
      <h1 className="centrar">{vers?.book} {vers?.chapter}:{vers?.verse}</h1>
    </>
  );
}

export default Receiver;
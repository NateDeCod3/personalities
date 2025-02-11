import { useState } from 'react';
import { scientistList } from './data.jsx';
import './App.css';

export default function Gallery() {
  const [index, setIndex] = useState(0);
  const [showMore, setShowMore] = useState(false);
  const hasNext = index < scientistList.length - 1;
  const hasBack = index > 0;

  function handleNextClick() {
    if (hasNext) {
      setIndex(index + 1);
    } else {
      setIndex(0);
    }
  }

  function handleBackClick() {
    if (hasBack) {
      setIndex(index - 1);
    } else {
      setIndex(scientistList.length - 1);
    }
  }

  function handleMoreClick() {
    setShowMore(!showMore);
  }

  let scientist = scientistList[index];
  return (
    <section className='container'>
      <h1>Nathaniel V. Manansala</h1>

      <button onClick={handleBackClick}>
        Back
      </button>

      <button onClick={handleNextClick}>
        Next
      </button>

      <br></br>

      <button onClick={handleMoreClick}>
        {showMore ? 'Hide' : 'Show'} details
      </button>

      <h2>
        <i>{scientist.name} </i>
      </h2>

      <img
        src={scientist.url}
        alt={scientist.alt}
      />

      <h3>
        ({index + 1} of {scientistList.length})
      </h3>
      
      {showMore && <p>{scientist.description}</p>}
    </section>
  );
}
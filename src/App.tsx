import React, {useRef} from 'react';
import './App.css';
import Base from './Components/Base';

function App() {
  const counter = useRef(1)

  return (
    <div className="App">
      <h1>Wishing you an awesome New Year.</h1>
      <Base parentCounter={counter.current}/>
      <h2>This responsive and recursive new years card was made in React by <a href="https://jtabbdev.com/">Jonah Tabb</a></h2>
    </div>
  );
}

export default App;

import { useState } from 'react';
import MoleContainer from './components/MoleContainer';
import './App.css';


function App() {
  let [score, setScore] = useState(0)

  const createMoleHill = (numHills = 9) => {
    let hills = [];
    for (let i = 0; i < numHills; i++) {
      hills.push(<MoleContainer setScore={setScore} score={score} />)
    }
    return <div className='mole-hills'>
      {hills}
    </div>
  }


  return (
    <div className="App" style={{ width: "100%", height: "100wh" }}>
      <h1>{score}</h1>
      {createMoleHill()}
      <MoleContainer setScore={setScore} />
    </div>
  );
}

export default App;
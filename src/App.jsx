import StartGame from './components/StartGame';
import { useState } from 'react';
import GamePlay from './components/GamePlay';

function App() {
  const [started, setStarted] = useState(false) 

  const toggleGame = () => {
    setStarted((prev) => !prev);
  }
  
  return (
    <>
    {started? <GamePlay/>  : <StartGame 
    
    toggle={toggleGame}
    />}
    
    </>
  )
}

export default App;


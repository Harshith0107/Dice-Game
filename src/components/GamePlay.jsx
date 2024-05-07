import React, { useState } from 'react'
import TotalScore from './TotalScore'
import NumberSelector from './NumberSelector';
import styled from 'styled-components';
import RollDice from './RollDice';
import {Button, OutlineButton} from "../styled/Button"
import Rules from './Rules';

function GamePlay() {
const [score,setScore] = useState(0)
const [selectedNumber,setSelectedNumber] = useState(); 
const [currentDice, setCurrentDice] = useState(1);
const [error, setError] = useState("");
const [rules, setRules] = useState(false);


const roll =() => {
   if(!selectedNumber) {
    setError("You must select a number to roll the dice.")
    return;
   }
    
   const randomNumber = Math.floor(Math.random() * (6)+ 1);

    setCurrentDice(randomNumber);


    if(selectedNumber === randomNumber){
      setScore((prev) => prev+randomNumber)
    }
    else{
      setScore((prev => prev-2))
    }
    setSelectedNumber(undefined)
}

const resetScore = ()=>{
  setScore(0);
}

  return (
    <MainContainer>
        <div className='top_section'>

        <TotalScore score={score}/>
        <NumberSelector 
        error = {error}
        setError = {setError}
        selectedNumber={selectedNumber} setSelectedNumber={setSelectedNumber} 
        />
        </div>

        <RollDice currentDice={currentDice} roll={roll} />
        
        <div className="btns">
          <OutlineButton onClick={resetScore}>Reset Score</OutlineButton>

          <Button
          onClick={() => setRules((prev) => !prev)}> 
          
          {rules ? "Hide" : "Show"} Rules
          </Button>
        </div>

        {rules && <Rules/>}
    </MainContainer>
  )
}

export default GamePlay;


const MainContainer = styled.main`
padding-top:70px ;
.top_section{
    display: flex;
    justify-content: space-around;
    align-items: end;
}

.btns{
  margin-top: 40px;
  gap:10px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap : 10px;
}
`;
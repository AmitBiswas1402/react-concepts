import styled from "styled-components";
import TotalScore from "./TotalScore";
import NumberSelector from "./NumberSelector";
import RollDice from "./RollDice";
import { useState } from "react";

function GamePlay() {
  const [selectedNumber, setSelectedNumber] = useState()
  const [currentDice, setCurrentDice] = useState(1)

  const generateRandomNumber = (min, max) => {
    return Math.floor(Math.random() * (max - min) + min);
  }

  const rollDice = () => {
    const randomNumber = generateRandomNumber(1, 7)

    setCurrentDice((prev) => randomNumber)
  }


  return (
    <MainContainer>
      <div className="top_section">
        <TotalScore/>
        <NumberSelector selectedNumber={selectedNumber} 
        setSelectedNumber={setSelectedNumber}
        />
        
      </div>
      <RollDice currentDice={currentDice}
      rollDice={rollDice}
      />
    </MainContainer>
  )
}

export default GamePlay

const MainContainer = styled.main`
padding-top: 20px;
.top_section {
    display: flex;
    justify-content: space-around;
    align-items: end;
}
.btns {
    margin-top: 10px;
    gap: 10px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 10px;
}
`;
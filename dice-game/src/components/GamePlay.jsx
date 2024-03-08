import styled from "styled-components";
import TotalScore from "./TotalScore";
import NumberSelector from "./NumberSelector";
import RollDice from "./RollDice";

function GamePlay() {
  return (
    <MainContainer>
      <div className="top_section">
        <TotalScore/>
        <NumberSelector />
      </div>
      <RollDice />
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
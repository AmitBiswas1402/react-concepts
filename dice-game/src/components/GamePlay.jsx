import styled from "styled-components";
import TotalScore from "./TotalScore";

function GamePlay() {
  return (
    <MainContainer>
        <TotalScore/>
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
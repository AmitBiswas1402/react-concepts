import styled from "styled-components";
import { useState } from "react";

const BASE_URL = "http://localhost:9000/"

function App() {
  const [data, setData] = useState(null)

  const fetchFoodData = async() => {
    const response = await fetch(BASE_URL)

    const json = response.json()

    console.log(json)
  }
  
  fetchFoodData()

  return (
    <Container>
      <TopContainer>
        <div className="logo">
          <img src="/public/logo.svg" />
        </div>
        <div className="search">
          <input placeholder="Search Food" type="text" />
        </div>
      </TopContainer>
      <FilterContainer>
        <Button>All</Button>
        <Button>Breakfast</Button>
        <Button>Lunch</Button>
        <Button>Dinner</Button>
      </FilterContainer>
      <FoodCartContainer>
        <FoodCart></FoodCart>
      </FoodCartContainer>
    </Container>
  );
}

export default App;

const Container = styled.div`
  max-width: 1200px;
  margin: 0 auto;
`;
const TopContainer = styled.section`
  height: 140px;
  display: flex;
  justify-content: space-between;
  padding: 16px;
  align-items: center;
  .search {
    input {
      background-color: transparent;
      border: 1px solid red;
      color: white;
      border-radius: 5px;
      height: 40px;
      font-size: 16px;
      padding: 0 10px;
      &::placeholder {
        color: white;
      }
    }
  }
`;

const FilterContainer = styled.section`
  display: flex;
  justify-content: center;
  gap: 12px;
  padding-bottom: 40px;
`;

const Button = styled.section`
  background: #ff4343;
  border-radius: 5px;
  padding: 6px 12px;
  border: none;
  color: white;
`;

const FoodCartContainer = styled.section`
  height: calc(100vh - 215px);
  width: full;
  background-image: url("/bg.png");
  background-size: cover;
`;

const FoodCart = styled.div``;

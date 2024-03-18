import styled from "styled-components";
import { useState, useEffect } from "react";
import SearchResults from "./components/SearchResults/SearchResults";

export const BASE_URL = "http://localhost:9000";

function App() {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [filterData, setFilterData] = useState(null);
  const [selectedBtn, setSelectedBtn] = useState("all");

  useEffect(() => {
    const fetchFoodData = async () => {
      setLoading(true);

      try {
        const response = await fetch(BASE_URL);

        const json = await response.json();

        setData(json);
        setFilterData(json);
        setLoading(false);
      } catch (error) {
        setError("Unable to fetch data");
      }
    };
    fetchFoodData();
  }, []);

  const searchFood = (e) => {
    const searchValue = e.target.value;

    console.log(searchValue);

    if (searchValue === "") {
      setFilterData(null);
    }

    const filter = data?.filter((food) =>
      food.name.toLowerCase().includes(searchValue.toLowerCase())
    );
    setFilterData(filter);
  };

  const filterFood = (type) => {
    if (type === "all") {
      setFilterData(data);
      setSelectedBtn("all");
      return;
    }

    const filter = data?.filter((food) =>
      food.type.toLowerCase().includes(type.toLowerCase())
    );
    setFilterData(filter);
    setSelectedBtn(type);
  };

  // const filterBtn = [
  //   {
  //     name: "All",
  //     type: "all",
  //   },
  //   {
  //     name: "Breakfast",
  //     type: "breakfast",
  //   },
  //   {
  //     name: "Lunch",
  //     type: "lunch",
  //   },
  //   {
  //     name: "Dinner",
  //     type: "dinner",
  //   },
  // ]

  console.log(data);

  if (error) return <div>{error}</div>;
  if (loading) return <div>LOADING.......</div>;

  return (
    <Container>
      <TopContainer>
        <div className="logo">
          <img src="/public/logo.svg" />
        </div>
        <div className="search">
          <input onChange={searchFood} placeholder="Search Food" type="text" />
        </div>
      </TopContainer>
      <FilterContainer>
        <Button onClick={() => filterFood("all")}>All</Button>
        <Button onClick={() => filterFood("breakfast")}>Breakfast</Button>
        <Button onClick={() => filterFood("lunch")}>Lunch</Button>
        <Button onClick={() => filterFood("dinner")}>Dinner</Button>
      </FilterContainer>
      <SearchResults data={filterData} />
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

  @media (0 < width < 600px) {
    flex-direction: column;
    height: 120px;
  }
`;

const FilterContainer = styled.section`
  display: flex;
  justify-content: center;
  gap: 12px;
  padding-bottom: 40px;
`;

export const Button = styled.section`
  background: #ff4343;
  border-radius: 5px;
  padding: 6px 12px;
  border: none;
  color: white;
  cursor: pointer;
`;

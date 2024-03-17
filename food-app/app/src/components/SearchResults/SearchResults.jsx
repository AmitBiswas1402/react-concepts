import styled from "styled-components";

const SearchResults = ({ data }) => {
  return (
    <div>
      <FoodCartContainer>
        <FoodCards>
          {data?.map((food) => (
            <FoodCard key={food.name}>
                {food.text}
            </FoodCard>
          ))}
        </FoodCards>
      </FoodCartContainer>
    </div>
  );
};

export default SearchResults;

const FoodCartContainer = styled.section`
  height: calc(100vh - 215px);
  width: full;
  background-image: url("/bg.png");
  background-size: cover;
`;

const FoodCards = styled.div``;

const FoodCard = styled.div``;

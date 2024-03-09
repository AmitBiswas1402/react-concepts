import styled from 'styled-components'

function App() {

  return (
    <MainContainer>
      <TopContainer>
        <div className="logo">
          <img src="/public/logo.svg" />
        </div>
        <div className="search">
          <input 
          placeholder="Search Food"
          type="text" />
        </div>
      </TopContainer>
    </MainContainer>
  )
}

export default App

const MainContainer = styled.div`
`
const TopContainer = styled.section``
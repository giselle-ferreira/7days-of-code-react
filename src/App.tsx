import styled from "styled-components";
import { Navbar } from "./Components/Navbar";
import { Newsletter } from "./Components/Newsletter";
import bgImg from '/media/yellow-bg.svg'
import bgPlant from '/media/plant1.png'
import { YellowBg } from "./Styles";
import { PlantBg } from "./Styles";

function App() {
  
  return (
    <AppContainer>      
      <Navbar />
      <Newsletter />      
      <YellowBg src={bgImg} alt="Forma abstrata amarela" />
      <PlantBg src={bgPlant} alt="Vaso de plantas" />
    </AppContainer>
  )
}

export default App


const AppContainer = styled.div`
  position: relative;
`;


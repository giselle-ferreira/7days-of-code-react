import styled from "styled-components";
import { Navbar } from "./Components/Navbar/Navbar";
import { Newsletter } from "./Components/Newsletter/Newsletter";
import bgImg from '/media/yellow-bg.svg'
import bgPlant from '/media/plant1.png'
import { YellowBg } from "./Styles";
import { PlantBg } from "./Styles";
import { Plants } from "./Components/Plants/Plants";
import { HowToShop } from "./Components/HowToShop/HowToShop";
import { MobileMenu } from "./Components/MobileMenu/MobileMenu";

 
function App() {
  
  return (
    <AppContainer>
        <Navbar />
        <MobileMenu />
        <YellowBg src={bgImg} alt="Forma abstrata amarela" />

        <CallToActionContainer>
          <Newsletter />
          <PlantBg src={bgPlant} alt="Vaso de plantas" />
        </CallToActionContainer> 
        
        <HowToShop />
        <Plants />
    </AppContainer>
  )
}

export default App


const AppContainer = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;  
`;

const CallToActionContainer = styled.div`
  display: flex;
`



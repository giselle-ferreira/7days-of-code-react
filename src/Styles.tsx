import styled from "styled-components";

const size = {
    mobileSmall: '375px',
    mobileLarge: '425px',
    medium: '620px',
    tablet: '768px',
    laptop: '1024px'
}

const device = {
    mobileSmall: `(max-width: ${size.mobileSmall})`,
    mobileLarge: `(max-width: ${size.mobileLarge})`,
    medium: `(max-width: ${size.medium})`,
    tablet: `(max-width: ${size.tablet})`,
    laptop: `(max-width: ${size.laptop})`,
}

// App

export const YellowBg = styled.img`
  width: 50vw;
  position: absolute;
  right: 0;
  top: 0;
  z-index: -2;
`;

export const PlantBg = styled.img`
  width: 38vw;
  position: absolute;
  right: 20vw;
  top: 0;
  z-index: -1;

  @media ${device.laptop} {
        display: none;
    }
`;

// Navbar

export const Header = styled.header`
    display: flex;
    width: 80vw;
    justify-content: space-between;
    align-items: center;
    margin: 0 auto;
    padding-top: 10px;
`;

export const Menu = styled.ul`
    display: flex;
    list-style: none;
    gap: 10px;
    font-family: 'Montserrat', sans-serif;
    text-decoration: none;
    cursor: pointer;

    @media ${device.laptop} {
            display: none;
        }
`;

export const Item = styled.a`
    text-decoration: none;
    color: #202020;

    &:hover {
        font-weight: 700;
    }
`;

export const OpenMenu = styled.div`
    display: none;
    margin-right: 30px;
    color: black;
    position: absolute;
    top: 25px;
    right: 25px;
    cursor: pointer;

    @media ${device.laptop} {
        display: block;
    }
`;

export const CloseMenu = styled.div`
    display: none;
    margin-right: 30px;
    color: black;
    position: absolute;
    top: 25px;
    right: 25px;
    cursor: pointer;

    @media ${device.laptop} {
        display: block;
    }
`;  

export const MobileNavigation = styled.div`
    display: none;
    position: absolute;
    top: 0;
    left: 0;
    background-color: #FFCB47;
    width: 100%;
    height: 100vh;
    z-index: 5;
   
    ul {
        text-align: center;
        margin: 30% auto;
    }

    ul li {
        list-style: none;
        font-size: 22px;
        padding-bottom:  30px;
        font-family: 'Montserrat', sans-serif;

        &:hover {
            font-weight: 700;
        }
    }

    ul li a {
        text-decoration: none;
        color: #202020;
    }

    @media ${device.laptop} {
        display: block;
    }

    @media ${device.mobileLarge} {
        ul {
            margin: 50% auto;
        }
        
    }
`;


// Newsletter

export const Text1 = styled.p`
    font-family: 'Montserrat', sans-serif;
    font-size: 20px;
    color: #202020;
    line-height: 27px;
`;

export const HighlightText = styled.span`
    font-family: 'Elsie Swash Caps', cursive;
    line-height: 75px;
    font-size: 70px;
    font-weight: 700;
    color: #202020;
    margin-top: 12px;

    @media ${device.mobileLarge} {
        font-size: 60px;
        line-height: 65px;
    }
    
`;

export const Text2 = styled.p`
    width: 481px;
    font-family: 'Montserrat', sans-serif;
    font-size: 16px;
    color: #202020;
    line-height: 26px;
    margin-top: 20px;

    @media ${device.medium} {
        width: 70%;
    }

    @media ${device.mobileLarge} {
        width: 310px;
    }
    
`;

// Input

export const InputWrapper = styled.div`
    position: relative;
    display: flex;
    align-items: center;   
`;

export const InputBox = styled.input`
    width: 340px;
    height: 70px;
    border: none;
    box-shadow: 10px 10px 30px rgba(0, 0, 0, 0.06);    
    font-family: 'Montserrat', sans-serif;
    padding-left: 2.5rem;    
    outline: none;

    &:hover {
        border: 1px solid #FFCB47; 
    }

    @media ${device.medium} {
        width: 220px;
    }

    @media ${device.mobileLarge} {
        width: 200px;
    }
`;

export const Button = styled.button`
    width: 194px;
    height: 75px;
    font-family: 'Montserrat', sans-serif;
    color: #fff;
    background: #FFCB47;
    border: none;
    cursor: pointer;    

    &:hover {
        background: #fbd77c;
    }

    &:disabled {
        background: #f7e4b6;
    }

    @media ${device.medium} {
        width: 140px;
    }

    @media ${device.mobileLarge} {
        width: 110px;
    }
`;

// HowToShop

export const ShoppingGuide = styled.div`
    display: flex;
    margin: 82px auto 0 auto;
    width: 995px;
    height: 440px;
      
    img {
        width: 55%;  
        height: 100%;

        @media ${device.tablet} {
            width: 100%;
        }
    }

    div {
        width: 45%;
        height: 100%;
        background-color: #fff;
        padding-left: 32px;

        @media ${device.tablet} {
            width: 100%;
        }
    }

    div p {
        color: #202020;
        font-size: 22px;
        font-family: 'Montserrat', sans-serif;
        margin-top: 58px;
    }

    div h3 {
        font-size: 42px;
        font-family: 'Elsie Swash Caps', cursive;
        margin-top: 12px;
    }

    div ul {
        margin-top: 32px;
    }

    div ul li {
       list-style: none;
    }

    div ul li a {
        text-decoration: none;
        color: #202020;
        font-size: 22px;
        font-family: 'Montserrat', sans-serif;
        display: flex;
        align-items: center;
        gap: 16px;
        padding-bottom: 30px;

        &:hover {
            font-weight: 600;
            transition: .5s all ease-in-out;
        }
    }

    div ul li a img {
        width: 52px;

        &:hover {
            transform: scale(1.05);
            transition: .5s all ease-in-out;
        }
    }

    @media ${device.laptop} {
        max-width: 100%;
        margin: inherit 0;
    }    

    @media ${device.tablet} {
        width: 100%;
        display: flex;
        align-items: center;
        flex-direction: column;
    }

    @media ${device.mobileLarge} {
        div ul li a {
            font-size: 18px;
        }

        div ul li a img {
            width: 42px;
        }
    }
`;

// Plants

export const SaleSection = styled.div`
    margin: 44px auto 135px auto;
    display: flex;
    flex-direction: column;     

    p {
        text-align: center;
        color: #202020;
        font-family: 'Montserrat', sans-serif;
    }    

    h1 {
        margin-top: 12px;
        text-align: center;
        font-size: 82px;
        font-family: 'Elsie Swash Caps', cursive;    
     
    }

    @media ${device.tablet} {
        margin-top: 450px;
     }
       
     @media ${device.medium} {
        margin-top: 420px;
    }

     @media ${device.mobileLarge} {
        margin-top: 300px;

        h1 {
            font-size: 62px;
        }
    } 
`;

export const CardWrapper = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    max-width: 1200px;
    flex-wrap: wrap;  
`;

export const PlantCard = styled.div`
    display: flex;
    margin-top: 27px;
    width: 380px;
    min-height: 200px;
    margin: 10px;
    box-shadow: 10px 10px 30px rgba(0, 0, 0, 0.06);
    cursor: pointer;

     @media ${device.mobileSmall} {
        width: 360px;
    } 

    &:hover {
        transition: all .6s ease-in-out;
        transform: scale(1.1);
    }

    h1 {
        text-align: center;
    }

    p {
        text-align: center;
        color: #202020;
        font-size: 22px;        
    }

    img {
        width: 188px;
        object-fit: cover;
    }
`;

export const PlantInfo = styled.div`
    display: flex;
    flex-direction: column;
    margin-left: 5px; 

    h2 {
        margin-top: 27px;
        font-size: 32px;
        width: 121px;
        font-family: 'Elsie Swash Caps', cursive;
    }

    span {
        font-family: 'Montserrat', sans-serif;
        margin-top: 10px;
        color: #202020;
    }

    a {
        text-decoration: none;
        font-family: 'Montserrat', sans-serif;
        margin-top: 10px;
        color: #FFCB47;
        margin-top: 24px;
        font-size: 16px;
        font-weight: 400;   

        &:hover {
            font-weight: 700;
            transition: .3s all ease-in-out;
        }
    }   

    a img {
        margin-left: 25px;
        width: 14px;
    }    
`;


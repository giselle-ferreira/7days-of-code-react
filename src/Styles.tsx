import styled from "styled-components";

// App

export const YellowBg = styled.img`
  width: 950px;
  position: absolute;
  right: 0;
  top: 0;
  z-index: -2;
`;

export const PlantBg = styled.img`
  width: 700px;
  position: absolute;
  right: 25%;
  top: 0;
  z-index: -1;
`;

// Navbar

export const Header = styled.header`
    display: flex;
    width: 1202px;
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
`;

// Newsletter

export const Text1 = styled.p`
    font-family: 'Montserrat', sans-serif;
    font-size: 22px;
    color: #202020;
    line-height: 27px;
`;

export const HighlightText = styled.span`
    font-family: 'Elsie Swash Caps', cursive;
    line-height: 94px;
    font-size: 82px;
    font-weight: 700;
    color: #202020;
    margin-top: 12px;
    
`;

export const Text2 = styled.p`
    width: 481px;
    font-family: 'Montserrat', sans-serif;
    font-size: 16px;
    color: #202020;
    line-height: 26px;
    margin-top: 24px;
`;

// Input

export const InputWrapper = styled.div`
    position: relative;
    display: flex;
    align-items: center;
`;

export const InputBox = styled.input`
    width: 394px;
    height: 75px;
    border: none;
    box-shadow: 10px 10px 30px rgba(0, 0, 0, 0.06);    
    font-family: 'Montserrat', sans-serif;
    padding-left: 2.5rem;    
`;

export const Button = styled.button`
    width: 194px;
    height: 75px;
    font-family: 'Montserrat', sans-serif;
    color: #fff;
    background: #FFCB47;
    border: none;
    cursor: pointer;
`;


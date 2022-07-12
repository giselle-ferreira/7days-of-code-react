import styled from "styled-components";
import { device  } from '../../Styles'

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
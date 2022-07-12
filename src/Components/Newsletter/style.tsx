import styled from "styled-components";
import { device  } from '../../Styles'


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
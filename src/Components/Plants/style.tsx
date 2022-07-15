import { SpinnerGap } from "phosphor-react";
import styled from "styled-components";
import { device  } from '../../Styles'

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
            margin-bottom: 30px;
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

    @media ${device.mobileSmall} {
        width: 360px;
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

export const LoadingSpinner = styled(SpinnerGap)`
    font-size: 42px;
    color: #555;
    animation: rotate 2s infinite linear;

    @keyframes rotate {
        from { transform: rotate(0deg); }
        to { transform: rotate(358deg); }
    }
`;
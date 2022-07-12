import styled from "styled-components";
import { device  } from '../../Styles'

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
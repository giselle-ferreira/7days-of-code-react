import styled from "styled-components";
import { device  } from '../../Styles'

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

export const Container = styled.div`
    display: flex;
    align-items: center;
    margin-top: 37px;
`;

export const Form = styled.form`
    display: flex;
`
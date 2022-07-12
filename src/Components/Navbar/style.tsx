import styled from "styled-components";
import { device  } from '../../Styles'

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
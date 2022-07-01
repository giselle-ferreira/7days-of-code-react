import styled from "styled-components"

export function Navbar() {
    return (
        <Header>
            <div>
                <img src="/media/logo.svg" />
            </div>
            <div>
                <Menu>
                    <li>Como Fazer   /</li>
                    <li>Ofertas   /</li>
                    <li>Depoimentos   /</li>
                    <li>Vídeos   /</li>
                    <li>Meu carrinho</li>
                </Menu>
            </div>
        </Header>
    )
}

const Header = styled.header`
    display: flex;
    width: 1202px;
    justify-content: space-between;
    align-items: center;
    margin: 0 auto;
    padding-top: 10px;
`;

const Menu = styled.ul`
    display: flex;
    list-style: none;
    gap: 10px;
    font-family: 'Montserrat', sans-serif;
`;

// font-family: 'Elsie Swash Caps', cursive;
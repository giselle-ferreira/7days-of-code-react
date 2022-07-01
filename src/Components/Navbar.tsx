import { Header, Menu } from "../Styles";

export function Navbar() {
    return (
        <Header>
            <div>
                <img src="/media/logo.svg" />
            </div>
            <div>
                <Menu>
                    <li><a href="#">Como Fazerㅤ/</a></li>
                    <li><a href="#">Ofertasㅤ/</a></li>
                    <li><a href="#">Depoimentosㅤ/</a></li>
                    <li><a href="#">Vídeosㅤ/</a></li>
                    <li><a href="#">ㅤMeu carrinho</a></li>
                </Menu>
            </div>
        </Header>
    )
}






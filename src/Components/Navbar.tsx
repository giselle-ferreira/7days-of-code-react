import { Header, Menu, Item } from "../Styles";

export function Navbar() {
    return (
        <Header>
            <div>
                <a href="/"><img src="/media/logo.svg" /></a>
            </div>
            <div>
                <Menu >
                    <li><Item href="#">Como Fazerㅤ/</Item></li>
                    <li><Item href="#">Ofertasㅤ/</Item></li>
                    <li><Item href="#">Depoimentosㅤ/</Item></li>
                    <li><Item href="#">Vídeosㅤ/</Item></li>
                    <li><Item href="#">ㅤMeu carrinho</Item></li>
                </Menu>
            </div>
        </Header>
    )
}








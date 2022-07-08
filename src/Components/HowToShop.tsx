import { ShoppingGuide } from "../Styles";
import Ellipse from '/media/ellipse.svg'

export function HowToShop() {
    return(
        <ShoppingGuide id="howto">
            <img src="../../public/media/plant2.png" alt="Folhas grandes verdes" />
            <div>
                <p>Como conseguir</p>
                <h3>minha planta</h3>
                <ul>
                    <li><a href="#"><img src={Ellipse} />Escolha suas plantas</a></li>
                    <li><a href="#"><img src={Ellipse} />Faça seu pedido</a></li>
                    <li><a href="#"><img src={Ellipse} />Aguarde na sua casa</a></li>
                </ul>
            </div>
        </ShoppingGuide>
    )
}


import { List, X } from "phosphor-react";
import { useState } from "react";
import { OpenMenu, CloseMenu, MobileNavigation } from "./style";


export function MobileMenu() {

    const [open, setOpen] = useState<Boolean>(false)

    return(
        <div>
            <OpenMenu onClick={() => setOpen(!open)}>
                <List size={40}/>
            </OpenMenu>
           
            { open && (
                <MobileNavigation>    
                <CloseMenu onClick={() => setOpen(!open)} >
                    <X size={40}/>
                </CloseMenu>            
                    <ul>
                        <li><a href="#howto">Como Fazer</a></li>
                        <li><a href="#ofertas">Ofertas</a></li>
                        <li><a href="#">Depoimentos</a></li>
                        <li><a href="#">Vídeos</a></li>
                        <li><a href="#">Meu Carrinho</a></li>
                    </ul>
                </MobileNavigation>
            )}
            
        </div>
    )
}




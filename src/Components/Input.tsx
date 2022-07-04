import { EnvelopeSimple } from "phosphor-react";
import { useState } from "react";
import styled from "styled-components"
import { InputWrapper, InputBox, Button} from "../Styles";
import swal from 'sweetalert2';

export function Input() {
  
    const [email, setEmail] = useState<string>('')


    const handleOnClick = () => {
        const isValid = /\S+@\S+\.\S+/

        if(isValid.test(email)) {
            swal.fire({
                icon: 'success',
                text: `Obrigado pela sua assinatura, você receberá nossas novidades no e-mail ${email}`
            })
        } else if(!isValid.test(email) ) {
            swal.fire({
                icon: 'error',
                text: 'Favor inserir um e-mail válido'
            })
        }    
    }
    

    const handleOnChange = (ev: any) => {
        setEmail(ev.target.value) }


    return(
        <Container>
            <InputWrapper>
                <EnvelopeSimple style={{ marginLeft: ".5rem", position: "absolute" }} size={21} color="#202020" />
                <InputBox
                onChange={handleOnChange}
                value={email}
                type="text"
                placeholder='Insira seu email'
                />
            </InputWrapper>
            <Button type="submit" onClick={handleOnClick}>Assinar Newsletter</Button>
        </Container>
    )
}

const Container = styled.div`
    display: flex;
    align-items: center;
    margin-top: 37px;
`;


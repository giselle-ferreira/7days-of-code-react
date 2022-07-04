import { EnvelopeSimple } from "phosphor-react";
import { useState } from "react";
import styled from "styled-components"
import { InputWrapper, InputBox, Button} from "../Styles";
import swal from 'sweetalert2';

export function Input() {
  
    const [email, setEmail] = useState<string>('')
    const isValid = /\S+@\S+\.\S+/

    const handleOnChange = (ev: any) => {
        setEmail(ev.target.value)        
    }

    const handleOnClick = () => {    
   
        if(isValid.test(email)) {               
            swal.fire({
                icon: 'success',
                text: `Obrigado pela sua assinatura, você receberá nossas novidades no e-mail ${email}`
            })       
        } 
        
        setEmail('')
    }
           

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
            <Button
            disabled={!(isValid.test(email))}
            type="submit"
            onClick={handleOnClick}>Assinar Newsletter</Button>
        </Container>
    )
}

const Container = styled.div`
    display: flex;
    align-items: center;
    margin-top: 37px;
`;
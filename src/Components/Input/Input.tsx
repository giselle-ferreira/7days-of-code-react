import { EnvelopeSimple } from "phosphor-react";
import { useRef, useState } from "react";
import { InputWrapper, InputBox, Button, Form, Container } from "./style";
import swal from 'sweetalert2';
import { SendEmail } from "./SendEmail";

export let form: any;

export function Input() {
  
    const [email, setEmail] = useState<string>('')
    const isValid = /\S+@\S+\.\S+/
    form = useRef();
    
      const emailMessage = () => {
        swal.fire({
            icon: 'info',
            text: `Não esquece de conferir sua caixa de e-mail!`
        }) 
      }

    const handleOnClick = () => {    
   
        if(isValid.test(email)) {               
            swal.fire({
                icon: 'success',
                text: `Obrigado pela sua assinatura, você receberá nossas novidades no e-mail ${email}`
            })       
        }         
        setEmail('');        
        SendEmail(email);
        
        setTimeout(emailMessage, 4000)
    }


    const handleOnChange = (ev: any) => {
        setEmail(ev.target.value)        
    }           

    return(
        <Container>
            <Form ref={form} onSubmit={SendEmail}>
                <InputWrapper>
                    <EnvelopeSimple style={{ marginLeft: ".5rem", position: "absolute" }} size={21} color="#202020" />
                    <InputBox
                    onChange={handleOnChange}
                    value={email}
                    type="email"
                    placeholder='Insira seu email'
                    name='email'
                    />
                </InputWrapper>
                <Button
                disabled={!(isValid.test(email))}
                type="submit"
                onClick={handleOnClick}
                >Assinar Newsletter</Button>
            </Form>
        </Container>
    )
}


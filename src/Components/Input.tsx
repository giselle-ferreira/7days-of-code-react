import { EnvelopeSimple } from "phosphor-react";
import { useRef, useState } from "react";
import styled from "styled-components"
import { InputWrapper, InputBox, Button} from "../Styles";
import swal from 'sweetalert2';
import emailjs from '@emailjs/browser';

export function Input() {
  
    const [email, setEmail] = useState<string>('')
    const isValid = /\S+@\S+\.\S+/
    const form: any = useRef();

    const sendEmail = (ev: any) => {

        emailjs.sendForm(
            import.meta.env.YOUR_SERVICE_ID,
            import.meta.env.YOUR_TEMPLATE_ID,
            form.current,
            import.meta.env.YOUR_PUBLIC_KEY
            )
          .then((result) => {
              console.log(result.text);
          }, (error) => {
              console.log(error.text);
          });
          
      }


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
        sendEmail(email);
        
        setTimeout(emailMessage, 4000)
    }


    const handleOnChange = (ev: any) => {
        setEmail(ev.target.value)        
    }
           

    return(
        <Container>
            <Form ref={form} onSubmit={sendEmail}>
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

const Container = styled.div`
    display: flex;
    align-items: center;
    margin-top: 37px;
`;

const Form = styled.form`
    display: flex;
`
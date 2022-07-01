import { EnvelopeSimple } from "phosphor-react";
import styled from "styled-components"
import { InputWrapper, InputBox, Button} from "../Styles";

export function Input() {
  
    return(
        <Container>
            <InputWrapper>
                <EnvelopeSimple style={{ marginLeft: ".5rem", position: "absolute" }} size={21} color="#202020" />
                <InputBox type="text" placeholder='Insira seu email'/>
            </InputWrapper>
            <Button>Assinar Newsletter</Button>
        </Container>
    )
}

const Container = styled.div`
    display: flex;
    align-items: center;
    margin-top: 37px;
`;


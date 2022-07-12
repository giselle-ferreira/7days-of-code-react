import styled from "styled-components"
import { Input } from "../Input/Input"
import { Text1, Text2, HighlightText } from "./style";

export function Newsletter() {
    return(
        <Container>
                <Text1>Sua casa com as</Text1>
                <HighlightText>melhores <br />plantas</HighlightText>
                <Text2>Encontre aqui uma vasta seleção de plantas para decorar a sua casa e torná-lo uma pessoa mais feliz no seu dia a dia. Entre com seu e-mail e assine nossa newsletter para saber das novidades da marca.</Text2>
                <Input />                
        </Container>
    )
}

const Container = styled.div`
    margin-top: 160px;
    margin-left: 10vw;
`;


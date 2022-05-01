import react from "react";
import styled from "styled-components";

const Logo =styled.h1`
display: inline-block;
color: ${props => props.theme.text};
font-family: "Pasifico",cursive;
`

const LogoComponent = () =>{
    return(
        <Logo>
            KK
        </Logo>
    )
}

export default LogoComponent
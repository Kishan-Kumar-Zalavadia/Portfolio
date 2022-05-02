import react from "react";
import styled from "styled-components";

const Logo =styled.h1`
display: inline-block;
color: ${props => props.theme.text};
font-family: "Pasifico",cursive;

position: fixed;
left: 2rem;
top: 2rem;
z-index: 3;

`

const LogoComponent = () =>{
    return(
        <Logo>
            KK
        </Logo>
    )
}

export default LogoComponent
import react from "react";
import styled from "styled-components";
import { ThemeProvider } from "styled-components";
import { lightTheme } from "./Themes";
import { Design, Develope } from './AllSvgs';
import LogoComponent from "../subComponents/LogoComponent";
import SocialIcons from "../subComponents/SocialIcons";
import PowerButton from "../subComponents/PowerButton";
import ParticleComponent from "../subComponents/ParticleComponent";
import BigTitle from "../subComponents/BigTitle";
import { BiCodeCurly } from "react-icons/bi";
import { DiDatabase } from "react-icons/di";

import { motion } from "framer-motion";

const Box = styled.div`
    background-color: ${props => props.theme.body};
    width: 100vw;
    height: 100%;
    position: relative;
    display: flex;
    justify-content: space-evenly;
    align-items: center;
    @media (max-width: 830px){
        flex-direction: column;
    }
`

const Main = styled.div`
    border: 2px solid ${props => props.theme.text};
    color: ${props => props.theme.text};
    background-color: ${props => props.theme.body};
    padding: 2rem;
    width: 30vw;
    height: 60vh;
    z-index: 3;
    line-height: 1.5;
    cursor: pointer;

    font-family: 'Ubuntu Mono', monospace;
    display: flex;
    flex-direction: column;
    justify-content: space-between;

    &:hover{
        color: ${props => props.theme.body};
        background-color: ${props => props.theme.text};
    }
    @media (max-width: 830px){
        width: 40vw;
        z-index: 10;
    }
`

const Title = styled.h2`
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: calc(1em + 1vw);

    ${Main}:hover &{
        &>*{
            fill:${props => props.theme.body};
        }
    }

    &>*:first-child{
        margin-right: 1rem;
    }
`

const Description = styled.div`
    color: ${props => props.theme.text};
    font-size: calc(0.6em + 1vw);
    padding: 0.5rem 0;

    ${Main}:hover &{
            color :${props => props.theme.body}
    }

    strong{
        margin-bottom: 1rem;
        text-transform: uppercase;
    }
    ul,p{
        margin-left: 2rem;  
    }
`

const Description2 = styled.div`
    color: ${props => props.theme.text};
    font-size: calc(0.6em + 1vw);
    padding: 0.5rem 0;

    ${Main}:hover &{
            color :${props => props.theme.body}
    }
    padding-bottom: 20vh;
    strong{
        margin-bottom: 1rem;
        text-transform: uppercase;
    }
    ul,p{
        padding-top: 20px;
        margin-left: 2rem; 
        line-height: 50px;
    }
`

const Grid = styled.div`
    margin-top: 25vh;
    margin-bottom: 5vh;
    display: grid;
    grid-template-columns: repeat(2, minmax(calc(10rem + 15vw), 1fr));
    grid-gap: calc(1rem + 2vw);
    @media (max-width: 830px){
        grid-template-columns: repeat(1, minmax(calc(10rem + 15vw), 1fr));
        padding-left: 37px;
    }
`

const container = {
    hidden: {opacity: 0},
    show: {
        opacity: 1,
        transition:{
            staggerChildren: 0.2,
            duration: 0.8,
        }
    }
}

const MainContainer = styled(motion.div)`
`


const MySkillsPage = () => {
    return (
        <MainContainer
            variants={container}
            initial='hidden'
            animate= 'show'
            exit={{
                opacity:0, transition:{duration:0.6}
            }}
        >
        <ThemeProvider theme={lightTheme}>
            <Box>
                <LogoComponent theme='light' />
                <SocialIcons theme='light' />
                <PowerButton />
                <ParticleComponent theme='light' />
                <Grid>
                <Main>
                    <Title>
                        <BiCodeCurly width={40} height={40} /> Programming Language
                    </Title>
                    <Description>
                        <strong>Skills</strong>
                        <ul>
                            <li>
                                C
                            </li>
                            <li>
                                Java
                            </li>
                        </ul>
                    </Description>
                    <Description>
                        <strong>Tools</strong>
                        <p>
                            VScode, IntelliJ, Eclipse IDE, etc.
                        </p>
                    </Description>
                </Main>

                
                <Main>
                    <Title>
                        <Develope width={40} height={40} /> Web Developer
                    </Title>
                    <Description>
                        <strong>Skills</strong>
                        <ul>
                            <li>
                                HTML
                            </li>
                            <li>
                                CSS
                            </li>
                            <li>
                                JS
                            </li>
                            <li>
                                ReactJS
                            </li>
                            <li>
                                Bootstrap
                            </li>
                        </ul>
                    </Description>
                    <Description>
                        <strong>Tools</strong>
                        <p>
                            VScode, Github, etc.
                        </p>
                    </Description>
                </Main>
                <Main>
                    <Title>
                        <DiDatabase size={43} /> Databases
                    </Title>
                    <Description2>
                        <strong>Skills</strong>
                        <ul>
                            <li>
                                MySQL
                            </li>
                            <li>
                                MongoDB
                            </li>
                        </ul>
                    </Description2>
                </Main>
                <BigTitle text="SKILLS" top="7%" right="10%" />
                </Grid>
            </Box>
        </ThemeProvider>
        </MainContainer>
    )
}
export default MySkillsPage
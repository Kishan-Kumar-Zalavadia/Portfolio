//import react from "react";
import styled from "styled-components"; 
import LogoComponent from "../subComponents/LogoComponent";
import PowerButton from "../subComponents/PowerButton";
import SocialIcons from "../subComponents/SocialIcons";
import { motion } from "framer-motion";
import { NavLink } from 'react-router-dom'
import { YinYang } from "./AllSvgs";
import { keyframes } from "styled-components";
import { useState } from "react";
import Intro from "./Intro";

const MainContainer = styled.div`
background: ${props => props.theme.body};
width: 100vw;
height: 100vh;
overflow: hidden;
position: relative;
h2,h3,h4,h5,h6{
    font-family: 'Karla', sans-serif;
    font-weight: 500;
}
`

const Container = styled.div`
    padding: 2rem;
`
const Contact = styled(NavLink)`
    color: ${props => props.theme.text};
    position: absolute;
    top: 2rem;
    right: calc(1rem + 2vh);
    text-decoration: none;
    z-index: 1;
`

const WORK = styled(NavLink)`
    color: ${props => props.theme.text};
    position: absolute;
    //top: 30%;
    top: 50%;
    right: calc(1rem + 2vh);
    transform: rotate(90deg) translate(-50%, -50%);
    text-decoration: none;
    z-index: 1;
`

const RESUME = styled(NavLink)`
    color: ${props => props.theme.text};
    position: absolute;
    top: 75%;
    right: calc(0rem + 2vh);
    transform: rotate(90deg) translate(-50%, -50%);
    text-decoration: none;
    z-index: 1;
`
/*
const WORK = styled(NavLink)`
    color: ${props => props.click ? props.theme.body : props.theme.text};
    position: absolute;
    top: 50%;
    left: calc(1rem + 2vh);
    transform: translate(-50%, -50%) rotate(-90deg);
    text-decoration: none;
    z-index: 1;
`*/

const BottomBar = styled.div`
    position: absolute;
    bottom: 1rem;
    left: 0;
    right: 0;
    width: 100%;

    display: flex;
    justify-content: space-evenly;
`
const ABOUT = styled(NavLink)`
    color: ${props => props.click ? props.theme.body : props.theme.text};
    text-decoration: none;
    z-index: 1;
`

const SKILLS = styled(NavLink)`
    color: ${props => props.theme.text};
    text-decoration: none;
    z-index: 1;
`

const rotate = keyframes`
    from{
        transform: rotate(0);
    }
    to{
        transform: rotate(360deg);
    }
`

const Center = styled.button`
    position: absolute;
    top: ${props => props.click ? '85%' : '50%'};
    left: ${props => props.click ? '92%' : '50%'};
    transform: translate(-50%, -50%);
    border: none;
    outline: none;
    background-color: transparent;
    cursor: pointer;

    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    transition: all 1s ease;

    &>:first-child{
        animation: ${rotate} infinite 1.5s linear;
    }

    &>:last-child{
        display: ${props => props.click ? 'none' : 'inline-block'};
        padding-top: 1rem;
    }

    @media (max-width: 830px){
        padding-right: ${props => props.click ? '30px' : ''};
        height:  ${props => props.click ? '60px' : '35vh'};
        width:  ${props => props.click ? '60px' : '35vh'};
    }
`

const DarkDiv = styled.div`
    position: absolute;
    top: 0;
    background-color: #000;
    bottom: 0;
    right: 50%;
    width: ${props => props.click ? '50%' : '0%'};
    height: ${props => props.click ? '100%' : '0%'};
    z-index: 1;
    transition: height 0.5s ease, width 1s ease 0.5s;
`

const Main = () => {

    const [click, setClick] = useState(false);

    const handleClick = () => setClick(!click);

    return (
        <MainContainer>
            <DarkDiv click={click} />
            <Container>
                <PowerButton />
                <LogoComponent theme={click ? 'dark' : 'light'} />
                <SocialIcons theme={click ? 'dark' : 'light'} />
                <Center click={click}>
                    <YinYang onClick={() => handleClick()} width={click ? 100 : 200} height={click ? 100 : 200} fill='currentColor' />
                    <span>Click here</span>
                </Center>

                <Contact target="_blank" to={{ pathname: "mailto:kishankumarz1048@gmail.com" }}>
                    <motion.h2
                        initial={{
                            y: -200,
                            transition: { type: 'spring', duration: 0.5, delay: 0.5 }
                        }}
                        animate={{
                            y: -0,
                            transition: { type: 'spring', duration: 0.5, delay: 0.5 }
                        }}
                        whileHover={{ scale: 1.1 }}
                        whileTap={{ scale: 0.9 }}
                    >
                        Say hi..
                    </motion.h2>
                </Contact>

                <WORK to="/work">
                    <motion.h2
                        initial={{
                            y: -200,
                            transition: { type: 'spring', duration: 0.5, delay: 0.5 }
                        }}
                        animate={{
                            y: -0,
                            transition: { type: 'spring', duration: 0.5, delay: 0.5 }
                        }}
                        whileHover={{ scale: 1.1 }}
                        whileTap={{ scale: 0.9 }}
                    >
                        Work
                    </motion.h2>
                </WORK>

                {/* <RESUME to="/resume">
                    <motion.h2
                        initial={{
                            y: -200,
                            transition: { type: 'spring', duration: 0.5, delay: 0.5 }
                        }}
                        animate={{
                            y: -0,
                            transition: { type: 'spring', duration: 0.5, delay: 0.5 }
                        }}
                        whileHover={{ scale: 1.1 }}
                        whileTap={{ scale: 0.9 }}
                    >
                        <a href="https://images.unsplash.com/photo-1453728013993-6d66e9c9123a?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8dmlld3xlbnwwfHwwfHw%3D&w=1000&q=80" download="Imagesd">asfdasf</a>
                    </motion.h2>
                </RESUME> */}

                {/* <WORK to="/work" click={click}>
                    <motion.h2
                        initial={{
                            y: -200,
                            transition: { type: 'spring', duration: 1.5, delay: 1 }
                        }}
                        animate={{
                            y: -0,
                            transition: { type: 'spring', duration: 1.5, delay: 1 }
                        }}
                        whileHover={{ scale: 1.1 }}
                        whileTap={{ scale: 0.9 }}
                    >
                        Work
                    </motion.h2>
                </WORK> */}

                <BottomBar>
                    <ABOUT to="/about" click={click}>
                        <motion.h2
                            initial={{
                                y: 200,
                                transition: { type: 'spring', duration: 0.5, delay: 0.5 }
                            }}
                            animate={{
                                y: -0,
                                transition: { type: 'spring', duration: 0.5, delay: 0.5 }
                            }}
                            whileHover={{ scale: 1.1 }}
                            whileTap={{ scale: 0.9 }}
                        >
                            About.
                        </motion.h2>
                    </ABOUT>
                    <SKILLS to="/skills">
                        <motion.h2
                            initial={{
                                y: 200,
                                transition: { type: 'spring', duration: 0.5, delay: 0.5 }
                            }}
                            animate={{
                                y: -0,
                                transition: { type: 'spring', duration: 0.5, delay: 0.5 }
                            }}
                            whileHover={{ scale: 1.1 }}
                            whileTap={{ scale: 0.9 }}
                        >
                            My Skills.
                        </motion.h2>
                    </SKILLS>
                </BottomBar>

            </Container>
            {click ? <Intro click={click} /> : null}
        </MainContainer>
    )
}
export default Main 
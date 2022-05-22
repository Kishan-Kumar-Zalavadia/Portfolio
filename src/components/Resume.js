//import react from "react";
import styled from "styled-components";
import { ThemeProvider } from "styled-components";
import { DarkTheme } from "./Themes";

import LogoComponent from "../subComponents/LogoComponent";
import SocialIcons from "../subComponents/SocialIcons";
import PowerButton from "../subComponents/PowerButton";
import ParticleComponent from "../subComponents/ParticleComponent";
import BigTitle from "../subComponents/BigTitle"
import astronaut from '../assets/Images/spaceman.png'
import { keyframes } from "styled-components";

import { motion } from "framer-motion";

const Center = styled.div`
    width: 100px;
    height: 100px;
    background-color: red;
    position: relative;
` 

const Resume = () => {
    return (
        <div>
            <Center>
            </Center>
        </div>
    )
}
export default Resume
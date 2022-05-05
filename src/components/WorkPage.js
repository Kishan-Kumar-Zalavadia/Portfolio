import react from "react";
import styled from "styled-components";
import img from '../assets/Images/patrick-tomasso-Oaqk7qqNh_c-unsplash.jpg'
import LogoComponent from "../subComponents/LogoComponent";
import PowerButton from "../subComponents/PowerButton";
import SocialIcons from "../subComponents/SocialIcons";
import {Works} from '../data/WorkData'
import WorkComponent from "./WorkComponent";
import BigTitle from "../subComponents/BigTitle"
import { motion } from "framer-motion";

import { makeStyles } from "@material-ui/core/styles";
import {  Paper } from "@material-ui/core"

const MainContainer = styled(motion.div)`
    background-image: url(${img});
    background-size: cover;
    background-repeat: no-repeat;
    background-attachment: fixed;
    background-position: center;
    width: 100vw;
`

const Container = styled.div`
    background-color: ${props => `rgba(${props.theme.bodyRgba},0.8)`};
    width: 100%;
    height: auto;
    position: relative;
    padding-bottom: 5rem;
`

const Center = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    padding-top: 10rem;
`

const Grid = styled.div`
    display: grid;
    grid-template-columns: repeat(2, minmax(calc(10rem + 15vw), 1fr));
    grid-gap: calc(1rem + 2vw);
    @media (max-width: 830px){
        grid-template-columns: repeat(1, minmax(calc(10rem + 15vw), 1fr));
        padding-left: 37px;
    }
`

//Frame-motion configuration
const container = {
    hidden: {opacity: 0},
    show: {
        opacity: 1,
        transition:{
            staggerChildren: 0.2,
            duration: 0.5,
        }
    }
}


const WorkPage=()=>{
    return(
        <MainContainer
            variants={container}
            initial='hidden'
            animate= 'show'
            exit={{
                opacity:0, transition:{duration:0.5}
            }}
        >
            <Container>
                <LogoComponent/>
                <PowerButton/>
                <SocialIcons/>
                <Center>
                    <Grid>
                        {
                            Works.map(work => {
                                return <WorkComponent key={work.id} work={work}/>
                            })
                        }
                    </Grid>
                </Center>
                <BigTitle text="WORK" top="4rem" left="5rem" />
            </Container>
        </MainContainer>
    )
}
export default WorkPage
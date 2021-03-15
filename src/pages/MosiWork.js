import React from 'react';

import { Link } from "react-router-dom";

import variation from '../img/EGNAVAAL.jpg';
import theracer from "../img/work.jpg";
import goodtimes from '../img/superMosi.jpg';
// Animations import
import { motion } from "framer-motion";
import { 
    pageAnimation, 
    zoomPhoto, 
    fadeIn, 
    lineAnimation,
    RainbowTwist,
    sliderParent
} from '../animation';
import { useScroll }  from "../components/useScroll";
import  HoppTop  from "../components/HoppTop";
// import styles
import { 
    Project, 
    FrameAnimation, 
    FrameAnimation2, 
    FrameAnimation3, 
    FrameAnimation4, 
    Hiden, 
    Work } from "../styles";


const MosiWork = () => {
    const [elements, controls] = useScroll();
    const [elements2, controls2] = useScroll();
    
    return(
        <Work variants={ pageAnimation } initial="hidden" animate="show" exit="exit">
            
            <motion.div variants={ sliderParent }>
            <FrameAnimation variants={ RainbowTwist } ></FrameAnimation>
            <FrameAnimation2 variants={ RainbowTwist }></FrameAnimation2>
            <FrameAnimation3 variants={ RainbowTwist }></FrameAnimation3>
            <FrameAnimation4 variants={ RainbowTwist }></FrameAnimation4>
            </motion.div>
            <Project>
                <motion.h2 variants={ fadeIn }>Digital Art</motion.h2>
                <motion.div variants={ lineAnimation } className="line"></motion.div>
            <Link to="/work/the-variation">
                <Hiden>
                <motion.img src={ variation } variants={zoomPhoto} alt=""/>
                </Hiden>
            </Link>
            </Project>   
            <Project ref={ elements } animate={ controls } initial="hidden" variants={ fadeIn } >
                <h2>Fine Art</h2>
                <div className="line"></div>
            <Link to="/work/the-good-mosi">
                <img src={ theracer } alt=""/>
            </Link>
            </Project>   
            <Project ref={ elements2 } animate={ controls2 } initial="hidden" variants={ fadeIn }>
                <h2>Sketch Book</h2>
                <div className="line"></div>
            <Link to="/work/cartoon">
                <img src={ goodtimes } alt=""/>
            </Link>
            </Project>  
            <HoppTop /> 
        </Work>
    );
};



export default MosiWork;
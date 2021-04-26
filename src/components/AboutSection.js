import React from "react";
import mamma from "../img/mamma2.jpg";

// import styled
import { About, Description, HiddenDiv, Image } from "../styles";
import  Wave  from "./Wave";

// framer motion
import { motion } from "framer-motion";
import { pageAnimation, zoomPhoto, fadeIn } from "../animation";
import { Link } from "react-router-dom";

// jump to top import

import HoppTop from './HoppTop';

const AboutSection = () => {


  return (
    <About>
      <Description>
        <motion.div className="title">
          <HiddenDiv >
            <motion.h2 variants={ pageAnimation}>
            Moa Larsson 
            </motion.h2>
          </HiddenDiv >
          <HiddenDiv >
            <motion.h2 variants={ pageAnimation }>
            <span>art </span>and <span>crafts</span>
            </motion.h2 >
          </HiddenDiv >
          <HiddenDiv >
            <motion.h2 variants={ pageAnimation } ></motion.h2>
          </HiddenDiv >
        </motion.div>
        <motion.p variants={ fadeIn }>
        Creative mind and artist. Masters different skills from illustration,
         fine art and photography -both digitally and by hand
        </motion.p>
        <Link to="/contact"><motion.button  variants={ fadeIn }>Contact Me</motion.button></Link>
      </Description>
      <Image>
        <motion.img variants={zoomPhoto} src={mamma} alt="guy with a camera" />
      </Image>
      <Wave />
      <HoppTop />
    </About>
  );
};




//styled component




export default AboutSection;

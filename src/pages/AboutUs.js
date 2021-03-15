import React from "react";
//Page Components
import AboutSection from "../components/AboutSection";
import FaqSection from "../components/FaqSection";
import ServicsSection from '../components/ServicsSection';
// Animations import
import { motion } from "framer-motion";
import {pageAnimation,} from '../animation';

const AboutUs = () => {
  return(
    <motion.div 
    variants={ pageAnimation } 
    initial="hidden" 
    animate="show" 
    exit="exit">
    <AboutSection />
    <ServicsSection />
    <FaqSection />
    </motion.div>
  )
  };

export default AboutUs;
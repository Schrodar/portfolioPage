import React from 'react';

// Animations import
import { 
    pageAnimation, 
    pageStill, 
    zoomPhoto } from '../animation';
import { 
    StyledContact, 
    StyledForm, 
    StyledInput, 
    StyledLine, 
    StyledSpecialInput } from "../styles";
import { motion } from "framer-motion";
import {  } from '../animation'
import {  Image2 } from "../styles";
import We from "../img/We.jpg";



const ContactMosi = () => {

    const formHandler = (e) => {
        e.preventDefault();
        console.log("Nikkko i neeed help cant NOD JS yet");
    }

    return(
        <StyledContact 
        initial="hidden" 
        exit="exit" 
        variants={ pageStill } 
        style={{background: "#080707"}} 
        animate="show">

            <StyledForm 
            onSubmit={ formHandler }
            variants={ pageAnimation } >
            <h1 id="waitandse">Contact me  <span id="smile">: )</span>  </h1>
                <StyledInput type="text" placeholder="Name" />
                <StyledInput type="text" placeholder="Email" />
                <StyledInput type="text" placeholder="Confirm Email" />
                <StyledInput type="text" placeholder="Phone" />
                <StyledSpecialInput type="text" placeholder="Message "/>
                <button> Go For It</button>
            </StyledForm>

            <StyledLine></StyledLine>

            <motion.div>
                <Image2>
                  <motion.img variants={zoomPhoto} src={We} alt="you whant me" />
                </Image2>
            </motion.div>
        </StyledContact>
    );
};



export default ContactMosi;
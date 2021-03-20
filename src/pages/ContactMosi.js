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


    return(
        <StyledContact 
        initial="hidden" 
        exit="exit" 
        variants={ pageStill } 
        style={{background: "#080707"}} 
        animate="show">

           <StyledForm name="contact" methood="post" data-netlify="true"
            onSubmit="submit"
            variants={ pageAnimation } >
 
                 <div>            
                    <h1 id="waitandse">Contact me  <span id="smile">: )</span>  </h1>
                    <h2>Phone  070 493 51 30</h2>
                </div>
                <input type="hidden" name="contact"/>
                <StyledInput type="text" placeholder="Name" name="first-name" />
                <StyledInput type="text" placeholder="Email" name="email" />
                <StyledInput type="text" placeholder="Confirm Email" name="email" />
                <StyledInput type="text" placeholder="Phone" name="phone" />
                <StyledSpecialInput type="text" placeholder="Message" name="comments" />
                <button type="submit"> Go For It</button>
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

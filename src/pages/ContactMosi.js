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

                <div>
                <div>            
                    <h1 id="waitandse">Contact me  <span id="smile">: )</span>  </h1>
                    <h2>Phone  070 493 51 30</h2>
                </div>

                <StyledForm 
                name="contact" 
                method="POST"
                data-netlify="true"
                onSubmit="submit"
                variants={ pageAnimation } >
                <input type="hidden" name="form-name" value="contact"/>
                
                <div>
                    <label htmlFor="name">
                        <StyledInput id="name" type="text" placeholder="Name" name="first-name" />
                    </label>
                </div>
                <div>
                    <label htmlFor="email">
                       <StyledInput type="text" placeholder="Email" name="email" id="email" />
                    </label>
                </div>
                <div>
                    <label htmlFor="phone">
                        <StyledInput id="phone" type="text" placeholder="Phone" name="phone" />
                    </label>
                </div>
                <div>
                    <label htmlFor="comments">
                    <StyledSpecialInput id="comments" type="text" placeholder="Message" name="comments" />
                    </label>
                </div>
                <button type="submit"> Go For It</button>
            </StyledForm>
            </div>

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

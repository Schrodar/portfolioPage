import React from "react";
// import styled
import  Toggle  from "./Toggle";
import { Faq } from "../styles";

import { AnimateSharedLayout } from 'framer-motion';


const FaqSection = () => { 



    return(
        <Faq>
            <span>FAQ</span>
            <AnimateSharedLayout>
                <div className="question">
                    <Toggle layoute title="Who am I"> 
                        <div className="question">
                        <div className="answer">
                            <p>I am a 29-year-old, creative and multitasking woman who lives in Stockholm. </p>
                        </div>
                        </div>
                
                    </Toggle>
                 </div>
            
            
                <div className="question">
                    <Toggle title="Current work">
                      <div className="question">
                      <div className="answer">
                          <p>Illustration and photography.</p>
                     </div>
                     </div>
                   </Toggle>
               </div>
            

            <div className="question">
                <Toggle title="Education" >
                <div className="question">
                <div className="answer">
                    <p>Master in Gender Studies,
                    Bachelor's Degree in Political Science, Fashion Studies and Gender Studies.</p>

                </div>
                </div>
                </Toggle>
            </div>
           </AnimateSharedLayout>
            
        </Faq>
    )
}


export default FaqSection;
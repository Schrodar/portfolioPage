import React from "react";
import { WaveSvg } from "../styles";
import { motion } from "framer-motion";



 const Wave = () => {
  

    return(
        <WaveSvg xmlns="http://www.w3.org/2000/svg"  viewBox="0 0 1949.274 346.771">
       
        <motion.path 
         initial={{ pathLength: 0, pathOffset: 1}}
         animate={{pathLength: 1, pathOffset: 0}}
         transition={ { duration: 2 } }
         id="Path_1" 
         data-name="Path 1" 
         d="M109.43,452.642S560.778,199.1,932.885,253.679c274.689,40.288,860.63,479.851,1121.416,278.549" 
         transform="translate(-107.471 -241.958)" 
         fill="none" 
         stroke="#726d67"
         strockOpacity="0.8"
         strokeWidth="8"
         />
         </WaveSvg>
 

   
    )};




export default Wave;


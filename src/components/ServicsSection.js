import React from "react";
// import
import diaphragm from "../img/diaphragm.svg";
import money from "../img/money.svg";
import teamwork from "../img/teamwork.svg";
import home2 from "../img/home2.png";

//styles 

import { 
    Card, 
    Cards, 
    WaveSvg2,
    Services,
    Description, 
    Image } from "../styles";
    
import { useScroll } from "./useScroll";
import { motion } from "framer-motion";
import { fadeIn, lineAnimation2 } from "../animation";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPaintBrush } from "@fortawesome/free-solid-svg-icons";


const ServicsSection = () => {
    const [element, controls] = useScroll();
    const [element2, controls2] = useScroll();
    return(
    <Services >
        <Description>
        <motion.div>
            <WaveSvg2 xmlns="http://www.w3.org/2000/svg" viewBox="0 0 2072.991 1202.976" ref={element}>
                <motion.path 
                 variants={lineAnimation2}
                 initial="hidden" 
                 animate={controls}
                 transition={ { duration: 0.85 } }
                 id="Path_1" 
                 data-name="Path 1" 
                 d="M109.43,457.367S573.594,863.1,956.267,775.766c282.489-64.473,885.067-767.9,1153.257-445.758" 
                 transform="translate(1902.427 1466.902) rotate(-160)"
                 fill="none" 
                 stroke="#726d67"
                 strockOpacity="0.8"
                 strokeWidth="8"
             />

          </WaveSvg2>
        </motion.div>
                 <h2> High <span>quality</span> services</h2>

            <Cards>
                 <Card>
                    <div className="icon">
                    <FontAwesomeIcon size="3x" icon={faPaintBrush}  color="#23d997"/>
                        <h3>Visual power</h3>
                   </div>
                    <p>The right look is important and whether it's your website, living room wall or company logo, -I can help you illustrate it.</p>
                </Card>
                <Card>
                    <div className="icon">
                        <img src={teamwork} alt="Team work"/>
                        <h3> Team Work </h3>
                   </div>
                    <p>I am open to collaborations as a consultant and / or employment.</p>
                </Card>
                <Card>
                    <div className="icon">
                        <img src={money} alt="money"/>
                        <h3> Affordable </h3>
                   </div>
                    <p>Contact me for pricing.</p>
                </Card>
                
                <Card>
                    <div className="icon">
                        <img src={diaphragm} alt="Camera"/>
                        <h3>Photography</h3>
                   </div>
                    <p>I also provide photography services.</p>
                </Card>
            </Cards>
        </Description>
        <Image>
            <img src={home2} alt="camera" initial="hidden" variants={ fadeIn } animate={controls2} ref={element2
            }  />
        </Image>
    </Services>
)
}


export default ServicsSection;







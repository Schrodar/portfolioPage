import { motion } from "framer-motion";
import React, { useState } from "react";


const Toggle = ({children, title}) => {

    const [toggle, setToggle] = useState(false);

    return(
        <motion.div layout >
            <motion.h4 layout onClick={() => setToggle(!toggle)}>{ title }</motion.h4>
            {toggle ? children : ""}
            <div className="faq-line"></div>
        </motion.div>
    )
};


export default Toggle;
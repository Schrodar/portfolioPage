import React, { useState, useEffect } from 'react';
import { useHistory } from "react-router-dom";
import { ProjectState }  from "../ProjectState";

//import styled
import styled from 'styled-components';

// Animations import
import { motion } from "framer-motion";
import { pageAnimation } from '../animation';
import { Details, HedLine, Awards, ImageDisplay, Award } from "../styles";


const ProjectDetail = () => {
    const history = useHistory();
    const url = history.location.pathname;

    const [Projects, setProjects] = useState(ProjectState);
    const [Project, setProject] = useState(null);

    //useEffect
        useEffect(() =>{
            const currentProject = Projects.filter((stateProjectList) => stateProjectList.url === url);
            setProject(currentProject[0]);

        },[ Projects, url]);
 
 
    return(
      <>
        {Project && (
    <Details  
    variants={ pageAnimation } 
    initial="hidden" 
    animate="show" 
    exit="exit">
        <HedLine>
            <h2>{Project.title}</h2>
            <img src={Project.mainImg} alt="super man"/>
        </HedLine>
        <Awards>
            {Project.awards.map((award) =>(<Award title={award.title} description={award.description} key={award.title} />))
            }
        </Awards>
        <ImageDisplay>
            <img src={Project.secondaryImg} alt=""/>
        </ImageDisplay>
    </Details>
    )}
    </>
    )
} 



export default ProjectDetail;





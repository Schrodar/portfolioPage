import { motion } from 'framer-motion';
import styled from 'styled-components';

export const About = styled(motion.div)`
  min-height: 90vh;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 5rem 10rem;
  color: white;
  z-index: 2;
  @media (max-width: 1200px){
     display: block;
     padding: 2rem 2rem;
     text-align: center;   
    }
`;


export const WaveSvg = styled(motion.svg)`
position: absolute;
   left: 0;
   z-index: 1;
   overflow: hidden;
`;


export const Description = styled(motion.div)`
  flex: 1;
  z-index: 2;
  padding-right: 5rem;

  h2{
    font-weight: lighter;
  } 
  @media (max-width: 1200px){
     padding: 0;
     button {
         margin: 2rem 0 5rem 0;
     }   
    }
`
export const Image = styled.div`
  flex: 1;
  overflow: hidden;
  z-index: 2;
  img{
    
    width: 100%;
    height: 80vh;
    object-fit: cover;
   }
`;



export const HiddenDiv = styled.div`
  overflow: hidden;
`



// 




// Faq Section
  
export const  Faq = styled(About)`
display: block;
span{
    display: block;
    font-size: 4rem;
}

h2{
    padding-bottom: 2rem;
    font-weight: lighter;
}
.faq-line{
    background: #cccc;
    height: 0.2rem;
    margin: 2rem 0rem;
    width: 100%;
    .answer{
        padding: 2rem 0rem;
    }
p{
    padding: 1rem 0rem;
}

}
`;

// Faq Section end

 
// Contact mosi
export const StyledContact = styled(motion.div)`
  min-height: 90vh;
  display: flex;
  align-items: center;
  color: white;
  align-items: center;
  justify-content: space-evenly;
  @media (max-width: 1200px){
     display: flex;
     justify-content: center;
     align-items: center;
     flex-direction: column;
    }
  `;


  export const StyledForm = styled(motion.form)`
    min-height: 90vh;
    display: flex;
    flex-direction: column; 
    justify-content: space-evenly;
    align-items: center;
    button{
        width: 20rem; 
     }
     h2 {
         font-size: 1rem;
         margin: 0 0 0 1rem;
     }
  `;
export const StyledInput = styled.input`
    display: flex;
    align-items: center;
    justify-content: center;  
    padding: 1.25rem;
    border: none;
    outline: none;
    width: 20rem; 
    height: 2rem;
    background: #aab4ca;
`;

export const StyledSpecialInput = styled.textarea`
    display: flex;
    justify-content: space-evenly;  
    flex-direction: column;
    padding: 1.25rem;
    border: none;
    outline: none;
    width: 20rem;
    height: 10rem; 
    background: #aab4ca;;
`;


export const Image2 = styled.div`
    flex: 1;
    overflow: hidden;
    z-index: 2;
    @media (max-width: 1200px){
    }

img{
    width: 100%;
    height: 80vh;
    object-fit: cover;
 }
`;

export const StyledLine = styled(motion.div)`
display: flex;
background: #ffff;
width: 0.5rem;
height: 75vh;
justify-content: center;
align-items: center;

@media (max-width: 1200px){
     height: 0.5rem;
     width: 80%;
     margin: 0;
     display: flex;
     flex-direction: column;
     align-items: center;
     margin-bottom: 5rem;
    }
`;





// contact mosi end
 

// MosiWorks
export const Work =styled(motion.div)`
    min-height: 100vh;
    overflow: hidden;
    padding: 5rem 10rem;
    he{
        padding: 1rem 0rem;
    }

    @media (max-width: 1200px){
                
    }

`;

export const Project = styled(motion.div)`
    padding-bottom: 10rem;
   .line {
        height: 0.25rem;
        background: #ede8e1;
        margin-bottom: 3rem;
        width: 100%
   }
    img {
        width: 100%;
        height: 70vh;
        object-fit: cover;
    }
    h2 {
        color: #949494;
    }
`;

export const Hiden = styled.div`
    overflow: hidden;
`;

export const FrameAnimation = styled(motion.div)`
    top: 10vh;
    z-index: 2;
    left: 0;
    width: 120%;
    height: 100vh;
    background: #6d49c0;
    position: fixed;
`;

export const FrameAnimation2 = styled(FrameAnimation)`
    background: #d86c51;
`;

export const FrameAnimation3 = styled(FrameAnimation)`
    background: #d851c6;
`;

export const FrameAnimation4 = styled(FrameAnimation)`
    background: #6262DB;
`;

// end Of MosiWork

// Nav styles

export const StyledNav = styled.nav`
min-height: 10vh;
display: flex;
margin: auto;
justify-content: space-between;
align-items: center;
padding: 1rem 10rem;
background: #282828;
position: sticky;
top: 0;
z-index: 10;
a {
  color: white;
  text-decoration: none;
}
ul {
  display: flex;
  list-style: none;
}
#logo {
  font-size: 1.5rem;
  font-family: "Lobster", cursive;
  font-weight: lighter;
}
li {
  padding-left: 10rem;
  position: relative;
}
@media (max-width: 1200px) {
  flex-direction: column;
  padding: 2rem 1rem;
  #logo {
    display: inline-block;
    margin: 1rem;
  }
  ul {
    padding: 2rem;
    justify-content: space-around;
    width: 100%;
    li {
      padding: 0;
    }
  }
}
`;

// END of Nav

// Project Details

export const Award = ({title, description}) => {
    return(
        <StyledAward>
            <h3>{title}</h3>
            <div className="line"></div>
            <p>{description}</p>
        </StyledAward>
    );
       
   } ;

export const Details = styled(motion.div)`
    color: whitesmoke;
`;

export const HedLine = styled.div`
    min-height: 90vh;
    padding-top: 20vh;
    position: relative;
    h2{
        position: absolute;
        top: 10%;
        left: 50%;
        transform:translate(-50%, -10%);
    }
    img{
        width: 100%;
        height: 80vh;
        object-fit: cover
    }
`;
export const Awards = styled.div`
    min-height: 80vh;
    margin: 5rem 10rem;
    align-items: center;
    justify-content: space-around;
    display: flex;
    @media (max-width: 1200px){
        display: block; 
        }


`;
export const StyledAward = styled.div`
    padding: 5rem;
    h3{
        font-size: 2rem;
            }
    .line{
        width: 50%;
        background: #ede8e1;
        height: 4px;
        margin: 1rem 0rem;

    }
    p{
        padding: 2rem 0rem;
    }
`;

export const ImageDisplay = styled.div`
    min-height: 50;
    img{
        width: 100%;
        height: 100vh;
        object-fit: cover;
    }
`;


// End of projectDetail



// ServiceSection 

export const Services = styled(About)`
h2  {
         padding-bottom: 5rem;
    }
p   {
       width: 70%;
       padding: 2rem 0rem 4rem 0rem;
    }
    
`;

export const Cards = styled.div`
    display: flex;
    flex-wrap: wrap;
    @media (max-width: 1200px){
     justify-content: center;   
    }
`;

export const Card = styled.div`
    z-index: 2;
    flex-basis: 16rem;

.icon{
        display: flex;
        align-items: center;
        h3{
            margin-left: 0.4rem;
            
        }
    }
`;

export const WaveSvg2 = styled.svg`
   position: absolute;
   right: 0;
   top: 100vh;
   z-index: 1;
   overflow: hidden;
`;

// end of ServiceSection
/*
font-family: 'Inter', sans-serif;
font-family: 'Lobster', cursive;
#ede8e1
font-family: 'Inter', sans-serif; */

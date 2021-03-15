

export const pageStill ={
  hidden: { opacity: 0,
  },
  show: {
    opacity: 1,
    transition: {
      duration: 0.5,
      when: "beforeChildren",
      staggerChildren: 0.25,
    }
    },
};

export const pageAnimation = {
    hidden: {
      opacity: 0,
      y: 300,
    },
    show: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
        when: "beforeChildren",
        staggerChildren: 0.25,
      },
    },
    exit: {
      opacity: 0,
      transition: {
        duration: 0.5,
      },
    },
  };


export const zoomPhoto = {
    hidden: {
        scale: 1.5,
        opacity: 0,
    },
    show: { scale: 1,
            opacity: 1,
            transition: { duration: 0.75, ease: 'easeOut' }
    },

}

export const fadeIn = {
    hidden: {opacity: 0,},

    show: {
        opacity: 1,
        transision: {duration: 0.85, ease: 'easeOut'},
    }
}

export const lineAnimation = {
  hidden: {
    
      width: '0%'
  },
  show: {
      width: '100%',
      transition: { duration: 0.85, }
  },
};



export const RainbowTwist = {
    hidden: {x: "-130%", skew: '45deg'},
    show: { 
        x: "100%",
        skew: '0deg',
        transition: {eaes: 'easeOut', duration: 0.75,}   
    },
}

export const sliderParent = {
    hidden: {opacity: 1},
    show: {opacity: 1, transition: {staggerChildren: 0.15, ease: 'easeOut'}  }
}


export const lineAnimation2 = {
  hidden: {
      pathLength: 0, 
      pathOffset: 1,
      width: '0%'
  },
  show: {
      width: '100%',
      pathLength: 1,
      pathOffset: 0,
      transition: { duration: 0.85, }
  },
};

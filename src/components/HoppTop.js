import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

const HoppTop = () => {

    const { phatname } = useLocation();
    useEffect(() => {
        window.scroll({
            top:0,
            left:0,
        })
    },[phatname]); 
    return null;
}

export default HoppTop;

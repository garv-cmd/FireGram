import React, { useEffect } from 'react';
import UseStorage from '../hooks/UseStorage';
import {motion} from 'framer-motion';
const ProgressBar = ({file,setFile,use})=>{
    const {progress,url}  = UseStorage({file,use});
    useEffect(()=>{
        if(url){
        setFile(null);
        }
    },[url,setFile])
    return (<motion.div className="progress-bar" 
    initial={{width:0}}
    animate={{width:progress+'%'}}
    ></motion.div>);
}
export default ProgressBar;
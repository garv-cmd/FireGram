import React, { useState, useEffect } from 'react';
import ProgressBar from './ProgressBar';

const UploadForms = ({use})=>{
   
    const [file,setFile] = useState(null);
    const [error,setError] = useState(null);
    const [auth,setAuth] = useState(use);
    const types = ['image/png','image/jpg','image/jpeg','image/svg','image/gif','video/mp4'];
    const userType = ['Sign-in','Error!! Please sign-in again'];
    const changeHandler = (e)=>{
        
        let selected = e.target.files[0];
        
        setAuth(use);
        if(selected && types.includes(selected.type)&& !userType.includes(auth)){
            setFile(selected);
            setError(null);
        }
        else {
            setFile(null);
            setError("Please select an image file or Please Sign in");
            
            
        }
    }
    return (
        <form>
        <label>
        <input type="file"  onClick={changeHandler} onChange={changeHandler}></input>
        <span>+</span>
        </label>
            
            <div className="output">
                {error && <div className="error">{error}</div>}
                {file && <div>{file.name}</div>}
                {file && <ProgressBar file = {file} use ={use} setFile = {setFile}/>}
            </div>
        </form>
    );
}
export default UploadForms;
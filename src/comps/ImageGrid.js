import React, { useState } from 'react';
import useFirestore from '../hooks/useFirestore';
import {motion} from 'framer-motion';
import GetId from '../comps/GetId';

const ImageGrid = ({setSelected,getId,setName,setDel})=>{
  
    const {docs} = useFirestore('images');
    
   
   
    return (<div className="img-grid">
    {docs && docs.map(doc => (
        
      <motion.div className="img-wrap" key={doc.id} 
        layout
        whileHover={{ opacity: 1 }}s
        onClick={() => setSelected(doc.url)}
      >
        <motion.img src={doc.url} alt="uploaded"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1 }}
         
          onClick={()=>{getId(doc.id); setName(doc.fname);setDel(doc.auth);}}
          
        />
        
          <motion.p layout
        whileHover={{ opacity: 1 }}s></motion.p>
      </motion.div>
    ))}
  </div>
    );
}

export default ImageGrid;


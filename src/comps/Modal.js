import React from 'react';
import {motion} from 'framer-motion';
import getValue from '../comps/ImageGrid';
import Button from '@material-ui/core/Button';
import DeleteIcon from '@material-ui/icons/Delete';
import IconButton from '@material-ui/core/IconButton';
import {projectFirestore,projectStorage,timestamp,storageRef} from '../firebase/configure';

const Modal = ({selected,setSelected,id,name,use,del})=>{
    const handleIt=(e)=>{
        if(e.target.classList.contains('backdrop')){
            setSelected(null);
        }
      
       
    }

const deleteIt=()=>{
    if(use===del){
    projectFirestore.collection("images").doc(id).delete().then(function() {
        console.log("Document successfully deleted!");
        setSelected(null);
    }).catch(function(error) {
        console.error("Error removing document: ", error);
    });
    console.log(name);
    var desertRef = storageRef.child(name);
    
// Delete the file
desertRef.delete().then(function() {
  // File deleted successfully
  console.log('File deleted successfully')
}).catch(function(error) {
  // Uh-oh, an error occurred!
});
    }
    else{
        alert('You cannot delete it');
    }
}
    return (<>
   
    <motion.div className="backdrop"
    initial={{opacity:0}}
    animate={{opacity:1}}
     onClick={handleIt}>
    
        <motion.img src={selected} initial={{y:"100vh"}} animate={{y:0}} alt="enlarged image"></motion.img>
        <motion.div src={selected} initial={{y:"100vh"}} animate={{y:0}}>
        <IconButton color="secondary" onClick={deleteIt} aria-label="delete">
        <DeleteIcon />  
      </IconButton>
      </motion.div>
    </motion.div>
    
   </>);
}
export default Modal;
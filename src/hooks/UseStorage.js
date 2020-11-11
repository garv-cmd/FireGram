import {useState,useEffect} from 'react';
import {projectStorage,projectFirestore,timestamp} from '../firebase/configure';
import { useRadioGroup } from '@material-ui/core';

const UseStorage = ({file,use})=>{
    const [progress,setProgress] = useState(0);
    const [error,setError] = useState(null);
    const [url,setUrl] = useState(null);
    const [auth,setAuth] = useState();
   

  useEffect(()=>{
      const storageRef = projectStorage.ref(file.name);
      const collectionRef = projectFirestore.collection('images');
      
      storageRef.put(file).on('state_changed',(snap)=>{
          let percentage = (snap.bytesTransferred/snap.totalBytes)*100;
          setProgress(percentage);
      },(err)=>{
          
          setError(err);
      },async ()=>{
          let url = await storageRef.getDownloadURL();
          const createdAt = timestamp();
          const fname = file.name;
          const auth = use;
          setAuth(use);
          collectionRef.add({url,createdAt,fname,auth});
          setUrl(url);
      })
  },[file]
  
  );
  return {progress,url,error,auth};
}
export default UseStorage;
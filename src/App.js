import React, { useState,useEffect } from 'react';
import firebase from 'firebase/app';
import Title from './comps/Title';
import UploadForms from './comps/UploadForms';
import ImageGrid from './comps/ImageGrid';
import Modal from './comps/Modal';
import {provider} from './firebase/configure';
import {createGlobalStyle,ThemeProvider} from 'styled-components';

const GlobalStyle = createGlobalStyle`
body{
  background-color:${props=>props.theme.mode==='dark'?'#111':'#fff'};
  color:${props=>props.theme.mode==='dark'?'#fff':'#111'};
}`;
function App() {
  const [themeState,setThemeState] = useState('light');
  const [theme,setTheme] = useState({mode:'dark'});
  const [selected,setSelected] = useState(null);
  const [id,getId] = useState(null);
  const [name,setName] = useState(null);
  const [del,setDel] = useState(null);
  const [use,setUser] = useState('Sign-in');
  return (
    <ThemeProvider theme={theme}>
    <>
    <GlobalStyle/>
    <div className="App">
      <Title use={use} setUser={setUser} />
     
      <UploadForms use={use}/>
      <ImageGrid setSelected={setSelected} getId={getId} setName={setName} setDel={setDel} />
     {selected && <Modal selected={selected} setSelected={setSelected} id={id} name={name} use={use} del={del}/>}
    </div>
    </>
    </ThemeProvider>
  );
}

export default App;

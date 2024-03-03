import logo from './logo.svg';
import './App.css';
import LoginForm from './componets/loginForm/LoginForm';
import React, { useState } from 'react';
import {BrowserRouter} from 'react-router-dom'
import Routes from './Routes'

function App() {  

  const [user, setUser] = useState(
    null
  )

  if(user === null){
    return(
    <LoginForm/>
    )
  }

  return (   
    <BrowserRouter>

      <Routes/>
       
       </BrowserRouter>
  );
}

export default App;

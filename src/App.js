import logo from './logo.svg';
import './App.css';
import LoginForm from './componets/loginForm/LoginForm';
import React, { useState } from 'react';
import {BrowserRouter} from 'react-router-dom'
import Routes from './Routes'

function App() {  

  const [user, setUser] = useState(null)

  const actionLoginDataGoogle = async (u) =>{
    let newUser = {
      id: u.uid,
      name : u.displayName,
      avatar : u.photoURL
    }
    setUser(newUser)
  }
  
  const actionLoginDataFacebook = async (u) =>{
    let newUser = {
      id: u.uid,
      name : u.displayName,
      avatar : u.photoURL
    }
    setUser(newUser)
  }

  if(user === null){
    return(
    <LoginForm onReceiveGoogle={actionLoginDataGoogle}
    onReceiveFacebook={actionLoginDataFacebook}
    />
    )
  }

  return (   
    <BrowserRouter>

      <Routes/>
       
       </BrowserRouter>
  );
}

export default App;

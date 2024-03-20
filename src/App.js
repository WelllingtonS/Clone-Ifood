import logo from './logo.svg';
import './App.css';
import LoginForm from './componets/loginForm/LoginForm';
import React, { createContext, useState } from 'react';
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom'
import Home from './pages/Home'
import Cadastro from './pages/Cadastro'
import editarCadastro from './pages/FormularioCadastro'


function App() {  

   const  [user, setUser] = useState(null)

  const actionLoginDataGoogle = async (u) =>{
    let newUser = {
      id: u.uid,
      name : u.displayName,
      avatar : u.photoURL
    }
    setUser(newUser)
    localStorage.setItem('id', u.uid,)
    localStorage.setItem('name', u.displayName,)
    localStorage.setItem('avatar' , u.photoURL,)
    localStorage.setItem('e-mail' , u.email,)
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
        <Router>
          <Routes>
            <Route  path="/" element={<Home/>}/>
            <Route  path="/cadastro" element={<Cadastro/>}/>
            <Route  path="/editarCadastro" element={<editarCadastro/>}/>            
            </Routes>
        </Router>
  );
}

export default App;

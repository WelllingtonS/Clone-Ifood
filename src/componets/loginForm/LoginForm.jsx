/* eslint-disable jsx-a11y/alt-text */
import React from 'react';
import './LoginForm.css';
import { FaUser, FaLock} from "react-icons/fa";
import firebase from "../../service/firebase"
import {useState} from 'react';
import { signInWithPopup } from 'firebase/auth';
import { FaFacebookF } from "react-icons/fa";
import { FaGoogle } from "react-icons/fa";


export default ({onReceiveGoogle}) => {

    const [user, setUSer] = useState(null)

    const actionLoginGoogle = async ()=>{
        let result = await firebase.googleLogar()

        if(result){
            onReceiveGoogle(result.user)
                }else{
            alert('Error')
        }

    }
    
    return (
        <div className='wrapper'>
            
                <h1>Login</h1>
                                            
                <div className='input-box'> {/* -------------- Caixa de texto E-Mail  --------------*/}  
                    <input type="text" placeholder='Email' required /> 
                    <FaUser className='icon' />
                </div>
                <div className='input-box'> {/* -------------- Caixa de texto Password --------------*/} 
                    <input type="Password" placeholder='Password' required />
                    <FaLock className='icon'/>
                </div>

                <div className="remember-forgot"> {/* -------------- Esqueceu a senha e lembrar-me --------------*/}
                    <label><input type="checkbox"/>Lembrar-me</label>
                    <a href="#">Esqueceu a senha ?</a>
                </div>

                <button class='btn' type='submit'> Login </button> {/* -------------- Botão login --------------*/}

               
                <button className="btn"> <FaFacebookF className='iconAlign'/> Fazer login com o Facebook </button> {/* -------------- Caixa de login Facebook --------------*/}
                    
                <button className="btn"  onClick={actionLoginGoogle}>
                <FaGoogle className='iconAlign'/>
                Fazer login com o Google
                </button>{/* -------------- Caixa de login Google --------------*/}
               


            
            </div>
        
    )
}

/* eslint-disable jsx-a11y/alt-text */
import React from 'react';
import './LoginForm.css';
import { FaUser, FaLock} from "react-icons/fa";
import {auth, provider} from "../../service/firebase"
import {useState} from 'react';
import { signInWithPopup } from 'firebase/auth';
import { FaFacebookF } from "react-icons/fa";
import { FaGoogle } from "react-icons/fa";



const LoginForm = () => {
    const [user, setUSer] = useState(null)

    const handleGoogleSignIn = ()=>{
        signInWithPopup(auth, provider).then((result)=>{
            const user = result.user;
            console.log(user)
            setUSer(user);
        }).catch((err)=>{
            console.log(err);
        })
    }

    const handleLogout=()=>{
        setUSer(null)
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
                    
                <button className="btn"  onClick={handleGoogleSignIn}>
                <FaGoogle className='iconAlign'/>
                Fazer login com o Google
                </button>{/* -------------- Caixa de login Google --------------*/}
               


            
            </div>
        
    )
}

export default LoginForm;
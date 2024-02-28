import React from 'react';
import './LoginForm.css';
import { FaUser, FaLock} from "react-icons/fa";



const LoginForm = () => {
    return (
        <div className='wrapper'>
            <form action="">
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

               <div className="alt-login">
                    <div className="facebook"> </div> {/* -------------- Caixa de login Facebook --------------*/}
                    <div className="google"> </div> {/* -------------- Caixa de login Google --------------*/}
               </div>


            </form>
        </div>
    )
}

export default LoginForm;
import React, { useState } from 'react';
import App from '../../App'
import './style.css';
import LoginForm from '../../componets/loginForm/LoginForm';
import { FaUser, FaLock} from "react-icons/fa";
import { Link } from 'react-router-dom';


function editarCadastro () {

    return (
        <body className='bodyLogin'>
        <div className='wrapper'>
            
                <h1>Dados do Usuario</h1>
                                            
              <fieldset className='box' ><legend className='legenda'>Nome</legend> {/* -------------- Caixa de texto E-Mail  --------------*/}  
                    
                </fieldset>
                <fieldset className='box' ><legend className='legenda'>E-mail</legend> {/* -------------- Caixa de texto E-Mail  --------------*/}  
                    
                </fieldset>
                <fieldset className='box' ><legend className='legenda'>Telefone</legend> {/* -------------- Caixa de texto E-Mail  --------------*/}  
                    
                </fieldset>
                <fieldset className='box' ><legend className='legenda'>Endereço</legend> {/* -------------- Caixa de texto E-Mail  --------------*/}  
                    
                </fieldset>
                <button className="btn" > 
                 Salvar Dados </button> {/* -------------- Caixa de login Facebook --------------*/}
                    
                <Link to="/"   >
                Voltar a pagina inicial
                </Link>{/* -------------- Caixa de login Google --------------*/}
                
            </div>
            </body>
        
    )
}

export default editarCadastro;
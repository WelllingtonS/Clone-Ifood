import React, { useState } from "react";
import './style.css';
import Logo from './logoIfood.png'
import { FaUserGear } from "react-icons/fa6";
import {Link, } from "react-router-dom";

function Home (){
    const nome = localStorage.getItem('name')
    const avatar = localStorage.getItem('avatar')
    return(
        <body className="bodyHome">
             <header className="headerMenu">
                <div className="interface">
                    <div className="logo">
                        <img src={Logo} alt="Logo ifood" />
                    </div>{/*  logo  */}
                    <nav className="menu-desktop">
                        <ul>


                        </ul>
                    </nav>
                    <div className="usuario">
                    
                        <div>Olá,    {nome}     <img src={avatar}/>                    <Link to = "/cadastro">
                            <FaUserGear  /></Link></div>

                    </div> {/*Usuario*/}
                </div>{/* interface */}


            </header>

        </body>
    );
}


export default Home;
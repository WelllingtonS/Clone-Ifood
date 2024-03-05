import React from "react";
import './style.css';
import Logo from './logoIfood.png'
import { FaUserGear } from "react-icons/fa6";
import {Link} from "react-router-dom";
import Routes from '../../Routes'

function Home (){
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
                    
                        <ul><li><Link to = "/cadastro">Olá, Wellington</Link></li></ul>
                       {/*<p><Link to = "/cadastro"/>Olá, Wellington <FaUserGear  /></p>*/}

                    </div> {/*Usuario*/}
                </div>{/* interface */}


            </header>

        </body>
    );
}

export default Home;
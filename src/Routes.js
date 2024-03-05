/* eslint-disable import/no-anonymous-default-export */
import React from "react";
import { Switch, Route} from 'react-router-dom'
import Home from './pages/Home'
import Cadastro from './pages/Cadastro'


export default () => {

    return(
        
        <Switch>
            <Route exact path="/">
                <Home />
            </Route>
            <Route exact path="/cadastro">
                <Cadastro />
            </Route>
        </Switch>
    )
    
}
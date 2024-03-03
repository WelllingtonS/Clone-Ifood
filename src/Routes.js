import React from "react";
import { Switch, Route} from 'react-router-dom'

// eslint-disable-next-line import/no-anonymous-default-export
export default () => {

    return(
        <Switch>
            <Route exact path="/">
                Pagina Inicial
            </Route>
            <Route exact path="/config">
                Pagina de Configuração
            </Route>
            <Route exact path="/sobre">
                sobre
            </Route>
        </Switch>
    )
    
}
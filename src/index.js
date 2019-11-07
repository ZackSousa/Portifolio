import React from 'react';
import {BrowserRouter, Switch, Route} from 'react-router-dom'
import ReactDOM from 'react-dom';
import Geral from './components/geral'
import Perfil from './components/Perfil'
import Projetos from './components/Projetos'

const elemento = document.getElementById('root')

ReactDOM.render(
        <BrowserRouter>
            <Switch>
                <Route path='/' exact={true} component={Perfil}/>
                <Route path='/perfil' component={Perfil}/>
                <Route path='/projetos' component={Projetos}/>
            </Switch>
        </BrowserRouter>
,elemento)
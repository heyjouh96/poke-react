import React from 'react';
import {BrowserRouter, Route, Switch} from 'react-router-dom';

import Pokedex from '../Pokedex/Pokedex';
import Ability from '../Ability/Ability';

export default () =>
    (
        <div>
            <BrowserRouter>
                <Switch>
                    <Route exact path="/" component={Pokedex}/>
                    <Route path="/ability/:id" render={props => <Ability {...props} />}/>
                </Switch>
            </BrowserRouter>
        </div>
    );

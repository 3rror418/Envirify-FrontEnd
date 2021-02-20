import React from 'react';
import { Home_V3 } from './components/home-v3';
import { AboutPage } from './components/about';
import { ContactPage } from './components/contact';
import { BrowserRouter as Router, HashRouter, Route, Switch } from "react-router-dom";
import { SearchPlace } from './components/SearchPlace';
import { PlaceInfo } from './components/PlaceInfo';

export const Home = () => {

    const SearchView = () => (<SearchPlace />);

    const PlaceView = () => (<PlaceInfo />)

    return (
        <div>
            <HashRouter basename="/">
                <div>
                    <Switch>
                        <Route exact path="/" component={Home_V3} />
                        <Route path="/about" component={AboutPage} />
                        <Route path="/contact" component={ContactPage} />
                        <Route path="/search" component={SearchView} />
                        <Route path="/place" component={PlaceView} />
                    </Switch>
                </div>
            </HashRouter>
        </div>
    )
}

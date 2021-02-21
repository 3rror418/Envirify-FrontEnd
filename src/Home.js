import React from 'react';
import { Home_V3 } from './components/home-v3';
import { AboutPage } from './components/about';
import { ContactPage } from './components/contact';
import { BrowserRouter as  HashRouter, Route, Switch } from "react-router-dom";
import { SearchPlace } from './components/SearchPlace';
import { PlaceInfo } from './components/PlaceInfo';
import { UserProfilePage } from './components/User';
import { CreatePlace } from './components/CreatePlace';
import { Login } from './components/Login';


export const Home = () => {

    localStorage.setItem('username', "nicolasaguileracontreras@gmail.com");
    localStorage.setItem('password', "nicolas123");

    const LoginView = () => ( <Login/> );

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
                        <Route path="/profile" component={localStorage.getItem('isLoggedIn')=="true" ? UserProfilePage:LoginView} />
                        <Route path="/create" component={CreatePlace} />
                        <Route path="/login" component={localStorage.getItem('isLoggedIn')=="true" ? UserProfilePage:LoginView} />
                    </Switch>
                </div>
            </HashRouter>
        </div>
    )
}

import React from 'react';
import { Page_Header } from './global-components/page-header';
import { Footer_v1 } from './global-components/footer';
import { Navbar } from './global-components/navbar';
import { LoginView} from './section-components/LoginView';

export const Login = () =>{

    return (
        <div>
        <Navbar />
        <Page_Header HeaderTitle={"Welcome to Envirify"}/>
        <LoginView></LoginView>  
        <Footer_v1 />
        </div>
    );
}

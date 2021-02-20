import React from 'react';
import { Navbar } from './global-components/navbar';
import { Page_header } from './global-components/page-header';
import { Contact } from './section-components/contact';
import { Footer_v1 } from './global-components/footer';

export const ContactPage = () => {
    return <div>
        <Navbar />
        <Page_header HeaderTitle="Contact Us"  />
        <Contact />
        <Footer_v1 />
    </div>
}



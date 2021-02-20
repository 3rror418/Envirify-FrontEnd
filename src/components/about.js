import React from 'react';
import { Navbar } from './global-components/navbar';
import { Page_header } from './global-components/page-header';
import { IntroV2 } from './section-components/intro-v2';
import { Footer_v1 } from './global-components/footer';
import { Video } from './section-components/video';

export const AboutPage = () => {
    return <div>
        <Navbar />
        <Page_header HeaderTitle="About Us"  />
        <IntroV2 />
        <Video></Video>
        <Footer_v1 />
    </div>
}



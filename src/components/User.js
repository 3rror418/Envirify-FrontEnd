import React from 'react';
import { Navbar } from './global-components/navbar';
import { Page_Header } from './global-components/page-header';
import { UserProfile } from './section-components/user-profile';
import { Footer_v1 } from './global-components/footer';

export const UserProfilePage = () => {
    return <div>
        <Navbar />
        <Page_Header HeaderTitle="User Profile"  />
        <UserProfile />
        <Footer_v1/>
    </div>
}

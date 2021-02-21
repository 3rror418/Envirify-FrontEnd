import React from 'react'
import { Footer_v1 } from './global-components/footer'
import { Navbar } from './global-components/navbar'
import { Page_Header } from './global-components/page-header';
import { FormCreate } from './section-components/FormCreate';


export const CreatePlace = () => {

   

    return (
        <div>
            <Navbar />
            <Page_Header HeaderTitle={"New Lodging"} />
            <br></br>

            <FormCreate/>

            <br></br>
            <Footer_v1 />

        </div>
    )
}

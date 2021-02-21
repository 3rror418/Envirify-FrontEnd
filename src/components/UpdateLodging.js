import React from 'react'
import { Footer_v1 } from './global-components/footer'
import { Navbar } from './global-components/navbar'
import { Page_Header } from './global-components/page-header'
import { FormUpdate } from './section-components/FormUpdate'


export const UpdateLodging = () => {


    return (
        <div>
            <Navbar />
            <Page_Header HeaderTitle={"Update Lodging"} />
            <br></br>
            <FormUpdate />
            <br></br>
            <Footer_v1 />
        </div>
    )
}

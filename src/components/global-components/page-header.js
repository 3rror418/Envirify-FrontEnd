import React from 'react';
import { Link } from 'react-router-dom';

export const Page_header = ({HeaderTitle}) => {

	let publicUrl = process.env.PUBLIC_URL+'/'

	return (
		 <div className="breadcrumb-area jarallax" style={{backgroundImage: 'url('+publicUrl+'assets/img/bg/3.png)'}}>
				  <div className="container">
				    <div className="row">
				      <div className="col-lg-12">
				        <div className="breadcrumb-inner">
				          <h1 className="page-title">{ HeaderTitle }</h1>
				        </div>
				      </div>
				    </div>
				  </div>
				</div>
	)
}
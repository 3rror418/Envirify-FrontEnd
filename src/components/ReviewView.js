import React, { useEffect, useState } from 'react'
import { ReviewCard } from './ReviewCard';
import axios from 'axios';
import { FooterV1 } from './global-components/footer';
import { Navbar } from './global-components/navbar';
import { PageHeader } from './global-components/page-header';

export const ReviewView = (props) => {


    return (
        <div>
                {props.reviews.map(review => (
                    <ReviewCard 
                    key = {review.id}
                    review={review}
                    />
                ))}
        </div>
    )
}

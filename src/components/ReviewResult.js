import React from 'react'
import { ReviewCard } from './ReviewCard';

export const ReviewResult = (props) => {
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

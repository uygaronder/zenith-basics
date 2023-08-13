import React from 'react'

import "../css/ProductReviews.css"

import Star from "../../shared/res/svg/star-solid.svg"
import Thumbs from "../../shared/res/svg/thumbs-up-solid.svg"

function ProductReviews({reviews}) {
  return (
    <section id='productReviews'>
        <h3>Customer Reviews</h3>
        <div id='reviewsUpper' className='boxed'>
            <div id='reviewSummary'>
                <div id='reviewCircleContainer'>
                    <div id='reviewCircle'>
                        <p id='rating'>{reviews.rating}</p>
                        <span id='circleBar' style={{background: `conic-gradient(var(--border) 0deg, var(--border) ${reviews.rating*72}deg, transparent ${reviews.rating*72}deg)`}}/>
                    </div>
                </div>
                <div id='reviewSummaryRight'>
                    <span id='starsContainer'>
                        <span id='stars' style={{width: `${reviews.rating*20}%`}}>
                            <img src={Star} alt='star'/>
                            <img src={Star} alt='star'/>
                            <img src={Star} alt='star'/>
                            <img src={Star} alt='star'/>
                            <img src={Star} alt='star'/>
                        </span>
                        <span id='starsFaded'>
                            <img src={Star} alt='star'/>
                            <img src={Star} alt='star'/>
                            <img src={Star} alt='star'/>
                            <img src={Star} alt='star'/>
                            <img src={Star} alt='star'/>
                        </span>
                    </span>
                    <span id='reviewSummaryRightDown'>
                        <span id='satisfied'>
                            <p>{(reviews.ratingBreakdown[0].numberOfRatings+reviews.ratingBreakdown[1].numberOfRatings)/(reviews.numberOfRatings/100)}% of buyers are satisfied</p>
                        </span>
                        <span id='reviewStats'>
                            <p>{reviews.numberOfRatings} ratings</p>
                            <span className='dotDivider'/>
                            <p>{reviews.numberOfReviews} reviews</p>
                        </span>
                    </span>
                    
                </div>
            </div>
            <span className='lineDividerContainer'>
                <span className='lineDividerLight'/>
            </span>
            <div id='starsSummary'>
                {reviews.ratingBreakdown.map((rating, index) => {
                    return(
                        <div className='starSummary'>
                            <div className='starName'>
                                <img src={Star} alt='star'/>
                                <p>{rating.rating}</p>
                            </div>
                            <span className='starBar'>
                                <span className='starBarFill' style={{width:`${rating.numberOfRatings/(reviews.numberOfRatings/100)}%`}}/>
                            </span>
                            <p className='starPercentage'>{rating.numberOfRatings}</p>
                        </div>
                    )
                })}
            </div>
            <span className='lineDividerContainer'>
                <span className='lineDividerLight'/>
            </span>
            <div id='reviewFilterButtons'>
                <span className='reviewFilterButton selected'>All {"("+reviews.numberOfReviews+")"}</span>
                <span className='reviewFilterButton'>Pic Review {"("+reviews.reviews.filter(x => x.images).length+")"}</span>
                <span className='reviewFilterButton'>5 Stars {"("+reviews.ratingBreakdown[0].numberOfRatings+")"}</span>
                <span className='reviewFilterButton'>4 Stars {"("+reviews.ratingBreakdown[1].numberOfRatings+")"}</span>
                <span className='reviewFilterButton'>3 Stars {"("+reviews.ratingBreakdown[2].numberOfRatings+")"}</span>
                <span className='reviewFilterButton'>2 Stars {"("+reviews.ratingBreakdown[3].numberOfRatings+")"}</span>
                <span className='reviewFilterButton'>1 Stars {"("+reviews.ratingBreakdown[4].numberOfRatings+")"}</span>
            </div>
        </div>
        <div id='reviews'>
            <span id='moreReviewsButtonContainer'>
                <p id='moreReviewsButton'>More Reviews</p>
            </span>
            <div className='reviewColumn'>
                {reviews.reviews.map((review, index) => {
                    if(index % 2 === 0) return;
                    return(
                        <div className='review boxed' key={index}>
                            <div className='reviewUpper'>
                                <div className='reviewStarsContainer'>
                                    <div className='reviewStars' style={{width: `${review.rating*20}%`}}>
                                        <img src={Star} alt='star'/>
                                        <img src={Star} alt='star'/>
                                        <img src={Star} alt='star'/>
                                        <img src={Star} alt='star'/>
                                        <img src={Star} alt='star'/>
                                    </div>
                                </div>
                                <p className='reviewDate'>
                                    {new Date(review.date).toLocaleDateString(undefined, { day: 'numeric', month: 'long', year: 'numeric' })}
                                </p>
                            </div>
                            <p className='reviewTitle'>{review.reviewTitle}</p>
                            {review.productDetails && <span className='productDetails'>
                                <p className='productSize'>Size: {review.productDetails.size}</p>
                                <span className='dotDivider' />
                                <p className='productColor'>Color: {review.productDetails.color}</p>
                            </span>}
                            <p className='reviewText'>{review.review}</p>
                            {review.images && <div className='reviewImages'>
                                {review.images.map((image, index) => {
                                    return(
                                        <img src={image} alt='review' key={index}/>
                                    )
                                })}
                            </div>}
                            <span className='likes'>
                                <div className='like'>
                                    <img src={Thumbs} alt='thumbs up'/>
                                    <p>{review.reviewLikes.numberOfLikes}</p>
                                </div>
                                <div className='dislike'>
                                    <img src={Thumbs} alt='thumbs up'/>
                                    <p>{review.reviewLikes.numberOfDislikes}</p>
                                </div>
                            </span>
                        </div>
                    )
                })}
            </div>
            <div className='reviewColumn'>
                {reviews.reviews.map((review, index) => {
                    if(index % 2 !== 0) return;
                    return(
                        <div className='review boxed' key={index}>
                            <div className='reviewUpper'>
                                <div className='reviewStarsContainer'>
                                    <div className='reviewStars' style={{width: `${review.rating*20}%`}}>
                                        <img src={Star} alt='star'/>
                                        <img src={Star} alt='star'/>
                                        <img src={Star} alt='star'/>
                                        <img src={Star} alt='star'/>
                                        <img src={Star} alt='star'/>
                                    </div>
                                </div>
                                <p className='reviewDate'>
                                    {new Date(review.date).toLocaleDateString(undefined, { day: 'numeric', month: 'long', year: 'numeric' })}
                                </p>
                            </div>
                            <p className='reviewTitle'>{review.reviewTitle}</p>
                            {review.productDetails && <span className='productDetails'>
                                <p className='productSize'>Size: {review.productDetails.size}</p>
                                <span className='dotDivider' />
                                <p className='productColor'>Color: {review.productDetails.color}</p>
                            </span>}
                            <p className='reviewText'>{review.review}</p>
                            {review.images && <div className='reviewImages'>
                                {review.images.map((image, index) => {
                                    return(
                                        <img src={image} alt='review' key={index}/>
                                    )
                                })}
                            </div>}
                            <span className='likes'>
                                <div className='like'>
                                    <img src={Thumbs} alt='thumbs up'/>
                                    <p>{review.reviewLikes.numberOfLikes}</p>
                                </div>
                                <div className='dislike'>
                                    <img src={Thumbs} alt='thumbs up'/>
                                    <p>{review.reviewLikes.numberOfDislikes}</p>
                                </div>
                            </span>
                        </div>
                    )
                })}
            </div>
        </div>
    </section>
  )
}

export default ProductReviews
import React from 'react'
import ReviewForm from './ReviewForm'
import ReviewItem from './ReviewItem'
import { useState, useEffect } from 'react';
import ReviewHeader from './ReviewHeader';

function ReviewPage() {

  const [reviews, setReviews] = useState([]);

  useEffect(() => {
    fetch("/reviews")
      .then((r) => r.json())
      .then(setReviews);
  }, []);

  function handleAddReview(addedReview) {
    setReviews((reviews) => [...reviews, addedReview]);
  }

  function handleUpdateReview(updatedReview) {
    setReviews((reviews) =>
      reviews.map((revieww) => {
        return revieww.id === updatedReview.id ? updatedReview : revieww;
      })
    );
  }

  function handleDeleteReview(deletedReview) {
    setReviews((reviews) =>
      reviews.filter((revieww) => revieww.id !== deletedReview.id)
    );
  }
  return (
    <div className='bg-yellow-100'>
      <ReviewHeader />
    
      <div className='flex gap-16 bg-yellow-100'>
      {reviews.map((revieww) => (
        <ReviewItem key={revieww.id}
        revieww={revieww}
        onUpdateReview={handleUpdateReview}
        onDeleteReview={handleDeleteReview} />
        ))}
        </div>

        <div><ReviewForm onAddReview={handleAddReview}/></div>

        
    </div>
  )
}

export default ReviewPage
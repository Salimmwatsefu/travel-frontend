import React from 'react'
import StarRating from './StarRating'
import { AiFillDelete, AiOutlineEdit } from "react-icons/ai";

function ReviewItem({ revieww, onUpdateReview, onDeleteReview }) {
  const { id, image, title, review, name, rating } = revieww;

  function handleUpdateRating(pct) {
    const newRating = pct * 5;
    fetch(`/reviews/${id}`, {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ rating: newRating }),
    })
      .then((r) => r.json())
      .then(onUpdateReview);
  }

  function handleDeleteReview() {
    fetch(`/reviews/${id}`, {
      method: "DELETE",
    }).then((r) => {
      if (r.ok) {
        onDeleteReview(revieww);
      }
    });
  }

  return (
    <section class="bg-yellow-100">
{/*<div class="mx-auto max-w-screen-xl px-4 py-16 sm:px-6 sm:py-24 lg:px-8">
      <div
      class="mt-16 grid grid-cols-1 gap-8 sm:grid-cols-2 sm:gap-16 lg:grid-cols-3 ">

      <div
      class=" ">*/}
      <div
      class=" ">

    

      <div className='bg-white w-96 rounded-2xl my-20'>
        <img
          alt="Woman"
          src={image}
          class="mx-auto h-24 w-24 rounded-full object-cover shadow-xl mt-10"
        />

        <blockquote
          class="-mt-6 flex flex-col justify-between rounded-lg p-12 text-center shadow-xl"
        >
          <p class="text-lg font-bold text-gray-700">{name}</p>
          <p class="mt-1 text-xs font-medium text-gray-500">
            {title}
          </p>
          <p class="mt-4 text-sm text-gray-500">
            {review}
          </p>

          <div>

           Rating:{" "}
          <StarRating percentage={rating / 5} onClick={handleUpdateRating} />
          </div>
          <div className='flex justify-center items-center gap-5'>
          <button
          type="delete"
          class="flex justify-center items-center  rounded-lg py-3 text-lg font-medium text-red-500 "
          onClick={handleDeleteReview}
        >
          <AiFillDelete  />
        </button>
        <button
          type="delete"
          class="flex justify-center items-center  rounded-lg py-3 text-lg font-medium text-green-500 "
        >
          <AiOutlineEdit />
        </button>
        </div>
        </blockquote>
      </div>
      </div>

    
</section>

  )
}

export default ReviewItem
import { useState } from "react";

const initialState = {
  name: "",
  title: "",
  image: "",
  review: "",
  rating: "",
};

function ReviewForm({ onAddReview }) {
  const [formData, setFormData] = useState(initialState)
  const [name, setName] = useState("");
  const [title, setTitle] = useState("");
  const [image, setImage] = useState("");
  const [review, setReview] = useState("");
  const [rating, setRating] = useState("");

  

  function handleSubmit(e) {
    e.preventDefault();
    fetch("/reviews", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({name, title, image, review, rating}),
    })
      .then((r) => r.json())
      .then((newReview) => {
        setFormData(initialState);
        onAddReview(newReview);
      });
  }

  return (
    <div className=" bg-yellow-100 mt-20">

<section class="relative flex flex-wrap lg:h-screen lg:items-center">
  <div class="w-full px-4 py-12 sm:px-6 sm:py-16 lg:w-1/2 lg:px-8 lg:py-24">
    <div class="mx-auto max-w-lg text-center">
      <h1 class="text-2xl font-bold sm:text-3xl">Add a Review!</h1>

      <p class="mt-4 text-gray-500">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Et libero nulla
        eaque error neque ipsa culpa autem, at itaque nostrum!
      </p>
    </div>

    <form action="" class="mx-auto mt-8 mb-0 max-w-md space-y-4" onSubmit={handleSubmit}>
      <div>
        <label for="name" class="sr-only">Name</label>

        <div className="relative">
          <input
            type="text"
            class="w-full rounded-lg border-gray-200 p-4 pr-12 text-sm shadow-sm text-black"
            placeholder="Enter name"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </div>
      </div>

      <div>
        <label for="title" className="sr-only">Title</label>
        <div class="relative">
          <input
            type="text"
            class="w-full rounded-lg border-gray-200 p-4 pr-12 text-sm shadow-sm"
            placeholder="Enter title"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          />

        </div>
      </div>

      <div>
        <label for="image" className="sr-only">Image Url</label>
        <div class="relative">
          <input
            type="text"
            class="w-full rounded-lg border-gray-200 p-4 pr-12 text-sm shadow-sm"
            placeholder="Enter image Url"
            value={image}
            onChange={(e) => setImage(e.target.value)}
          />

        </div>
      </div>

      <div>
        <label for="review" className="sr-only">Review</label>
        <div class="relative">
          <textarea
            class="w-full rounded-lg border-gray-200 p-4 pr-12 text-sm shadow-sm"
            placeholder="Enter Review"
            value={review}
            onChange={(e) => setReview(e.target.value)}
          />

        </div>
      </div>

      <div>
        <label for="rating" className="sr-only">Rating</label>
        <div class="relative">
          <input
            type="number"
            class="w-full rounded-lg border-gray-200 p-4 pr-12 text-sm shadow-sm"
            placeholder="Rating"
            max="5"
            value={rating}
            onChange={(e) => setRating(e.target.value)}
          />

        </div>
      </div>

      <div class="">

        <button
          type="submit"
          class="ml-3  rounded-lg bg-blue-500 px-5 py-3 text-sm font-medium text-white flex items-center justify-between"
        >
          Submit
        </button>
      </div>
    </form>
  </div>

  <div class="relative h-64 w-full sm:h-96 lg:h-full lg:w-1/2">
    <img
      alt="Welcome"
      src="https://images.unsplash.com/photo-1630450202872-e0829c9d6172?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=774&q=80"
      class="absolute inset-0 h-full w-full object-cover"
    />
  </div>
</section>

    </div>
  );
}

export default ReviewForm;
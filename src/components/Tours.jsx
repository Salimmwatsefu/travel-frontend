import React from 'react'
import { useState, useEffect } from 'react';

function Tours() {

  const [myTours, setMyTours] = useState([]);

  const fetchTour = async () => {
    const response = await fetch("/tours");
    const data = await response.json();
    return setMyTours(data);
  }

  useEffect(() => {
    fetchTour();
  },[])

  return (
    <div className='bg-yellow-100'>
        <div className="container mb-24 px-6 mx-auto pt-10">

    <section className="mb-32 text-white bg-amber-500 ">
      
      <div className="px-6 py-12 md:px-12 text-center lg:text-left">
        <div className="container mx-auto">
          <div className=" lg:grid-cols-2 gap-12 flex items-center">
            <div className="mt-12 lg:mt-0">
              <h1 className="text-5xl md:text-6xl xl:text-7xl font-bold tracking-tight mb-12">
                Are you ready <br /><span>for an adventure?</span>
              </h1>
              <p className="text-lg">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima officia consequatur
                adipisci tenetur repudiandae rerum quos.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
    </div>
    {myTours.map((myTour, index) => (
<section>
  <div class="relative mx-auto max-w-screen-xl px-4 bg-white mb-10">
    <div class="grid grid-cols-1 items-start gap-8 md:grid-cols-2 ">
      <div class="grid grid-cols-2 gap-4 md:grid-cols-1">
        <img
          alt="Les Paul"
          src={myTour.image3}
          class=" w-full rounded-xl object-cover"
        />

        <div class="grid grid-cols-2 gap-4 lg:mt-4">
          <img
            alt="Les Paul"
            src={myTour.image2}
            class="aspect-square w-full rounded-xl object-cover"
          />

          <img
            alt="Les Paul"
            src={myTour.image1}
            class="aspect-square w-full rounded-xl object-cover"
          />

          <img
            alt="Les Paul"
            src={myTour.image4}
            class="aspect-square w-full rounded-xl object-cover"
          />

          <img
            alt="Les Paul"
            src={myTour.image5}
            class="aspect-square w-full rounded-xl object-cover"
          />
        </div>
      </div>

      <div class="sticky top-0">
        <strong
          class="rounded-full border border-blue-600 bg-gray-100 px-3 py-0.5 text-xs font-medium tracking-wide text-blue-600"
        >
          Pre Order
        </strong>

        <div class="mt-8 flex justify-between">
          <div class="max-w-[35ch]">
            <h1 class="text-2xl font-bold">
              {myTour.title}
            </h1>

            <p class="mt-0.5 text-sm">Highest Rated Product</p>

            <div class="mt-2 -ml-0.5 flex">
              <svg
                class="h-5 w-5 text-yellow-400"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 20 20"
                fill="currentColor"
              >
                <path
                  d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"
                />
              </svg>

              <svg
                class="h-5 w-5 text-yellow-400"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 20 20"
                fill="currentColor"
              >
                <path
                  d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"
                />
              </svg>

              <svg
                class="h-5 w-5 text-yellow-400"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 20 20"
                fill="currentColor"
              >
                <path
                  d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"
                />
              </svg>

              <svg
                class="h-5 w-5 text-yellow-400"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 20 20"
                fill="currentColor"
              >
                <path
                  d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"
                />
              </svg>

              <svg
                class="h-5 w-5 text-gray-200"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 20 20"
                fill="currentColor"
              >
                <path
                  d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"
                />
              </svg>
            </div>
          </div>

          <p class="text-lg font-bold">${myTour.price}</p>
        </div>

        <details class="group relative mt-4">
          <summary class="block">
            <div>
              <div class="prose max-w-none group-open:hidden">
                <p>
                  {myTour.description1}
                </p>
              </div>

              <span
                class="mt-4 cursor-pointer text-sm font-medium underline group-open:absolute group-open:bottom-0 group-open:left-0 group-open:mt-0"
              >
                Read More
              </span>
            </div>
          </summary>

          <div class="prose max-w-none pb-6">
            <p>
              {myTour.description1}
            </p>

            <p>
              {myTour.description2}
            </p>
          </div>
        </details>

        <form class="mt-8">
          <fieldset>
            <legend class="mb-1 text-sm font-medium">Package</legend>

            <div class="flow-root">
              <div class="-m-0.5 flex flex-wrap">
                <label for="color_tt" class="cursor-pointer p-0.5">
                  <input
                    type="radio"
                    name="color"
                    id="color_tt"
                    class="peer sr-only"
                  />

                  <span
                    class="group inline-block rounded-full border px-3 py-1 text-xs font-medium peer-checked:bg-black peer-checked:text-white"
                  >
                    Normal
                  </span>
                </label>

                <label for="color_fr" class="cursor-pointer p-0.5">
                  <input
                    type="radio"
                    name="color"
                    id="color_fr"
                    class="peer sr-only"
                  />

                  <span
                    class="group inline-block rounded-full border px-3 py-1 text-xs font-medium peer-checked:bg-black peer-checked:text-white"
                  >
                    Semi-Luxury
                  </span>
                </label>

                <label for="color_cb" class="cursor-pointer p-0.5">
                  <input
                    type="radio"
                    name="color"
                    id="color_cb"
                    class="peer sr-only"
                  />

                  <span
                    class="group inline-block rounded-full border px-3 py-1 text-xs font-medium peer-checked:bg-black peer-checked:text-white"
                  >
                    Luxury
                  </span>
                </label>
              </div>
            </div>
          </fieldset>

          

          <div class="mt-20 flex">
            <div>
              <label for="quantity" class="sr-only">Qty</label>

              <input
                type="number"
                id="quantity"
                min="1"
                value="1"
                class="w-12 rounded border-gray-200 py-3 text-center text-xs [-moz-appearance:_textfield] [&::-webkit-outer-spin-button]:m-0 [&::-webkit-outer-spin-button]:appearance-none [&::-webkit-inner-spin-button]:m-0 [&::-webkit-inner-spin-button]:appearance-none"
              />
            </div>

          
            <button
              type="submit"
              class="ml-3 block rounded bg-green-600 px-5 py-3 text-xs font-medium text-white hover:bg-green-500"
            
            >
               <a href='/checkout'>Add to Cart</a>
              
            </button>
          
          </div>
        </form>
      </div>
    </div>
  </div>
</section>
    ))}





    </div>
  )
}

export default Tours
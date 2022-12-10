import React from 'react'

function Checkout() {
  return (
    <div>
<section>
  <h1 class="sr-only">Checkout</h1>

  <div class="grid grid-cols-1 mx-auto max-w-screen-2xl md:grid-cols-2">
    <div class="py-12 bg-gray-50 md:py-24">
      <div class="max-w-lg px-4 mx-auto space-y-8 lg:px-8">
        <div class="flex items-center">
          <span class="w-10 h-10 bg-amber-500 rounded-full"></span>

          <h2 class="ml-4 font-medium text-gray-900">Welcome To Kenya</h2>
        </div>

        <div>
          <p class="text-2xl font-medium tracking-tight text-gray-900">
            Hakuna Matata
          </p>

          <p class="mt-1 text-sm text-gray-600">After Filling this you will receive an Email with the package Quotation and get linked with one of our agents who will take it from there</p>
        </div>

        <div>
          <div class="flow-root">
            <ul class="-my-4 divide-y divide-gray-100">
              <li class="flex items-center py-4">
                <img
                  src="https://media.istockphoto.com/id/1273273269/photo/fluttering-flag-of-kenya-shine-metallic-texture-3d-illustration.jpg?b=1&s=170667a&w=0&k=20&c=17FrOp_TtNGUjOCJBEr12rtOFsCVe_J8EVQagSXh4Kw="
                  alt=""
                  class="object-cover w-full h-72 rounded"
                />
              </li>

            </ul>
          </div>
        </div>
      </div>
    </div>

    <div class="py-12 bg-white md:py-24">
      <div class="max-w-lg px-4 mx-auto lg:px-8">
        <form class="grid grid-cols-6 gap-4">
          <div class="col-span-3">
            <label
              for="FirstName"
              class="block text-xs font-medium text-gray-700"
            >
              First Name
            </label>

            <input
              type="text"
              id="FirstName"
              class="w-full mt-1 border-gray-200 rounded-md shadow-sm sm:text-sm"
            />
          </div>

          <div class="col-span-3">
            <label
              for="LastName"
              class="block text-xs font-medium text-gray-700"
            >
              Last Name
            </label>

            <input
              type="text"
              id="LastName"
              class="w-full mt-1 border-gray-200 rounded-md shadow-sm sm:text-sm"
            />
          </div>

          <div class="col-span-6">
            <label for="Email" class="block text-xs font-medium text-gray-700">
              Email
            </label>

            <input
              type="email"
              id="Email"
              class="w-full mt-1 border-gray-200 rounded-md shadow-sm sm:text-sm"
            />
          </div>

          <div class="col-span-6">
            <label for="Phone" class="block text-xs font-medium text-gray-700">
              Phone
            </label>

            <input
              type="tel"
              id="Phone"
              class="w-full mt-1 border-gray-200 rounded-md shadow-sm sm:text-sm"
            />
          </div>

          <fieldset class="col-span-6">
            <legend class="block text-sm font-medium text-gray-700">
              Card Details
            </legend>

            <div class="mt-1 -space-y-px bg-white rounded-md shadow-sm">
              <div>
                <label for="CardNumber" class="sr-only"> Card Number </label>

                <input
                  type="text"
                  id="CardNumber"
                  placeholder="Card Number"
                  class="relative w-full mt-1 border-gray-200 rounded-t-md focus:z-10 sm:text-sm"
                />
              </div>

              <div class="flex -space-x-px">
                <div class="flex-1">
                  <label for="CardExpiry" class="sr-only"> Card Expiry </label>

                  <input
                    type="text"
                    id="CardExpiry"
                    placeholder="Expiry Date"
                    class="relative w-full border-gray-200 rounded-bl-md focus:z-10 sm:text-sm"
                  />
                </div>

                <div class="flex-1">
                  <label for="CardCVC" class="sr-only"> Card CVC </label>

                  <input
                    type="text"
                    id="CardCVC"
                    placeholder="CVC"
                    class="relative w-full border-gray-200 rounded-br-md focus:z-10 sm:text-sm"
                  />
                </div>
              </div>
            </div>
          </fieldset>

          <fieldset class="col-span-6">
            <legend class="block text-sm font-medium text-gray-700">
              Billing Address
            </legend>

            <div class="mt-1 -space-y-px bg-white rounded-md shadow-sm">
              <div>
                <label for="Country" class="sr-only">Country</label>

                <select
                  id="Country"
                  class="relative w-full border-gray-200 rounded-t-md focus:z-10 sm:text-sm"
                >
                  <option>Europe</option>
                  <option>Africa</option>
                  <option>North America</option>
                  <option>South America</option>
                  <option>Asia</option>
                  <option>Kenya</option>
                </select>
              </div>

              <div>
                <label class="sr-only" for="PostalCode"> ZIP/Post Code </label>

                <input
                  type="text"
                  id="PostalCode"
                  placeholder="ZIP/Post Code"
                  class="relative w-full border-gray-200 rounded-b-md focus:z-10 sm:text-sm"
                />
              </div>
            </div>
          </fieldset>

          <div class="col-span-6">
            <button
              class="block w-full rounded-md bg-black p-2.5 text-sm text-white transition hover:shadow-lg"
            >
              Get Quote
            </button>
          </div>
        </form>
      </div>
    </div>
  </div>
</section>

    </div>
  )
}

export default Checkout
import React from 'react'

function Cards() {
  return (
    <div className='bg-yellow-100 '>

        <p className='pt-12 ml-16 text-3xl font-bold text-yellow-800'>Top Destinations</p>

        <div className='mx-16 mt-7 space-x-16 flex'>

    {/*card 1 */}
    <div class="flex pt-5 pb-10">
       <div class="rounded-lg shadow-lg bg-white w-60 ">
       <a href="#!" data-mdb-ripple="true" data-mdb-ripple-color="light">
         <img class="rounded-t-lg h-80" src="https://images.unsplash.com/photo-1483683804023-6ccdb62f86ef?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=435&q=80" alt=""/>
       </a>
    <div class="p-6 h-16 flex">
      <h5 class="text-gray-900 text-sm font-medium ">Diani, Kwale</h5>
      
      <button type="button" class=" inline-block px-6 h-8 ml-10 bg-orange-500 text-white font-medium text-xs leading-tight rounded shadow-md hover:bg-orange-700 hover:shadow-lg  focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out">See</button>
    </div>
  </div>
</div>

    {/*card 2 */}
    <div class="flex ml-7 pt-5 pb-10">
       <div class="rounded-lg shadow-lg bg-white w-60 ">
       <a href="#!" data-mdb-ripple="true" data-mdb-ripple-color="light">
         <img class="rounded-t-lg h-80 w-80" src="https://images.unsplash.com/photo-1505148230895-d9a785a555fa?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1yZWxhdGVkfDF8fHxlbnwwfHx8fA%3D%3D&auto=format&fit=crop&w=500&q=60" alt=""/>
       </a>
    <div class="p-6 h-16 flex">
      <h5 class="text-gray-900 text-sm font-medium ">Maasai Mara</h5>
      
      <button type="button" class=" inline-block px-6 h-8 ml-10 bg-orange-500 text-white font-medium text-xs leading-tight rounded shadow-md hover:bg-orange-700 hover:shadow-lg focus:bg-orange-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out">See</button>
    </div>
  </div>
</div>

    {/*card 3 */}
    <div class="flex ml-7 pt-5 pb-10">
       <div class="rounded-lg shadow-lg bg-white w-60 ">
       <a href="#!" data-mdb-ripple="true" data-mdb-ripple-color="light">
         <img class="rounded-t-lg h-80 w-80" src="https://images.unsplash.com/photo-1539498508910-091b5e859b1d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=425&q=80" alt=""/>
       </a>
    <div class="p-6 h-16 flex">
      <h5 class="text-gray-900 text-sm font-medium ">Wasini Island</h5>
      
      <button type="button" class=" inline-block px-6 h-8 ml-9 bg-orange-500 text-white font-medium text-xs leading-tight rounded shadow-md hover:bg-orange-700 hover:shadow-lg focus:bg-orange-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out">See</button>
    </div>
  </div>
</div>

   {/*card 4 */}
   <div class="flex ml-7 pt-5 pb-10 ">
       <div class="rounded-lg shadow-lg bg-white w-60 ">
       <a href="#!" data-mdb-ripple="true" data-mdb-ripple-color="light">
         <img class="rounded-t-lg h-80 w-80" src="https://images.unsplash.com/photo-1562080411-a1afc4016a64?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=423&q=80" alt=""/>
       </a>
    <div class="p-6 h-16 flex">
      <h5 class="text-gray-900 text-sm font-medium ">The Tsavo</h5>
      
      <button type="button" class=" inline-block px-6 h-8 ml-10 bg-orange-500 text-white font-medium text-xs leading-tight rounded shadow-md hover:bg-orange-700 hover:shadow-lg focus:bg-orange-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out">See</button>
    </div>
  </div>
</div>

</div>

    </div>
  )
}

export default Cards
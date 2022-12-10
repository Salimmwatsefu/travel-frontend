import React from 'react'

function Destinations() {
  return (
    <div className=''>
        <div className=''>
            <div className=' text-normal ml-32 pt-10 font-medium absolute '>
            <h1 className='text-4xl text-yellow-700'>Destinations</h1>
            <p className=' pt-10 hover:text-blue-700'><a>Beaches</a></p>
            <p className=' py-3 hover:text-blue-700'><a >Entertainment Parks</a></p>
            <p className='hover:text-blue-700'><a>Wildlife Attractions</a></p>
            <p className='py-3 hover:text-blue-700'><a>Museums and Art Galleries</a></p>
            <p className='hover:text-blue-700'><a>Heritage Attractions</a></p>
            <p className='py-3 hover:text-blue-700'><a>Unique Built Attractions</a></p>
            </div>
            <div className='  ml-96 pl-20  '>
                <div className='text-normal pt-10 pb-1 font-medium flex space-x-20 border-b-2 border-black'>
                    
                    <h1 className='hover:text-blue-700 hover:underline underline-offset-8 decoration-2'>Kwale</h1>
                    <h1 className='hover:text-blue-700 hover:underline underline-offset-8 decoration-2'>Mombasa</h1>
                    <h1 className='hover:text-blue-700 hover:underline underline-offset-8 decoration-2'>Nairobi</h1>
                    <h1 className='hover:text-blue-700 hover:underline underline-offset-8 decoration-2'>Kilifi</h1>
                    <h1 className='hover:text-blue-700 hover:underline underline-offset-8 decoration-2'>Kisumu</h1>
                    <h1 className='hover:text-blue-700 hover:underline underline-offset-8 decoration-2'>Nanyuki</h1>
                </div>
                <h1 className='font-bold pt-5'>Most Recommended Locations</h1>

                <div className='pt-5  absolute flex flex-wrap gap-10 '>
                 <div className=''>
                  <img className='w-64' alt='mt Kenya' src='https://images.unsplash.com/photo-1589182373726-e4f658ab50f0?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8bW91bnQlMjBldmVyZXN0fGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60'/>
                  <h1 className='pt-6 text-center text-lg hover:text-blue-600'>Mt Kenya</h1>
                  <p className='pt-3 text-center text-gray-700 text-sm'>Starting at $36,400 *</p>
                  <p className='pt-3 text-center text-blue-700'>More Details </p>
                 </div>

                 <div className=''>
                  <img className='w-64' alt='Ol Pejeta' src='https://images.unsplash.com/photo-1598403531581-5c4940efd249?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NjF8fGtlbnlhfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60'/>
                  <h1 className='pt-6 text-center text-lg hover:text-blue-600'>Ol Pejeta</h1>
                  <p className='pt-3 text-center text-gray-700 text-sm'>Starting at $36,400 *</p>
                  <p className='pt-3 text-center text-blue-700'>More Details </p>
                 </div>

                 <div className=' '>
                  <img className='w-64' alt='Lake Naivasha' src='https://images.unsplash.com/photo-1634886046465-0f53b1c38375?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTA1fHxmbGFtaW5nb3N8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60'/>
                  <h1 className='pt-6 text-center text-lg hover:text-blue-600'>Lake Nakuru</h1>
                  <p className='pt-3 text-center text-gray-700 text-sm'>Starting at $36,400 *</p>
                  <p className='pt-3 text-center text-blue-700'>More Details </p>
                 </div>

                 <div className=''>
                  <img className='w-64' alt='Lamu' src='https://images.unsplash.com/photo-1586347378036-7a8c24975a61?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTV8fHphbnppYmFyfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60' />
                  <h1 className='pt-6 text-center text-lg hover:text-blue-600'>Lamu Island</h1>
                  <p className='pt-3 text-center text-gray-700 text-sm'>Starting at $36,400 *</p>
                  <p className='pt-3 text-center text-blue-700'>More Details </p>
                 </div>

                 <div className=' '>
                  <img className='w-64' alt="Samburu" src='https://images.unsplash.com/photo-1605302596019-c743c91e78ae?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NDl8fHRzYXZvfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60'/>
                  <h1 className='pt-6 text-center text-lg hover:text-blue-600'>Samburu</h1>
                  <p className='pt-3 text-center text-gray-700 text-sm'>Starting at $36,400 *</p>
                  <p className='pt-3 text-center text-blue-700'>More Details </p>
                 </div>

                 <div className=' '>
                  <img className='w-64' alt="Mara" src='https://images.unsplash.com/photo-1577215027900-e98a9cdfc60d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8ODl8fG1hc2FpJTIwbWFyYSUyMG5hdGlvbmFsJTIwcmVzZXJ2ZXxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60' />
                  <h1 className='pt-6 text-center text-lg hover:text-blue-600'>Masai Mara</h1>
                  <p className='pt-3 text-center text-gray-700 text-sm'>Starting at $36,400 *</p>
                  <p className='pt-3 text-center text-blue-700'>More Details </p>
                 </div>

                 <div className='rounded-lg'>
                  <img className='w-64 rounded-lg' alt="Tsavo" src='https://images.unsplash.com/photo-1562080411-a1afc4016a64?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=423&q=80'/>
                  <h1 className='pt-6 text-center text-lg hover:text-blue-600'>Tsavo Park</h1>
                  <p className='pt-3 text-center text-gray-700 text-sm'>Starting at $36,400 *</p>
                  <p className='pt-3 text-center text-blue-700'>More Details </p>
                 </div>
                </div>
            
            </div>
        </div>
    </div>
  )
}

export default Destinations
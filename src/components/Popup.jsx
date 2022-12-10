import React from 'react'

function Popup() {
  return (
    <div className='flex justify-center items-center'>
        <div className="rounded-3xl shadow-2xl h-96 mt-20">
        <div className="p-8 text-center sm:p-12">
        <p className="text-sm font-semibold uppercase tracking-widest text-amber-500">
      Your will get an email shortly
        </p>

    <h2 className="mt-6 text-3xl font-bold">
      Thanks for your purchase, we're getting it ready!
    </h2>

    <a
      className="mt-20 inline-block w-60 rounded-full bg-amber-600 py-4 text-sm font-bold text-white shadow-xl"
      href="/"
    >
      Press Here to Continue
    </a>
  </div>
</div>

    </div>
  )
}

export default Popup
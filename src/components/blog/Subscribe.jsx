import React from 'react'

export default function Subscribe() {
    return (
        <div className="grid grid-cols-1 m-5">
            <div className="col-span">
                <div className="relative w-full h-full p-14 bg-[#F5F5F5] rounded-lg">
                    <div className="grid grid-cols-3">
                        <div className="col-span-1 space-y-4">
                            <p className='text-sm font-light'>GET FIRST UPDATE</p>
                            <p className='text-3xl font-semibold'>Get the new by front by <span className='text-red-500'>subscribe</span> our latest updates</p>
                        </div>
                        <div className="col-span-2 flex justify-end items-center">
                            <div className='h-10 space-x-3'>
                                <input type="text" placeholder='Your email' className='w-96 h-full p-4 bg-white border-gray-400 rounded-lg' />
                                <button className='h-full bg-red-600 text-white rounded-lg px-3 py-1' >Subscribe</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

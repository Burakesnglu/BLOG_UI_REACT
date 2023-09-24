import React from 'react'

export default function VerticalCard() {
    return (
        <div className='space-y-1'>
            <div className="bg-gray-200 w-full h-60 rounded-lg"></div>
            <p className='text-gray-500 font-medium text-xs'> Author • Time </p>
            <p className='font-semibold text-xl'> Title </p>
            <p className='text-gray-500 font-medium text-sm'> Summary </p>
            <p className='text-gray-500 font-medium text-xs'> <span className='text-red-500'> Tag </span> • Reading Time </p>
        </div>
    )
}

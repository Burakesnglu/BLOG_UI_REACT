import React from 'react'
import VerticalCard from '../shared/VerticalCard'

export default function EditorsPick() {
    return (
        <>

            <div className="grid grid-cols-2 m-5 mt-10 h-full">
                <div className="col-span">
                    <div className='font-semibold text-3xl'>
                        <p>Editor's Pick</p>
                    </div>
                </div>
                <div className="col-span flex justify-end items-center">
                    <div className='font-bold text-base text-red-500'>
                        <span>See all</span>
                    </div>
                </div>
            </div>

            <div className="grid grid-cols-1 m-5">
                <div className="col-span">
                    <div className="relative w-full h-96 bg-red-200 rounded-lg">
                        <div className='absolute space-y-1 m-10 bottom-0'>
                            <p className='text-gray-500 font-medium text-xs'> Author • Time </p>
                            <p className='font-semibold text-xl'> Title Lorem, ipsum dolor sit amet consectetur adipisicing elit </p>
                            <p className='text-gray-500 font-medium text-sm'> Summary Lorem, ipsum dolor sit amet consectetur adipisicing elit. Velit facilis nostrum quos tempore sequi eos iusto eius quidem enim odio laboriosam beatae commodi aperiam, repudiandae nam! Dicta ratione magni exercitationem?</p>
                            <p className='text-gray-500 font-medium text-xs'> Tag • Reading Time </p>
                        </div>
                    </div>
                </div>
            </div>

            <div className="grid grid-cols-4 m-5 gap-6 h-full min-h-[20rem]">
                <div className="col-span">
                    <VerticalCard />
                </div>
                <div className="col-span">
                    <VerticalCard />
                </div>
                <div className="col-span">
                    <VerticalCard />
                </div>
                <div className="col-span">
                    <VerticalCard />
                </div>
            </div>
        </>
    )
}

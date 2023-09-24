import React from 'react'
import VerticalCard from '../shared/VerticalCard'

export default function LatestNews() {
    return (

        <>
            <div className="grid grid-cols-2 m-5 mt-10 h-full">
                <div className="col-span">
                    <div className='font-semibold text-3xl'>
                        <p>Latest News</p>
                    </div>
                </div>
                <div className="col-span flex justify-end items-center">
                    <div className='font-bold text-base text-red-500'>
                        <span>See all</span>
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

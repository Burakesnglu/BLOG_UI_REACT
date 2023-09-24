import React from 'react'
import VerticalCard from '../shared/VerticalCard'

export default function CategoryBased() {
    return (

        <div className="grid grid-cols-2">
            <div className="col-span">
                <div className="grid grid-cols-2 m-5 mt-10">
                    <div className="col-span">
                        <div className='font-semibold text-3xl'>
                            <p>Business</p>
                        </div>
                    </div>
                    <div className="col-span flex justify-end items-center">
                        <div className='font-bold text-base text-red-500'>
                            <span>See all</span>
                        </div>
                    </div>
                </div>

                <div className="grid grid-cols-2 m-5 gap-6 h-full min-h-[20rem]">
                    <div className="col-span">
                        <VerticalCard />
                    </div>
                    <div className="col-span">
                        <VerticalCard />
                    </div>
                </div>
            </div>
            <div className="col-span">
                <div className="grid grid-cols-2 m-5 mt-10">
                    <div className="col-span">
                        <div className='font-semibold text-3xl'>
                            <p>Sport News</p>
                        </div>
                    </div>
                    <div className="col-span flex justify-end items-center">
                        <div className='font-bold text-base text-red-500'>
                            <span>See all</span>
                        </div>
                    </div>
                </div>
                <div className="grid grid-cols-2 m-5 gap-6 h-full min-h-[20rem]">
                    <div className="col-span">
                        <VerticalCard />
                    </div>
                    <div className="col-span">
                        <VerticalCard />
                    </div>
                </div>
            </div>
        </div>


    )
}

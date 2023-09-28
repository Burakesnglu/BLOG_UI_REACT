import React from 'react'
import UserMenu from '../../components/shared/UserMenu'
import { Link } from "react-router-dom";

export default function TopBar() {

    return (
        <div className='grid grid-cols-3 gap-4 w-full h-20 px-8 bg-white text-black top-0 sticky z-10'>
            <div className='col-span-2 gap-4 flex justify-start items-center'>
                <span className='text-red-600 text-xl font-bold'>LOGO</span>
                <span>|</span>
                <span>MENU</span>
            </div>
            <div className='col-span flex justify-end items-center'>
                <Link to='create-blog'>
                    <button className='px-4 py-1 text-xs text-gray-700 font-semibold rounded-md border border-gray-300 transition-all ease-in-out hover:bg-gray-100' >Write</button>
                </Link>
                <span>
                    <UserMenu />
                </span>
            </div>
        </div>

    )
}

import React from 'react'

export default function Header() {
    return (

        <div className="grid grid-cols-2 gap-8 m-5 font-semibold min-h-[25rem] h-full ">
            <div className="col-span">
                <div className='w-full h-full bg-blue-300 rounded-lg'>

                </div>
            </div>

            <div className="col-span space-y-6 p-2">
                <div> Author | Time </div>
                <div> Title Lorem ipsum dolor sit amet, consectetur adipisicing elit.</div>
                <div> Summary Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatum rerum at quisquam! Optio cumque dolore error commodi! Accusamus itaque, eligendi maiores doloremque voluptate sit impedit esse iure sapiente illum magni? </div>
                <div> Tag | Reading Time </div>
            </div>
        </div>

    )
}

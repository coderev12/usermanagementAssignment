// import { Button } from '@react-email/button'
"use client"
import { redirect } from 'next/dist/server/api-utils'
import React from 'react'
import { useRouter } from 'next/navigation'
function dashboard() {
    const route = useRouter()
    return (

        <div>
            <h1> Hey!! You are a Administrator of this company</h1>
            <h2> To manage the user click on the following buttons</h2>
            <div className="space-y-3">
                <button
                    type="button"
                    className=" items-center justify-center rounded-md border border-gray-400 bg-white px-3.5 py-2.5 font-semibold text-gray-700 transition-all duration-200 hover:bg-gray-100 hover:text-black focus:bg-gray-100 focus:text-black focus:outline-none"
                    onClick={() => { route.replace("/register") }}
                >
                    <span className="mr-2 inline-block">

                    </span>
                    Register any user
                </button>
            </div>
            <button
                type="button"
                onClick={() => { route.replace("/administrator/deleteTenant") }}
                className=" items-center justify-center rounded-md border border-gray-400 bg-white px-3.5 py-2.5 font-semibold text-gray-700 transition-all duration-200 hover:bg-gray-100 hover:text-black focus:bg-gray-100 focus:text-black focus:outline-none"
            >
                <span className="mr-2 inline-block">

                </span>
                Delete any new User associated with a particular organisation
            </button>
            <button>

            </button>
            {/* <Button /> */}
        </div >
    )
}

export default dashboard
import React from 'react'
import Image from 'next/image'
import { useRouter } from 'next/router'

const NotFound = () => {

    const router = useRouter()

    return (
        <div className="flex items-center justify-center flex-col pt-10">
            <div className="relative w-80 h-80">
                <Image src="/images/error-page.jpg" layout="fill" objectFit="contain"/>
            </div>
            <button 
                onClick={() => router.push('/')}
                className="py-2 text-sm px-5 bg-blue-500 cursor-pointer rounded-md text-white">
                Back to Homepage
            </button>
        </div>
    )
}

export default NotFound

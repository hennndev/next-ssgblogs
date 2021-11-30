import React from 'react'
import Link from 'next/link'

const Header = () => {
    return (
        <div className="py-3 px-5">
            <div className="container flex items-center justify-between text-gray-700">
                <Link href="/">
                    <a className="text-2xl">Lindsay</a>
                </Link>
                <nav>
                    <ul className="flex items-center space-x-3">
                        <Link href="/">
                            <a className="text-md">Homepage</a>
                        </Link>
                        <Link href="/contact">
                            <a className="text-md">Contact</a>
                        </Link>
                    </ul>
                </nav>
                <button className="bg-blue-500 py-2 px-5 text-sm rounded-md text-white cursor-pointer hidden md:block">Login</button>
            </div>  
        </div>
    )
}

export default Header

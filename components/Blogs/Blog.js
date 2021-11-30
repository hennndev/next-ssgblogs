import React from 'react'
import Image from 'next/image'


const Blog = ({blog, handleRoute}) => {
    return (
        <div className="min-h-[400px] shadow-md rounded-md overflow-hidden flex flex-col cursor-pointer" onClick={handleRoute}>
            <div className="relative h-[250px] w-full">
                <Image layout="fill" src={blog.imageBlog} alt={blog.title} objectFit="cover"/>
            </div>
            <div className="p-2 flex-grow flex flex-col justify-between">
                <div>
                    <h1 className="text-xl font-semibold">{blog.title}</h1>
                    <p className="text-sm text-gray-500">
                        {blog.description.split(' ').slice(0, 15).join(' ')}...
                    </p>
                </div>

                <div className="flex items-center justify-between mt-5">
                    <div className="flex items-center space-x-3">
                        <div className="relative rounded-full h-6 w-6">
                            <Image src={blog.imgProfile} layout="fill" objectFit="cover" className="rounded-full"/>
                        </div>
                        <p className="text-gray-600 text-sm">{blog.author}</p>
                    </div>
                    <p className="text-sm text-gray-500">{blog.category}</p>
                </div>	
            </div>
        </div>
    )
}

export default Blog

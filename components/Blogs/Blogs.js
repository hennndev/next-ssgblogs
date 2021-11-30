import React from 'react'
import Blog from './Blog'
import { useRouter } from 'next/router'

const Blogs = ({blogs}) => {
    
    const router = useRouter()

    return (
        <div className="grid grid-cols-cards gap-5">
            {blogs.map(blog => (
                <Blog key={blog.id} blog={blog} handleRoute={() => router.push(`/${blog.id}`)}/>
            ))}
        </div>
    )
}

export default Blogs

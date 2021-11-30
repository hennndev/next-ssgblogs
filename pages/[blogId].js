import React from 'react'
import Image from 'next/image'
import Loader from '../components/UI/Loader'
import { useRouter } from 'next/router'

const BlogDetail = ({blog}) => {

    const router = useRouter()

    return (
        <div className="container px-5 py-10">
            {router.isFallback ? (
                <div className="mt-36">
                    <Loader/>
                </div>
            ) : (
                <>
                    <div className="w-full h-[200px]  sm:h-[400px] relative">
                        <Image src={blog[0]?.imageBlog} layout="fill" objectFit="cover"/>
                            
                    </div>
                    <h1 className="mt-5 font-medium text-3xl text-center">{blog[0]?.title}</h1>
                    <p className="text-center text-sm text-gray-500 mt-2">Published on {new Date().toLocaleDateString()}</p>
                    <p className="mt-10 text-gray-600">{blog[0]?.description}</p>
                </>
            )}
        </div>
    )

    
}


export const getStaticPaths = async() => {
    const res = await fetch('http://localhost:4000/blogs')
    const blogs = await res.json()

    const paths = blogs.map(blog => ({
        params: { blogId: blog.id }
    }))

    return {
        paths,
        fallback: true
    }
}   


export const getStaticProps = async({params}) => {

    const res = await fetch(`http://localhost:4000/blogs`)
    const data = await res.json()
    const blog = data.filter(data => data.id === params.blogId)
    
    if (blog.length < 1) {
        return {
          redirect: {
            destination: '/404',
            permanent: false,
          },
        }
      }
    

    return {
        props: { blog },
        revalidate : 60,
    }
}

export default BlogDetail

import React from 'react'

const BlogCategories = ({isCty, setIsCty, categories}) => {
    return (
        <div className="flex overflow-x-scroll whitespace-nowrap scrollbar-hide mb-5 space-x-3">
            <p className={`py-2 px-4 cursor-pointer border ${isCty === 'all' && 'bg-blue-500 text-white'} border-blue-500 rounded-md text-sm hover:bg-blue-500 hover:text-white`} onClick={() => setIsCty('all')}>
                All Category
            </p>
            {[...new Set(categories)].map(cty => (
               <p className={`py-2 px-4 cursor-pointer border ${isCty === cty && 'bg-blue-500 text-white'} border-blue-500 rounded-md text-sm hover:bg-blue-500 hover:text-white`} key={cty} onClick={() => setIsCty(cty)}>
                   {cty.charAt(0).toUpperCase() + cty.slice(1)}
                </p>
            ))}
        </div>
    )
}

export default BlogCategories

import { SearchIcon } from 'lucide-react'
import React from 'react'

function SearchSection({ onSearchInput }: any) {
    return (
        <div className=' md:m-4 p-4 md:p-10 bg-gradient-to-br from-primary to-secondary flex flex-col justify-center text-center items-center gap-4'>
            <h2 className=" font-bold text-3xl text-white">Browse All Templates</h2>
            <div className=" flex gap-2 items-center p-2 border rounded-md bg-white w-[70%] md:w-[40%]">
                <SearchIcon className=' text-primary' size={20} />
                <input type="text" placeholder='Search' className=' w-full outline-none bg-transparent'
                    onChange={(event) => onSearchInput(event.target.value)} />
            </div>
            <p className=' text-sm md:text-base md:max-w-3xl text-secondary-foreground opacity-65'>Explore thousands of beautiful free templates. With Canva's drag and drop feature, you can customize your design for any occasion in just a few clicks.</p>
        </div>
    )
}

export default SearchSection
import React from 'react'

const Hamburger = () => {
    return (
        <div className="group peer">

            <div className="relative top-0 w-8 rounded-full h-1 bg-zinc-200 group-open:rotate-45 group-open:top-2 transition-transform ease-in-out"></div>

            <div className="mt-1 w-8 rounded-full h-1 bg-zinc-200 opacity-100 group-open:opacity-0 transition-opacity ease-in-out"></div>

            <div className="relative top-0 mt-1 w-8 rounded-full h-1 bg-zinc-200 group-open:-rotate-45 group-open:-top-2 transition-transform ease-in-out"></div>
            
        </div>
    )
}

export default Hamburger
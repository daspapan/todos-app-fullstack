import Image from 'next/image'
import React from 'react'

import bg from '../../../public/hero.jpg';

const HeroComponent = () => {
    return (
        
        <div style={{backgroundImage:`url(${bg.src})`}}
            className="flex flex-col items-center justify-center h-[calc(100vh-200px)] min-h-[400px] bg-cover bg-center bg-fixed">

            <div className="bg-white/30 py-2 px-4 rounded-xl text-center backdrop-blur-md">
                <div className="relative">

                    <Image src="/logo.png" alt="Logo" width="175" height="175" />

                    <div className="items-center flex justify-center mt-[-70px] mb-5">
                        <div 
                            className="flex h-14 w-14 items-center justify-center gap-1 rounded-full bg-pink-500">
                            <div className="w-1 h-2 rounded-full bg-pink-300 animate-wavey"></div>
                            <div className="w-1 h-3 rounded-full bg-pink-200 animate-wavey animation-delay-100"></div>
                            <div className="w-1 h-4 rounded-full bg-pink-100 animate-wavey animation-delay-300"></div>
                            <div className="w-1 h-3 rounded-full bg-pink-200 animate-wavey animation-delay-400"></div>
                            <div className="w-1 h-2 rounded-full bg-pink-300 animate-wavey animation-delay-500"></div>
                        </div>
                    </div>
                </div>

                <div className="text-3xl font-bold">
                    Todos:<span className="text-sky-900">App</span>
                </div>

            </div>

            <div className="font-bold mt-3 text-bold">
                Better complete a small task well.
            </div>

            <div className="flex mt-3 gap-2">

            <input type="text" placeholder="Task" className="rounded-sm border-white/40 bg-white/30 backdrop-blur-md p-2 font-bold text-sky-900 placeholder-zinc-500 caret-pink-500 outline-pink-500"/>

            <button className="cursor-pointer rounded-sm bg-pink-500 py-2 px-4 font-bold transition-colors ease-in-out hover:bg-sky-900 hover:shadow-lg">Add New Task</button>

            </div>

        </div>
     
    )
}

export default HeroComponent
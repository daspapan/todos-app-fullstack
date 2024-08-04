import React from 'react'

const MenuMobileItems = () => {
    return (
        <div className="peer-open:block hidden absolute w-full left-0 top-[62px] bg-gradient-to-r from-rose-500 to-pink-500">

            <div className="relative flex h-full cursor-pointer items-center justify-center p-4 font-bold text-pink-50 transition-colors hover:bg-white/10 hover:text-zinc-200 ">
                <span>Home</span>
            </div>

            <div className="relative flex h-full cursor-pointer items-center justify-center p-4 font-bold text-pink-50 transition-colors hover:bg-white/10 hover:text-zinc-200 ">
                <span>Lineup</span>
            </div>

            <div id="ticket-menu-item" 
            className="group relative h-full cursor-pointer text-pink-50 transition-colors hover:bg-white/10 hover:text-zinc-200 ">

                <div className="p-4 text-center font-bold">Tickets</div>

                <div className="hidden group-open:block">

                    <div className="text-center p-4 relative text-pink-200 hover:text-zinc-200 hover:bg-white/5 transition-colors ease-in-out">
                        <span>
                            Single Day ticket
                        </span>
                    </div>

                    <div className="text-center p-4 relative text-pink-200 hover:text-zinc-200 hover:bg-white/5 transition-colors ease-in-out">
                        <span>
                            7 Day ticket
                        </span>
                    </div>
                </div>

            </div>

            <div className="relative flex h-full cursor-pointer items-center justify-center p-4 font-bold text-pink-50 transition-colors hover:bg-white/10 hover:text-zinc-200 ">
                <span>Support</span>
            </div>

        </div>
    )
}

export default MenuMobileItems
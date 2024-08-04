import React from 'react'
import Hamburger from './Hamburger'
import MenuMobileItems from './MenuMobileItems'

const MenuMobile = () => {
    return (

        <div className="md:hidden block my-auto ml-auto pr-4 cursor-pointer">

            {/* Hamburger STARTS */}
            <Hamburger />
            
            {/* Mobile Menu Section Starts */}
            <MenuMobileItems />

        </div>
    )
}

export default MenuMobile
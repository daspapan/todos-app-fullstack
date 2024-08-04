import React from 'react'
import MenuDesktopItem from './MenuDesktopItem'



const MenuDesktopItems = ({menuItems}:{menuItems:{label:string,href:string}[]}) => {
    return (
        <div className="md:flex hidden flex-1 text-center justify-end">

            {menuItems?.map((item, idx) => (
                <MenuDesktopItem key={idx} menuName={item.label} href={item.href}/>
            ))}

        </div>
    )
}

export default MenuDesktopItems
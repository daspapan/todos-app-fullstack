import Link from 'next/link'
import React from 'react'

const MenuDesktopItem = ({menuName, href}:{menuName:string, href:string}) => {
    return (
        <div className="menu-item">
            <Link href={href}>
                <span>{menuName}</span>
            </Link>
        </div>
    )
}

export default MenuDesktopItem
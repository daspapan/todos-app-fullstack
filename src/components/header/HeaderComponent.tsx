"use client"

import React, { useState } from 'react'
import NavBarComponent from './NavBar'
import HeroComponent from './HeroComponent'
import { usePathname } from 'next/navigation';

const HeaderComponent = () => {

    const [showHeroComponent, setShowHeroComponent] = useState<boolean>(false);

    const pathname = usePathname();

    console.log("[Find if its a HomePage url]", pathname)

    return (
        <header className="text-zinc-200">
            <NavBarComponent isSignedIn={false} />
            {pathname === "/" && <HeroComponent />}
        </header>
        
    )
}

export default HeaderComponent
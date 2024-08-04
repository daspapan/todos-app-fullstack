import React from 'react'
import Logo from './Logo'

const LogoComponent = () => {
    return (
        <div className="flex items-center p-2 gap-2">
            <Logo/>

            <div className="text-2xl font-bold">
                Todos:<span className="text-sky-900">App</span>
            </div>
        </div>
    )
}

export default LogoComponent
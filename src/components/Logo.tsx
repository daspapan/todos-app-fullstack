import Image from 'next/image'
import React from 'react'

const LogoComponent = () => {
    return (
        <>
            
            <Image
                src={"/logo-dummy.png"}
                width={"50"}
                height={"50"}
                alt='Dummy Logo'
            />
        </>
    )
}

export default LogoComponent
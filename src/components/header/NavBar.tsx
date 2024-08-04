"use client"

import { Button, Divider, Flex } from '@aws-amplify/ui-react';
import { signOut } from 'aws-amplify/auth';
import { Hub } from 'aws-amplify/utils';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import React, { useEffect, useState } from 'react'
import LogoComponent from './LogoComponent';
import Image from 'next/image';
import MenuDesktopItems from './MenuDesktopItems';
import MenuMobile from './MenuMobile';

const NavBarComponent = ({isSignedIn}:{isSignedIn:boolean}) => {

    const [authCheck, setAuthCheck] = useState(isSignedIn);

    const router = useRouter();

    useEffect(() => {
        const hubListenerCancel = Hub.listen("auth", (data) => {

            console.log('[Listening for all Auth Events:]/n ', data.payload);
            //console.log('A new auth event has happened: ', data.payload.message. + ' has ' + data.payload.event)

            switch(data.payload.event){
                case "signedIn":
                    setAuthCheck(true);
                    router.push("/")
                    break;

                case "signedOut":
                    setAuthCheck(false);
                    router.push("/")
                    break;
            }
        })

        return () => hubListenerCancel();

    }, [router]);

    const signOutSignIn = async () => {
        if(authCheck){
            await signOut();
        }else{
            router.push("/signin");
        }
    }

    const defaultRoutes = [
        {
            href: "/",
            label: "Home"
        },
        {
            href: "/add-todos",
            label: "Add Todos"
        },
        {
            href: "/add",
            label: "Add Title",
            loggedIn: true,
        }
    ]

    const routes = defaultRoutes.filter(
        (route) => route.loggedIn === authCheck || route.loggedIn === undefined
    )

    const MENU_ITEMS: {label: string, href: string}[] = [
        {label: "Home", href: "/"},
        {label: "Add Todos", href: "/add-todos"},
    ]

    return (
        <>
            <nav className="sticky z-10 flex top-0 bg-gradient-to-r from-rose-500 to-pink-500">

                {/* Logo Starts */}
                <LogoComponent />

                {/* Mobile Menu Items - Mobile Start */}
                <MenuMobile />

                {/* Desktop Menu Items - Start */}
                <MenuDesktopItems menuItems={MENU_ITEMS}/>
                
            </nav>
            
            {/* <Flex
                direction='row'
                justifyContent='space-between'
                alignItems='center'
                padding={"1rem"}
            >
                <LogoComponent />
                
                <Flex as='nav' alignItems="center" gap="3rem" margin="0 2rem">
                    {routes.map((route) => (
                        <Link key={route.href} href={route.href}>
                            {route.label}
                        </Link>
                    ))}
                </Flex>
                <Button
                    variation='primary'
                    borderRadius="2rem"
                    className='mr-4'
                    onClick={signOutSignIn}
                >
                    {authCheck ? "Sign Out":"Sign In"}
                </Button>
            </Flex>
            <Divider size='small'></Divider> */}
        </>
    )
}

export default NavBarComponent
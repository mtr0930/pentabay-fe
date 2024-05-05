'use client'
import React, { useState } from 'react'
import Link from 'next/link';


export default function Dropdown(props: { route: any; }) {
    const { route } = props;
    const [isOpen, setIsOpen] = useState<boolean>(false);
    const subroutes = route.subroutes;

    const toggle = () => {
        setIsOpen(old => !old);
    }

    const transClass = isOpen
        ?
        "flex"
        :
        "hidden";

    return (
        <>
            <div className="relative">
                <Link
                    className="hover:text-blue-400"
                    onClick={toggle} href={route.href}>{route.title}</Link>
                <div className={`absolute top-8 z-30 w-[250px] min-h-[300px] flex flex-col py-4 bg-zinc-400 rounded-md ${transClass}`}>
                    {
                        subroutes.map(item =>
                            <Link
                                key={item.title}
                                className="hover:bg-zinc-300 hover:text-zinc-500 px-4 py-1"
                                href={item?.href || ''}
                                onClick={toggle}
                            >{item.title}</Link>
                        )
                    }
                </div>
            </div>
            {
                isOpen
                    ?
                    <div
                        className="fixed top-0 right-0 bottom-0 left-0 z-20 bg-black/40"
                        onClick={toggle}
                    ></div>
                    :
                    <></>
            }
        </>
    )
}
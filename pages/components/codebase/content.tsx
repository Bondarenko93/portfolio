import { Key, useState } from "react";
import { Arrow } from "../svg/arrow"
import { Sidebar } from "../common/sidebar"
import "@animxyz/core";
import { XyzTransitionGroup } from '@animxyz/react'
import Link from "next/link";
import { Card } from "../card/card";
import { Menu } from "../common/menu";


export const Content = () => {


    const [isActive, setActive] = useState(false);

    const handleToggle = () => {
        setActive(!isActive);
    };
    let active = isActive ? "open" : "";
    let activeUl = isActive ? "hidden" : "showmenu";


    return (
        <>
            <div className='flex w-full h-full flex-col overflow-auto md:overflow-hidden  md:flex-row'>
                <Sidebar  >
                    <ul className="w-full">
                        <li className={'fa-arrow-down ' + active}>
                            <span onClick={handleToggle} className="flex items-center py-2 px-6 border-[#1E2D3D] border-b"><Arrow /> <span className="pl-2 text-white">projects</span></span>
                            <XyzTransitionGroup appear duration="auto" xyz="fade up-100% duration-0">
                                <ul>
                                    <>
                                        {Menu(['React', 'Html'])}
                                    </>
                                </ul>
                            </XyzTransitionGroup>

                        </li>
                    </ul>
                </Sidebar>

                <div className="p-6 md:p-2 flex w-full justify-around flex-wrap pt-8  md:overflow-auto">

                    {[...Array(3)].map((_, index) => (
                        <Card key={index} />
                    ))}

                </div>
            </div>
        </>
    )
}
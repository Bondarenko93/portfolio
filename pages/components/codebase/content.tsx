import { JSXElementConstructor, Key, ReactElement, ReactFragment, ReactPortal, useState } from "react";
import { Arrow } from "../svg/arrow"
import { Sidebar } from "./sidebar"
import "@animxyz/core";
import { XyzTransition, XyzTransitionGroup } from '@animxyz/react'
import Link from "next/link";
import { Card } from "../card/card";


export const Content = () => {


    const [isActive, setActive] = useState(false);

    const handleToggle = () => {
        setActive(!isActive);
    };
    let active = isActive ? "open" : "";
    let activeUl = isActive ? "hidden" : "showmenu";

    const Menu = (Items: (Key | null | undefined)[]) => {
        return Items.map((Item, key) => {
            return (<li key={key} xyz="fade small stagger" className="square xyz-nested px-6 pb-0 pt-4 text-[#607B96]"><Link href='_codebase/react'><a className="text-[#607B96] hover:text-white" >{Item}</a></Link></li>)
        })

    }

    return (
        <>
            <div className='flex max-w-6xl w-full    h-full '>
                <Sidebar>
                    <ul className="w-full">
                        <li className={'fa-arrow-down ' + active}>
                            <span onClick={handleToggle} className="flex items-center py-4 px-6 border-[#1E2D3D] border-b"><Arrow /> <span className="pl-2 text-white">projects</span></span>
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
                <div>

                    {[...Array(3)].map((_, index) => (
                        <Card key={index} />
                    ))}

                </div>
            </div>
        </>
    )
}
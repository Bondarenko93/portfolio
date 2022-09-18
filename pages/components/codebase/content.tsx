import { useState } from "react";
import { Arrow } from "../svg/arrow"
import { Sidebar } from "./sidebar"
import { XyzTransition } from '@animxyz/react'


export const Content = () => {


    const [isActive, setActive] = useState(false);

    const handleToggle = () => {
        setActive(!isActive);
    };
    let active = isActive ? "open" : "";
    let activeUl = isActive ? "hidden" : "showmenu";
    return (
        <>
            <div className='flex max-w-6xl w-full    h-full '>
                <Sidebar>
                    <ul className="w-full">
                        <li className={'fa-arrow-down ' + active}>
                            <span onClick={handleToggle} className="flex items-center py-4 px-6 border-[#1E2D3D] border-b"><Arrow /> <span className="pl-2 text-white">projects</span></span>
                            <XyzTransition appear duration="auto" xyz="fade up-100% duration-10">
                                <ul>
                                    {isActive && (
                                        <>
                                            <li xyz="fade small stagger" className="square xyz-nested px-6 pb-0 pt-4 text-[#607B96]">React</li>
                                            <li xyz="fade small stagger" className="square xyz-nested px-6 pb-0 pt-4 text-[#607B96]">HTML</li>
                                        </>
                                    )}
                                </ul>
                            </XyzTransition>

                        </li>
                    </ul>
                </Sidebar>
            </div>
        </>
    )
}
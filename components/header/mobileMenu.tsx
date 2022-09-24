import React from "react"

import { Burger } from "../svg/burger";
import { CloseMenu } from "../svg/close";
export const MobileMenu = ({ onClick, toggleStatus }: any) => {

    return (
        <div onClick={onClick} className="pr-4 md:hidden">
            {toggleStatus !== true ? <Burger /> : <CloseMenu />}
        </div>
    )
} 
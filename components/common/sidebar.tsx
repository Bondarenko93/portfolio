import React from "react"
import "@animxyz/core";
import { XyzTransition } from '@animxyz/react'
export const Sidebar = ({ children }: any) => {
    //@ts-ignore
   return ( <XyzTransition appear mode="out-in"><div xyz="fade left-100%" className="border-solid flex border-r-[#1E2D3D] border-r	 h-full w-full md:max-w-[320px]">{children}</div></XyzTransition> )
}
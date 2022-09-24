import React from "react"
import Link from "next/link"
import { Key } from "react"

export const Menu = (Items: (Key | null | undefined)[]) => {
    return Items.map((Item, key) => (
        //@ts-ignore
        <li key={key} xyz="fade small stagger" className="square xyz-nested px-6 pb-0 pt-4  text-[#607B96]"><Link href='_codebase/react'><a className="text-[#607B96] hover:text-white">{Item}</a></Link></li>))
}
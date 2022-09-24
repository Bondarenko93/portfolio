import React from "react"
import { Sidebar } from "../common/sidebar"

export const Content = () => {

    return (
            //@ts-ignore
        <div className='flex w-full h-full flex-col overflow-auto md:overflow-hidden  md:flex-row'><Sidebar>
                Test
            </Sidebar>
            <>Test</>
        </div>
    )
}
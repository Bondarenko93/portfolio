import { Arrow } from "../svg/arrow"
import { Sidebar } from "./sidebar"

export const Content = () => {

    return (
        <>
            <div className='flex max-w-6xl w-full    h-full '>
                <Sidebar>
                    <ul>
                        <li className="text-white flex items-center"><Arrow /> <span>projects</span></li>
                    </ul>
                </Sidebar>
            </div>
        </>
    )
}
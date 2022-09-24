import { Sidebar } from "../common/sidebar"
import "@animxyz/core";
import { XyzTransitionGroup } from '@animxyz/react'
import { Arrow } from "../svg/arrow";
import { Menu } from "../common/menu";
export const Content = () => {

    return (
        <div className='flex w-full h-full flex-col overflow-auto md:overflow-hidden  md:flex-row'>
            <Sidebar>
                <ul className="w-full">
                    <li className={'fa-arrow-down '}>
                        <span className="flex items-center py-2 px-6 border-[#1E2D3D] border-b"><Arrow /> <span className="pl-2 text-white">contacts</span></span>
                        <XyzTransitionGroup appear duration="auto" xyz="fade up-100% duration-0">
                            <ul>
                                <>
                                    {Menu(['webmastercss3@gmail.com', 'Html'])}
                                </>
                            </ul>
                        </XyzTransitionGroup>

                    </li>
                </ul>
            </Sidebar>
            <div>
                <div>
                    <form>
                        <label className="block">
                            <span className="block text-sm font-medium text-slate-700">_name:</span>
                            <input className="border-[#1E2D3D] border bg-[#011221]   placeholder-slate-400 contrast-more:border-slate-400 contrast-more:placeholder-slate-500" />
                        </label>
                        <label className="block">
                            <span className="block text-sm font-medium text-slate-700">_email:</span>
                            <input type={'email'} className="border-[#1E2D3D] border bg-[#011221]  placeholder-slate-400 contrast-more:border-slate-400 contrast-more:placeholder-slate-500" />
                        </label>
                        <label className="block">
                            <span className="block text-sm font-medium text-slate-700">_message:</span>
                            <textarea className="border-[#1E2D3D] border bg-[#011221]" />
                        </label>
                        <button type="submit">submit-message</button>
                    </form>
                </div>
                <div></div>
            </div>
        </div>
    )
}
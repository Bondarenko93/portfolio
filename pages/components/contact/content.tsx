/* eslint-disable react/no-unescaped-entities */
import { Sidebar } from "../common/sidebar"
import "@animxyz/core";
import { XyzTransitionGroup } from '@animxyz/react'
import { Arrow } from "../svg/arrow";
import { Menu } from "../common/menu";
import { JSXElementConstructor, Key, ReactElement, ReactFragment, ReactPortal, useState } from "react";
export const Content = () => {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [message, setMessage] = useState('');
    let date = new Date();
    let options = {
        year: 'numeric',
        month: 'long',
        day: 'numeric',
        weekday: 'long'
    };
    let dateText = date.toLocaleString("en-US", options);

    const ColorsText = (array: any) => {
        return array.map((value: { color: string | undefined; val: string | number | boolean | ReactElement<any, string | JSXElementConstructor<any>> | ReactFragment | ReactPortal | null | undefined; }, key: Key | null | undefined) => {
            console.log(value);
            return (
                <span key={key} className={value.color}>{value.val}</span>
            )
        });
    }

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
            <div className="grid grid-cols-2 gap-4 w-full">
                <div className=" w-full justify-center flex border-r border-r-[#1E2D3D] pt-24">
                    <form className="max-w-[372px] w-full block">
                        <label className="block mb-6">
                            <span className="block text-base font-medium text-[#607B96] pb-3">_name:</span>
                            <input onChange={e => setName(e.target.value)} name="name" className="w-full py-[8px] px-[15px] text-base border-[#1E2D3D] focus:outline-none focus:border-[#607B96] rounded-lg border bg-[#011221] text-[#465E77]  placeholder-[#465E77] contrast-more:border-slate-400 contrast-more:placeholder-slate-500" />
                        </label>
                        <label className="block mb-6">
                            <span className="block text-base font-medium text-[#607B96] pb-3">_email:</span>
                            <input onChange={e => setEmail(e.target.value)} name="email" type={'email'} className="w-full  py-[8px] px-[15px]  text-base focus:outline-none focus:border-[#607B96]  rounded-lg border-[#1E2D3D] border bg-[#011221] text-[#465E77]  placeholder-[#465E77] contrast-more:border-slate-400 contrast-more:placeholder-slate-500" />
                        </label>
                        <label className="block mb-6">
                            <span className="block text-base font-medium text-[#607B96]  pb-3">_message:</span>
                            <textarea onChange={e => setMessage(e.target.value)} name="message" rows={4} className="w-full py-[8px] px-[15px]  border-[#1E2D3D] focus:outline-none focus:border-[#607B96]  rounded-lg border bg-[#011221]  text-[#465E77]  placeholder-[#465E77" />
                        </label>
                        <button className="bg-[#1C2B3A] text-white py-[10px] px-[14px] text-[14px] rounded-lg" type="submit">submit-message</button>
                    </form>
                </div>
                <div className=" pt-24">
                    <ul  className="style_block">
                        <li><span>{ColorsText([
                            { color: 'text-[#C98BDF]', val: 'const ' },
                            { color: 'text-[#5565E8]', val: 'button' },
                            { color: 'text-[#C98BDF]', val: ' = ' },
                            { color: 'text-[#5565E8]', val: 'document' },
                            { color: 'text-[#607B96]', val: '.' },
                            { color: 'text-[#5565E8]', val: 'querySelector' },
                            { color: 'text-[#607B96]', val: '(' },
                            { color: 'text-[#FEA55F]', val: '"#sendBtn"' },
                            { color: 'text-[#607B96]', val: ');' },
                        ])}
                        </span></li>
                        <li><span>&nbsp;</span></li>
                        <li><span>{ColorsText([
                            { color: 'text-[#C98BDF]', val: 'const ' },
                            { color: 'text-[#5565E8]', val: 'message' },
                            { color: 'text-[#C98BDF]', val: ' = ' },
                            { color: 'text-[#607B96]', val: ' { ' },
                        ])}
                        </span></li>
                        <li><span className="text-[#5565E8]">&nbsp;{'name: '}</span><span className="text-[#FEA55F]">"{name}",</span></li>
                        <li><span className="text-[#5565E8]">&nbsp;{'email: '}</span><span className="text-[#FEA55F]">"{email}",</span></li>
                        <li><span className="text-[#5565E8]">&nbsp;{'message: '}</span><span className="text-[#FEA55F]">"{message}",</span></li>
                        <li><span className="text-[#5565E8]">&nbsp;{'date: '}</span><span className="text-[#FEA55F]">"{dateText}"</span></li>
                        <li><span className="text-[#607B96]">{'}'}</span></li>
                        <li><span>&nbsp;</span></li>
                        <li><span>{ColorsText([
                            { color: 'text-[#5565E8]', val: 'button' },
                            { color: 'text-[#607B96]', val: '.' },
                            { color: 'text-[#5565E8]', val: 'addEventListener' },
                            { color: 'text-[#607B96]', val: '(' },
                            { color: 'text-[#FEA55F]', val: '"click"' },
                            { color: 'text-[#607B96]', val: ', ' },
                            { color: 'text-[#607B96]', val: '()' },
                            { color: 'text-[#C98BDF]', val: ' => ' },
                            { color: 'text-[#607B96]', val: '{' },
                        ])}
                        </span></li>
                        <li><span>&nbsp;{ColorsText([
                            { color: 'text-[#5565E8]', val: 'form' },
                            { color: 'text-[#607B96]', val: '.' },
                            { color: 'text-[#5565E8]', val: 'send' },
                            { color: 'text-[#607B96]', val: '(' },
                            { color: 'text-[#FEA55F]', val: 'message' },
                            { color: 'text-[#607B96]', val: ');' },
                        ])}
                        </span></li>
                        <li><span className="text-[#607B96]">{'})'}</span></li>
                    </ul>
                </div>
            </div>
        </div >
    )
}
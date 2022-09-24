// import { MobileMenu } from "../../menu/mobileMenu";
import { useState } from "react";
import { useRouter } from 'next/router'
import { Contact, HeaderContainer, LogoStyle, NavUl } from "./header.style";
import Link from "next/link";
import { MobileMenu } from "./mobileMenu";
export const Header = () => {

    let MenuList = ['_hello', '_about-me', '_codebase'];
    const [toggle, setToggle] = useState(false);
    const [MenuHide, setMenuHide] = useState('hidden');
    const router = useRouter();
    function showHideMenu(status: boolean) {
        if (status) {
            setMenuHide('');
        } else {
            setMenuHide('hidden');
        }
        setToggle(status);
    }
    let activeBg = toggle ? "bg-[#011627]" : "";

    function Menu({ MenuList }: any['']) {
        let route = router.pathname;
        let url = '';
        return MenuList.map((val: string, key: number) => {
            if (route === '/') {
                route = MenuList[0];
            }
            if (val === MenuList[0]) {
                url = '/';
            } else {
                url = val;
            }
            let active = route.lastIndexOf(val) > -1 ? "active_li" : "";
            let data_hover = key === 0 ? "" : val
            return (
                <li className={"text-[#607B96] text-base  border-b border-[#1E2D3D] text-center " + active} key={key}>
                    <div className="botton_line" >
                        <Link href={url}>
                            <a data-hover={data_hover} className="inline-block py-4">{val}</a>
                        </Link>
                    </div>
                </li>
            );
        });
    }
    function Logo() {
        return <LogoStyle><Link href={"/"}><a>master-bond</a></Link></LogoStyle>
    }
    function ContactMenu() {
        let active;
        let route = router.pathname;
        if (route === '/_contact-me') {
            active = "active_li";
        }

        return <Contact className={"border-l border-[#1E2D3D] " + active}><div className="botton_line"> <Link href={"_contact-me"}><a className="inline-block py-4  " data-hover="_contact-me">_contact-me</a></Link></div></Contact>
    }
    return (
        // @ts-ignore
        <> <HeaderContainer className={"header_menu " + activeBg}>
                <MobileMenu toggleStatus={toggle} onClick={() => showHideMenu(!toggle)} />
                <div className=" flex flex-row w-full">
                    <Logo />
                    <nav className="hidden md:block w-full lg:max-w-lg border-color border-x h-full">
                        <NavUl><Menu MenuList={MenuList} /></NavUl>
                    </nav>
                </div>
                <ContactMenu />
            </HeaderContainer>
            <nav id="mobile-menu" className={`z-10 absolute h-full top-14 w-full ` + MenuHide + ' ' + activeBg}>
                <ul className="md:block w-full border-color border-b"><Menu MenuList={MenuList} /></ul>
            </nav>
        </>
    )
}
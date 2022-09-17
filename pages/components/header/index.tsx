// import { MobileMenu } from "../../menu/mobileMenu";
import { useState } from "react";
import { useRouter } from 'next/router'
import { Contact, HeaderContainer, LogoStyle, NavUl } from "./header.style";
export const Header = () => {

    let MenuList = ['_hello', '_about-me', '_codebase'];
    const [toggle, setToggle] = useState(false)
    const router = useRouter();
    function showHideMenu(status: boolean) {
        document.getElementById('mobile-menu').classList.toggle('hidden');
        setToggle(status);
    }

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
                <li className={"text-[#607B96] text-base text-center " + active} key={key}>
                    <div className="botton_line" >
                        <a data-hover={data_hover} className="inline-block py-4" href={url}>{val}</a>
                    </div>
                </li>
            );
        });
    }
    function Logo() {
        return <LogoStyle><a href="/">master-bond</a></LogoStyle>
    }
    function ContactMenu() {
        return <Contact><a href="/contact-me">_contact-me</a></Contact>
    }
    return (
        <>
            <HeaderContainer>
                {/* <MobileMenu toggleStatus={toggle} onClick={() => showHideMenu(!toggle)} /> */}
                <div className="header_menu flex flex-row w-full">
                    <Logo />
                    <nav className="hidden md:block w-full 	lg:max-w-lg border-color border-x">
                        <NavUl><Menu MenuList={MenuList} /></NavUl>
                    </nav>
                </div>
                <ContactMenu />
            </HeaderContainer>
            <nav id="mobile-menu" className="hidden absolute top-14 w-full">
                <ul className="md:block w-full border-color border-b"><Menu MenuList={MenuList} /></ul>
            </nav>
        </>
    )
}
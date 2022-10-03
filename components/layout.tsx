import { useRouter } from "next/router"
import tw from "tailwind-styled-components"
import { Footer } from "./footer/footer"
import { Header } from "./header"
import { BackgroundMobile } from "./svg/background-mob"
import React from "react"
export const Layout = ({ children }: any) => {
    const router = useRouter();
    let background = 'lg:bg-[#011627]';
    let route = router.pathname;
    if (route === '/') {
        background = 'lg:bg-[#01162700]';
    }
    return (
        //@ts-ignore
        <Container className={background}><Header /> {children} <Footer />
            <div className='block absolute  svg top-0 w-full -z-50 '>
                <BackgroundMobile />
            </div>
        </Container>
    )
}

const Container = tw.div` relative flex flex-col justify-between h-[96vh] md:h-[95vh] m-3 md:m-4  border-color border rounded-lg  overflow-hidden`
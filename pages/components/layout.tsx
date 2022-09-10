import tw from "tailwind-styled-components"
import { Header } from "./header"

export const Layout = ({ children }) => {
    return (<Container><Header /> {children}</Container>)
}

const Container = tw.div`lg:bg-[#0116276c] relative flex flex-col justify-between h-[96vh] md:h-[95vh] m-3 md:m-4  border-color border rounded-lg`
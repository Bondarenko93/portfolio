import tw from "tailwind-styled-components"

export const HeaderContainer = tw.header`flex-row-reverse md:flex-row relative flex border-color border-b items-center justify-between w-full`;

export const Contact = tw.div`text-[#607B96] min-w-max text-right	 w-auto  max-w-xs lg:w-full pl-4 md:px-6 py-4 hidden md:block`;

export const LogoStyle = tw.div`text-[#607B96] min-w-max w-auto  max-w-xs lg:w-full pl-4 md:px-6 py-4`;

export const NavUl = tw.ul`header_menu grid grid-cols-3 divide-x divide-[#1E2D3D]`;
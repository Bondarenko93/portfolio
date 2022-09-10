export const ArrowButton = ({ marign = '', direction = '' }) => {
    var rotate = '';
    switch (direction) {
        case 'left':
            rotate = '-rotate-90';
            break;
        case 'right':
            rotate = 'rotate-90';
            break;
        case 'top':
            rotate = 'rotate-0';
            break;
        case 'down':
            rotate = 'rotate-180';
            break;
        default:
            rotate = 'rotate-0';
    }
    return (
        <button className={"hover:bg-[#43D9AD] arrow py-3 px-5 " + marign}>
            <svg className={rotate} width="9" height="7" viewBox="0 0 9 7" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M4.50002 0.309143L8.75003 6.30914H0.25L4.50002 0.309143Z" fill="white" />
            </svg>
        </button>
    )
}
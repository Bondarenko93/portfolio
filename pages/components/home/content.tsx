import { Game } from "../../../game/Game"
import { BackgroundSvg } from "../svg/background-svg"

export const Content = () => {
    return (
        <div className='flex max-w-6xl w-full m-auto  px-6 h-full justify-between items-center'>
            <div className="max-w-[520px]  flex flex-col relative ">
                <div className="w-full flex flex-col items-left">
                    <p className='text-[#E5E9F0] text-lg'>Hi all. I am</p>
                    <br />
                    <h1 className='text-[#E5E9F0] text-6xl'>Master Bond</h1>
                    <br />
                    <h2 className='text-[#4D5BCE] text-4xl'> {'>'} Front-end developer</h2>
                    <br />
                </div>
                <div className='flex flex-col items-left'>
                    <p className='text-[#607B96] mb-2'>{'//'} complete the game to continue</p>
                    <p className='text-[#607B96] mb-4'>{'//'} find my profile on Github:</p>
                    <p><span className='text-[#4D5BCE]'>const</span> <span className='text-[#43D9AD]' >githubLink</span> <span className='text-white'>=</span> <span className='text-[#E99287]'><a href='##'>“https://github.com/bondarenko93”</a></span></p>
                </div>
                <div className="hidden md:flex w-full">
                    <BackgroundSvg />
                </div>
            </div>
            <Game />
        </div>
    )
}
import Image from "next/image"
import Link from "next/link"
export const Card = () => {
    return (
        <>
            <div className="">
                <p className="text-[#607B96]">Project 1 // _ui-animations</p>

                <div className="bg-[#011221] border-[#1E2D3D] border w-full max-w-[370px] max-h-[314px] rounded-2xl	">

                    <div className="max-h-[145px] overflow-hidden rounded-t-2xl	">
                        <Image src={'/pabla.jpg'} width='512' height='512' layout='responsive' alt='pabla' />
                    </div>
                    <div className="p-8">
                        <p className="text-[#607B96] mb-8">Duis aute irure dolor in velit esse cillum dolore.</p>

                        <Link href={'#'}>
                            <a className="bg-[#1C2B3A] px-4 py-3  w-full text-white rounded-xl	">view-project</a>
                        </Link>
                    </div>
                </div>
            </div>
        </>

    )
}
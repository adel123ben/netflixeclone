import { AiOutlineArrowLeft } from "react-icons/ai"
import { useRouter } from "next/router"

const Wathc = () => {

    const route = useRouter();
    return(
        <div className="h-screen w-screen bg-black">
            <nav className="fixed w-full p-4 z-10 flex flex-row items-center gap-8 bg-black bg-opacity-70">
                <div className="cursor-pointer" onClick={() => route.push('/')}>
                <AiOutlineArrowLeft className="text-white" size={40} />
                </div>
                
                <p className="text-white text-1xl md:text-3xl font-bold">
                    <span className="font-light">
                        Watching :
                    </span>
                    Tears of Steel
                </p>
            </nav>
            <video className="h-full w-full" autoPlay controls src="http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/TearsOfSteel.mp4">


            </video>
        </div>
    )
}

export default Wathc
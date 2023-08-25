import { BsFillPlayFill } from "react-icons/bs";
import FavoriteButton from "./FaveriteButton";
import { useRouter } from "next/router";

interface MouviCarProps{
    data1: string
    poster: string
    data: string;
  title: string;
  onAddFavorite: (movieUrl: string) => void;
}


const MouvieCard: React.FC<MouviCarProps> = ({
    data1,
    poster,
    data,
    onAddFavorite
}) => {

    const router = useRouter();
    return(
        <div className="group bg-zinc-900 col-span relative h-[12vw]">
            <img className="cursor-pointer object-cover transition duration shadow-xl rounded-md group-hover:opacity-90 sm:group-hover:opacity-0 delay-300 w-full h-[12vh]" src={data1} alt="" />
            <div className="opacity-0 absolute top-0 transition duration-200 z-10 invisible sm:visible delay-300 w-full scale-0 group-hover:scale-110 group-hover:-translate-y-[6vw]  group-hover:-translate-x-[2vw] group-hover:opacity-100">
                <img className=" object-cover cursor-pointer transition duration shadow-xl rounded-t-md w-full h-[12vw]" src={poster} alt="" />
                <div className="z-10 bg-zinc-800 p-2 lg:p-4 absolute w-full transition shadow-md rounded-b-md">
                    <div className="flex flex-row items-center gap-3">
                        <div onClick={() => router.push(`/watch`)} className="cursor-pointer w-6 h-6 lg:w-10 lg:h-10 bg-white rounded-full flex justify-center items-center transition hover:bg-neutral-300 " onClick={() => ''}>
                            <BsFillPlayFill size={30} /> 
                        </div>
                        <FavoriteButton  />
                    </div>
                    <p className=" text-green-400 font-semibold mt-4 ">
                        New <span className="text-white">2023</span>
                    </p>

                    <div className="flex flex-row mt-4 gap-2 items-center">
                        <p className="text-white text-[10px] lg:text-sm">15 minutes</p>
                    </div>

                    <div className="flex flex-row mt-4 gap-2 items-center">
                        <p className="text-white text-[10px] lg:text-sm">Action</p>
                    </div>
                </div>

            </div>
        </div>
    )
}

export default MouvieCard
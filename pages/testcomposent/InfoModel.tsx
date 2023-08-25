import { AiOutlineClose } from "react-icons/ai";
import PlayButton from "./PlayButton";
import FavoriteButton from "./FaveriteButton";
import useInfoModel from "../hooks/useinfoModel";
import { useCallback, useEffect, useState } from "react";

interface InfoModelProps{
    visebel?: boolean;
    onclose: any;
}

const InfoModel: React.FC<InfoModelProps> = ({
    visebel,
    onclose
}) => {
    const [isvisebel, setVisebel] = useState(!!visebel)
    const mouviId = useInfoModel();

    useEffect(() => {
        setVisebel(!!visebel)
    }, [visebel])

    const handelClose = useCallback(() => {
        setVisebel(false);
        setTimeout(() => {
            onclose();
        }, 300)
    }, [onclose])

    if(!visebel){
      return  null;
    }
    return(
        <div className="z-50 transition duration-300 bg-black bg-opacity-70 flex justify-center items-center overflow-x-hidden overflow-y-auto fixed inset-0">
            <div className="relative w-auto mx-auto max-w-3xl rounded-md overflow-hidden">
                <div className={`${visebel ? 'scale-100' : 'scale-0'} transform duration-300 relative flex-auto bg-zinc-900 drop-shadow-md`}>
                    <div className="relative h-96">
                        <video className="w-full brightness-[60%] object-cover h-full"
                        autoPlay
                        muted
                        loop
                        poster="https://www.justfocus.fr/wp-content/uploads/2023/07/1314905.jpeg" src="https://www.justfocus.fr/wp-content/uploads/2023/07/1314905.jpeg" />
                        <div onClick={handelClose} className="cursor-pointer absolute top-3 right-3 h-10 w-10 rounded-full bg-black bg-opacity-70 flex items-center justify-center">
                            <AiOutlineClose className="text-white" size={20}/>
                        </div>
                        <div className=" absolute bottom-[10%] left-10">
                            <p className="text-white text-3xl md:text-4xl h-full lg:text-5xl font-bold mb-8">
                            Tears of Steel
                            </p>
                            <div className="flex flex-row gap-4 items-center">
                              <PlayButton  />
                              <FavoriteButton />
                            </div>
                        </div>
                    </div>

                    <div className="px-12 py-8">
                        <p className="text-green-400 font-semibold text-lg"> 
                            New
                        </p>
                        <p className="text-white text-lg">
                            50 minutes
                        </p>

                        <p className="text-white text-lg">
                            Action
                        </p>

                        <p className="text-white text-lg">
                        En 1942, convaincus que l’Allemagne nazie est en train de développer une arme nucléaire, les États-Unis initient, dans le plus grand secret, le "Projet Manhattan" destiné à mettre au point la première bombe atomique de l’histoire. Pour piloter ce dispositif, le gouvernement engage J. Robert Oppenheimer, brillant physicien, qui sera bientôt surnommé "le père de la bombe atomique". C’est dans le laboratoire ultra-secret de Los Alamos, au cœur du désert du Nouveau-Mexique, que le scientifique et son équipe mettent au point une arme révolutionnaire dont les conséquences, vertigineuses, continuent de peser sur le monde actuel…
                        </p>
                    </div>

                </div>
            </div>
        </div>
    )
}

export default InfoModel;
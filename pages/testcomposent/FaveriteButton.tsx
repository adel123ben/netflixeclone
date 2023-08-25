import { AiOutlinePlus } from "react-icons/ai"
import {useState} from "react"

interface FavoriteButtonProps {
    onClick: () => void;

}

const FavoriteButton: React.FC<FavoriteButtonProps> = ({
    onClick
}) => {
    const [addd, setadd] = useState("");
    
    return(
        <div  onClick={onClick} className="cursor-pointer group/item w-6 h-6 lg:w-10 lg:h-10 border-white border-2 rounded-full flex justify-center items-center transition hover:border-neutral-300">
            <AiOutlinePlus size={25} color="white" />
        </div>
    )
}

export default FavoriteButton
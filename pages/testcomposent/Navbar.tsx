import { useCallback, useState, useEffect } from "react";
import MobilMenue from "./MobilMenu";
import NavBarItem from "./NavBarItems"
import { FiChevronDown } from "react-icons/fi";
import { AiOutlineSearch, AiOutlineBell } from "react-icons/ai";
import AccountMenu from "./AccountMenu";

const Navbar = () => {
    const TOP_OFSET = 66;
const [show, setShow] = useState(false);
const [show2, setShow2] = useState(false);
const [showbg, setShowBg] = useState(false);

useEffect(() => {
    const handelScroll = () => {
        if(window.scrollY >= TOP_OFSET){
            setShowBg(true)
        }else{
            setShowBg(false)
        }
    }

    window.addEventListener('scroll', handelScroll);

    return() => {
        window.removeEventListener('scroll', handelScroll);
    }

}, [])


const togelMenu = useCallback(() => {
    setShow((curent) => !curent);
}, [])

const togelAccountMenu = useCallback(() => {
    setShow2((curent2) => !curent2);
}, [])

    return(
        <nav className="w-full fixed z-40">
            <div className={`px-4 md:px-16 py-6 flex flex-row items-center transition duration-500 ${showbg ? "bg-zinc-900 bg-opacity-90" : ""}`}>
                <img className="h-4 lg:h-7" src="https://github.com/AntonioErdeljac/next-netflix-tutorial/blob/master/public/images/logo.png?raw=true" alt="" />
            <div className="flex-row ml-8 gap-7 hidden lg:flex">
                <NavBarItem label="Home" />
                <NavBarItem label="Series" />
                <NavBarItem label="Films" />
                <NavBarItem label="New & popular" />
                <NavBarItem label="My list" />
                <NavBarItem label="Brows by languages" />
            </div>
            <div onClick={togelMenu} className="lg:hidden flex flex-row items-center gap-2 ml-8 cursor-pointer relative">
                <p className="text-white text-sm">Brows</p>
                <FiChevronDown className={`text-white transition ${show ? 'rotate-180' : "rotate-0"}`} />
                <MobilMenue visibl={show} />
            </div>

            <div className="flex flex-row ml-auto gap-7 items-center">
                <div className="text-gray-200 hover:text-gray-300 cursor-pointer transition">
                    <AiOutlineSearch />
                </div>
                <div className="text-gray-200 hover:text-gray-300 cursor-pointer transition">
                    <AiOutlineBell />
                </div>


                <div onClick={togelAccountMenu} className="flex flex-row items-center gap-2 cursor-pointer relative">
                    <div className="w-6 h-6 lg:w-10 lg:h-10 rounded-md overflow-hidden">
                        <img src="https://github.com/AntonioErdeljac/next-netflix-tutorial/blob/master/public/images/default-blue.png?raw=true" alt="" />
                    </div>
                    <FiChevronDown className={`text-white transition ${show2 ? 'rotate-180' : 'rotate-0'}`} />
                    <AccountMenu visibl={show2}/>
                </div>
            </div>
            </div>
        </nav>
    )
}

export default Navbar
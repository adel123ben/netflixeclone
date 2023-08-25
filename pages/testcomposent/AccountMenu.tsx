import { useRouter } from "next/router";

interface AccountMenuProps{
    visibl?: boolean;
}



const AccountMenu: React.FC<AccountMenuProps> = ({
    visibl
}) => {

    const route = useRouter();

    

    if(!visibl){
        return null;
    }
    
    return(

        <div className="bg-black w-56 absolute top-14 right-0 py-5 flex-col border-2 border-gray-800 flex">
            <div className="flex flex-col gap-3">
                <div className="px-3 group/item flex flex-row gap-3 items-center w-full">
                    <img className="w-8 rounded-md" src="https://github.com/AntonioErdeljac/next-netflix-tutorial/blob/master/public/images/default-blue.png?raw=true" alt="" />
                <p onClick={() => route.push('/profil')} className="text-white text-sm group-hover/item:underline">Me</p>
                </div>
                <hr className="bg-gray-600 border-0 h-px my-4"/>
                <div onClick={() => route.push("/auth")} className="px-3 text-center text-white text-sm hover:underline transition">
                    Sign out of Netflix
                </div>
            </div>
        </div>
    )
}

export default AccountMenu;
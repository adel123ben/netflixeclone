import Inputs from "@/pages/testcomposent/testInput";
import { useCallback, useState } from "react";
import axios from "axios";
import Link from 'next/link';
import { toast } from "react-hot-toast";
import { useRouter } from "next/router";



const Auth = () => {
    const router = useRouter();
    const [email, setEmail] = useState("");
    const [name, setUsername] = useState('');
    const [password, setPassword] = useState("");

    const [variant, setVariante] = useState("logIn")

    const usetogel = useCallback(() => {
        setVariante((curentvariant) => curentvariant === "logIn" ? "register" : "logIn")
    }, [])

    const register = useCallback(async () => {
        try{
            await axios.post('/api/register', {
                email,
                name,
                password,
            })
        } catch (error){
            console.log(error)
        }
    },[email, name, password])

    
    return(
        <div className="relative h-full w-full bg-[url('/images/hero.jpg')] bg-no-repeat bg-center bg-fixed bg-cover">
            <div className="bg-black w-full h-full lg:bg-opacity-50">
                <nav className="px-12 py-5">
                    <img src="https://github.com/AntonioErdeljac/next-netflix-tutorial/blob/master/public/images/logo.png?raw=true" alt="logo" className="h-12" />
                </nav>
                <div className="flex justify-center">
                    <div className="bg-black bg-opacity-70 px-16 py-16 self-center mt-2 lg:w-2/5 lg:max-w-md rounded-md w-full">
                        <h2 className="text-white text-4xl mb-8 font-semibold">
                            {variant === "logIn" ? "SignIn" : "Register"}
                        </h2>
                        <div className="flex flex-col gap-4">
                            {variant === "register" && (
                                 <Inputs
                                 lebel="Username"
                                 onChange={(ev: any) => setUsername(ev.target.value)}
                                 id="name"
                                 value={name}
                                 />
                            )}
                       
                            <Inputs
                            lebel="Email"
                            onChange={(ev: any) => setEmail(ev.target.value)}
                            id="email"
                            type="email"
                            value={email}
                            />

<Inputs
                            lebel="Password"
                            onChange={(ev: any) => setPassword(ev.target.value)}
                            id="password"
                            type="password"
                            value={password}
                            />
                        </div>
                       

                        
                        <button onClick={() => router.push('/profil')} className={`bg-red-600 py-3 text-white rounded-md w-full mt-10 hover:bg-red-700 transition ${email === '' || password === '' || (variant === "register" && name === '') ? 'cursor-not-allowed opacity-50' : ''}`}
                         disabled={email === '' || password === '' || (variant === "register" && name === '')}
                         >
                            {variant === "logIn" ? "logIn" : "sign up"}
                            
                        </button>
                           
                        <p className="text-neutral-500 mt-12">
                           { variant === "logIn" ? "First time in Netflix?" : "All ready have an accounte?"}

                           <span onClick={usetogel} className="text-white ml-1 hover:underline cursor-pointer">{ variant === "logIn" ? "Create an acount" : "LogIn"}</span> 
                        </p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Auth;
import Link from "next/link";
import Image from 'next/image';
import {FaSearch} from 'react-icons/fa';
import { api } from "../../utils/api";
import HeaderAvatar from "../../../public/noun-real-estate-1604410.svg";

export default function Header() {
    return (
        <header className='w-full shadow-md bg-slate-800 bg-opacity-90 border-solid border-b-2 border-slate-300'>
            <div className='flex justify-between items-center max-w-7xl mx-auto p-2'>
                <div className="flex">
                    <Image src={HeaderAvatar} className='flex mr-2 color-white border-solid border-2 border-white rounded-full' width={50} height={5} alt="svg" />
                    <div className="text-center">
                        <h1 className='font-bold text-sm sm:text-xl flex flex-wrap' style={{textShadow: '2px 2px 2px #0000ff'}}>
                            <span className='text-white text-xl mr-2'>World</span>
                            <span className='text-white text-xl'>Estate</span>
                        </h1>
                        <p className="text-md text-white" style={{textShadow: '1px 1px 1px #00ff00'}}>
                            Real Estate Center
                        </p>
                    </div>
                </div>
                <ul className='flex gap-4'>
                        <li className='hidden sm:inline text-white hover:text-black'>Home</li>
                        <li className='hidden sm:inline text-white hover:text-black'>About Us</li>
                        <li className='hidden sm:inline text-white hover:text-black'>Blog</li>
                        <li className='hidden sm:inline text-white hover:text-black'>Contact</li>
                    <Link href='/authentication/signin'>
                        <li className='hover:text-black text-white'>Sign in</li>
                    </Link>
                </ul>
            </div>
        </header>
    );
}




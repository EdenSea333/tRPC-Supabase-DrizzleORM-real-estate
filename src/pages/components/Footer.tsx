import Link from "next/link";
import Image from 'next/image';
import {FaSearch} from 'react-icons/fa';
import { api } from "../../utils/api";

export default function Footer() {
    return (
        <header className='bg-gray-500 shadow-md border-solid border-b-2 border-slate-300'>
            <div className='flex justify-between items-center max-w-7xl mx-auto p-2'>
                <div className="flex">
                    <div>
                        <h1 className='font-bold text-sm sm:text-xl flex flex-wrap'>
                            <span className='text-white'>World</span>
                            <span className='text-white'>Estate</span>
                        </h1>
                        <p className="text-sm text-white">
                            Real Estate Center
                        </p>
                    </div>
                </div>
               
            </div>
        </header>
    );
}




import Link from 'next/link';
import { useState } from 'react';

export const Navbar = () => {
    const [active, setActive] = useState(false);
    const handleClick = () => {
        setActive(!active);
    };

    return (
        <>
            <nav className='flex items-center flex-wrap bg-green-400 p-3 '>
                <Link href='/'>
                    <a className='inline-flex items-center p-2 mr-4 '>
            <span className='text-xl text-white font-bold uppercase tracking-wide'>
              Hnědé právo
            </span>
                    </a>
                </Link>
                <button
                    className=' inline-flex p-3 hover:bg-green-600 rounded lg:hidden text-white ml-auto hover:text-white outline-none'
                    onClick={handleClick}
                >
                    {/* Add your icon here */}
                </button>
                <div
                    className={`${
                        active ? '' : 'hidden'
                    }   w-full lg:inline-flex lg:flex-grow lg:w-auto`}
                >
                    <div className='lg:inline-flex lg:flex-row lg:ml-auto lg:w-auto w-full lg:items-center items-start  flex flex-col lg:h-auto'>
                        <Link href='/'>
                            <a className='lg:inline-flex lg:w-auto w-full px-3 py-2 rounded text-white font-bold items-center justify-center hover:bg-green-600 hover:text-white '>
                                Hlavní stránka
                            </a>
                        </Link>
                        <Link href='/databaze-hlasek'>
                            <a className='lg:inline-flex lg:w-auto w-full px-3 py-2 rounded text-white font-bold items-center justify-center hover:bg-green-600 hover:text-white'>
                                Databáze hlášek
                            </a>
                        </Link>
                        <Link href='/nahodna-hlaska'>
                            <a className='lg:inline-flex lg:w-auto w-full px-3 py-2 rounded text-white font-bold items-center justify-center hover:bg-green-600 hover:text-white'>
                                Generátor náhodných hlášek
                            </a>
                        </Link>
                        {/* Add more links as needed */}
                    </div>
                </div>
            </nav>
        </>
    );
};
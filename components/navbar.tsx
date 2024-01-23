import { useState } from 'react';
import Link from 'next/link';
import { useTheme } from 'next-themes';
import ThemeButton from "./theme-button";

export const Navbar = () => {
    const [active, setActive] = useState(false);
    const { theme, setTheme } = useTheme();

    const toggleTheme = () => {
        setTheme(theme === 'light' ? 'dark' : 'light');
    };

    const handleClick = () => {
        setActive(!active);
    };

    return (
        <nav className={`flex items-center flex-wrap p-3 ${active ? 'bg-green-400' : theme==="light" ? 'bg-gray-50' : 'bg-gray-900'}`}>
            <Link href='/'>
                <a className='inline-flex items-center p-2 mr-4'>
                    <span className={`text-xl font-bold uppercase tracking-wide ${active ? 'text-white' : 'text-gray-300'}`}>
                        Hnědé právo
                    </span>
                </a>
            </Link>

            <div className={`lg:inline-flex w-full lg:flex-grow lg:w-auto ${active ? 'block' : 'hidden'}`}>
                <div className='lg:inline-flex lg:flex-row lg:ml-auto lg:w-auto w-full lg:items-center items-start flex flex-col lg:h-auto'>
                    <Link href='/'>
                        <a className='lg:inline-flex w-full lg:w-auto px-3 py-2 rounded font-bold items-center justify-center hover:bg-green-600 hover:text-white'>
                            Hlavní stránka
                        </a>
                    </Link>
                    <Link href='/databaze-hlasek'>
                        <a className='lg:inline-flex w-full lg:w-auto px-3 py-2 rounded font-bold items-center justify-center hover:bg-green-600 hover:text-white'>
                            Databáze hlášek
                        </a>
                    </Link>
                    <Link href='/nahodna-hlaska'>
                        <a className='lg:inline-flex w-full lg:w-auto px-3 py-2 rounded font-bold items-center justify-center hover:bg-green-600 hover:text-white'>
                            Generátor náhodných hlášek
                        </a>
                    </Link>
                    {/* Add more links as needed */}
                </div>
            </div>

            <div className='ml-auto'>
                <ThemeButton />
            </div>
        </nav>
    );
};

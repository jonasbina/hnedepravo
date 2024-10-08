import React from 'react'
import Image from 'next/image'
import { useTheme } from "next-themes";

const ThemeButton = () => {
    const { systemTheme, theme, setTheme } = useTheme();
    const currentTheme = theme === 'system' ? systemTheme : theme;

    return (
        <button
            onClick={() => theme == "dark"? setTheme('light'): setTheme("dark")}
            className='bg-gray-800 dark:bg-gray-50 hover:bg-gray-600 dark:hover:bg-gray-300 transition-all duration-100 dark:text-white text-gray-800 px-8 py-2 text-2xl md:text-4xl rounded-lg '>
            <Image src={theme === 'dark' ? '/light-mode.svg' : '/dark-mode.svg'} height={24} width={24} alt="theme" />
        </button>
    )
}
export default ThemeButton


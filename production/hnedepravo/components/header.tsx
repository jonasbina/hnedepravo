import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'
import { useTheme } from 'next-themes'
import { useState, useEffect } from 'react'
const randomTexts = [
    'Vyčůrej se do mrazáku',
    '"To je tak debilní, miluju to!" - Albert Einstein',
    'Čte to vůbec někdo?',
    'Pullni ten trigger a bude z tebe n-',
    'Ahoj, je mi Jarda, jmenuji se jednačtyřicet a jsem youtuber!',
    'Dex dex dex -',
    'Věděli jste, že pokud přijdete o obě nohy, nebudete už moct chodit?',
    'JAKEJ ŠTEFAN? Však to je Elvis Presley!',
    'JAKEJ ŠTEFAN? Však to je Elvis Presley!',
    'JAKEJ ŠTEFAN? Však to je Elvis Presley!',
    'JAKEJ ŠTEFAN? Však to je Elvis Presley!',
    'Věděli jste, že jste nevěděli?',
    'Bagr je v podstatě traktor, který umí bagrovat.',
    'Nikdo nic neviděl',
    'Ondřeji prosím!',
];

const randomIndex = Math.floor(Math.random() * randomTexts.length);
const randomText = randomTexts[randomIndex];
const Header = () => {
    const [mounted, setMounted] = useState(false);
    const { theme } = useTheme();

    // After mounting, we have access to the theme
    useEffect(() => setMounted(true), []);

    if (!mounted) return null;

    return (
        <div className='w-full mx-auto text-center'>
            <Link href="/">
                <a>
                    <Image src={theme === 'dark' ? '/dark-logo.svg' : '/logo.svg'} height={400} width={1000} alt="logo" />
                </a>
            </Link>
            {/*<nav className="mt-4">*/}
            {/*    <Link href="/nahodnahlaska">*/}
            {/*        <a className="text-blue-500 hover:underline">Generátor náhodných hlášek</a>*/}
            {/*    </Link>*/}
            {/*</nav>*/}
            <footer style={{ textAlign: 'center', backgroundColor: 'transparent', color: theme === 'dark' ? 'white' : 'black', padding: '35px', fontSize: '1.6em', fontWeight: "bold" }}>
                {randomText}
            </footer>
        </div>
    )
}

export default Header
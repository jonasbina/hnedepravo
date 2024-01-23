import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'
import {useTheme} from 'next-themes'
import {useState, useEffect} from 'react'
import {Navbar} from "./navbar";

const randomTexts = [
    'Pullni ten trigger a bude z tebe n-',
    'Ahoj, je mi Jarda, jmenuji se  youtuber a jsem jednačtyřicet!',
    'Dex dex dex -',
    'Ondřeji prosím!',
    'Ty mi piješ můj Müllermilch?!?!',
    'Medpakvprcmech.',
    'Já jsem ričrd niksn!',
    'Hugo hihihi',
    'Štefan je náš král a spasitel lidstva.',
    'Heil Štefan.',
    'řechcem',
    'Hamás? More like Ham ass xdd (tohle radši ne xd)'
];

const randomIndex = Math.floor(Math.random() * randomTexts.length);
const randomText = randomTexts[randomIndex];
const Header = () => {
    const [mounted, setMounted] = useState(false);
    const {theme} = useTheme();


    // After mounting, we have access to the theme
    useEffect(() => setMounted(true), []);

    if (!mounted) return null;

    return (
        <div className='w-full mx-auto text-center'>
            <Navbar/>
            <div className={"max-w-full flex justify-center"}>
                <Link href="/">
                    <a>
                        <Image src={theme === 'light' ? '/logo.svg' : '/dark-logo.svg'} height={400} width={1000}
                               alt="logo"/>
                    </a>
                </Link>
            </div>
            <footer style={{
                textAlign: 'center',
                backgroundColor: 'transparent',
                color: theme === 'light' ? 'black' : 'white',
                padding: '35px',
                fontSize: '1.6em',
                fontWeight: "bold"
            }}>
                {randomText}
            </footer>
        </div>
    )
}

export default Header
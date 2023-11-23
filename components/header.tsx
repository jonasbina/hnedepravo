import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'
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
  return (

      <div className='w-full mx-auto text-center'>
          <Link href="/">
              <a>
                  <Image src="/logo.svg" height={400} width={635} alt="logo" />
              </a>
          </Link>

          <footer style={{ textAlign: 'center', backgroundColor: 'transparent', color: 'black', padding: '35px', fontSize: '1.6em', fontWeight: "bold"}}>
              {randomText}
          </footer>
      </div>


  )
}

export default Header

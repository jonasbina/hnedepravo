import Container from './container'
import { EXAMPLE_PATH } from '../lib/constants'

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
  
  const Footer = () => (
    <footer style={{ textAlign: 'center', backgroundColor: 'black', color: 'white', padding: '35px', fontSize: '1.6em' }}>
      {randomText}
    </footer>
  );
  
  export default Footer;
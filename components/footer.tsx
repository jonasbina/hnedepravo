import Container from './container'
import { EXAMPLE_PATH } from '../lib/constants'

const randomTexts = [
    'Vyčůrej se do mrazáku',
    '"To je tak debilní, miluju to!" - Albert Einstein',
    'Čte to vůbec někdo?',
    'Vyčůrej se do spacáku.',
    'Pullni ten trigger a bude z tebe n-',
    'Ahoj, jmenuji se Jarda je mi jednačtyřicet a jsem youtuber!',
    'Mňau',
    'Dex dex dex,',
    'Propaganda mňam',
    'ŠTEFAN? Však to je Elvis Presley!!'
  ];
  
  const randomIndex = Math.floor(Math.random() * randomTexts.length);
  const randomText = randomTexts[randomIndex];
  
  const Footer = () => (
    <footer style={{ textAlign: 'center', backgroundColor: 'black', color: 'white', padding: '35px', fontSize: '1.6em' }}>
      {randomText}
    </footer>
  );
  
  export default Footer;
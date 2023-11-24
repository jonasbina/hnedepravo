import Container from './container'
import { EXAMPLE_PATH } from '../lib/constants'
import { useState } from 'react';

const Footer = () => {
    const [rating, setRating] = useState(0);
    const [hoveredRating, setHoveredRating] = useState(0);

    const handleRating = (rate: number) => {
        setRating(rate);
        if (rate < 5) {
            alert('Ty negře dej tam 5 hvězd!');
        }
    };

    return (
        <footer className="p-4 bg-black text-white flex items-center justify-center">
            <div className="flex flex-col items-center text-center">
                <h1 className="mb-4 text-lg">Ohodnoť naši stránku!</h1>
                <div className="flex space-x-2 mb-4">
                    {[...Array(5)].map((_, i) => (
                        <button
                            onClick={() => handleRating(i + 1)}
                            onMouseEnter={() => setHoveredRating(i + 1)}
                            onMouseLeave={() => setHoveredRating(0)}
                            className="text-2xl cursor-pointer hover:text-yellow-500"
                            key={i}
                        >
                            {i + 1 <= (hoveredRating || rating) ? '★' : '☆'}
                        </button>
                    ))}
                </div>
                <p className="text-sm">Vážíme si Vaší zpětné vazby. Přesně proto žádné hodnocení neukládáme.
                    © Hnědé Právo Media 2023
                </p>

                <button
                    onClick={() => theme == "dark"? setTheme('light'): setTheme("dark")}
                    className='bg-gray-800 dark:bg-gray-50 hover:bg-gray-600 dark:hover:bg-gray-300 transition-all duration-100 text-white dark:text-gray-800 px-8 py-2 text-2xl md:text-4xl rounded-lg absolute bottom-32'>
                    Light Mode / Dark mode
                </button>
            </div>
        </footer>
    );
};

export default Footer;

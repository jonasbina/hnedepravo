import { useState } from 'react';

const Footer = () => {
    const [rating, setRating] = useState(0);
    const [hoveredRating, setHoveredRating] = useState(0);

    const handleRating = (rate: number) => {
        setRating(rate);
        if (rate < 5) {
            alert('Ty individuum černé pleti, dej tam 5 hvězd!');
        }
    };

    return (
        <footer className="p-4 bg-black text-white flex items-center justify-center">
            <div className="flex flex-col items-center text-center">
                <h1 className="mb-4 text-lg font-bold">Další části stránky</h1>
                <a className={"text-sm hover:text-blue-900"} href={"/nahodna-hlaska"}>Generátor náhodných hlášek</a>
                <a className={"text-sm hover:text-blue-900"} href={"/databaze-hlasek"}>Databáze hlášek</a>
                <a></a>
                <h1 className="mb-4 text-lg font-bold">Ohodnoť naši stránku!</h1>
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

            </div>
        </footer>
    );
};

export default Footer;

import Container from './container'
import { EXAMPLE_PATH } from '../lib/constants'
import { useState } from 'react';

const Footer = () => {
    const [rating, setRating] = useState(0);

    const handleRating = (rate: number) => {
        setRating(rate);
        if (rate < 5) {
            alert('Ty negře dej tam 5 hvězd!');
        }
    };

    return (
        <footer className="p-4 bg-black text-white flex items-center justify-center">
            <div className="flex flex-col items-center text-center">
                <h1 className="mb-4 text-lg">Please rate our website</h1>
                <div className="flex space-x-2 mb-4">
                    {[...Array(5)].map((_, i) => (
                        <button
                            onClick={() => handleRating(i + 1)}
                            className="text-2xl cursor-pointer hover:text-yellow-500"
                            key={i}
                        >
                            {i + 1 <= rating ? '★' : '☆'}
                        </button>
                    ))}
                </div>
                <p className="text-sm">Your feedback is important to us</p>
            </div>
        </footer>
    );
};

export default Footer;
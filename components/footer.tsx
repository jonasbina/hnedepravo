import Container from './container'
import { EXAMPLE_PATH } from '../lib/constants'
import { useState } from 'react';

const Footer = () => {
    const [rating, setRating] = useState(0);

    const handleRating = (rate: number) => {
        setRating(rate);
        if (rate < 5) {
            alert('The selected rating is less than 5!');
        }
    };

    return (
        <footer className="p-4 bg-gray-800 text-white">
            <div className="flex space-x-2">
                {[...Array(5)].map((_, i) => (
                    <button
                        onClick={() => handleRating(i + 1)}
                        className="text-2xl cursor-pointer"
                        key={i}
                    >
                        {i + 1 <= rating ? '★' : '☆'}
                    </button>
                ))}
            </div>
        </footer>
    );
};

export default Footer;
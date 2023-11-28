import { useState } from 'react';
import quotesData from '../public/quotes.json';

const getRandomQuote = (quotes) => {
    const randomIndex = Math.floor(Math.random() * quotes.length);
    return quotes[randomIndex];
};

const NahodnaHlaska = () => {
    const [currentQuote, setCurrentQuote] = useState(getRandomQuote(quotesData));

    const regenerateQuote = () => {
        setCurrentQuote(getRandomQuote(quotesData));
    };

    return (
        <div className="min-h-screen flex flex-col justify-center items-center">
            <div className="max-w-md p-4 bg-gray-200 rounded-md">
                <h1 className="text-2xl font-bold mb-4">Random Quote</h1>
                <blockquote className="italic text-gray-700">
                    "{currentQuote.Quote}"
                    <footer className="text-right text-gray-500">- {currentQuote.Author}</footer>
                </blockquote>
                <button
                    className="mt-4 bg-blue-500 text-white py-2 px-4 rounded-md hover:bg-blue-600 focus:outline-none"
                    onClick={regenerateQuote}
                >
                    Regenerate
                </button>
                <p className="mt-2">
                    <a href={`/posts/${currentQuote.Filename.replace('.md', '')}`} className="text-blue-500 hover:underline">
                        View original post
                    </a>
                </p>
            </div>
        </div>
    );
};

export default NahodnaHlaska;

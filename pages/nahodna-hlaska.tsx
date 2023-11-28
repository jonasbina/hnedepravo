import React, { useState } from 'react';
import quotesData from '../public/quotes.json';
import {Navbar} from "../components/navbar";
import Header from "../components/header";

const getRandomQuote = (quotes) => {
    const randomIndex = Math.floor(Math.random() * quotes.length);
    return quotes[randomIndex];
};

const NahodnaHlaska = () => {
    const [currentQuote, setCurrentQuote] = useState(getRandomQuote(quotesData));
    const [regenerateAnimation, setRegenerateAnimation] = useState(false);

    const regenerateQuote = () => {
        setRegenerateAnimation(true);
        setTimeout(() => {
            setCurrentQuote(getRandomQuote(quotesData));
            setRegenerateAnimation(false);
        }, 500); // Adjust the duration as needed
    };

    return (
        <div className="min-h-screen">
            <Header/>
        <div className="min-h-screen flex flex-col justify-center items-center">
            <h1 className="text-4xl font-bold mb-4 text-blue-600">Generátor Hlášek</h1>

            <div className={`max-w-md p-8 bg-gray-200 rounded-md shadow-lg transition-transform transform hover:scale-105 ${regenerateAnimation ? 'animate-fade-in' : ''}`}>

                <blockquote className="text-xl italic text-gray-700 mb-6">
                    {currentQuote.quote}
                    <footer className="text-right text-gray-500">{currentQuote.author}</footer>
                </blockquote>

                <button
                    className="bg-blue-500 text-white py-2 px-4 rounded-md hover:bg-blue-600 focus:outline-none transition-transform transform hover:scale-105"
                    onClick={regenerateQuote}
                >
                    Generovat znovu
                </button>
                <p className="mt-2">
                    <a href={`/posts/${currentQuote.fileName.replace('.md', '')}`} className="text-blue-500 hover:underline">
                        Zobrazit originální díl Hnědého Práva
                    </a>
                </p>
            </div>
        </div>
        </div>
    );
};

export default NahodnaHlaska;

import { useState } from 'react';
import { getAllPosts } from '../lib/api';

const NahodnaHlaska = ({ hlasky }: { hlasky: string[] }) => {
    const [currentHlaska, setCurrentHlaska] = useState<string>(getRandomHlaska());

    function getRandomHlaska() {
        const randomIndex = Math.floor(Math.random() * hlasky.length);
        return hlasky[randomIndex];
    }

    function handleGenerate() {
        setCurrentHlaska(getRandomHlaska());
    }

    return (
        <div>
            <h1 className="text-3xl font-bold mb-4">Náhodná hláška</h1>
            <p className="text-lg">{currentHlaska}</p>
            <button
                className="bg-blue-500 text-white px-4 py-2 mt-4 rounded"
                onClick={handleGenerate}
            >
                Generovat novou hlášku
            </button>
        </div>
    );
};

export default NahodnaHlaska;

export async function getStaticProps() {
    // Fetch data from your markdown files
    const posts = getAllPosts(['Hlášky týdne']);
    const hlasky = posts[0]?.['Hlášky týdne'] || [];

    return {
        props: {
            hlasky,
        },
    };
}
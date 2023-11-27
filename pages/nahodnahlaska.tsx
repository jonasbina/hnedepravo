import { useState } from 'react';
import { getAllPosts } from '../lib/api';
import path from 'path';
import matter from 'gray-matter';
import fs from "fs";


const NahodnaHlaska = ({ hlasky }: { hlasky: string[] }) => {
    const [currentHlaska, setCurrentHlaska] = useState<string>(getRandomHlaska());

    function getRandomHlaska() {
        const randomIndex = Math.floor(Math.random() * hlasky.length);
        return getQuotes()[randomIndex];
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
const getQuotes = () => {
    const postsDirectory = path.join(process.cwd(), '_posts');
    const filenames = fs.readdirSync(postsDirectory);
    let allQuotes = [];

    filenames.forEach((filename) => {
        const filePath = path.join(postsDirectory, filename);
        const fileContents = fs.readFileSync(filePath, 'utf8');
        const { content } = matter(fileContents);

        const startIndex = content.indexOf('## **Hlášky týdne**');
        const endIndex = content.indexOf('## **', startIndex + 1);
        const quotesSection = content.slice(startIndex, endIndex !== -1 ? endIndex : undefined);

        const quoteRegex = /„(.+?)“\s*-\s*(.+)/g;
        let match;
        while ((match = quoteRegex.exec(quotesSection)) !== null) {
            allQuotes.push({ quote: match[1], author: match[2] });
        }
    });

    return allQuotes;
};
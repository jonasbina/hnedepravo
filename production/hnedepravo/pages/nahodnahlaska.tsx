import { useState } from 'react';
import { getAllPosts } from '../lib/api';
import path from 'path';
import matter from 'gray-matter';
import fs from "fs";


const NahodnaHlaska = ({ hlasky }: { hlasky: string[] }) => {
    // const [currentHlaska, setCurrentHlaska] = useState<string>(getRandomHlaska());

    // function getRandomHlaska() {
    //     const randomIndex = Math.floor(Math.random() * hlasky.length);
    //     return getQuotes()[randomIndex];
    // }
    //
    // function handleGenerate() {
    //     setCurrentHlaska(getRandomHlaska());
    // }

    return (
        <div>
            <h1 className="text-3xl font-bold mb-4">Nevím jak si to našel, každopádně tahle stránka zatím nefunguje :(</h1>
            <p className="text-lg">{}</p>
            <button
                className="bg-blue-500 text-white px-4 py-2 mt-4 rounded"
                // onClick={}
            >
                Zbytečné tlačítko
            </button>
        </div>
    );
};

export default NahodnaHlaska;
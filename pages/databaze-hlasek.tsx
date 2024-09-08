// DatabazeHlasek.js
import React, { useState } from 'react';
import quotesData from '../public/quotes.json';
import { Navbar } from "../components/navbar";
import Header from "../components/header";

const DatabazeHlasek = () => {
    const [selectedAuthor, setSelectedAuthor] = useState('');
    const [selectedFile, setSelectedFile] = useState('');

    const uniqueAuthors = [...new Set(quotesData.map((quote) => quote.author))];
    const uniqueFiles = [...new Set(quotesData.map((quote) => quote.name))];

    const filterQuotes = () => {
        let filteredQuotes = quotesData;

        if (selectedAuthor) {
            filteredQuotes = filteredQuotes.filter((quote) => quote.author === selectedAuthor);
        }

        if (selectedFile) {
            filteredQuotes = filteredQuotes.filter((quote) => quote.name === selectedFile);
        }

        // Sort quotes by the 'fileName' property in reverse order
        filteredQuotes.sort((a, b) => b.name.localeCompare(a.name));

        return filteredQuotes;
    };

    // Function to remove leading zeros from the filename
    const removeLeadingZeros = (filename) => {
        return filename.replace(/^0+/, '');
    };

    return (
        <div className="min-h-screen">
            <Navbar/>
            <div className="max-w-4xl mx-auto p-4">
                <h1 className="text-4xl font-bold mb-4 text-blue-600">Databáze Hlášek</h1>

                <div className="flex space-x-4 mb-4">
                    <div>
                        <label htmlFor="authorSelect" className="block text-sm font-medium text-gray-700">
                            Autor:
                        </label>
                        <select
                            id="authorSelect"
                            onChange={(e) => setSelectedAuthor(e.target.value)}
                            value={selectedAuthor}
                            className="mt-1 p-2 border border-gray-300 rounded-md focus:outline-none focus:ring focus:border-blue-500"
                        >
                            <option value="">Všechny</option>
                            {uniqueAuthors.map((author) => (
                                <option key={author} value={author}>
                                    {author}
                                </option>
                            ))}
                        </select>
                    </div>

                    <div>
                        <label htmlFor="fileSelect" className="block text-sm font-medium text-gray-700">
                            Soubor:
                        </label>
                        <select
                            id="fileSelect"
                            onChange={(e) => setSelectedFile(e.target.value)}
                            value={selectedFile}
                            className="mt-1 p-2 border border-gray-300 rounded-md focus:outline-none focus:ring focus:border-blue-500"
                        >
                            <option value="">Všechny</option>
                            {uniqueFiles.map((file) => (
                                <option key={file} value={file}>
                                    {file}
                                </option>
                            ))}
                        </select>
                    </div>
                </div>

                <div className="grid gap-4">
                    {filterQuotes().map((quote, index) => (
                        <div key={index} className="bg-gray-100 p-4 rounded-md shadow-md">
                            <blockquote className="text-lg italic text-gray-700">
                                {quote.quote}
                                <footer className="text-right text-gray-500 mt-2">{quote.author}</footer>
                            </blockquote>
                            <p className="mt-2">
                                <a href={`/posts/${removeLeadingZeros(quote.fileName.replace('.md', ''))}`}
                                   className="text-blue-500 hover:underline">
                                    Zobrazit originální díl Hnědého Práva
                                </a>
                            </p>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default DatabazeHlasek;

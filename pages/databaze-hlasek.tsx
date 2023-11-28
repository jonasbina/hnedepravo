// DatabazeHlasek.js
import React, { useState } from 'react';
import quotesData from '../public/quotes.json';

const DatabazeHlasek = () => {
    const [selectedAuthor, setSelectedAuthor] = useState('');
    const [selectedFile, setSelectedFile] = useState('');

    const uniqueAuthors = [...new Set(quotesData.map((quote) => quote.author))];

    const uniqueFiles = [...new Set(quotesData.map((quote) => quote.fileName))];
    const filterQuotes = () => {
        let filteredQuotes = quotesData;

        if (selectedAuthor) {
            filteredQuotes = filteredQuotes.filter((quote) => quote.author === selectedAuthor);
        }

        if (selectedFile) {
            filteredQuotes = filteredQuotes.filter((quote) => quote.fileName === selectedFile);
        }

        return filteredQuotes;
    };

    return (
        <div>
            <h1 className="text-4xl font-bold mb-4 text-blue-600">Databáze Hlášek</h1>

            <div>
                <label htmlFor="authorSelect" className="mr-2">
                    Autor:
                </label>
                <select
                    id="authorSelect"
                    onChange={(e) => setSelectedAuthor(e.target.value)}
                    value={selectedAuthor}
                >
                    <option value="">Všechny</option>
                    {uniqueAuthors.map((author) => (
                        <option key={author} value={author}>
                            {author}
                        </option>
                    ))}
                </select>
            </div>

            <div className="mt-2">
                <label htmlFor="fileSelect" className="mr-2">
                    Soubor:
                </label>
                <select
                    id="fileSelect"
                    onChange={(e) => setSelectedFile(e.target.value)}
                    value={selectedFile}
                >
                    <option value="">Všechny</option>
                    {uniqueFiles.map((file) => (
                        <option key={file} value={file}>
                            {file}
                        </option>
                    ))}
                </select>
            </div>

            <div className="mt-4">
                {filterQuotes().map((quote, index) => (
                    <div key={index} className="mb-4">
                        <blockquote className="text-lg italic text-gray-700">
                            "{quote.quote}"
                            <footer className="text-right text-gray-500">- {quote.author}</footer>
                        </blockquote>
                        <p className="mt-2">
                            <a href={`/posts/${quote.fileName.replace('.md', '')}`} className="text-blue-500 hover:underline">
                                Zobrazit originální díl Hnědého Práva
                            </a>
                        </p>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default DatabazeHlasek;

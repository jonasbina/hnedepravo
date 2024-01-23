import React, {useState} from 'react';
import quotesData from '../public/quotes.json';
import {Navbar} from '../components/navbar';
import Header from '../components/header';

const getRandomQuote = (quotes) => {
    const randomIndex = Math.floor(Math.random() * quotes.length);
    return quotes[randomIndex];
};

const Legal = () => {
    return (
        <div className="min-h-screen">
            <Navbar/>
            <div className="max-w-4xl mx-auto p-4">
                <h1 className="text-4xl font-bold mb-4 text-blue-600">Legal Notice</h1>

                <div className="mb-6">
                    <h2 className="text-2xl font-bold mb-2">English:</h2>
                    <p className="mb-4">
                        The content published on "Hnědé právo," our Czech parody newspaper, is purely satirical and
                        fictional. The opinions expressed in articles do not represent the views of the authors and
                        should not be taken seriously. Any resemblance to real persons or events is purely coincidental.
                    </p>
                </div>

                <div>
                    <h2 className="text-2xl font-bold mb-2">Czech:</h2>
                    <p className="mb-4">
                        Obsah zveřejněný v časopise "Hnědé právo," naší české parodické novině, je čistě satirický a
                        fikční. Názory vyjádřené v článcích neodrážejí názory autorů a neměly by být brány vážně.
                        Jakákoli podobnost s reálnými osobami nebo událostmi je čistě náhodná.
                    </p>
                </div>

                <div>
                    <h2 className="text-2xl font-bold mb-2">Arabic:</h2>
                    <p className="mb-4">
                        المحتوى المنشور في "Hnědé právo"، صحيفتنا التشيكية الساخرة، هو بحت ساخر وخيالي. الآراء المعبر
                        عنها في المقالات لا تمثل آراء الكتّاب ولا يجب أخذها بجد. أي تشابه مع أشخاص أو أحداث حقيقية هو
                        محض صدفة.
                    </p>
                </div>
            </div>
        </div>
    );
};


export default Legal;

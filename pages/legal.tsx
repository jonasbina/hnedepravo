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

                        The editorial board of HNĚDÉHO PRÁVO disclaims any responsibility for the texts published in the Zidestotelés' Window. Any complaints or objections to these texts should be addressed to Kryštof Klenovský in person or by writing to him at +420 792 306 909.
                    </p>
                </div>

                <div>
                    <h2 className="text-2xl font-bold mb-2">Czech:</h2>
                    <p className="mb-4">
                        Obsah zveřejněný v časopise "Hnědé právo," naší české parodické novině, je čistě satirický a
                        fikční. Názory vyjádřené v článcích neodrážejí názory autorů a neměly by být brány vážně.
                        Jakákoli podobnost s reálnými osobami nebo událostmi je čistě náhodná.

                        Redakce HNĚDÉHO PRÁVA se vzdává jakékoliv odpovědnosti za texty zveřejňované v Židestotelésově okénku. Případné stížnosti či výhrady k těmto textům říkejte Kryštofovi Klenovskému osobně nebo mu napište na číslo +420 792 306 909.
                    </p>
                </div>

                <div>
                    <h2 className="text-2xl font-bold mb-2">Arabic:</h2>
                    <p className="mb-4">
                        المحتوى المنشور في "Hnědé právo"، صحيفتنا التشيكية الساخرة، هو بحت ساخر وخيالي. الآراء المعبر
                        عنها في المقالات لا تمثل آراء الكتّاب ولا يجب أخذها بجد. أي تشابه مع أشخاص أو أحداث حقيقية هو
                        محض صدفة.
                        
                        هيئة تحرير HNEDE PRAVO تخلي مسؤوليتها عن النصوص المنشورة في نافذة Zidestotelés. يجب إرسال أي شكاوى أو اعتراضات على هذه النصوص إلى Kryštof Klenovský شخصيًا أو عن طريق الكتابة إليه على الرقم +420 792 306 909.
                    </p>
                </div>
            </div>
        </div>
    );
};


export default Legal;

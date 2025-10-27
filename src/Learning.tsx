import { useState } from 'react';
import './Learning.scss';

import { Worker, Viewer, SpecialZoomLevel } from '@react-pdf-viewer/core';
import { title } from 'process';



const Learning = () => {

    const learningResources = [
        {
            title: 'Java notatki v1.0',
            desc: 'Notatki z Javy, obejmuje zakres od kompletnych podstaw do bardziej zaawansowanych tematów jak klasy wyjątki i binarki',
            link: './java.pdf'
        },
        {
            title: 'Zbrodnie Ha*dukiewicza',
            desc: 'Notatki z C++ obejmujące podstawy języka, wskaźniki, klasy i dziedziczenie',
            link: './hajdukiewicz.pdf'
        },
        {
            title: 'Jarek fanatyk drukarek',
            desc: 'Notatki z lekcji urządzeń techniki komputerowej, obejmujące elementy organizacji systemów komputerowych, architekturę komputerów, logiki dla informatyków, układów cyfrowych i budowy komputerów',
            link: './jarek.pdf'
        },
        {
            title: 'Sieci kąkuterowe',
            desc: 'Notatki z sieci komputerowych, głównie obejmujące zagadnienia teoretyczne. Trochę niedopracowane bo to z 2022 i robione dość na szybko przed sprawdzianem',
            link: './sieci.pdf'
        }
    ]

    return (
        <>
            <Worker workerUrl="https://unpkg.com/pdfjs-dist@3.4.120/build/pdf.worker.min.js">
                <ul className='learning-list'>
                    {learningResources.map((resource, index) => <LearningResource key={index} {...resource} />)}
                </ul>
            </Worker>
        </>
    );
};

type LearningResourceProps = {
    title: string;
    desc: string;
    link: string;
};

const LearningResource = ({ title, desc, link }: LearningResourceProps) => {

    const [showingDesc, setShowingDesc] = useState(false);

    const [showingPDF, setShowingPDF] = useState(false);

    const [pagesArr, setPagesArr] = useState<number[]>([]);

    const openPDF = () => {
        setShowingPDF(true);
        setShowingDesc(false);
    }

    return (
        <>
            <li>
                <h3>{title}</h3>
                <section onClick={() => setShowingDesc(!showingDesc)}>
                    <article className={`${showingDesc ? 'blurred' : ''} unblurred`}>
                        <Viewer defaultScale={0.50} pageLayout={{
                            buildPageStyles({ numPages, pageIndex, scrollMode, viewMode, }) {
                                return pageIndex !== 0 ? { display: 'none' } : { display: 'block' }
                            }
                        }} fileUrl={link} />
                    </article>
                    {
                        showingDesc ? <div className='desc'>
                            <p>{desc}</p>
                            <b onClick={openPDF}>Otwórz</b>
                            <a href={link} download>Pobierz</a>
                        </div> : null
                    }
                </section>
            </li>
            {
                showingPDF ? <section className='pdf-viewer-container'> <div className='pdf-viewer'>

                    <Viewer setRenderRange={(visibleRenderRange) => {
                        return { startPage: 0, endPage: visibleRenderRange.numPages }
                    }} defaultScale={1.2} fileUrl={link} initialPage={20} />
                </div> <div className='close-btn' onClick={() => setShowingPDF(false)}></div> </section> : null
            }
        </>
    );
};

export default Learning;
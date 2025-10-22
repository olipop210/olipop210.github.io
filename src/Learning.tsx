import { useState } from 'react';
import './Learning.scss';

import { Document, Page, pdfjs } from 'react-pdf';

pdfjs.GlobalWorkerOptions.workerSrc = new URL(
    'pdfjs-dist/build/pdf.worker.min.mjs',
    import.meta.url,
).toString();


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
            title: 'F*stowicz ty k*rwo',
            desc: 'Notatki z lekcji urządzeń techniki komputerowej, obejmujące elementy organizacji systemów komputerowych, architekturę komputerów, logiki dla informatyków, układów cyfrowych i budowy komputerów',
            link: './fastowicz.pdf'
        }
    ]

    return (
        <>
            <ul className='learning-list'>
                {learningResources.map((resource, index) => <LearningResource key={index} {...resource} />)}
            </ul>
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

    const onDocumentLoadSuccess = ({ numPages }: { numPages: number }) => {
        const pages = Array.from({ length: numPages }, (_, i) => i + 1);
        setPagesArr(pages);
        console.log('Pages array: ', pages);
    }

    return (
        <>
            <li>
                <h3>{title}</h3>
                <section onClick={() => setShowingDesc(!showingDesc)}>
                    <Document className={`${showingDesc ? 'blurred' : ''} unblurred`} renderMode='canvas' file={window.location + link} >
                        <Page renderAnnotationLayer={false} canvasBackground='transparent' renderTextLayer={false} pageNumber={1} width={300} />
                    </Document>
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

                    <Document renderMode='canvas' onLoadSuccess={onDocumentLoadSuccess} file={link} >
                        {
                            pagesArr.map((pageNum) => (
                                <Page key={pageNum} renderAnnotationLayer={false} canvasBackground='transparent' renderTextLayer={false} pageNumber={pageNum} width={800} />
                            ))
                        }
                    </Document>
                </div> <div className='close-btn' onClick={() => setShowingPDF(false)}></div> </section> : null
            }
        </>
    );
};

export default Learning;
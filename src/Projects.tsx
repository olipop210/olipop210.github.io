import { useState } from 'react'
import './Projects.scss'

const Projects = () => {

    type project = {
        title: string,
        desc: string,
        icon: string,
        role?: string,
        link?: string,
        github?: string,
        platforms: platform[]
        technologies: technology
    }

    type platform = {
        name: string,
        icon: string
    }

    type technology = {
        frontend?: { name: string, icon: string }[],
        backend?: { name: string, icon: string }[],
    }

    const [showingDetails, setShowingDetails] = useState<project | null>(null);

    const projects: project[] = [
        {
            title: 'Fishki (2024-2025)',
            desc: `Aplikacja umożliwiająca naukę za pomocą fiszek. 
                    Prosta w obsłudze, zawierająca edytor ułatwiający szybkie tworzenie zestawów. 
                    Posiada tryb 1v1 do rywalizacji ze znajomym`,
            icon: 'fishki.png',
            link: 'https://fishki.rurbanski.pl/',
            role: `Projekt początkowo grupowy, gdzie zajmowałem się frontendem, 
                    po zakończeniu zabawy w szkole przejąłem projekt i dokończyłem we własnym zakresie. `,
            platforms: [
                { name: `Web (Desktop/Mobile)`, icon: 'web' }
            ],
            technologies: {
                frontend: [{ name: 'Vite (React/TS/React Router)', icon: 'vite.png' }, { name: 'Sass', icon: 'sass.png' }, { name: 'Material UI', icon: 'mui.svg' }],
                backend: [{ name: 'ExpressJS (TS)', icon: "express.png" }, { name: 'MongoDB', icon: 'mongo.svg' }, { name: 'Prisma ORM', icon: 'prisma.svg' }],
            }
        },
        {
            title: 'Noted/Noted Reborn (2023-2025)',
            desc: `Aplikacja służąca do dzielenia się swoimi notatkami z innymi, jak i korzystania z notatek udostępnionych przez innych. 
                    Takie knowunity zanim powstało knowunity XD`,
            icon: 'noted.png',
            role: `Projekt grupowy - początkowo zajmowałem się frontendem aplikacji mobilnej, potem do tego pomagałem też pisać backend. 
                    Pisany był w ramach praktyk zawodowych i jako projekt na festiwal. 
                    Obecnie zajmuję się ożywieniem projektu i poprawkami (w kodzie, żeby pod portfolio było)`,
            platforms: [
                { name: 'Web (desktop)', icon: 'web' },
                { name: 'Mobile (Android/iOS App)', icon: 'mobile' }
            ],
            technologies: {
                frontend: [{ name: 'React native (Expo-workflow, JS)', icon: 'expo.svg', }, { name: 'React-navigator', icon: 'rnNavigator.svg' }, { name: 'CSS', icon: 'css.png' }],
                backend: [{ name: 'PHP (kiedyś)', icon: 'php.png' }, { name: 'ExpressJS (teraz, TS)', icon: 'express.png' }, { name: 'prima ORM', icon: 'prisma.svg' }, { name: 'mySQL', icon: 'mysql.png' }]
            }
        },
        {
            title: 'Rockedle (2025)',
            desc: `Prosta gra przeglądarkowe (typu loldle, pockedle), ale o tematyce rakiet kosmicznych
                    Trzeba dopisać kilka rzeczy ale w gruncie rzeczy grywalna`,
            icon: 'rockedle',
            platforms: [
                { name: 'Web (desktop, na mobilce trzeba jeszcze style dopracować)', icon: 'web' }
            ],
            technologies: {
                frontend: [{ name: 'Vite (React/TS)', icon: 'vite.png' }, { name: 'Sass', icon: 'sass.png' }],
            }
        },
        {
            title: 'olipop210.github.io (2025)',
            desc: 'Projekt tej właśnie strony. Prosta, sam frontend, bez żadnych zabaw na serwerze, prosta do postawienia na gh-sites',
            icon: 'olipop210.svg',
            platforms: [
                { name: 'Web (desktop/mobile)', icon: 'web' }
            ],
            github: 'https://github.com/olipop210/olipop210.github.io',
            technologies: {
                frontend: [{ name: 'React (TS)', icon: 'react.png' }, { name: 'Sass', icon: 'sass.png' }, { name: 'React-PDF', icon: 'reactPDF.png' }]
            }
        },
        {
            title: 'Sunset Locator (2025)',
            desc: "Aplikacja pokazuje gdzie obecnie na świecie jest zachód słońca. Mega prosta stronka robiłem na kolanie ",
            icon: 'sunsetLocator.svg',
            link: 'https://olipop210.github.io/Sunset-Locator/',
            github: 'https://github.com/olipop210/Sunset-Locator',
            platforms: [
                { name: 'Web (desktop/mobile)', icon: 'web' }
            ],
            technologies: {
                frontend: [{ name: 'Vite (React/TS)', icon: 'vite.png' }, { name: 'Sass', icon: 'sass.png' }]
            }
        }
    ]

    const ProjectDetails = ({ project }: { project: project }) => {

        const [notFound, setNotFound] = useState(false);

        return (
            <article className='proj-details'>
                <h3>{project.title}</h3>
                <section>
                    <div className='descWrapper'>
                        <img srcSet={notFound ? `./projectIcons/notFound.svg` : `./projectIcons/${project.icon}`} onError={() => setNotFound(true)} alt={project.title} />
                        <p className='project-desc'>{project.desc}</p>
                        {project.link && <p className='project-link'><strong>Link:</strong> <a href={project.link} target="_blank" rel="noopener noreferrer">{project.link}</a></p>}
                        {project.github && <p className='project-github'><strong>GitHub:</strong> <a href={project.github} target="_blank" rel="noopener noreferrer">{project.github}</a></p>}
                        {project.role && <p className='project-role'><strong>Moja rola:</strong> {project.role}</p>}
                    </div>
                    <div className='project-platforms'>
                        <strong>Platformy</strong>
                        <ul>
                            {project.platforms.map((platform, pIndex) => (
                                <li key={pIndex} className='platform-item'>
                                    <img src={platform.icon == 'web' ? './projectIcons/network.svg' : './projectIcons/mobile.svg'} alt={platform.name} />
                                    <span>{platform.name}</span>
                                </li>
                            ))}
                        </ul>
                    </div>
                    <div className='project-technologies'>
                        <strong>Technologie:</strong>
                        <div className='tech-section'>
                            {project.technologies.frontend && (
                                <ul>
                                    {project.technologies.frontend.map((tech, tIndex) => (
                                        <li key={tIndex} className='tech-item'>
                                            <img src={`./projectIcons/${tech.icon}`} alt={tech.name} />
                                            <span>{tech.name}</span>
                                        </li>
                                    ))}
                                </ul>
                            )}
                            {project.technologies.backend && (
                                <ul>
                                    {project.technologies.backend.map((tech, tIndex) => (
                                        <li key={tIndex} className='tech-item'>
                                            <img src={`./projectIcons/${tech.icon}`} alt={tech.name} />
                                            <span>{tech.name}</span>
                                        </li>
                                    ))}
                                </ul>
                            )}
                        </div>
                    </div>
                </section>
                <div className='close-btn' onClick={() => setShowingDetails(null)}></div>
            </article>
        )
    }

    const ListElement = ({ project, index }: { project: project, index: number }) => {

        const [notFound, setNotFound] = useState(false);

        return (
            <li key={index} onClick={() => { setShowingDetails(project) }} className='project-card'>
                <div className={`project-icon`}>
                    <img onError={() => { setNotFound(true) }} src={`./projectIcons/${notFound ? `notFound.svg` : project.icon}`} alt={project.title} />
                </div>
                <h2>{project.title}</h2>
            </li>
        )
    }

    return (<>
        <ul className='projects-list'>
            {projects.map((project, index) => (
                <ListElement project={project} index={index} key={index} />
            ))}
        </ul>
        {showingDetails ? <ProjectDetails project={showingDetails} /> : null}
    </>
    )
}

export default Projects

import './Projects.scss'

const Projects = () => {

    type project = {
        title: string,
        desc: string,
        icon: string,
        role?: string,
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

    const projects: project[] = [
        {
            title: 'Fishki (2024-2025)',
            desc: `Aplikacja umożliwiająca naukę za pomocą fiszek. 
                    Prosta w obsłudze, zawierająca edytor ułatwiający szybkie tworzenie zestawów. 
                    Posiada tryb 1v1 do rywalizacji ze znajomym`,
            icon: 'fishki.png',
            role: `Projekt początkowo grupowy, gdzie zajmowałem się frontendem, 
                    po zakończeniu zabawy w szkole przejąłem projekt i dokończyłem we własnym zakresie. `,
            platforms: [
                { name: `Platformy - Web (Desktop/Mobile)`, icon: 'web' }
            ],
            technologies: {
                frontend: [{ name: 'Vite (React/TS/React Router)', icon: 'vite.svg' }, { name: 'Sass', icon: 'sass.png' }, { name: 'Material UI', icon: 'mui.svg' }],
                backend: [{ name: 'ExpressJS (TS)', icon: "express.png" }, { name: 'MongoDB', icon: 'mongo.svg' }, { name: 'Prisma ORM', icon: 'prisma.svg' }],
            }
        },
        {
            title: 'Noted/Noted Reborn (2023-2025)',
            desc: `Aplikacja służąca do dzielenia się swoimi notatkami z innymi, jak i korzystania z notatek udostępnionych przez innych. 
                    Takie knowunity zanim powstało knowunity XD`,
            icon: 'noted',
            role: `Projekt grupowy - początkowo zajmowałem się frontendem aplikacji mobilnej, potem do tego pomagałem też pisać backend. 
                    Pisany był w ramach praktyk zawodowych i jako projekt na festiwal. 
                    Obecnie zajmuję się ożywieniem projektu i poprawkami (w kodzie, żeby pod portfolio było)`,
            platforms: [
                { name: 'Web (desktop)', icon: 'web' },
                { name: 'Mobile (Android/iOS App)', icon: 'mobile' }
            ],
            technologies: {
                frontend: [{ name: 'React native (Expo-workflow, JS)', icon: 'expo', }, { name: 'React-navigator', icon: 'rnNavigator.svg' }, { name: 'CSS', icon: 'css' }],
                backend: [{ name: 'PHP (kiedyś)', icon: 'php' }, { name: 'ExpressJS (teraz, TS)', icon: 'express' }, { name: 'prima ORM', icon: 'prisma' }, { name: 'mySQL', icon: 'mysql' }]
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
                frontend: [{ name: 'Vite (React/TS)', icon: 'vite' }, { name: 'Sass', icon: 'sass' }],
            }
        },
        {
            title: 'olipop210.github.io (2025)',
            desc: 'Projekt tej właśnie strony. Prosta, sam frontend, bez żadnych zabaw na serwerze, prosta do postawienia na gh-sites',
            icon: 'olipop210.svg',
            platforms: [
                { name: 'Web (desktop/mobile)', icon: 'web' }
            ],
            technologies: {
                frontend: [{ name: 'React (TS)', icon: 'react' }, { name: 'Sass', icon: 'sass' }, { name: 'React-PDF', icon: 'reactPDF' }]
            }
        }
    ]

    const ProjectDetails = (project: project) => {
        return (<>
            <h3>{project.title}</h3>
            <p className='project-desc'>{project.desc}</p>
            {project.role && <p className='project-role'><strong>Moja rola:</strong> {project.role}</p>}
            <div className='project-platforms'>
                <strong>Platformy:</strong>
                <ul>
                    {project.platforms.map((platform, pIndex) => (
                        <li key={pIndex} className='platform-item'>
                            <img src={`./icons/platforms/${platform.icon}.svg`} alt={platform.name} />
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
                </div>
            </div></>
        )
    }

    return (
        <ul className='projects-list'>
            {projects.map((project, index) => (
                <li key={index} className='project-card'>
                    <div className={`project-icon`}>
                        <img src={`./projectIcons/${project.icon}`} alt={project.title} />
                    </div>
                    <h2>{project.title}</h2>
                </li>
            ))}
        </ul>
    )
}

export default Projects

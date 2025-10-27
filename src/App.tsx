import { useState } from 'react';
import './App.scss';
import Learning from './Learning';
import Projects from './Projects';
import AboutMe from './AboutMe';


function App() {

  const [panelData, setPanelData] = useState<string | null>(null);

  const [icon1Gradient, setIcon1Gradient] = useState('radial-gradient(circle at 100%, rgb(189, 83, 255) 0%, rgb(33, 4, 255) 100%)');
  const [icon2Gradient, setIcon2Gradient] = useState('radial-gradient(135deg, rgb(189, 83, 255) 0%, rgb(33, 4, 255) 100%)');
  const [icon3Gradient, setIcon3Gradient] = useState('radial-gradient(135deg, rgb(189, 83, 255) 0%, rgb(33, 4, 255) 100%)');

  const gradientUpdate = (e: React.MouseEvent, cardClass: string) => {
    try {
      const card = document.querySelector(`.${cardClass}`) as HTMLElement;
      const rect = card.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;
      console.log(x, y);
    }
    catch (err) {
      console.log(err);
    }

  }

  return (
    <main className="App">
      <header>
        <h1>Lorem ipsum</h1>
        <h3>Tu miał być podtytuł</h3>
      </header>
      <article>
        <section onClick={() => setPanelData('about-me')} className='about-me-card'>
          <Icon className='acc-icon' />
          <p className='hiddenText'>O mnie</p>
        </section>
        <section onClick={() => setPanelData('learning-materials')} className='learning-materials-card'>
          <Icon className='learn-icon' />
          <p className='hiddenText'>Materiały do nauki</p>
        </section>
        <section onClick={() => setPanelData('projects')} className='projects-card'>
          <Icon className='proj-icon' />
          <p className='hiddenText'>Projekty</p>
        </section>
      </article>
      <section style={{ opacity: panelData ? 1 : 0 }} className='panel-title'>
        {panelData === 'about-me' && <h2>O mnie</h2>}
        {panelData === 'learning-materials' && <h2>Materiały do nauki</h2>}
        {panelData === 'projects' && <h2>Projekty</h2>}
        <div onClick={() => setPanelData(null)} className='close-icon'></div>
      </section>
      <section style={{ transform: panelData ? 'translateY(0dvh)' : 'translateY(75dvh)' }} className='information-panel'>
        {panelData === 'about-me' && <AboutMe />}
        {panelData === 'learning-materials' && <Learning />}
        {panelData === 'projects' && <Projects />}
      </section>
    </main>
  );
}

const Icon = ({ className }: { className: string }) => {

  const gradientUpdate = (e: React.MouseEvent) => {
    setIsHovered(true);
    try {
      const icon = document.querySelector(`.${className}`) as HTMLElement;
      const rect = icon.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;
      setGradient(`radial-gradient(circle at ${x}px ${y}px, rgb(189, 83, 255) 0%, rgb(33, 4, 255) 100%)`);
    }
    catch (err) {
      console.log(err);
    }
  }

  const [isHovered, setIsHovered] = useState(false);
  const [gradient, setGradient] = useState('radial-gradient(circle at 100%, rgb(189, 83, 255) 0%, rgb(33, 4, 255) 100%)');

  return (
    <div onMouseMove={gradientUpdate} onMouseLeave={() => setIsHovered(false)} style={{ background: isHovered ? gradient : '' }} className={className}></div>
  )
}

export default App;

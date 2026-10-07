import { useEffect, useState } from 'react';
import Sidebar from './components/Sidebar.jsx';
import MobileHeader from './components/MobileHeader.jsx';
import Home from './components/Home.jsx';
import About from './components/About.jsx';
import Projects from './components/Projects.jsx';
import Resume from './components/Resume.jsx';
import Contact from './components/Contact.jsx';
import Footer from './components/Footer.jsx';

const SECTIONS = ['home', 'about', 'projects', 'resume', 'contact'];

export default function App() {
  const [activeSection, setActiveSection] = useState('home');

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id);
          }
        });
      },
      { rootMargin: '-40% 0px -50% 0px' }
    );
    SECTIONS.forEach((id) => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });
    return () => observer.disconnect();
  }, []);

  const browseProjects = () => {
    document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen bg-zinc-50 text-zinc-900">
      <Sidebar activeSection={activeSection} />
      <MobileHeader />

      <main className="lg:pl-56">
        <div className="mx-auto max-w-2xl px-4 py-10 md:px-6 md:py-16">
          <Home onBrowseProjects={browseProjects} />
          <About />
          <Projects />
          <Resume />
          <Contact />
          <Footer />
        </div>
      </main>
    </div>
  );
}

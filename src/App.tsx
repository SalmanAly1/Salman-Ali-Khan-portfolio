import { useState } from 'react';
import CustomCursor from './components/CustomCursor';
import Preloader from './components/Preloader';
import Navigation from './components/Navigation';
import Hero from './components/Hero';
import Marquee from './components/Marquee';
import PhilosophyAbout from './components/PhilosophyAbout';
import Metrics from './components/Metrics';
import FrontendWorkSection from './components/FrontendWorkSection';
import UiUxFigmaSection from './components/UiUxFigmaSection';
import WordPressSection from './components/WordPressSection';
import AiProjectsSection from './components/AiProjectsSection';
import Experience from './components/Experience';
import Arsenal from './components/Arsenal';
import Credentials from './components/Credentials';
import Contact from './components/Contact';
import Footer from './components/Footer';

export default function App() {
  const [preloaderDone, setPreloaderDone] = useState(false);

  return (
    <div className="min-h-screen bg-[#F2F0EA] text-[#111111] relative selection:bg-[#c7ff3d] selection:text-[#111111]">
      {/* Custom Desktop Cursor */}
      <CustomCursor />

      {/* Cinematic Preloader */}
      <Preloader onComplete={() => setPreloaderDone(true)} />

      {/* Sticky Navigation */}
      <Navigation />

      {/* Main Content Flow */}
      <main className={preloaderDone ? 'opacity-100 transition-opacity duration-500' : 'opacity-100'}>
        <Hero />
        <Marquee />
        <PhilosophyAbout />
        <Metrics />
        <div id="selected-work" />
        <FrontendWorkSection />
        <div id="ui-ux-concepts" />
        <UiUxFigmaSection />
        <WordPressSection />
        <AiProjectsSection />
        <Experience />
        <Arsenal />
        <Credentials />
        <Contact />
      </main>

      {/* Footer */}
      <Footer />
    </div>
  );
}

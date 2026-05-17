import { About } from './components/About.jsx';
import { Contact } from './components/Contact.jsx';
import { Footer } from './components/Footer.jsx';
import { Hero } from './components/Hero.jsx';
import { Projects } from './components/Projects.jsx';
import { Skills } from './components/Skills.jsx';

export default function App() {
  return (
    <div className="min-h-screen bg-transparent text-ink">
      <main>
        <Hero />
        <About />
        <Skills />
        <Projects />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}

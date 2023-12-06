import Hero from '@components/Hero';
import Projects from '@components/Projects';
import Skills from '@components/Skills';
import Contact from '@components/Contact';
import Footer from '@components/Footer';

const Home = () => {
  return (
    <div>
      <Hero />
      <Skills />
      <Projects />
      <Contact />
      <Footer />
    </div>
  )
}

export default Home;
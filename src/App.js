import Header from './components/header/Header';
import Hero from './components/hero/Hero';
import Courses from './components/courses/Courses';
import Community from './components/community/Community';
import Benefits from './components/benefits/Benefits';
import Footer from './components/footer/Footer';

const App = () => {
  return (
    <div id='home'>
      <Header />
      <Hero />
      <Courses />
      <Community />
      <Benefits />
      <Footer />
    </div>
  );
};

export default App;

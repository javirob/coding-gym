import './hero.css';
import hero from '../../assets/hero.webp';

const Hero = () => {
  return (
    <section className='hero'>
      <div className='container flex'>
        <div className='hero-content'>
          <h1>Become a progamming master.</h1>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. At, alias ab ipsam omnis
            expedita quae harum dicta distinctio ratione debitis quam, sed, amet qui voluptates?
            expedita quae harum dicta distinctio ratione debitis quam, sed, amet qui voluptates?
          </p>
          <div className='hero-btns'>
            <button className='btn'>sign up for free</button>
            <button className='btn btn-outline'>search courses</button>
          </div>
        </div>
        <div className='hero-img'>
          <img src={hero} alt='hero' />
        </div>
      </div>
    </section>
  );
};

export default Hero;

import './community.css';
import img from '../../assets/img1.webp';

import { FcGlobe } from 'react-icons/fc';

const Community = () => {
  return (
    <section className='community' id='community'>
      <div className='container'>
        <div className='community-img'>
          <img src={img} alt='comunnity' />
        </div>
        <div className='community-content'>
          <h2>
            <FcGlobe />
            Join our global learning community
          </h2>
          <p>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Tenetur nihil maiores labore
            deserunt minima unde architecto, aperiam officiis ut ullam nostrum aut explicabo,
            excepturi vel cupiditate dolor qui numquam rem commodi eos ipsam adipisci? Nulla
            veritatis eligendi quam dolorem eum.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Community;

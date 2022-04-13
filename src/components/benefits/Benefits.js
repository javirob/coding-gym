import { data } from './data';
import './benefits.css';

const Benefits = () => {
  return (
    <section className='benefits' id='benefits'>
      <div className='container'>
        {data.map((item) => {
          const { id, title, text, img } = item;
          return (
            <div key={id} className='benefit-item'>
              <img src={img} alt={title} />
              <h3>{title}</h3>
              <p>{text}</p>
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default Benefits;

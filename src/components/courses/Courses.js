import data from './data';

import { FcBinoculars } from 'react-icons/fc';

import './courses.css';

const Courses = () => {
  return (
    <section className='courses' id='courses'>
      <div className='container '>
        <h2>
          <FcBinoculars />
          Explore our courses
        </h2>
        <div className='courses-list'>
          {data.map((course) => {
            const { id, name, img, level, lessons, students } = course;

            return (
              <a href='#' key={id} className='course-item card'>
                <img src={img} alt={name} />
                <h3>{name}</h3>
                <ul>
                  <li>{level}</li>
                  <li>{lessons} lessons</li>
                  <li>{students} students</li>
                </ul>
              </a>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Courses;

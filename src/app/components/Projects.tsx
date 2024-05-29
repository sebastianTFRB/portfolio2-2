
import { useTranslation } from 'react-i18next';
import { PROJECTS } from './../constants';

const Projects = () => {
  const {t} = useTranslation();
  return (
    <div className='border-b border-neutral-900 pb-4'>
      <div className='text-center'>
      <span className="bg-gradient-to-r from-blue-500 via-teal-400 to-green-300 bg-clip-text text-6xl font-bold p-2 inline tracking-tight text-transparent">
      {t ('tituloP')}
      </span>
      <p className='py-6 font-bold text-teal-500'> {t ('DtituloP')}</p>
      </div>
      <div>
      {PROJECTS.map((project, index) => (
        <div key={index} className='mb-8 flex flex-wrap lg:justify-center'>
          <div className='w-full lg:w-1/4'>
            <img
              src={project.image}
              width={150}
              height={150}
              alt={project.title}
              className='shadow-md hover:scale-105 duration-500 py-2 mb-6 rounded shadow-teal-500'
            />
          </div>
          <div className='w-full lg:w-3/4'>
            <h6 className='mb-2 font-semibold bg-gradient-to-r from-pink-500 via-purple-500 to-indigo-500 bg-clip-text text-lg p-2 inline tracking-tight text-transparent'>{project.title}</h6> 
            <p className='mb-4 text-neutral-400'>{project.description}</p> 
            
              {project.technologies.map((tech, index) => ( 
                <span key={index} className=' mr-2 bg-neutral-900 px-2 py-1 text-sm font-medium text-teal-400 '> 
                  {tech}
                </span>
                
              ))}
          </div>
        </div>
      ))}
      </div>
    </div>
  );
};

export default Projects;

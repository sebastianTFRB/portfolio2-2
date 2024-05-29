import Experience from './../components/Experience';
import { CoverParticles } from '../components/Cover-parti';
const  Experiencia= () => {
  return (
    <div className='overflow-x-hidden text-neutral-300 antialiased selection:bg-cyan-300 selection:text-cyan-900'>
        <div className='fixed top-0 -z-10 h'> 
        <div className="absolute inset-0 -z-10 h-screen w-screen items-center px-5 py-24 [background:radial-gradient(120%_160%_at_50%_10%,#000_40%,#c53030_100%)]">
        <CoverParticles/>
        </div>
        </div>
  
        <div className='container mx-auto px-8'>
        <Experience />
        
        </div>
      </div>
    
  )

};

export default Experiencia;

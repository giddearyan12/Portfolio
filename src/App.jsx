import './App.css';
import aryan from './assets/aryan.png';
import r from './assets/r.png';
import n from './assets/n.png';
import e from './assets/e.png';
import m from './assets/m.png';
import j from './assets/j.png';
import linkedin from './assets/linkedin.png';
import ms from './assets/ms.png';
import email from './assets/email.jpg';
import project1 from './assets/project1.png';
import project2 from './assets/project2.png';

function App() {
  return (
    <div className='font-preahvihear bg-[#0F061D] w-full min-h-screen'>
      <div className='container mx-auto px-4 pt-10'>

        <div className='flex flex-col md:flex-row items-center justify-center gap-10'>
          <img className='w-40 h-40 md:w-52 md:h-56 object-cover' src={aryan} alt="Profile" />

          <div className='text-center md:text-left'>
            <p className='text-white text-lg mb-2'>
              Hello! I Am <span className='text-[#7127BA]'>Aryan Gidde</span>
            </p>
            <div className='pt-4'>
              <p className='text-white text-base md:text-lg'>A Developer who</p>
              <p className='text-white text-3xl md:text-6xl'>Judges a code</p>
              <p className='text-white text-3xl md:text-6xl'>
                by its <span className='text-[#7127BA]'>logic</span> ...
              </p>
              <p className='text-white text-sm md:text-base mt-3'>
                Because if the logic doesn’t hold, what else really matters?
              </p>
            </div>
          </div>
        </div>

        <div className='mt-20 text-center'>
          <h1 className='text-white text-3xl md:text-5xl'>I'm a MERN Developer.</h1>
          <p className='text-white text-xl mt-5 leading-8'>
            Currently building full-stack apps with the MERN Stack &<br />
            solving challenges in Java DSA.
          </p>
        </div>

        <div className='mt-10'>
          <p className='text-white text-base md:text-lg leading-8 text-justify'>
            A self-driven developer passionate about solving real-world problems with clean logic and practical design. I build impactful digital products — from intelligent dashboards to scalable web platforms — with a focus on performance, usability, and logical clarity.
          </p>
        </div>

        <div className='mt-16'>
          <h2 className='text-white text-3xl md:text-5xl'>Technology</h2>
          <div className='text-white grid grid-cols-1 sm:grid-cols-2 gap-6 mt-10'>
            {[{ src: r, label: 'ReactJS' }, { src: n, label: 'NodeJS' }, { src: e, label: 'ExpressJs' },
              { src: m, label: 'MongoDB' }, { src: j, label: 'Java' }, { src: ms, label: 'MySql' }].map((tech, idx) => (
              <div key={idx} className="bg-gradient-to-br from-[#1B1030] to-[#2E1A58] rounded-2xl p-6 shadow-lg flex items-center gap-5">
                <img className='w-10 h-10' src={tech.src} alt={tech.label} />
                <p>{tech.label}</p>
              </div>
            ))}
          </div>
        </div>

        <h2 className='text-white text-3xl md:text-5xl mt-20'>Projects</h2>

        <div className='flex flex-col md:flex-row items-center mt-10 gap-10'>
          <div>
            <h3 className='text-white text-2xl md:text-3xl mb-6'>Proyecta Minds</h3>
            <div className="bg-gradient-to-br from-[#1F1435] to-[#A6A1B9] rounded-2xl p-4 shadow-lg text-white text-justify">
              Projecta Minds is a smart platform enabling students to ideate, collaborate, and build innovative tech projects with real-time teamwork features.
            </div>
          </div>
          <img className='w-full md:w-[300px] h-60 object-cover rounded-xl' src={project1} alt="Projecta Minds" />
        </div>

        <div className='flex flex-col md:flex-row-reverse items-center mt-20 gap-10'>
          <div>
            <h3 className='text-white text-2xl md:text-3xl mb-6'>OrderDelight</h3>
            <div className="bg-gradient-to-br from-[#1F1435] to-[#A6A1B9] rounded-2xl p-4 shadow-lg text-white text-justify">
              My Order Delight is a user-friendly platform that simplifies online food ordering, tracking, and delivery for enhanced customer satisfaction.
            </div>
          </div>
          <img className='w-full md:w-[300px] h-60 object-cover rounded-xl' src={project2} alt="Order Delight" />
        </div>

        <div className='text-white mt-20'>
          <h3 className='text-2xl md:text-3xl mb-7'>Contact</h3>
          <div className='flex items-center gap-5 mb-5'>
            <img className='w-6 h-6' src={email} alt="email" />
            <p className='text-sm md:text-base'>giddearyan222@gmail.com</p>
          </div>
          <div className='flex items-center gap-5'>
            <img className='w-6 h-6' src={linkedin} alt="linkedin" />
            <p className='text-sm md:text-base'>www.linkedin.com/in/aryan-gidde</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;

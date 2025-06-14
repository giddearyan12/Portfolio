import './App.css'
import aryan from './assets/aryan.png';
import r from './assets/r.png'
import n from './assets/n.png'
import e from './assets/e.png'
import m from './assets/m.png'
import j from './assets/j.png'
import linkedin from './assets/linkedin.png'
import ms from './assets/ms.png'
import email from './assets/email.jpg'
import project1 from './assets/project1.png'
import project2 from './assets/project2.png'
import Navbar from './Navbar';

function App() {

  return (
    <div class='font-preahvihear bg-[#0F061D] w-full h-full'>
      {/* <Navbar /> */}
      <div class='mx-auto w-220 pt-15 '>
        <div class='w-max flex'>
          <div class='pt-15'>
            <img class='w-50 h-56 ' src={aryan} alt="Profile" />
          </div>
          <div class=''>
            <div class='relative w-70'>
              <p class='text-white text-lg p-2.5 text-center'>Hello! I Am <span class='text-[#7127BA]'>Aryan Gidde</span></p>
              <svg class="absolute right-60 top-3 w-22 h-15 rotate-[135deg]" fill="none" stroke="white" stroke-width=".2" viewBox="0 0 48 48">
                <path d="M -10 10 C 10 30, 20 20, 35 15" />
                <path d="M 35 15 L 30 13 M 35 15 L 33 20" />
              </svg>
            </div>
            <div class='pl-13 pt-10 '>
              <p class='text-white text-lg '>A Developer who</p>
              <p class='text-white text-6xl font-'>Judges a code</p>
              <p class='text-white text-6xl '>by its <span class='text-[#7127BA] '>logic</span> ...</p>
              <p class='text-white text-0xl mt-3'>Because if the logic doesn’t hold, what else really matters?</p>
            </div>
          </div>

        </div>
        <div class='  w-max mt-30'>
          <h1 class='text-white text-5xl '>Im a MERN Developer.</h1>
          <p class='text-white text-2xl mt-5 leading-10'>Currently building full-stack apps  with the  MERN Stack &  <br />solving challenges in Java DSA.</p>
        </div>
        <div class=' mt-15'>
          <p class='text-white text-1xl mt-5 leading-8 text-justify'>A self-driven developer passionate about solving real-world problems with clean logic and practical design. I build impactful digital products from real-time collaboration tools to scalable web platforms  with a focus on performance, usability, and logical clarity.</p>
        </div>
        <div class='mt-15'>
          <h2 class='text-white text-5xl'>Technology</h2>
          <div class='text-white grid grid-cols-1 md:grid-cols-2 gap-6 mt-10 '>
            <div class="bg-gradient-to-br from-[#1B1030] to-[#2E1A58] rounded-2xl p-6 shadow-lg flex items-center gap-5">
              <img class='w-10 h-10 ' src={r} alt="" />
              <p class=''>ReactJS</p>
            </div>
            <div class="bg-gradient-to-br from-[#1B1030] to-[#2E1A58] rounded-2xl p-6 shadow-lg flex items-center gap-5">
              <img class='w-10 h-10' src={n} alt="" />
              <p class=''>NodeJS</p>
            </div>
            <div class="bg-gradient-to-br from-[#1B1030] to-[#2E1A58] rounded-2xl p-6 shadow-lg flex items-center gap-5">
              <img class='w-10 h-10 ' src={e} alt="" />
              <p class=''>ExpressJs</p>
            </div>
            <div class="bg-gradient-to-br from-[#1B1030] to-[#2E1A58] rounded-2xl p-6 shadow-lg flex items-center gap-5">
              <img class='w-10 h-10 ' src={m} alt="" />
              <p class=''>MongoDB</p>
            </div>
            <div class="bg-gradient-to-br from-[#1B1030] to-[#2E1A58] rounded-2xl p-6 shadow-lg flex items-center gap-5">
              <img class='w-10 h-10 ' src={j} alt="" />
              <p class=''>Java</p>
            </div>
            <div class="bg-gradient-to-br from-[#1B1030] to-[#2E1A58] rounded-2xl p-6 shadow-lg flex items-center gap-5">
              <img class='w-10 h-10 ' src={ms} alt="" />
              <p class=''>MySql</p>
            </div>

          </div>
        </div>
        <h2 class='text-white text-5xl mt-15 '>Projects</h2>
        <div class='flex mt-10 gap-10'>
          <div cla>
            <h3 class='text-white text-3xl mt-2 mb-10'>Proyecta Minds</h3>
            <div class="bg-gradient-to-br from-[#1F1435] to-[#A6A1B9] rounded-2xl p-3 shadow-lg flex items-center gap-10">
              <p class='text-white text-1xl text-justify'>Projecta Minds is a smart platform enabling students to ideate, collaborate, and build innovative tech projects with real-time teamwork features.
              </p>
            </div>
          </div>
          <div>
            <img class='w-300 h-60' src={project1} alt="" />
          </div>
        </div>
        <div class='flex mt-20 gap-10'>
          <div>
            <img class='w-300 h-60' src={project2} alt="" />
          </div>
          <div cla>
            <h3 class='text-white text-3xl mt-2 mb-10'>OrderDelight</h3>
            <div class="bg-gradient-to-br from-[#1F1435] to-[#A6A1B9] rounded-2xl p-3 shadow-lg flex items-center gap-10">
              <p class='text-white text-1xl text-justify'>My Order Delight is a user-friendly platform that simplifies online food ordering, tracking, and delivery for enhanced customer satisfaction.
              </p>
            </div>
          </div>
        </div>
        <div class='text-white mt-10 '>
          <h3 class='text-3xl mb-7'>Contact</h3>
          <div class='flex items-center gap-5 mb-7'>
            <img class='w-8 h-8' src={email} alt="" />
            <p class='text-1xl'>giddearyan222@gmail.com</p>
          </div>
          <div class='flex items-center gap-5'>
            <img class='w-8 h-8' src={linkedin} alt="" />
            <p class='text-1xl'>www.linkedin.com/in/aryan-gidde</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default App

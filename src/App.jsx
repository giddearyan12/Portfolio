import './App.css';
import aryan from './assets/aryan.png';

function App() {
  return (
    <div className='font-preahvihear bg-black text-white px-4 sm:py-6 lg:px-8 py-8 max-w-7xl m-auto  min-h-screen'>


      <header className='border-b border-gray-700 pb-8 mb-8 flex flex-col md:flex-row  gap-6 md:gap-8'>
        <div className='flex md:justify-start'>
          <div className='w-32 h-32 md:w-48 md:h-48 rounded-lg overflow-hidden'>
            <img className='w-full h-full object-cover' src={aryan} alt="Aryan" />
          </div>
        </div>
        <div className='flex-1 text-2xl'>
          <h1 className='text-3xl sm:text-4xl font-bold mb-2' style={{ opacity: 1, transform: 'none' }}>Aryan Gidde</h1>
          <p className='text-base sm:text-lg text-gray-300 mb-1'>+91-9022244910 | giddearyan222@gmail.com</p>
          <p className='text-base sm:text-lg text-gray-300 mb-4'>D.Y.Patil College of Engineering and Technology | B.Tech in Computer Science (CGPA: 8.6)</p>

          <p className='text-base sm:text-lg text-justify text-gray-300 mb-4'>Full Stack Developer skilled in building apps using the MERN Stack. Worked on projects involving frontend design, backend APIs, and database integration. Strong in Java and Data Structures & Algorithms.</p>
          <div className='flex gap-4'>
            <a href="https://github.com/giddearyan12" class="hover:text-gray-400 transition-colors"><svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 496 512" height="25" width="25" xmlns="http://www.w3.org/2000/svg"><path d="M165.9 397.4c0 2-2.3 3.6-5.2 3.6-3.3.3-5.6-1.3-5.6-3.6 0-2 2.3-3.6 5.2-3.6 3-.3 5.6 1.3 5.6 3.6zm-31.1-4.5c-.7 2 1.3 4.3 4.3 4.9 2.6 1 5.6 0 6.2-2s-1.3-4.3-4.3-5.2c-2.6-.7-5.5.3-6.2 2.3zm44.2-1.7c-2.9.7-4.9 2.6-4.6 4.9.3 2 2.9 3.3 5.9 2.6 2.9-.7 4.9-2.6 4.6-4.6-.3-1.9-3-3.2-5.9-2.9zM244.8 8C106.1 8 0 113.3 0 252c0 110.9 69.8 205.8 169.5 239.2 12.8 2.3 17.3-5.6 17.3-12.1 0-6.2-.3-40.4-.3-61.4 0 0-70 15-84.7-29.8 0 0-11.4-29.1-27.8-36.6 0 0-22.9-15.7 1.6-15.4 0 0 24.9 2 38.6 25.8 21.9 38.6 58.6 27.5 72.9 20.9 2.3-16 8.8-27.1 16-33.7-55.9-6.2-112.3-14.3-112.3-110.5 0-27.5 7.6-41.3 23.6-58.9-2.6-6.5-11.1-33.3 2.6-67.9 20.9-6.5 69 27 69 27 20-5.6 41.5-8.5 62.8-8.5s42.8 2.9 62.8 8.5c0 0 48.1-33.6 69-27 13.7 34.7 5.2 61.4 2.6 67.9 16 17.7 25.8 31.5 25.8 58.9 0 96.5-58.9 104.2-114.8 110.5 9.2 7.9 17 22.9 17 46.4 0 33.7-.3 75.4-.3 83.6 0 6.5 4.6 14.4 17.3 12.1C428.2 457.8 496 362.9 496 252 496 113.3 383.5 8 244.8 8zM97.2 352.9c-1.3 1-1 3.3.7 5.2 1.6 1.6 3.9 2.3 5.2 1 1.3-1 1-3.3-.7-5.2-1.6-1.6-3.9-2.3-5.2-1zm-10.8-8.1c-.7 1.3.3 2.9 2.3 3.9 1.6 1 3.6.7 4.3-.7.7-1.3-.3-2.9-2.3-3.9-2-.6-3.6-.3-4.3.7zm32.4 35.6c-1.6 1.3-1 4.3 1.3 6.2 2.3 2.3 5.2 2.6 6.5 1 1.3-1.3.7-4.3-1.3-6.2-2.2-2.3-5.2-2.6-6.5-1zm-11.4-14.7c-1.6 1-1.6 3.6 0 5.9 1.6 2.3 4.3 3.3 5.6 2.3 1.6-1.3 1.6-3.9 0-6.2-1.4-2.3-4-3.3-5.6-2z"></path></svg></a>
            <a href="https://x.com/AryanGidde1" class="hover:text-gray-400 transition-colors"><svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 512 512" height="25" width="25" xmlns="http://www.w3.org/2000/svg"><path d="M459.37 151.716c.325 4.548.325 9.097.325 13.645 0 138.72-105.583 298.558-298.558 298.558-59.452 0-114.68-17.219-161.137-47.106 8.447.974 16.568 1.299 25.34 1.299 49.055 0 94.213-16.568 130.274-44.832-46.132-.975-84.792-31.188-98.112-72.772 6.498.974 12.995 1.624 19.818 1.624 9.421 0 18.843-1.3 27.614-3.573-48.081-9.747-84.143-51.98-84.143-102.985v-1.299c13.969 7.797 30.214 12.67 47.431 13.319-28.264-18.843-46.781-51.005-46.781-87.391 0-19.492 5.197-37.36 14.294-52.954 51.655 63.675 129.3 105.258 216.365 109.807-1.624-7.797-2.599-15.918-2.599-24.04 0-57.828 46.782-104.934 104.934-104.934 30.213 0 57.502 12.67 76.67 33.137 23.715-4.548 46.456-13.32 66.599-25.34-7.798 24.366-24.366 44.833-46.132 57.827 21.117-2.273 41.584-8.122 60.426-16.243-14.292 20.791-32.161 39.308-52.628 54.253z"></path></svg></a>
            <a href="https://www.linkedin.com/in/aryan-gidde" class="hover:text-gray-400 transition-colors"><svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 448 512" height="25" width="25" xmlns="http://www.w3.org/2000/svg"><path d="M416 32H31.9C14.3 32 0 46.5 0 64.3v383.4C0 465.5 14.3 480 31.9 480H416c17.6 0 32-14.5 32-32.3V64.3c0-17.8-14.4-32.3-32-32.3zM135.4 416H69V202.2h66.5V416zm-33.2-243c-21.3 0-38.5-17.3-38.5-38.5S80.9 96 102.2 96c21.2 0 38.5 17.3 38.5 38.5 0 21.3-17.2 38.5-38.5 38.5zm282.1 243h-66.4V312c0-24.8-.5-56.7-34.5-56.7-34.6 0-39.9 27-39.9 54.9V416h-66.4V202.2h63.7v29.2h.9c8.9-16.8 30.6-34.5 62.9-34.5 67.2 0 79.7 44.3 79.7 101.9V416z"></path></svg></a>

          </div>
        </div>
      </header>

      <section className='mb-12'>
        <h2 className='text-2xl font-bold mb-6 border-b border-gray-700 pb-2'>Professional Journey</h2>
        <div
          className="mb-6 p-4 sm:p-6 rounded-lg bg-gray-900 box"

        >
          <div className="flex flex-col md:flex-row justify-between items-start gap-4">
            <div className="flex-1">
              <h3 className="text-lg sm:text-xl font-semibold">
                React Developer Intern · Softron
              </h3>
              <p className="text-gray-400">Jun 2024 – Jul 2024 | Remote</p>
              <ul className="mt-2 text-sm sm:text-base text-gray-300 list-disc pl-5 space-y-1">
                <li>
                  Developed dynamic web application using React.js.
                </li>
                <li>
                  Developed a task split web app using React.js, enhancing user experience.
                </li>

              </ul>
            </div>
            <div className="flex flex-wrap gap-2">
              <span className="bg-gray-800 px-2 py-1 rounded text-xs sm:text-sm flex items-center gap-1">
                React.js
              </span>
            </div>
          </div>
        </div>

      </section>

      <section className='mb-12'>
        <div className=' border-b border-gray-700 mb-6 gap-4'>
          <h2 className='text-2xl font-bold  pb-2'>Projects</h2>
        </div>
        <div className='grid grid-cols-1 lg:grid-cols-2 gap-4 sm:gap-6'>

          <div className='border border-gray-800 p-4 sm:p-6 rounded-lg bg-gray-900 box'>
            <div class="flex items-center gap-2 mb-3 flex-wrap">
              <h3 class="text-lg sm:text-xl font-semibold">Proyecta Minds</h3><div><a class="" href="https://github.com/giddearyan12/RTPC"><span class="text-xs bg-green-700 px-2 py-1 rounded-lg  ">Code</span></a></div></div>
            <p class="mb-4 text-sm sm:text-base text-gray-300">Proyecta Minds is a real-time collaboration platform for college students, featuring a virtual code editor with Docker-based execution, chat support.</p>
            <div class="flex flex-wrap gap-2"><span class="bg-gray-800 px-2 py-1 rounded text-xs sm:text-sm">MERN Stack</span><span class="bg-gray-800 px-2 py-1 rounded text-xs sm:text-sm">Docker</span></div>
          </div>

          <div className='border border-gray-800 p-4 sm:p-6 rounded-lg bg-gray-900 box'>
            <div class="flex items-center gap-2 mb-3 flex-wrap">
              <h3 class="text-lg sm:text-xl font-semibold">Smart Utility</h3><div><a class="" href="https://smart-utility-wrhd.vercel.app"><span class="text-xs bg-green-700 px-2 py-1 rounded-lg  ">Live</span></a></div></div>
            <p class="mb-4 text-sm sm:text-base text-gray-300">Smart Utility is an app for booking everyday services like plumbing, carpentry, and electrical repair. Features include user authentication, appointment booking, secure backend APIs.</p>
            <div class="flex flex-wrap gap-2"><span class="bg-gray-800 px-2 py-1 rounded text-xs sm:text-sm">MERN Stack</span></div>
          </div>

          <div className='border border-gray-800 p-4 sm:p-6 rounded-lg bg-gray-900 box'>
            <div class="flex items-center gap-2 mb-3 flex-wrap">
              <h3 class="text-lg sm:text-xl font-semibold">Order Delight</h3><div><a class="" href="https://github.com/giddearyan12/OrderDelight"><span class="text-xs bg-green-700 px-2 py-1 rounded-lg  ">Code</span></a></div></div>
            <p class="mb-4 text-sm sm:text-base text-gray-300">Order Delight is a food ordering web app with user authentication, real-time cart updates, and a responsive UI for a smooth ordering experience.</p>
            <div class="flex flex-wrap gap-2"><span class="bg-gray-800 px-2 py-1 rounded text-xs sm:text-sm">MERN Stack</span></div>
          </div>
          <div className='border border-gray-800 p-4 sm:p-6 rounded-lg bg-gray-900 box'>
          <div className="flex items-center gap-2 mb-3 flex-wrap">
    <h3 className="text-lg sm:text-xl font-semibold">Clone Craft AI</h3>
    <div>
      <a href="https://github.com/giddearyan12/CloneCraft-AI">
        <span className="text-xs bg-green-700 px-2 py-1 rounded-lg">Code</span>
      </a>
    </div>
  </div>
  <p className="mb-4 text-sm sm:text-base text-gray-300">
    An AI-powered agent that clones websites efficiently by replicating their structure, styles, and content, making web duplication fast and automated.
  </p>
  <div className="flex flex-wrap gap-2">
    <span className="bg-gray-800 px-2 py-1 rounded text-xs sm:text-sm">Node.js</span>
    <span className="bg-gray-800 px-2 py-1 rounded text-xs sm:text-sm">AI Agent</span>
  </div>
</div>
</div>
      </section>

      <section className='mb-12'>
        <div className=' border-b border-gray-700 mb-6 gap-4'>
          <h2 className='text-2xl font-bold  pb-2'>Extra-curricular & Certification</h2>
        </div>

        <div className='grid grid-cols-1 lg:grid-cols-2 gap-4 sm:gap-6'>
          <div className='border border-gray-800 p-4 sm:p-6 rounded-lg bg-gray-900 box'>
            <div class="flex items-center gap-2 mb-3 flex-wrap">
              <h3 class="text-lg sm:text-xl font-semibold">Extra-curricular</h3>
            </div>
            <ul className="mt-2 text-sm sm:text-base text-gray-300 list-disc pl-5 space-y-1">
                <li>
                  POD Coordinator
                </li>
                <li>
                  Media Coordinator
                </li>

              </ul>
          </div>
          <div className='border border-gray-800 p-4 sm:p-6 rounded-lg bg-gray-900 box'>
            <div class="flex items-center gap-2 mb-3 flex-wrap">
              <h3 class="text-lg sm:text-xl font-semibold">Certification</h3>
            </div>
            <ul className="mt-2 text-sm sm:text-base text-gray-300 list-disc pl-5 space-y-1">
                <li>
                  Responsive Web Design - freeCodeCamp
                </li>
                <li>
                  DSA - Apna College
                </li>

              </ul>
          </div>
        </div>
      </section>
       
      <footer className='border-t border-gray-700 pt-6 text-center' style={{opacity:1}}>
        <p className='text-gray-400 text-sm sm:text-base'>
          © 2025 Aryan Gidde
        </p>
        <div className='flex justify-end'>
           <div class="flex gap-4">
            <a href="https://github.com/giddearyan12" class=" hover:text-white text-gray-400 transition-colors"><svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 496 512" height="20" width="20" xmlns="http://www.w3.org/2000/svg"><path d="M165.9 397.4c0 2-2.3 3.6-5.2 3.6-3.3.3-5.6-1.3-5.6-3.6 0-2 2.3-3.6 5.2-3.6 3-.3 5.6 1.3 5.6 3.6zm-31.1-4.5c-.7 2 1.3 4.3 4.3 4.9 2.6 1 5.6 0 6.2-2s-1.3-4.3-4.3-5.2c-2.6-.7-5.5.3-6.2 2.3zm44.2-1.7c-2.9.7-4.9 2.6-4.6 4.9.3 2 2.9 3.3 5.9 2.6 2.9-.7 4.9-2.6 4.6-4.6-.3-1.9-3-3.2-5.9-2.9zM244.8 8C106.1 8 0 113.3 0 252c0 110.9 69.8 205.8 169.5 239.2 12.8 2.3 17.3-5.6 17.3-12.1 0-6.2-.3-40.4-.3-61.4 0 0-70 15-84.7-29.8 0 0-11.4-29.1-27.8-36.6 0 0-22.9-15.7 1.6-15.4 0 0 24.9 2 38.6 25.8 21.9 38.6 58.6 27.5 72.9 20.9 2.3-16 8.8-27.1 16-33.7-55.9-6.2-112.3-14.3-112.3-110.5 0-27.5 7.6-41.3 23.6-58.9-2.6-6.5-11.1-33.3 2.6-67.9 20.9-6.5 69 27 69 27 20-5.6 41.5-8.5 62.8-8.5s42.8 2.9 62.8 8.5c0 0 48.1-33.6 69-27 13.7 34.7 5.2 61.4 2.6 67.9 16 17.7 25.8 31.5 25.8 58.9 0 96.5-58.9 104.2-114.8 110.5 9.2 7.9 17 22.9 17 46.4 0 33.7-.3 75.4-.3 83.6 0 6.5 4.6 14.4 17.3 12.1C428.2 457.8 496 362.9 496 252 496 113.3 383.5 8 244.8 8zM97.2 352.9c-1.3 1-1 3.3.7 5.2 1.6 1.6 3.9 2.3 5.2 1 1.3-1 1-3.3-.7-5.2-1.6-1.6-3.9-2.3-5.2-1zm-10.8-8.1c-.7 1.3.3 2.9 2.3 3.9 1.6 1 3.6.7 4.3-.7.7-1.3-.3-2.9-2.3-3.9-2-.6-3.6-.3-4.3.7zm32.4 35.6c-1.6 1.3-1 4.3 1.3 6.2 2.3 2.3 5.2 2.6 6.5 1 1.3-1.3.7-4.3-1.3-6.2-2.2-2.3-5.2-2.6-6.5-1zm-11.4-14.7c-1.6 1-1.6 3.6 0 5.9 1.6 2.3 4.3 3.3 5.6 2.3 1.6-1.3 1.6-3.9 0-6.2-1.4-2.3-4-3.3-5.6-2z"></path></svg></a>
            <a href="https://x.com/AryanGidde1" class=" hover:text-white text-gray-400 transition-colors"><svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 512 512" height="20" width="20" xmlns="http://www.w3.org/2000/svg"><path d="M459.37 151.716c.325 4.548.325 9.097.325 13.645 0 138.72-105.583 298.558-298.558 298.558-59.452 0-114.68-17.219-161.137-47.106 8.447.974 16.568 1.299 25.34 1.299 49.055 0 94.213-16.568 130.274-44.832-46.132-.975-84.792-31.188-98.112-72.772 6.498.974 12.995 1.624 19.818 1.624 9.421 0 18.843-1.3 27.614-3.573-48.081-9.747-84.143-51.98-84.143-102.985v-1.299c13.969 7.797 30.214 12.67 47.431 13.319-28.264-18.843-46.781-51.005-46.781-87.391 0-19.492 5.197-37.36 14.294-52.954 51.655 63.675 129.3 105.258 216.365 109.807-1.624-7.797-2.599-15.918-2.599-24.04 0-57.828 46.782-104.934 104.934-104.934 30.213 0 57.502 12.67 76.67 33.137 23.715-4.548 46.456-13.32 66.599-25.34-7.798 24.366-24.366 44.833-46.132 57.827 21.117-2.273 41.584-8.122 60.426-16.243-14.292 20.791-32.161 39.308-52.628 54.253z"></path></svg></a>
            <a href="https://www.linkedin.com/in/aryan-gidde" class=" hover:text-white text-gray-400 transition-colors"><svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 448 512" height="20" width="20" xmlns="http://www.w3.org/2000/svg"><path d="M416 32H31.9C14.3 32 0 46.5 0 64.3v383.4C0 465.5 14.3 480 31.9 480H416c17.6 0 32-14.5 32-32.3V64.3c0-17.8-14.4-32.3-32-32.3zM135.4 416H69V202.2h66.5V416zm-33.2-243c-21.3 0-38.5-17.3-38.5-38.5S80.9 96 102.2 96c21.2 0 38.5 17.3 38.5 38.5 0 21.3-17.2 38.5-38.5 38.5zm282.1 243h-66.4V312c0-24.8-.5-56.7-34.5-56.7-34.6 0-39.9 27-39.9 54.9V416h-66.4V202.2h63.7v29.2h.9c8.9-16.8 30.6-34.5 62.9-34.5 67.2 0 79.7 44.3 79.7 101.9V416z"></path></svg></a>
            </div>
          </div>
        </footer> 
    </div>
  );
}

export default App;

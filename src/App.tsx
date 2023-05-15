import { useState } from 'react';
import Header from './components/Header/Header';
import Navbar from './components/Navbar/Navbar';
import JobAds from './components/JobAds/JobAds';
import Candidates from './components/Candidates/Candidates';

function App() {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  return (
    <>
      <header className='sticky top-0 z-50'>
        <Header isOpen={isOpen} setIsOpen={setIsOpen} />
      </header>

      <main className='relative flex'>
        <div>
          <div className='hidden md:block'>
            <Navbar isOpen={isOpen} setIsOpen={setIsOpen} />
          </div>

          <div className={`mobile-menu h-screen z-50 absolute transition-all ease-in-out duration-500 ${isOpen ? "left-0" : "left-[-100%]"}`}>
            {isOpen && <Navbar isOpen={isOpen} setIsOpen={setIsOpen} />}
          </div>
        </div>

        <section className='w-full pt-8 pl-8'>
          <JobAds />
          <Candidates />
        </section>
      </main>
    </>
  );
}

export default App;

import { useState } from 'react';
import Header from './components/Header/Header';
import Navbar from './components/Navbar/Navbar';
import JobAds from './components/JobAds/JobAds';

function App() {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  return (
    <>
      <header>
        <Header isOpen={isOpen} setIsOpen={setIsOpen} />
      </header>

      <main className='flex'>
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
        </section>
      </main>
    </>
  );
}

export default App;

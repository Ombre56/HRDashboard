import { useState } from 'react';
import Header from './components/Header/Header';
import Navbar from './components/Navbar/Navbar';

function App() {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  return (
    <>
      <header>
        <Header isOpen={isOpen} setIsOpen={setIsOpen} />
      </header>

      <main>
        <div className='hidden md:block'>
          <Navbar />
        </div>
        {isOpen && <Navbar />}
      </main>
    </>
  );
}

export default App;

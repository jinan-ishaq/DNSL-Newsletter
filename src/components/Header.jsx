import {AiOutlineMenu, AiOutlineClose} from 'react-icons/ai';
import { useState, useEffect } from 'react';

const NAVBAR_TITLE = [
    "Home",
    "Features",
    "About Us",
    "Contact"
]

export default function Header() {
  const [menuIcon, setMenuIcon] = useState(false);
  const [isLargeScreen, setIsLargeScreen] = useState(window.innerWidth >= 768);

  useEffect(() => {
    const handleResize = () => {
      setIsLargeScreen(window.innerWidth >= 768);
    };

    window.addEventListener('resize', handleResize);
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  const handleMenuClick = () => {
    setMenuIcon(prevValue => !prevValue);
  }

  return (
    <header className="flex justify-between items-center  text-black h-24 z-50 mx-auto px-4 w-full bg-[#FEBB37]">
      <h1 className="w-3/4 text-3xl font-bold text-[#F5F5DC]">DNSL</h1>
      <ul className="hidden md:flex">
        {NAVBAR_TITLE.map(title =><li key={title} className="p-4 w-40 font-bold hover:bg-[#333333] hover:text-white text-center hover:rounded">{title}</li>)}
      </ul>
      <article onClick={handleMenuClick} className='block md:hidden'>
       {menuIcon ? <AiOutlineClose size={40}/> : <AiOutlineMenu size={40}/>}
      </article>

      <section className={(menuIcon && !isLargeScreen ) ? "fixed left-0 top-0 w-[50%] h-full border-r border-r-gray-400 z-50 bg-black ease-in-out duration-500" : "fixed left-[-100%]"}>
      <h1 className="w-full text-3xl font-bold text-[#F5F5DC] m-4 mt-7 ">DNSL</h1>
      <ul className="uppercase p-4">
        {NAVBAR_TITLE.map(title =><li key={title} className="p-4 border-b border-gray-600 text-white">{title}</li>)}
      </ul>
      </section>
    </header>
  );
}

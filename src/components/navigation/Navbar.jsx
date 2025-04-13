import React, { useState } from 'react';
import { Menu } from 'lucide-react';
import { CircleX } from 'lucide-react';
const navBarItems = [
    { id: 1, name: "Home", url: "https://example.com/home" },
    { id: 2, name: "About", url: "https://example.com/about" },
    { id: 3, name: "Services", url: "https://example.com/services" },
    { id: 4, name: "Pricing", url: "https://example.com/pricing" },
    { id: 5, name: "Contact", url: "https://example.com/contact" }
  ];
  
const Navbar = () => {
    const [open,setOpen]=useState(false)
    const links=  navBarItems.map(route=><li className='mr-8 hover:bg-amber-200 p-3 rounded-2xl hover:text-black font-semibold w-full'><a href={route.url}>{route.name}</a></li>)
        return (
        <nav className='flex justify-between items-center 'onClick={()=>setOpen(!open)}>
            <span className='flex gap-1 '>  {open? <CircleX  className='md:hidden'/>: <Menu className='md:hidden' />}  
            <ul className={`md:hidden duration-1000 bg-amber-200 p-2 ml-8 mt-8  hover:green text-black font-semibold absolute  ${open ? "top-8":"-top-90 "}`}>
                {links}
            </ul>
            <h3 className='text-amber-200 text-2xl font-semibold'>NAVIGATION</h3></span>
        
<ul className='md:flex items-center hidden text-amber-100 text-2xl hover:text-black '>
    {
    links
    }
</ul>
<button className='bg-amber-200 p-5 text-2xl text-black font-semibold rounded-lg hover:bg-amber-50'>Sign In</button>
        </nav>
        
    );
};

export default Navbar;
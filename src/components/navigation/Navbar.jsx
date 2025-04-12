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
    const links= navBarItems.map(route=><li className='mr-10 '><a href={route.url}>{route.name}</a></li>)
        return (
        <nav className='flex justify-between 'onClick={()=>setOpen(!open)}>
            <span className='flex gap-1 '>  {open? <CircleX  className='md:hidden'/>: <Menu className='md:hidden' />}  
            <ul className='md:hidden  'onClick={links}>
                {links}
            </ul>
            <h3>NAVIGATION</h3></span>
        
<ul className='md:flex items-center hidden'>
    {
    links
    }
</ul>
<button className='bg-amber-200 p-2 text-black rounded-lg'>Sign In</button>
        </nav>
        
    );
};

export default Navbar;
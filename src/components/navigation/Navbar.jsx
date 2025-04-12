import React from 'react';
const navBarItems = [
    { id: 1, name: "Home", url: "https://example.com/home" },
    { id: 2, name: "About", url: "https://example.com/about" },
    { id: 3, name: "Services", url: "https://example.com/services" },
    { id: 4, name: "Pricing", url: "https://example.com/pricing" },
    { id: 5, name: "Contact", url: "https://example.com/contact" }
  ];
  
const Navbar = () => {
    return (
        <nav>
<ul className='flex items-center'>
    {
        navBarItems.map(route=><li className='mr-10 '><a href={route.url}>{route.name}</a></li>)
    }
</ul>

        </nav>
    );
};

export default Navbar;
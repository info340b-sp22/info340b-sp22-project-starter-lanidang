import React from 'react'
import { HiMenu, HiOutlineX } from 'react-icons/hi';

export function Header({ navItems }) {
  const [open, setOpen] = React.useState(false);
  const openMenu = () => {
    console.log('toggle menu');
    setOpen(_ => true);
  }
  const closeMenu = () => {
    setOpen(_ => false);
  }
  return (
    <header className='px-6 h-14 flex justify-between align-center bg-slate-200'>
      <span className='text-xl font-bold flex items-center'>Laptop Search</span>
      <div className={(open ? ' flex justify-center items-center absolute inset-0 bg-slate-100' : ' hidden')}>
        <ul className={'md:hidden flex flex-col justify-center items-center'}>
          {navItems.map((item, index) => (
            <li key={index} className='px-4 h-12 flex justify-center items-center'><a href={item.href}>{item.text}</a></li>
          ))}
        </ul>
        <HiOutlineX size={24} style={{position: 'absolute', top: '1.5rem', right: '1.5rem'}} onClick={closeMenu} />
      </div>
      <ul className={'hidden md:flex items-stretch'}>
        {navItems.map((item, index) => (
          <li key={index} className='px-4 hover:bg-slate-300 flex justify-center items-center'><a href={item.href}>{item.text}</a></li>
        ))}
      </ul>
      <div className='md:hidden flex-none flex justify-center items-center' onClick={openMenu}>
        <HiMenu size={24} />
      </div>
    </header>
  )
}

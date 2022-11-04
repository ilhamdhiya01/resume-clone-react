import React from 'react';
export default function Navbar(props: any) {
  return (
    <nav className=' bg-[#1D1E21] flex justify-center'>
      <div className='max-w-[1100px] w-full text-white flex justify-between items-center'>{props.children}</div>
    </nav>
  );
}

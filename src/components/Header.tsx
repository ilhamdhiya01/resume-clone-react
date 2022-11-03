import React from 'react';

export default function Header(props: any) {
  const { children } = props;
  return <header className='w-full h-[100px] fixed top-0'>{children}</header>;
}

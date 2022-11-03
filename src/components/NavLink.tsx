export default function NavLink() {
  const menus = [{ menu: 'Home' }, { menu: 'Tips & Tricks' }, { menu: 'About' }, { menu: 'Contact' }];
  return (
    <div className='basis-1/3'>
      <ul className="flex justify-between items-center text-sm font-medium text-[#aaa] leading-[100px] font-['Poppins']">
        {menus.map((menu) => (
          <li key={menu.menu} className='cursor-pointer'>{menu.menu}</li>
        ))}
      </ul>
    </div>
  );
}

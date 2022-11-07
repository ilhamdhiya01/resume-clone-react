export default function NavLink() {
  const menus = ['Home', 'Tips & Tricks', 'About', 'Contact'];
  return (
    <div className='basis-1/3'>
      <ul className="nav-links flex justify-between items-center text-sm font-medium text-[#aaa] leading-[100px] font-['Poppins']">
        {menus.map((menu) => (
          <li key={menu} className='cursor-pointer'>
            <a href="" className="relative">{menu}</a>
          </li>
        ))}
      </ul>
    </div>
  );
}

import { IconBrandFacebook, IconBrandInstagram, IconBrandTwitter, IconChevronRight, IconMail, IconMap, IconPhone } from '@tabler/icons';
import NavLogo from './NavLogo';

export default function Footer() {
  return (
    <footer>
      <section className='flex justify-center w-full  bg-[#1D1E21] text-white'>
        <div className='max-w-[1100px] w-full h-[370px] flex justify-center items-center'>
          <div className='basis-1/3 space-y-[30px]'>
            <NavLogo />
            <div className='space-y-4'>
              <p className='text-[15px] text-[#aaa] font-["Poppins"]'>To become a programmer, you must have strong determination and intention as well as high learning consistency.</p>
              <ul className='flex items-center space-x-4'>
                <li className='w-10 h-10 rounded-full bg-[#161719] flex'>
                  <a href='' className='m-auto'>
                    <IconBrandFacebook width={20} height={20} />
                  </a>
                </li>
                <li className='w-10 h-10 rounded-full bg-[#161719] flex'>
                  <a href='' className='m-auto'>
                    <IconBrandTwitter width={20} height={20} />
                  </a>
                </li>
                <li className='w-10 h-10 rounded-full bg-[#161719] flex'>
                  <a href='' className='m-auto'>
                    <IconBrandInstagram width={20} height={20} />
                  </a>
                </li>
              </ul>
            </div>
          </div>
          <div className='basis-1/3 space-y-9 pl-7'>
            <h2 className=' text-white tracking-[2px] uppercase font-["Poppins"]'>Jump in</h2>
            <ul className='space-y-2 pb-2 font-["Poppins"]'>
              <li className='flex items-center text-sm text-[#aaa]'>
                <IconChevronRight />
                Home
              </li>
              <li className='flex items-center text-sm text-[#aaa]'>
                <IconChevronRight />
                Tips & Trick
              </li>
              <li className='flex items-center text-sm text-[#aaa]'>
                <IconChevronRight />
                About us
              </li>
              <li className='flex items-center text-sm text-[#aaa]'>
                <IconChevronRight />
                Contact
              </li>
            </ul>
          </div>
          <div className='basis-[30%] space-y-11 font-["Poppins"]'>
            <h2 className='text-white tracking-[2px] uppercase'>HAVE A QUESTIONS ?</h2>
            <ul className='space-y-4 pb-2'>
              <li className='flex text-sm text-[#aaa] gap-2'>
                <IconMap width={20} height={20} />
                Jl. Karang Jangkang RT 04 RW 04 Kota. Semarang
              </li>
              <li className='flex items-center text-sm text-[#aaa] gap-2'>
                <IconPhone width={20} height={20} />
                +6285803135909
              </li>
              <li className='flex items-center text-sm text-[#aaa] gap-2'>
                <IconMail width={20} height={20} />
                ulhaqilhamdhiya@gmail.com
              </li>
            </ul>
          </div>
        </div>
      </section>
      <section className='w-full min-h-[70px] bg-[#18191C] flex'>
        <span className='m-auto text-xs text-white font-["Poppins"]'>Copyright © made with love by ilham dhiya ulhaq </span>
      </section>
    </footer>
  );
}

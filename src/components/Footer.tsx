import FooterJumpInList from './FooterJumpInList';
import FooterQuestionList from './FooterQuestionList';
import FooterSocialMediaList from './FooterSocialMediaList';
import NavLogo from './NavLogo';

function Footer(props: any) {
  return (
    <footer>
      <section className='flex justify-center w-full  bg-[#1D1E21] text-white'>
        <div className='max-w-[1100px] w-full h-[370px] flex justify-center items-center'>{props.text || props.children}</div>
      </section>
      <section className='w-full min-h-[70px] bg-[#18191C] flex'>
        <span className='m-auto text-xs text-white font-["Poppins"]'>Copyright © made with love by ilham dhiya ulhaq </span>
      </section>
    </footer>
  );
}
const FirstContent = () => {
  return (
    <div className='basis-1/3 space-y-[30px]'>
      <NavLogo />
      <div className='space-y-4'>
        <p className='text-[15px] text-[#aaa] font-["Poppins"]'>To become a programmer, you must have strong determination and intention as well as high learning consistency.</p>
        <FooterSocialMediaList />
      </div>
    </div>
  );
};
const SecondContent = () => {
  return (
    <div className='basis-1/3 space-y-9 pl-7'>
      <h2 className=' text-white tracking-[2px] uppercase font-["Poppins"]'>Jump in</h2>
      <FooterJumpInList />
    </div>
  );
};
const ThirdContent = () => {
  return (
    <div className='basis-[30%] space-y-11 font-["Poppins"]'>
      <h2 className='text-white tracking-[2px] uppercase'>HAVE A QUESTIONS ?</h2>
      <FooterQuestionList />
    </div>
  );
};
Footer.FirstContent = FirstContent;
Footer.SecondContent = SecondContent;
Footer.ThirdContent = ThirdContent;
export default Footer;

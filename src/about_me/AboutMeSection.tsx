import aboutMeImg from './assets/aboutme.png';
import MyProfile from './components/MyProfile';
export default function AboutMeSection() {
  return (
    <section className='w-full h-screen bg-[#1D1E21] border-b border-[#2E2F32]'>
      <div className='about-me-header flex justify-center py-[80px]'>
        <div className='max-w-[80%] w-full leading-8'>
          <h3 className='uppercase text-[#aaa] font-bold'>about me</h3>
          <h2 className='text-[25px] text-[#f5f6fa] font-bold'>Web Frontend Enginer</h2>
        </div>
      </div>
      <div className='flex justify-center'>
        <div className='flex justify-end'>
          <img src={aboutMeImg} alt={aboutMeImg} className='max-w-xl flex object-cover object-center' />
        </div>
        <MyProfile />
      </div>
    </section>
  );
}

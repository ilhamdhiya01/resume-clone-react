import banner from './assets/banner-code.png';
import ImgList from './components/ImgList';
import '../App.css';
export default function HomeSection() {
  return (
    <section className='home-section bg-[#1D1E21] flex justify-center pt-[70px] pb-8 border-b border-[#2E2F32]'>
      <div className='basis-[95%]'>
        <div className='flex items-center gap-4'>
          <img src={banner} alt='banner' className='h-[550px] object-cover object-center basis-1/2' />
          <h2 className='text-2xl font-medium text-[50px] font-["Poppins"] basis-2/5  text-[#f5f6fa] leading-[70px]'>Hone your skills and learn programming right now.</h2>
        </div>
        <ImgList />
      </div>
    </section>
  );
}

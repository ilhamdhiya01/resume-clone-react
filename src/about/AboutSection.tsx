import about from './assets/about.png';
export default function AboutSection() {
  return (
    <section className='bg-[#1D1E21] w-full border-b border-[#2E2F32]'>
      <h2 className="text-[30px] font-semibold font-['Poppins'] text-[#f5f6fa] flex py-[90px]">
        <span className="m-auto relative after:content-[''] after:absolute after:block after:bottom-1 after:w-full after:h-[2px] after:bg-[#f5f6fa] tracking-wide">About website</span>
      </h2>
      <div className='grid grid-cols-2'>
        <div className='flex justify-end'>
          <img src={about} alt={about} className='object-cover' />
        </div>
        <div className='font-["Poppins"] max-w-lg w-full'>
          <div className='space-y-4 mt-10 ml-3'>
            <h3 className='text-[15px] font-bold uppercase text-[#aaa] tracking-[2px]'>welcome to codenow</h3>
            <h2 className='text-[30px] font-bold text-[#f5f6fa]'>This website explains the flow of learning programming</h2>
            <p className='text-[#aaa] tracking-[1px] leading-7'>this website helps us to know how the initial steps to learn programming, so we can know to become a programmer the first step is what we have to do.</p>
            <p className='text-[#aaa] tracking-[1px] leading-7'>hopefully with this simple website can help friends who want to become a programmer.</p>
          </div>
        </div>
      </div>
    </section>
  );
}

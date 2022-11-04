import TipsTrickList from './components/TipsTrickList';

export default function TipsAndTrickSection() {
  return (
    <section className='bg-[#1D1E21] w-full border-b border-[#2E2F32]'>
      <h2 className="text-[30px] font-semibold font-['Poppins'] text-[#f5f6fa] flex py-[100px]">
        <span className="m-auto relative after:content-[''] after:absolute after:block after:-bottom-[1px] after:w-full after:h-[2px] after:bg-[#f5f6fa] tracking-wide">Tips & Tricks</span>
      </h2>
      <TipsTrickList />
    </section>
  );
}

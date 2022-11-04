import React from 'react';

export default function QuoteSection() {
  return (
    <section className='quote-section bg-[#18191C] w-full h-[550px] flex  text-center border-b border-[#2E2F32] pt-8'>
      <div className="bg-[url('./quote/assets/stevejobs.png')] h-full bg-no-repeat basis-[40%] object-cover object-center bg-cover w-[550px]"></div>
      <blockquote className='text-center m-auto basis-[60%] text-[#f5f6fa]'>
        <p className={`text-[35px]  italic max-w-[750px] w-full `}>" Everyone should learn how to program a computer, because it teaches you how to think "</p>
        <span className='font-["Poppins"] font-bold text-[30px]'>— Steve Jobs —</span>
      </blockquote>
    </section>
  );
}

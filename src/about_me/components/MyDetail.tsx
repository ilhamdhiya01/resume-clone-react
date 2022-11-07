export default function MyDetail(props: any) {
  const {propsState} = props;
  return (
    <article className={`overflow-hidden max-h-0 transition-all duration-[0.4s] ease-in ${propsState ? 'max-h-[500px] transition-all duration-[0.5s] ease-in-out' : ''} mt-4`}>
      <p className='text-[#aaa]'>Hello, my name is Ilham, I am from Semarang, I was born in Surabaya, May 17, 1998. I am a student at the University of Semarang who really likes the world of programming, even though I am not yet proficient in this field, I will continue to learn because I have a strong will and high consistency in learning programming. So by participating in the Awakening Academy program, I hope that I can hone my skills in the programming world.</p>
    </article>
  );
}

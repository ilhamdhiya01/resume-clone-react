function Input(props: any) {
  return <input {...props} className='block bg-transparent border-solid  border border-[#3f4144] outline-none w-full p-[10px] text-sm text-[#aaa] placeholder:text-sm' />;
}
const TextArea = (props: any) => {
  return <textarea {...props} className='block bg-transparent border-solid  border border-[#3f4144] outline-none w-full p-[10px] text-sm text-[#aaa] placeholder:text-sm h-[120px]' name='' id=''></textarea>;
};

Input.TextArea = TextArea;
export default Input;

export default function Button(props: any) {
  return (
    <button {...props} className='block bg-[#29292C] text-[11px] font-light text-white py-[5px] px-[10px] relative top-4'>
      {props.text || props.children}
    </button>
  );
}

import { IconCode } from '@tabler/icons';
export default function NavLogo() {
  return (
    <div className='flex justify-start items-center basis-1/2 gap-1'>
      <IconCode 
      size={32}
      color='#AAAAAA'
      />
      <h1 className='text-white font-bold text-xl font-["Poppins"]'>codenow</h1>
    </div>
  );
}

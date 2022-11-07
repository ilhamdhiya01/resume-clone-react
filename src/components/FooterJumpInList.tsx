import { IconChevronRight } from '@tabler/icons';
export default function FooterJumpInList() {
  return (
    <ul className='space-y-2 pb-2 font-["Poppins"]'>
      <li className='flex items-center text-sm text-[#aaa]'>
        <IconChevronRight />
        Home
      </li>
      <li className='flex items-center text-sm text-[#aaa]'>
        <IconChevronRight />
        Tips & Trick
      </li>
      <li className='flex items-center text-sm text-[#aaa]'>
        <IconChevronRight />
        About us
      </li>
      <li className='flex items-center text-sm text-[#aaa]'>
        <IconChevronRight />
        Contact
      </li>
    </ul>
  );
}

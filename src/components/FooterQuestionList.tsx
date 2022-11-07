import { IconChevronRight, IconMail, IconMap, IconPhone } from '@tabler/icons';
export default function FooterQuestionList() {
  return (
    <ul className='space-y-4 pb-2'>
      <li className='flex text-sm text-[#aaa] gap-2'>
        <IconMap width={20} height={20} />
        Jl. Karang Jangkang RT 04 RW 04 Kota. Semarang
      </li>
      <li className='flex items-center text-sm text-[#aaa] gap-2'>
        <IconPhone width={20} height={20} />
        +6285803135909
      </li>
      <li className='flex items-center text-sm text-[#aaa] gap-2'>
        <IconMail width={20} height={20} />
        ulhaqilhamdhiya@gmail.com
      </li>
    </ul>
  );
}

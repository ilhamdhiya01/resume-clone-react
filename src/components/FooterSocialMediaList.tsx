import { IconBrandFacebook, IconBrandInstagram, IconBrandTwitter } from '@tabler/icons';
export default function FooterSocialMediaList() {
  return (
    <ul className='flex items-center space-x-4'>
      <li className='w-10 h-10 rounded-full bg-[#161719] flex'>
        <IconBrandFacebook width={20} height={20} className={'m-auto'} />
      </li>
      <li className='w-10 h-10 rounded-full bg-[#161719] flex'>
        <IconBrandTwitter width={20} height={20} className={'m-auto'} />
      </li>
      <li className='w-10 h-10 rounded-full bg-[#161719] flex'>
        <IconBrandInstagram width={20} height={20} className={'m-auto'} />
      </li>
    </ul>
  );
}

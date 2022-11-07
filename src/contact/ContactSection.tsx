import Button from './components/Button';
import Input from './components/Input';
import SocialMediaList from './components/SocialMediaList';
import { dataContact } from './service';
export default function ContactSection() {
  return (
    <section className='w-full h-full flex justify-center bg-[#1D1E21] py-[50px] border-b border-[#2E2F32]'>
      <div className='max-w-2xl w-full space-y-4'>
        <div className='space-y-1 font-["Poppins"]'>
          <h2 className='text-3xl font-semibold  text-[#f5f6fa]'>Contact us</h2>
          <p className='text-[#aaa]'>If there are criticisms and suggestions about this website, please contact us here.</p>
        </div>
        {dataContact.map((contact) => (
          <div className='space-y-1'>
            <h2 className='uppercase font-semibold text-[#f5f6fa]'>{contact.h2}</h2>
            <p className='text-[#aaa]'>{contact.p}</p>
          </div>
        ))}
        <div className='pt-7'>
          <form className='space-y-3'>
            <Input type='text' placeholder='Name' />
            <Input type='text' placeholder='Email' />
            <Input type='text' placeholder='Object' />
            <Input.TextArea placeholder='Create a message here' />
            <Button />
          </form>
          <div className='mt-8 space-y-1'>
            <h2 className='text-[#f5f6fa] text-xl font-semibold'>Follow us here</h2>
            <SocialMediaList />
          </div>
        </div>
      </div>
    </section>
  );
}

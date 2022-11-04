import Button from './Button';
import MyPhoto from './MyPhoto';
import { useState } from 'react';
export default function MyProfile() {
  const [showDetail, setShowDetail] = useState({
    profile: 'unactive',
    aboutMe: 'hidden',
  });
  const handleShowDetail = () => {
    setShowDetail({
      profile: 'detail-active',
      aboutMe: 'about-me-active',
    });
  };
  return (
    <div className={`profile ${showDetail.profile} bg-[#18191C] max-w-[550px] w-full p-5 mt-4 ml-4`}>
      <div className='flex justify-between'>
        <div className='font-["Poppins"] space-y-2'>
          <h2 className='text-xl font-medium text-white'>Ilham Dhiya Ulhaq</h2>
          <span className='text-sm underline text-white font-light'>Frontend Enginer of Run System</span>
          <Button onClick={handleShowDetail}>
            Click for show more <small>&#8595;</small>
          </Button>
        </div>
        <MyPhoto />
      </div>
      <article className={`about-me ${showDetail.aboutMe}`}>
        <p>Hello, my name is Ilham, I am from Semarang, I was born in Surabaya, May 17, 1998. I am a student at the University of Semarang who really likes the world of programming, even though I am not yet proficient in this field, I will continue to learn because I have a strong will and high consistency in learning programming. So by participating in the Awakening Academy program, I hope that I can hone my skills in the programming world.</p>
      </article>
    </div>
  );
}

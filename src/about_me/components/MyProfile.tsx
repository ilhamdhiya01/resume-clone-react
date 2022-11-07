import Button from './Button';
import MyPhoto from './MyPhoto';
import { useState } from 'react';
import MyDetail from './MyDetail';
export default function MyProfile() {
  const [showDetail, setShowDetail] = useState(false);
  const handleShowDetail = () => {
    setShowDetail(true);
  };
  const handleHideDetail = () => {
    setShowDetail(false);
  };
  return (
    <div className={`${showDetail ? 'transition-all duration-[0.4s] ease-in shadow-lightBorder p-[25px] rounded-br-[65px] rounded-tl-[65px]' : 'transition-all duration-[0.4s] ease-in-out rounded-none'} bg-[#18191C] max-w-[530px] h-full w-full p-[25px] mt-4 ml-4`}>
      <div className='font-["Poppins"] space-y-2 float-left'>
        <h2 className='text-xl font-medium text-white'>Ilham Dhiya Ulhaq</h2>
        <span className='text-sm underline text-white font-light'>Frontend Enginer of Run System</span>
        {showDetail ? <Button onClick={handleHideDetail}>Hide more detail</Button> : <Button onClick={handleShowDetail}>Show more detail</Button>}
      </div>
      <MyPhoto propsState={showDetail} />
      <div className='clear-both'></div>
      <MyDetail propsState={showDetail} />
    </div>
  );
}

import myPhoto from '../assets/me.png';
export default function MyPhoto() {
  return <img src={myPhoto} alt={myPhoto} className='w-[100px] h-[100px] rounded-full shadow-customImg object-cover' />;
}

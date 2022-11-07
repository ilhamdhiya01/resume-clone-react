import myPhoto from '../assets/me.png';
export default function MyPhoto(props: any) {
  const {propsState} = props
  return <img src={myPhoto} alt={myPhoto} className={`${propsState ? 'transition-all duration-[0.4s] ease-in shadow-lightBorder rounded-tr-[50%] rounded-b-full' : 'transition-all duration-[0.4s] ease-in-out rounded-full'} w-[100px] h-[100px] rounded-full shadow-customImg object-cover float-right`} />;
}

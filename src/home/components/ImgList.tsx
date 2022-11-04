import code1 from '../assets/code1.jpg';
import code2 from '../assets/code2.jpg';
import code3 from '../assets/code3.jpg';
import code4 from '../assets/code4.jpg';
export default function ImgList() {
  const images = [code1, code2, code3, code4];
  return (
    <div className='flex justify-end'>
      <div className='grid grid-cols-4 gap-5'>
        {images.map((img) => (
          <img key={img} src={img} alt='image-list' className='object-cover w-[160px] h-[160px] hover:rounded-[15px] transition-all duration-[0.4s] ease-in hover:shadow-custom' />
        ))}
      </div>
    </div>
  );
}

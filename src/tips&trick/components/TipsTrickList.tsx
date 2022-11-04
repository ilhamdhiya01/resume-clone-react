import { dataTipsAndTrick } from '../service';
export default function TipsTrickList() {
  return (
    <>
      {dataTipsAndTrick.map((data) => (
        <div key={data.id} className='w-full grid grid-cols-2'>
          <div className={`flex ${data.id % 2 === 0 ? 'justify-start col-start-2' : 'justify-end col-start-1'}`}>
            <img src={data.image} alt={data.image} className='h-[300px] object-cover object-center' />
          </div>
          <article className={`flex ${data.id % 2 === 0 ? 'row-start-1' : 'justify-center'}`}>
            <div className='text-center m-auto max-w-lg w-full space-y-2'>
              <h2 className='text-[#f5f6fa] text-xl tracking-wide font-bold font-["Poppins"]'>{`${data.id}. ` + data.title}</h2>
              <p className='text-[#aaa] text-lg font-["Poppins"]'>{data.body}</p>
            </div>
          </article>
        </div>
      ))}
    </>
  );
}

import {FaQuoteLeft,FaQuoteRight} from 'react-icons/fa'

function Card(props)
{
    let review=props.review;
   return(
    <div className='flex flex-col  md:relative '>
        <div className='absolute top-[-7rem] z-[10] mx-auto '>
            <img src={review.image} alt="sjs" className='aspect-square rounded-full w-[140px] h-[140px]'/>
        </div>
        <div className='text-center mt-7'>
            <p className='font-bold text-2xl capitalize'>{review.name}</p>
        </div>
        <div className='text-center mt-7'>
            <p className='text-violet-300 upperCase '>{review.job}</p>
        </div>
        <div className='text-violet-400 mx-auto mt-5'>
            <FaQuoteLeft/>
        </div>
        <div className='text-center mt-4 text-slate-500'>
            {review.text}
        </div>
        <div className='text-violet-400 mx-auto mt-5'>
            <FaQuoteRight/>
        </div>
      

    </div>
   )
}
export default Card;
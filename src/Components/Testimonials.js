import { useState } from "react";
import Card from "./Card";
import {FiChevronLeft,FiChevronRight} from'react-icons/fi'
function Testimonials(props)
{
    const [index,setindex]=useState(0);
    let reviews=props.reviews;
    let size=reviews.length;
    function leftshifthandler()
    {
        if(index-1<0)
        {
            setindex(size-1);
        }
        else
        {
            setindex(index-1);
        }


    }

    function rightshifthandler()
    {
        if(index===size-1)
        {
            setindex(0);
        }
        else
        {
            setindex(index+1);
        }
    }

    function supriseHandler()
    {
       let randomindex=Math.floor((Math.random()*reviews.length));
       setindex(randomindex);
    }
      return (
     <div className="w-[85vw] md:w-[700px] bg-white flex flex-col justify-center items-center mt-10 p-10 transition-all duration-700">
        <Card review={reviews[index]}></Card>
        <div className='flex text-3xl justify-center mt-5 gap-3 text-violet-400 font-bold'>
            <button onClick={leftshifthandler} className='cursor-pointer  hover:text-violet-950'>
                <FiChevronLeft/>
            </button>
            <button onClick={rightshifthandler} className='cursor-pointer  hover:text-violet-950'>
                <FiChevronRight/>
            </button>
        </div>
        <div>
            <button  onClick={supriseHandler} className='bg-violet-400 hover:bg-violet-500 transition-all duration-200 text-center cursor-pointer font-bold roundedmd px-10 py-2 text-white'>
                Suprise Me
            </button>
        </div>  
    </div>
      )  
}
export default Testimonials;
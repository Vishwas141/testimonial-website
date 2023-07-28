import React from "react";
import reviews from "./data";
import Testimonials from "./Components/Testimonials";
const App = () => 
{
  return (
    <div className="flex flex-col justify-center items-center w-[100vw] h-[100vh] bg-gray-400">
        <div className="text-center">
                       <h1 className="text-4xl font-bold mx-auto">Our Testimonials</h1>
                       <div className="h-[4px] w-[200px] mx-auto bg-violet-400 mt-1"></div>
                       <Testimonials reviews={reviews}></Testimonials>
         </div>
    </div>
  )
};

export default App;

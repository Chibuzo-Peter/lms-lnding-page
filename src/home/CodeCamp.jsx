import React from 'react'
import './home.css'
import Aos from 'aos';
import 'aos/dist/aos.css';
import { useEffect } from "react";


const CodeCamp = (props) => {

  useEffect(()=>{
    Aos.init({duration:2000});
   },[]);

  return (
    <>
    <div className=' my-5 mx-14 px-5 border-2 rounded-tr-[50px] rounded-bl-[50px] flex justify-center lg:mt-10 lg:mr-10 md:mx-10' data-aos="fade-up" >
        <div className=' block text-center my-7'>
         <div>
           <img src={props.sticker} alt="img"  className=' ml-auto mr-auto'/>
            </div>
            <div className='title font-semibold text-xl text-primary'>
                {props.title}
            </div>
            <div>
              <div></div>
                {props.content}
            </div>
        </div>
 
    </div> 
    </>
  )
}

export default CodeCamp;

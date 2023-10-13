import React from 'react'
import Prof_pic from '../assets/Prof_pic.jpeg';
import { MdOutlineKeyboardArrowRight } from "react-icons/md";
import { Link } from 'react-scroll';
import Typed from 'typed.js';
import styles from './css/Home.module.css'
import { useEffect ,useRef} from 'react';
const Home = () => {


    const el = React.useRef(null);

    React.useEffect(() => {
      const typed = new Typed(el.current, {
        strings: ['a problem solver', 'a critical thinker', 'a team player', 'a leader'],
        typeSpeed: 50,
        backSpeed : 50,
        loop: true,
      });
  
      return () => {
        // Destroy Typed instance during cleanup to stop animation
        typed.destroy();
      };
    }, []);


  return (
    <div name = "home" className="h-screen w-full bg-gradient-to-b from-black via-black to-gray-800 ">

        <div className=" max-w-screen-lg mx-auto flex flex-co items-center
         justify-center h-full px-4 md:flex-row">
            <div className="flex flex-col justify-center h-full">
                <h2 className="text-4xl sm:text-7xl font-bold text-white">I am a future full-stack engineer. </h2>

                <p className="text-gray-500 py-4 max-w-md"> I am <span className="text-blue-500" ref={el}></span>
                
                </p>

                <div>
                    <Link to = "portfolio" smooth duration={500} className="group text-white w-fit px-6 py-3 my-2 flex items-center rounded-md
                     bg-gradient-to-r from-cyan-500 to to-blue-500 cursor-pointer" >
                        Portfolio
                        <span className="group-hover:rotate-90 duration-300">
                            <MdOutlineKeyboardArrowRight size={25} className= "ml-1" />
                        </span>
                    </Link>

                </div>
            </div>
            <div>
                <img src={Prof_pic} alt="my_picture" className=" rounded-2xl mx-auto w-2/3 md:w-full"/>
            </div>
        </div>
    </div>
  )
}

export default Home
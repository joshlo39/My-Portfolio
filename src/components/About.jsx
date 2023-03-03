import React from 'react'

const About = () => {
  return (
    <div name= "about" className="w-full h-screen bg-gradient-to-b
     from-gray-800 to to-black text-white">
        <div className=" max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full">
            <div className="pb-8">
                 <p className=" text-4xl font-bold inline border-b-4 border-blue-500">
                    About
                 </p>
            </div>
            
            <p className=" text-xl mt-10">
                My name is Joshua Lopes and I am a full-stack engineer. I am currently
                Lorem ipsum dolor sit amet,Lorem ipsum dolor sit amet consectetur adipisicing elit.
                 Quidem, reprehenderit. consectetur adipisicing elit. Accusantium,
            </p>
            
            <br />
            
            <p className="text-xl">
                My name is Joshua Lopes and I am a full-stack engineer. lorem 20 I am currently
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusantium,
            </p>

        </div>
    </div>
  )
}

export default About
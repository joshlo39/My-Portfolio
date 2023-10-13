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
                Hello, my name is Joshua Lopes and I am a Computer Science student at Florida International University graduating in June 2024.
                I have been programming for 3 years now and I have become interested in creating projects with real world applications. 
            </p>
            
            <br />
            
            <p className="text-xl">
                I have always been facinated about the advancements and power of computing and I aspire to use my skills to assist in the advancements 
                of technology in our society. 
            </p>

        </div>
    </div>
  )
}

export default About
"use client"
import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { TypeAnimation } from 'react-type-animation';



const HeroSection = () => {
return (
<section>
<div className='grid grid-cols-1 lg:grid-cols-12'>
<div className='col-span-7 place-self-center text-center sm:text-left'>
<h1 className="text-white mb-4 text-4xl sm:text-5xl lg:text-8xl lg:leading-normal font-extrabold">
    <span className='text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-600'>Hi I{"'"}m{" "}</span>
    Mesel <br/>
<TypeAnimation
  sequence={[
    // Same substring at the start will only be typed out once, initially
    'Performance Marketer',
    1000, // wait 1s before replacing "Mice" with "Hamsters"
    'Backend Engineer',
    1000,
    'Web Developer',
    1000,
  ]}
  wrapper="span"
  speed={50}
  repeat={Infinity}
/>
</h1>
<p className="text-[#ADB7BE] text-base sm:text-lg mb-6 lg:text-xl">
My journey started with a dream, with lots of new experiences and knowledge. Here{"'"}s my journey!</p>
<div>
<Link
href="/contact"
className="px-6 inline-block py-3 w-full sm:w-fit rounded-full mr-4 bg-gradient-to-br from-blue-500 via-purple-500 to-pink-500 hover:from-blue-500/80 hover:via-purple-500/80 hover:to-pink-500/80 hover:bg-gradient-to-br text-white"
>Hire Me</Link>
<Link
href="https://drive.google.com/file/d/1BJLZa4pmUvfZgsFfAosaHmwVdHYdeOuO/view?usp=sharing"
className="px-1 inline-block py-1 w-full sm:w-fit rounded-full bg-gradient-to-br from-blue-500 via-purple-500 to-pink-500 hover:bg-slate-800 text-white mt-3"
>
<span className='block bg-[#121212] hover:bg-slate-800 rounded-full px-5 py-2'>
Download CV
</span></Link>
</div>
</div>
<div className='col-span-5 place-self-center mt-4 lg:mt-0'>
<div className='rounded-full bg-[#181818] w-[250px] h-[250px] lg:w-[400px] lg:h-[400px] relative'>
<Image
src='/images/meselghea.png'
alt='meselghea'
className='absolute transform -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2'
width={400}
height={400}
/>
</div>
</div>
</div>
</section>
)
}


export default HeroSection
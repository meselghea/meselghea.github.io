"use client";
import React, { useTransition, useState } from "react";
import Image from "next/image";
import TabButton from "./TabButton";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";

const TAB_DATA = [
  {
    title: "Skills",
    id: "skills",
    content: (
      <ul className="grid grid-cols-3 justify-center items-center md:grid-cols-6">
        <li  className="mx-auto my-2"><Image width={50} height={50} src="https://iconape.com/wp-content/files/fh/110909/png/typescript.png" alt="typescript"></Image></li>
        <li className="mx-auto my-2"><Image width={50} height={50} src="https://iconape.com/wp-content/files/kr/371166/svg/371166.svg" alt="nestjs"></Image></li>
        <li className="mx-auto my-2"><Image width={50} height={50} src="https://iconape.com/wp-content/files/xq/371324/svg/371324.svg" alt="postgresql"></Image></li> 
        <li className="mx-auto my-2"><Image width={50} height={50} src="https://iconape.com/wp-content/files/jf/370708/svg/cloudflare-logo-icon-png-svg.png" alt="cloudflare"></Image></li>
        <li className="mx-auto my-2"><Image width={50} height={50} src="https://iconape.com/wp-content/png_logo_vector/graphql.png" alt="graphql"></Image></li>
        <li className="mx-auto my-2"><Image width={50} height={50} src="https://vitejs.dev/logo.svg" alt="vite"></Image></li>
        <li className="mx-auto bg-white px-2 my-2"><Image width={50} height={50} src="https://iconape.com/wp-content/png_logo_vector/nextjs.png" alt="nextjs"></Image></li>
        <li className="mx-auto bg-white my-2"><Image width={50} height={50} src="https://iconape.com/wp-content/files/rj/371212/svg/371212.svg" alt="js"></Image></li>
        <li className=" px-2 mx-auto bg-white my-2"><Image width={50} height={50} src="https://iconape.com/wp-content/png_logo_vector/mysql-3.png" alt="mysql"></Image></li>
        <li className="px-2 mx-auto bg-white my-2"><Image width={50} height={50} src="https://iconape.com/wp-content/png_logo_vector/mongodb.png" alt="mongodb"></Image></li>
        <li className="px-2 mx-auto my-2"><Image width={50} height={50} src="https://iconape.com/wp-content/files/an/351546/png/tailwind-css-logo.png" alt="mongodb"></Image></li>
        <li className="px-2 mx-auto my-2"><Image width={50} height={50} src="https://iconape.com/wp-content/png_logo_vector/figma-logo.png" alt="figma"></Image></li>
      </ul>
    ),
  },
  {
    title: "Education",
    id: "education",
    content: (
      <Carousel 
      autoPlay={true} 
        interval={1000} 
        infiniteLoop={true} 
        
       className="mx-auto">
        <div className="py-8"> <Image className="mx-auto w-[100px] h-[100px]" src="https://assets-global.website-files.com/61af164800e38c4f53c60b4e/61af164800e38c11efc60b6d_RevoU.svg" width={100} height={100} alt={""}></Image> RevoU <br/> Full Stack Software Engineering <br/>(2023)</div>
        <div className=" py-8"> <Image className="mx-auto w-[100px] h-[100px]" src="https://assets-global.website-files.com/61af164800e38c4f53c60b4e/61af164800e38c11efc60b6d_RevoU.svg" width={100} height={100} alt={""}></Image> RevoU <br/> Full Stack Digital Marketing <br/>(2022)</div>
        <div className="py-8"><div className="w-[100px] h-[100px] mx-auto"><Image src="/images/sahid.png" width={100} height={100} alt={""}></Image></div> Universitas Sahid <br/> Bachelor of Business Management <br/> (2015 - 2017)  </div>
        <div className="py-8"><div className="w-[100px] h-[100px] mx-auto"><Image src="/images/ui.png" width={100} height={100} alt={""}></Image></div> Universitas Indonesia <br/> Associate{"'"}s of Cultural Tourism <br/> (2012 - 2015) </div>
        </Carousel>
    ),
  },
  {
    title: "experience",
    id: "experience",
    content: (
      <Carousel 
      autoPlay={true} 
        interval={1000} 
        infiniteLoop={true} 
        showThumbs={false}
       className="mx-auto">
        <div className="py-4"><div className="w-[100px] h-[100px] mx-auto"><Image src="/images/happyfit.png" width={100} height={100} alt=""></Image></div>Happyfit Indonesia<br/>Performance Marketing<br/>(06.2023 - Present) </div>
        <div className="py-4"><div className="w-[100px] h-[100px] mx-auto my-4"><Image className="rounded-full" src="/images/headstart.jpeg" width={100} height={100} alt=""></Image></div>Headstart Digital <br/> Social Media Specialist (Content & Ads)<br/>(11.2022 - 04.2023) </div>
        <div className="py-4 "><div className="w-[150px] h-[70px] mx-auto"><Image src="/images/usg.webp" width={100} height={100} alt=""></Image> </div>USG Education <br/> Digital Marketing Officer <br/>(08.2022 - 11.2022) </div>
        <div className="py-4 "><Image  className="mx-auto w-[100px] h-[100px]" src="https://assets-global.website-files.com/61af164800e38c4f53c60b4e/61af164800e38c11efc60b6d_RevoU.svg" width={100} height={100} alt=""></Image>RevoU<br/>Team Leader Full Stack Digital Marketing<br/>(04.2022 - 08.2022) </div>
        <div className="py-4"><div className="w-[100px] h-[100px] mx-auto"><Image src="https://ntaindonesia.co.id/assets/images/Nippon-Travel-Agency-INDONESIA-b.jpg" width={100} height={100} alt=""></Image></div>PT Jabato International (NTA Indonesia) <br/> Digital Marketing & Tour Operation <br/> (02.2019 - 06.2021)  </div>
        </Carousel>
    ),
  },
  {
    title: "Certifications",
    id: "certifications",
    content: (
      <Carousel 
      autoPlay={true} 
        interval={1000} 
        infiniteLoop={true} 
       className="mx-auto justify-center">
        <div className="py-4 my-4 text-lg"><div className="w-[300px] h-[210px] sm:w-[500px] sm:h-[350px] mx-auto"><Image src="/images/FSSE.png" width={900} height={500} alt=""></Image></div>Revou - Full Stack Software Engineering</div>
        <div className="py-4 my-4 text-lg"><div className="w-[300px] h-[210px] sm:w-[500px] sm:h-[350px] mx-auto"><Image src="/images/happyfit1.png" width={900} height={500} alt=""></Image></div>Happyfit - Potential New Comer </div>
        <div className="py-4 my-4 text-lg"><div className="w-[300px] h-[210px] sm:w-[500px] sm:h-[330px] mx-auto"><Image src="/images/besttl.png" width={900} height={500} alt=""></Image></div>Revou - Best Team Lead of FSDM May 2022 </div>
        <div className="py-4 my-4 text-lg"><div className="w-[300px] h-[210px] sm:w-[500px] sm:h-[350px] mx-auto"><Image src="/images/CertificateFSDM.png" width={900} height={500} alt=""></Image></div>Revou - Full Stack Digital Marketing </div>
        <div className="py-4 my-4 text-lg"><div className="w-[300px] h-[210px] sm:w-[500px] sm:h-[350px] mx-auto"><Image src="/images/jabatocertficate.png" width={900} height={500} alt=""></Image></div>Jabato - Excellent Employee Award in 2020 </div>
        </Carousel>
    ),
  },
];

const AboutSection = () => {
  const [tab, setTab] = useState("skills");
  const [isPending, startTransition] = useTransition();

  const handleTabChange = (id: React.SetStateAction<string>) => {
    startTransition(() => {
      setTab(id);
    });
  };

  return (
    <section className="text-white" id="about">
      <div className="md:grid sm:grid-cols-1 gap-8 items-center py-8 px-4 xl:gap-8 sm:py-16 xl:px-2 relative">
      {/* <div className="about-image z-10">
        {/* <Image src="/images/about-image.png" width={500} height={500} alt={""} /> */}
        {/* </div> */}
        <div className="mt-4 md:mt-0 text-left flex flex-col h-full">
          <h2 className="text-4xl font-bold text-white mb-4">About Me</h2>
          <p className="text-base lg:text-lg">
          I{"'"}m a change-driven person who enjoys a collaborative and flexible workplace. 
I currently work as a performance marketing specialist. Also, I spent six months at Revou learning full-stack software engineering. <br/> I{"'"}m fluent in the seller marketplace dashboard.
I learned about end-to-end software engineering projects. I’m familiar with PostgreSQL, MySQL, MongoDB, Javascript, Typescript, and APIs, as well as being a problem solver, a good communicator, and able to collaborate in a team. 
<br/>With the skills and experiences mentioned, I believe my skills can have an impact on others as a backend software engineer in the marketplace industry, especially my future team.
          </p>
          <div className="flex flex-row justify-start mt-8">
            <TabButton
              selectTab={() => handleTabChange("skills")}
              active={tab === "skills"}
            >
              {" "}
              Skills{" "}
            </TabButton>
            <TabButton
              selectTab={() => handleTabChange("education")}
              active={tab === "education"}
            >
              Education{" "}
            </TabButton>
            <TabButton
              selectTab={() => handleTabChange("experience")}
              active={tab === "experience"}
            >
              Experience{" "}
            </TabButton>
            <TabButton
              selectTab={() => handleTabChange("certifications")}
              active={tab === "certifications"}
            >
              {" "}
              Certifications{" "}
            </TabButton>
          </div>
          <div className="mt-8">
            {TAB_DATA.find((t) => t.id === tab)?.content}
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;

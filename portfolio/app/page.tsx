'use client';

import React, { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import Magnet from "@/components/animations.jsx/Magnet/Magnet";
import DecryptedText from "@/components/animations.jsx/DecryptedText/DecryptedText";
import Noise from "@/components/animations.jsx/Noise/Noise";
import { LinkPreview } from "@/components/ui/link-preview";
import { FloatingDock } from "@/components/ui/floating-dock";
import {
  IconBrandGithub,
  IconBrandInstagram,
  IconBrandLinkedin,
  IconHome
} from "@tabler/icons-react";

const Loader = () => (
  <div className="fixed inset-0 z-50 flex items-center justify-center bg-black transition-opacity duration-500">
    <div className="relative h-16 w-16">
      <div className="absolute h-full w-full animate-spin rounded-full border-t-4 border-white"></div>
      <div className="absolute h-full w-full animate-ping rounded-full border-2 border-white opacity-20"></div>
    </div>
  </div>
);

const SectionHeader = ({ title, bgColor = "bg-[#F9F9F9]", textColor = "text-black" }) => (
  <div 
    className={`group w-full max-w-[90%] md:max-w-[80%] h-[60px] rounded-3xl relative overflow-hidden ${bgColor} 
    flex items-center justify-center opacity-0 translate-y-4 transition-all duration-700 ease-out animate-fade-up
    hover:scale-[1.02] transform-gpu mx-auto`}
  >
    <p className={`text-2xl md:text-3xl lg:text-4xl font-semibold ${textColor} transition-transform duration-300 group-hover:scale-105`}>
      {title}
    </p>
    <Noise
      patternSize={250}
      patternScaleX={1}
      patternScaleY={1}
      patternRefreshInterval={2}
      patternAlpha={15}
    />
  </div>
);

export default function Home() {
  const [isLoading, setIsLoading] = useState(true);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    document.documentElement.style.scrollBehavior = 'smooth';
    
    const timer = setTimeout(() => {
      setIsLoading(false);
      setMounted(true);
    }, 1000);

    return () => {
      clearTimeout(timer);
      document.documentElement.style.scrollBehavior = 'auto';
    };
  }, []);

  const links = [
    {
      title: "Home",
      icon: (
        <IconHome className="h-full w-full text-neutral-500 dark:text-neutral-300" />
      ),
      href: "#",
    },
    {
      title: "Linkedin",
      icon: (
        <IconBrandLinkedin className="h-full w-full text-neutral-500 dark:text-neutral-300" />
      ),
      href: "https://www.linkedin.com/in/venkataraman-tsk-490564302/",
    },
    {
      title: "Instagram",
      icon: (
        <IconBrandInstagram className="h-full w-full text-neutral-500 dark:text-neutral-300" />
      ),
      href: "https://www.instagram.com/_venkat04_/",
    },
    {
      title: "GitHub",
      icon: (
        <IconBrandGithub className="h-full w-full text-neutral-500 dark:text-neutral-300" />
      ),
      href: "https://github.com/TSKVenkat",
    },
  ];

  if (!mounted) return <Loader />;

  return (
    <main className="min-h-screen bg-black selection:bg-white selection:text-black overflow-x-hidden">
      <div className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-16 space-y-24 sm:space-y-32">
        {/* Hero Section */}
        <section className="flex flex-col items-center justify-center space-y-12 sm:space-y-16 w-full">
          <Magnet
            padding={50}
            disabled={false}
            magnetStrength={10}
            className="transform-gpu"
          >
            <div className="relative w-[150px] h-[150px] sm:w-[200px] sm:h-[200px] md:w-[250px] md:h-[250px]">
              <Image
                src="/file (4).enc"
                fill
                className="rounded-full object-cover transition-all duration-500 hover:drop-shadow-[0_0_60px_rgba(255,255,255,0.5)]"
                alt="profile picture"
                priority
                sizes="(max-width: 640px) 150px, (max-width: 768px) 200px, 250px"
                unoptimized
              />
            </div>
          </Magnet>

          <div className="flex flex-col  justify-center items-center w-full">
            <div className="text-center w-full">
              <div className="inline-block overflow-hidden px-4">
                <DecryptedText
                  text="Venkataraman T S K"
                  animateOn="view"
                  revealDirection="center"
                  speed={60}
                  maxIterations={20}
                  className="revealed whitespace-nowrap self-center text-lg sm:text-xl md:text-3xl lg:text-4xl xl:text-5xl font-bold text-white transform-gpu transition-all duration-300"
                  parentClassName="all-letters"
                  encryptedClassName="encrypted"
                />
              </div>
            </div>
            <span className="font-grotesk text-lg sm:text-xl md:text-2xl text-gray-400 transition-all">
              Web Developer
            </span>
          </div>
        </section>

        {/* About Section */}
        <section className="flex flex-col items-center space-y-12 w-full">
          <SectionHeader title="About me" />
          <div className="max-w-3xl mx-auto px-4 w-full">
            <p className="font-grotesk text-center text-base sm:text-lg md:text-xl text-white
              opacity-0 translate-y-4 transition-all duration-700 ease-out animate-fade-up
              leading-relaxed">
              A versatile web developer with a passion for crafting dynamic and user-centric websites.
              Currently, I'm pursuing a dual degree at IIT Madras and SNUC IoT, where I am deepening
              my understanding of technology and its applications.
            </p>
          </div>
        </section>

        {/* Expertise Section */}
        <section className="flex flex-col items-center space-y-12 w-full">
          <SectionHeader title="My Expertise" bgColor="bg-[#C04A51]" textColor="text-white" />
          <div className="grid gap-6 sm:gap-8 grid-cols-1 md:grid-cols-2 w-full max-w-5xl mx-auto px-4">
            {[
              {
                icon: "🚀",
                title: "Custom Web Development",
                description: "Crafting fast, responsive, and visually engaging websites with modern frameworks."
              },
              {
                icon: "🛒",
                title: "E-Commerce Solutions",
                description: "Building scalable platforms with seamless payments, analytics, and user-friendly experiences."
              },
              {
                icon: "🎟️",
                title: "Event & Registration Systems",
                description: "Developing dynamic portals to handle large-scale event registrations with real-time data tracking."
              },
              {
                icon: "🎨",
                title: "Interactive UI/UX",
                description: "Enhancing user engagement with animations, immersive effects, and intuitive design."
              }
            ].map((item, index) => (
              <div 
                key={index} 
                className="group bg-neutral-900 p-6 rounded-lg transform-gpu transition-all duration-300
                  hover:scale-[1.02] hover:bg-neutral-800 hover:shadow-xl hover:shadow-white/5"
              >
                <span className="text-2xl sm:text-3xl block mb-4 transform-gpu transition-transform duration-300 group-hover:scale-110">
                  {item.icon}
                </span>
                <h3 className="font-grotesk font-semibold text-lg sm:text-xl text-white mb-2">
                  {item.title}
                </h3>
                <p className="font-grotesk text-gray-300 text-sm sm:text-base">
                  {item.description}
                </p>
              </div>
            ))}
          </div>
        </section>

        {/* Tech Stack Section */}
        <section className="flex flex-col items-center space-y-12 w-full">
          <SectionHeader title="Tech Stack" bgColor="bg-yellow-300" />
          <div className="grid gap-6 sm:gap-8 grid-cols-1 md:grid-cols-2 lg:grid-cols-3 w-full max-w-6xl mx-auto px-4">
            {[
              {
                title: "Front-End Development",
                description: "Proficient in HTML, CSS (including Tailwind CSS), and JavaScript (Vanilla and React.js) to create responsive and dynamic user interfaces."
              },
              {
                title: "Back-End Development",
                description: "Experienced with Node.js and Firebase for building robust server-side applications and managing real-time databases."
              },
              {
                title: "Full-Stack Frameworks",
                description: "Skilled in Next.js for developing comprehensive web applications with server-side rendering capabilities."
              },
              {
                title: "Mobile Development",
                description: "Competent in React Native for crafting cross-platform mobile applications."
              },
              {
                title: "Database Management",
                description: "Knowledgeable in MySQL and SQL for efficient data storage, retrieval, and management."
              },
              {
                title: "Programming Languages",
                description: "Proficient in Python and C, enabling versatile problem-solving and application development."
              }
            ].map((item, index) => (
              <div 
                key={index} 
                className="group bg-neutral-900 p-6 rounded-lg transform-gpu transition-all duration-300
                  hover:scale-[1.02] hover:bg-neutral-800 hover:shadow-xl hover:shadow-white/5"
              >
                <h3 className="font-grotesk text-xl font-semibold text-white mb-4 transition-colors group-hover:text-yellow-300">
                  {item.title}
                </h3>
                <p className="font-grotesk text-gray-300 text-sm sm:text-base">
                  {item.description}
                </p>
              </div>
            ))}
          </div>
        </section>

        {/* Projects Section */}
        <section className="flex flex-col items-center space-y-12 w-full">
          <SectionHeader title="Projects" bgColor="bg-blue-300" />
          <div className="max-w-4xl mx-auto px-4 w-full">
            <p className="font-grotesk text-center text-base sm:text-lg md:text-xl text-white">
              Please Check out my projects at my{" "}
              <LinkPreview url="https://devpointsnuc.vercel.app" className="font-bold text-blue-500 hover:text-blue-400 transition-colors">
                DevPoint
              </LinkPreview>{", "}
              <LinkPreview url="https://www.snuchennai.edu.in/nss/" className="font-bold text-blue-500 hover:text-blue-400 transition-colors">
                Shiv Nadar University's NSS
              </LinkPreview>{", "}
              and{" "}
              <LinkPreview url="https://ssnsnucinstincts.com/" className="font-bold text-blue-500 hover:text-blue-400 transition-colors">
                Instincts'25 website
              </LinkPreview>.
            </p>
          </div>
        </section>

        {/* Education Section */}
        <section className="flex flex-col items-center space-y-12 w-full">
          <SectionHeader title="Education" bgColor="bg-green-300" />
          <div className="group flex flex-col md:flex-row gap-8 items-center w-full max-w-4xl mx-auto p-6 border rounded-xl
            hover:border-yellow-300/50 transition-all duration-300 transform-gpu hover:scale-[1.01]">
            <div className="relative w-full md:w-[300px] h-[200px] md:h-[150px]">
              <Image
                src="/SNUC.webp"
                fill
                className="rounded-xl object-contain"
                alt="Shiv Nadar University"
                priority
                sizes="(max-width: 768px) 100vw, 300px"
                unoptimized
              />
            </div>
            <div className="flex flex-col space-y-4 flex-1">
              <Link 
                href="https://www.snuchennai.edu.in/" 
                target="_blank" 
                className="font-grotesk font-bold text-xl md:text-2xl text-white hover:text-yellow-300 transition-colors"
              >
                Shiv Nadar University Chennai
              </Link>
              <p className="font-grotesk text-gray-300 text-sm sm:text-base leading-relaxed">
                The Shiv Nadar University Chennai is established by an act of the Tamil Nadu Legislative Assembly to promote, conceptualize and bring about a paradigm shift through the development of outstanding leadership, research, knowledge and ideas for education and allied development sectors. Shiv Nadar University Chennai is part of the Shiv Nadar Foundation that has a legacy of excellence of over 30 years in education with over 40,000 alumni and students and an investment of over Rs 10,000 cr in building world-class institutions.
              </p>
            </div>
          </div>
        </section>

        {/* Contact Section */}
        <section className="flex items-center justify-center w-full">
          <FloatingDock
            mobileClassName="translate-y-10"
            items={links}
          />
        </section>
      </div>
    </main>
  );
}
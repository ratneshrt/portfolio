"use client";
import { Paragraph } from "@/components/Paragraph";
import Image from "next/image";

import { motion } from "framer-motion";

export default function About() {
  const images = [
    "https://i.pinimg.com/736x/d8/88/8d/d8888d7662619404c89cbd5c76db5048.jpg",
    "https://i.pinimg.com/736x/c8/0a/ef/c80aef5ed6c6c7a172f4d7e1829aa76b.jpg",
    "https://i.pinimg.com/736x/48/5f/70/485f7018fd461c8d255777e85d321784.jpg",
    "https://i.pinimg.com/736x/1e/e4/1c/1ee41cb4da9f181626266fe21ab6f1ca.jpg",
  ];
  return (
    <div>
      <div className="grid grid-cols-2 md:grid-cols-4 gap-10 my-10">
        {images.map((image, index) => (
          <motion.div
            key={image}
            initial={{
              opacity: 0,
              y: -50,
              rotate: 0,
            }}
            animate={{
              opacity: 1,
              y: 0,
              rotate: index % 2 === 0 ? 3 : -3,
            }}
            transition={{ duration: 0.2, delay: index * 0.1 }}
          >
            <Image
              src={image}
              width={200}
              height={400}
              alt="about"
              className="rounded-md object-cover transform rotate-3 shadow-xl block w-full h-40 md:h-60 hover:rotate-0 transition duration-200"
            />
          </motion.div>
        ))}
        {/* 
        // <Image
        //   src="https://images.unsplash.com/photo-1692544350322-ac70cfd63614?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHw1fHx8ZW58MHx8fHx8&auto=format&fit=crop&w=800&q=60"
        //   width={200}
        //   height={400}
        //   alt="about"
        //   className="rounded-md object-cover transform rotate-3 shadow-xl block w-full h-40 md:h-60 hover:rotate-0 transition duration-200"
        // />
        // <Image
        //   src="https://images.unsplash.com/photo-1692374227159-2d3592f274c9?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHw4fHx8ZW58MHx8fHx8&auto=format&fit=crop&w=800&q=60"
        //   width={200}
        //   height={400}
        //   alt="about"
        //   className="rounded-md object-cover transform -rotate-3 shadow-xl block w-full h-40 md:h-60  hover:rotate-0 transition duration-200"
        // />
        // <Image
        //   src="https://images.unsplash.com/photo-1692005561659-cdba32d1e4a1?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwxOHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=60"
        //   width={200}
        //   height={400}
        //   alt="about"
        //   className="rounded-md object-cover transform rotate-3 shadow-xl block w-full h-40 md:h-60  hover:rotate-0 transition duration-200"
        // />
        // <Image
        //   src="https://images.unsplash.com/photo-1692445381633-7999ebc03730?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwzM3x8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=60"
        //   width={200}
        //   height={400}
        //   alt="about"
        //   className="rounded-md object-cover transform -rotate-3 shadow-xl block w-full h-40 md:h-60  hover:rotate-0 transition duration-200"
        // /> */}
      </div>

      <div className="max-w-4xl">
      <Paragraph className="mt-4">
        Hey there, I&apos;m Ratnesh - a passionate developer with a knack for big ideas and an endless love for coffee. Welcome to my Gotham City, where I embrace my inner Dark Knight, crafting code that doesn&apos;t just work—it soars.
      </Paragraph>
      <Paragraph className="mt-4">
        From the very beginning, I&apos;ve been fascinated by the magic of turning concepts into impactful digital experiences. For me, coding is more than just writing scripts—it&apos;s about building solutions that are elegant, functional, and designed to make life better. My goal? To create digital marvels that leave a lasting impression.
      </Paragraph>
      <Paragraph className="mt-4">
        I have a deep appreciation for design that goes beyond aesthetics—functionality and beauty should always go hand in hand. Every project I work on is crafted with a keen eye for detail, ensuring it not only works flawlessly under the hood but also looks incredible on the surface.
      </Paragraph>
      <Paragraph className="mt-4">
        Through this space, I hope to share my journey, projects, and insights with you. Whether you&apos;re a developer looking for inspiration or simply someone who appreciates thoughtful design, I&apos;m sure you&apos;ll find something here to enjoy.
      </Paragraph>
      <Paragraph className="mt-4">
        Join me as we dive into the world of innovation, and design—together, we can explore how creativity and technology come together to create something extraordinary. Let&apos;s make this adventure unforgettable.
      </Paragraph>
      <Paragraph className="mt-4">
        Thanks for stopping by, and I can&apos;t wait to explore what we can achieve together!
      </Paragraph>
      </div>
    </div>
  );
}

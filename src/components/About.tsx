"use client";
import { Paragraph } from "@/components/Paragraph";
import Image from "next/image";

import { motion } from "framer-motion";

export default function About() {
  const images = [
    "https://i.pinimg.com/736x/15/19/e4/1519e47389370cd0c98e6c796fa60ebe.jpg",
    "https://i.pinimg.com/736x/c8/0a/ef/c80aef5ed6c6c7a172f4d7e1829aa76b.jpg",
    "https://i.pinimg.com/736x/8c/d2/39/8cd2391b0e8074fd5ba390a55799f750.jpg",
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
        Hey there, I&apos;m Ratnesh - I build projects from the ground up, turning ideas into working systems that people can actually use. I’ve created everything from my own version control setup to a decentralized exchange, and I enjoy exploring new ways to push what I know. My main focus is backend engineering, where I design APIs, build and maintain systems, and make sure they can scale. I code in Python, Java, C, JavaScript, and TypeScript, and I’m learning Go and Rust to go even deeper.
      </Paragraph>
      <Paragraph className="mt-4">
        I’ve worked with frameworks like Express, Spring Boot, React, Next.js, and Angular to build full-stack applications. On the infrastructure side, I handle containerization and orchestration with Docker, Kubernetes, and Swarm, and I’ve worked with tools like Kafka to keep systems reliable. I’m also diving into AI and machine learning, exploring how they can fit into the kind of projects I love building.
      </Paragraph>
      <Paragraph className="mt-4">
        What drives me is the mix of creativity and engineering. I like starting from scratch, figuring out the moving parts, and building something that works smoothly end to end.
      </Paragraph>
      </div>
    </div>
  );
}

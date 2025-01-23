import sidefolioAceternity from "public/images/sidefolio-musix.png";
import sidefolioAceternity2 from "public/images/sidefolio-musix-2.png";
import sidefolioAlgochurn from "public/images/sidefolio-katana.png";
import sidefolioAlgochurn2 from "public/images/sidefolio-katana-2.png";
import sidefolioMoonbeam from "public/images/sidefolio-moonbeam.png";
import sidefolioMoonbeam2 from "public/images/sidefolio-moonbeam-2.png";

export const products = [
  {
    href: "https://musix.kheti.me/",
    title: "Musix",
    description:
      "A music app where users collaboratively upvote songs, with the most popular tracks playing in real-time.",
    thumbnail: sidefolioAceternity,
    images: [sidefolioAceternity, sidefolioAceternity2],
    stack: ["Nextjs", "PostgreSQL", "Prisma ORM", "Tailwindcss"],
    slug: "musix",
    content: (
      <div>
        <p>
          Musix is a party-focused application that lets users create a music room where friends can join and collaboratively curate playlists.
          The app features a song upvoting system where participants vote for their favorite tracks, and the most upvoted songs automatically play
          on the speaker. It ensures a seamless music experience, allowing everyone to enjoy their preferred tracks in real-time.
          Musix is inspired by THE BATMAN theme.{" "}
        </p>
        <p>
          The app offers a responsive and intuitive interface, making it easy to use across devices.
          Its backend efficiently manages song queues, handles upvotes, and synchronizes playback for all participants.
          Designed to enhance group music experiences, Musix ensures that every party’s soundtrack reflects the collective choice of its participants.
        </p>{" "}
      </div>
    ),
  },
  {
    href: "https://katana.kheti.me/",
    title: "Katana",
    description:
      "An app that assigns an anime character to a user based on their GitHub profile using the GitHub and Jikan APIs.",
    thumbnail: sidefolioAlgochurn,
    images: [sidefolioAlgochurn, sidefolioAlgochurn2],
    stack: ["Nextjs", "GitHub API", "Jinkan API", "Tailwindcss"],
    slug: "katana",
    content: (
      <div>
        <p>
          This project integrates the GitHub API and Jikan API to create an engaging platform where users are matched with anime characters based on their GitHub profiles. By entering their GitHub username, users can retrieve details like their public repository count. Using this data, the app selects a corresponding anime character from the Jikan API, creating a unique blend of coding and anime culture.{" "}
        </p>
        <p>
          The project showcases a creative use of APIs and data mapping to provide a fun and interactive experience. It highlights the seamless combination of technology and entertainment, making it a perfect way for developers to connect with their interests in anime.
        </p>{" "}
      </div>
    ),
  },
  {
    href: "https://github.com/ratneshrt/hono-medium-boilerplate/tree/main",
    title: "InkHive",
    description:
      "A secure blogging platform with user authentication, built with React and Hono, optimized for performance with Cloudflare Workers.",
    thumbnail: sidefolioMoonbeam,
    images: [sidefolioMoonbeam, sidefolioMoonbeam2],
    stack: ["Reactjs", "Tailwindcss", "Hono", "CloudFare Workers", "PostgreSQL", "Prisma ORM"],
    slug: "inkhive",
    content: (
      <div>
        <p>
          InkHive is a blogging platform designed to offer a seamless and secure experience for managing and publishing content. Built using React and Tailwind CSS for a modern and responsive interface, the app provides five core features, including user authentication and comprehensive blog management. The backend, developed with Hono, includes four secure routes to handle functionalities like user sign-up, sign-in, and blog retrieval, ensuring efficient and reliable access to user data and content.{" "}
        </p>
        <p>
          To enhance performance and scalability, the backend is deployed on Cloudflare Workers, leveraging its serverless architecture for low-latency operations. Data validation is powered by Zod, ensuring robust input validation to maintain data integrity and prevent errors across the platform. With its optimized design and secure architecture, InkHive delivers a dependable solution for bloggers to create, manage, and share their content effortlessly.
        </p>{" "}
      </div>
    ),
  },
];

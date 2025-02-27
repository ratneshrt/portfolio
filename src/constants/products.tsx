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
    href: "https://atomixDrop.kheti.me",
    title: "atomixDrop",
    description:
      "AtomixDrop: Fast, secure P2P file sharing with WebRTC and Next.js.",
    thumbnail: sidefolioMoonbeam,
    images: [sidefolioMoonbeam, sidefolioMoonbeam2],
    stack: ["Nextjs", "WebRTC", "Socket.io", "Simple-Peer", "TailwindCSS"],
    slug: "atomixDrop",
    content: (
      <div>
        <p>
          AtomixDrop is a cutting-edge peer-to-peer (P2P) file-sharing application designed to facilitate fast, secure, and decentralized file transfers between users. Built with Next.js for the frontend and a Node.js backend for signaling, AtomixDrop leverages WebRTC to enable direct communication between devices without relying on intermediate servers. This ensures that files are transferred quickly and securely, with no third-party involvement.{" "}
        </p>
        <p>
        The application uses Socket.io for real-time signaling to establish P2P connections, while Tailwind CSS provides a sleek and responsive user interface. With features like drag-and-drop file uploads, real-time progress tracking, and transfer speed monitoring, AtomixDrop offers a seamless and intuitive user experience for sharing files of any size.
        </p>{" "}
      </div>
    ),
  },
];

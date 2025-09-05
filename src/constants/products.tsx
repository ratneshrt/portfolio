import sidefolioAceternity from "public/images/sidefolio-musix.png";
import sidefolioAceternity2 from "public/images/sidefolio-musix-2.png";
import sidefolioAlgochurn from "public/images/sidefolio-katana.png";
import sidefolioAlgochurn2 from "public/images/sidefolio-katana-2.png";
import sidefolioMoonbeam from "public/images/sidefolio-moonbeam.png";
import sidefolioMoonbeam2 from "public/images/sidefolio-moonbeam-2.png";
import sidefolioVaulty from "public/images/sidefolioVaulty.jpeg"
import sidefolioVaulty_2 from "public/images/sidefolioVaulty_2.jpeg"
import sidefoliovercel from "public/images/sidefoliovercel.png"
import sidefoliovercel_2 from "public/images/sidefoliovercel_2.png"
import sidefolio_orbit from "public/images/sidefolio_orbit.png"
import sidefolio_orbit_2 from "public/images/sidefolio_orbit_2.png"
import sidefolio_chat from "public/images/sidefolio_chat.png"
import sidefolio_chat_2 from "public/images/sidefolio_chat_2.png"
import sidefolio_url from "public/images/sidefolio_url.jpg"
import sidefolio_url_2 from "public/images/sidefolio_url_2.png"
import sidefolio_nimbusbox from "public/images/sidefolio_nimbusBox.png"
import sidefolio_repl from "public/images/sidefolio_repl.png"

export const products = [
  {
    href: "https://vaultly-rho.vercel.app/",
    title: "Vaulty",
    description:
      "Vaultly is your personal mini Google Drive built on AWS S3, giving you full control to store, manage, and share files with ease.",
    thumbnail: sidefolioVaulty,
    images: [sidefolioVaulty, sidefolioVaulty_2],
    stack: ["Nextjs","Tailwindcss", "AWS SDK"],
    slug: "vaulty",
    content: (
      <div>
        <p>
          Vaultly is a personal cloud storage platform built on top of AWS S3, giving you a mini Google Drive–like experience tailored for your own use. It lets you manage your S3 bucket with an intuitive interface, making file organization and sharing simple and efficient.{" "}
        </p>
        <p>
          With Vaultly, you can create folders, upload, download, preview, rename, and delete files, as well as share them through generated links. The app securely stores your credentials in localStorage, so you stay connected until you choose to disconnect. Designed to streamline file management, Vaultly combines the power of AWS S3 with the convenience of a user-friendly cloud storage solution.
        </p>{" "}
      </div>
    ),
  },
  {
    href: "https://musix-five.vercel.app/",
    title: "Musix",
    description:
      "A music app where users collaboratively upvote songs, with the most popular tracks playing in real-time.",
    thumbnail: sidefolioAceternity,
    images: [sidefolioAceternity, sidefolioAceternity2],
    stack: ["Nextjs", "Tailwindcss", "PostgreSQL", "Prisma ORM"],
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
    href: "https://katana-git-dish.vercel.app/",
    title: "Katana",
    description:
      "An app that assigns an anime character to a user based on their GitHub profile using the GitHub and Jikan APIs.",
    thumbnail: sidefolioAlgochurn,
    images: [sidefolioAlgochurn, sidefolioAlgochurn2],
    stack: ["Nextjs", "Tailwindcss", "GitHub API", "Jinkan API"],
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
    href: "https://github.com/ratneshrt/vercel",
    title: "Vercel",
    description:
      "A self-built Vercel clone that lets you deploy, manage, and host web applications with ease.",
    thumbnail: sidefoliovercel,
    images: [sidefoliovercel, sidefoliovercel_2],
    stack: ["Express", "CloudFlare R2", "Reactjs", "Tailwindcss"],
    slug: "vercel",
    content: (
      <div>
        <p> 
          This project is a self-built Vercel clone that handles the full workflow of deploying and hosting web applications using Cloudflare R2 for storage. It recreates the process of taking a GitHub repository, building it, and serving it through a generated URL, all tied together with a React frontend for accessibility. 
        </p>
        <p> 
          The system works by first uploading repository contents to R2 through the upload service, which assigns a unique ID. The deploy service then fetches the files from R2, builds the project, and pushes the build output back into R2 under the same ID. Finally, the request handler delivers the application by exposing a URL that points to the built files, with the entry served from the generated file like, <code>index.js</code>. While it doesn’t support Next.js projects, it effectively demonstrates how deployment pipelines, storage, and request routing come together to replicate the core functionality of platforms like Vercel. 
        </p>
      </div>
    ),
  },
  {
    href: "https://atomixdrop.vercel.app/",
    title: "atomixDrop",
    description:
      "AtomixDrop: Fast, secure P2P file sharing with WebRTC and Next.js.",
    thumbnail: sidefolioMoonbeam,
    images: [sidefolioMoonbeam, sidefolioMoonbeam2],
    stack: [ "WebRTC", "Socket.io", "Simple-Peer", "Nextjs", "TailwindCSS"],
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
  {
    href: "https://github.com/ratneshrt/nimbusbox",
    title: "nimbusBox",
    description:
      "A service that lets users provision databases like Postgres, MySQL, or MongoDB on demand and instantly receive connection strings to use them.",
    thumbnail: sidefolio_nimbusbox,
    images: [sidefolio_nimbusbox],
    stack: ["Express", "Docker", "Reactjs", "Tailwindcss"],
    slug: "nimbusBox",
    content: (
      <div>
        <p>
          This project is a self-built platform that allows users to quickly spin up databases such as Postgres, MySQL, or MongoDB on demand. By filling in simple details like username and password, users receive a ready-to-use connection string, making database setup fast and accessible without manual configuration.
        </p>
        <p>
          The system works by running Docker containers for different database images, dynamically provisioning them as users request new instances. Each database is isolated and tied to the connection details provided by the user, ensuring flexibility and reliability. While it doesn’t yet include features like scaling or automated backups, it effectively demonstrates how containerization, service orchestration, and user-driven provisioning can replicate the core functionality of modern database hosting platforms.
        </p>
      </div>),
  },
  {
    href: "https://github.com/ratneshrt/orbit",
    title: "Orbit",
    description:
      "A real-time YouTube watch party app with synced playback, chat, and user lists.",
    thumbnail: sidefolio_orbit,
    images: [sidefolio_orbit, sidefolio_orbit_2],
    stack: ["Express", "Socket.io", "Nextjs", "Tailwindcss"],
    slug: "orbit",
    content: (
      <div>
        <p>
          This project is a self-built YouTube watch party platform that enables users to watch videos together in real time while chatting and seeing who else is in the room. It synchronizes playback state across all participants, ensuring that when one person plays, pauses, or seeks, everyone else’s player updates instantly.
        </p>
        <p>
          The system works by creating a room with a unique ID where users can join with their name. The backend, powered by Socket.IO, keeps track of video state and broadcasts updates to all connected clients. The frontend, built with React, displays the video player, chat panel, and active user list. While it doesn’t yet include moderation or advanced controls, it effectively demonstrates how real-time communication, state synchronization, and UI components come together to replicate the collaborative experience of shared video streaming platforms.
        </p>
      </div>),
  },
  {
    href: "https://github.com/ratneshrt/repl",
    title: "Repl",
    description:
      "A web-based code editor that lets users create, manage, and edit files with an integrated terminal for running commands directly in the browser.",
    thumbnail: sidefolio_repl,
    images: [sidefolio_repl],
    stack: ["React", "TypeScript", "TailwindCSS", "xterm.js"],
    slug: "repl",
    content: (
      <div>
        <p>
          This project is a browser-based coding environment that combines a
          <strong>file explorer</strong>, an integrated <strong>code editor</strong>,
          and a <strong>terminal</strong> into a single application. It allows users
          to manage project files, write code, and execute commands seamlessly within
          the same interface.
        </p>
        <p>
          The platform’s design demonstrates how a modern coding environment can be
          built using frontend technologies. The <strong>FileTree</strong> component
          organizes and manages project files, while the <strong>Terminal</strong>,
          powered by xterm.js, provides a command-line interface for real-time code
          execution. Although features like containerized execution or live
          collaboration are not yet included, it effectively showcases the foundation
          of a lightweight cloud IDE.
        </p>
      </div>),
  },
  {
    href: "https://github.com/ratneshrt/chat-stranger",
    title: "chat-stranger",
    description:
      "An anonymous chat platform that pairs random strangers in real time for one-on-one conversations.",
    thumbnail: sidefolio_chat,
    images: [sidefolio_chat, sidefolio_chat_2],
    stack: ["Express", "Socket.io", "Redis", "Reactjs", "Tailwindcss"],
    slug: "chat-stranger",
    content: (
      <div>
        <p>
          This project is a self-built anonymous chat platform that connects random strangers for real-time one-on-one conversations. It allows users to instantly start chatting with a randomly paired partner without requiring accounts, profiles, or prior setup.
        </p>
        <p>
          The system works by leveraging a backend that manages a queue of users waiting for a match. When two users are paired, a private channel is created where they can exchange messages securely through WebSockets. Redis is used to handle session management and fast state tracking, while the frontend, built with React, provides a clean chat interface that makes the experience feel instant and fluid. While it doesn’t yet support video or group chats, it effectively demonstrates how matchmaking, session handling, and real-time communication can come together to replicate the core mechanics of platforms like Omegle.
        </p>
      </div>),
  },
  {
    href: "https://github.com/ratneshrt/url-shortner",
    title: "url-shortner",
    description:
      "A URL shortener application that generates compact links and redirects them to the original destination, with database-backed storage for persistence.",
    thumbnail: sidefolio_url,
    images: [sidefolio_url, sidefolio_url_2],
    stack: [ "Express", "PostgreSQL", "Prisma ORM", "Reactjs", "TailwindCSS"],
    slug: "url-shortner",
    content: (
      <div>
        <p>
          This project is a self-built URL shortener that allows users to generate compact, shareable links which redirect to longer original URLs. It simplifies link management by making lengthy URLs easy to distribute and remember, while ensuring fast and reliable redirection.
        </p>
        <p>
          The system works by storing original URLs in a database and generating a unique short code for each entry. When a user accesses the short link, the backend resolves it and redirects to the corresponding full URL. Built with React for the frontend and Node.js for the backend, it demonstrates how database persistence, routing, and clean UI design come together to replicate the core functionality of popular URL shortening services like Bitly.
        </p>
      </div>),
  },
];

import { Container } from "@/components/Container";
import { Heading } from "@/components/Heading";
import { Highlight } from "@/components/Highlight";
import { Paragraph } from "@/components/Paragraph";
import { Products } from "@/components/Products";
import { TechStack } from "@/components/TechStack";
import Image from "next/image";

export default function Home() {
  return (
    <Container>
      <span className="text-4xl">👋</span>
      <Heading className="font-black">Hello there! I&apos;m Ratnesh</Heading>
      <Paragraph className="max-w-xl mt-4">
        I&apos;m a developer fueled by coffee and{" "}
        <Highlight>big ideas</Highlight>. I love to build{" "}<Highlight>cool stuff</Highlight>
        and{" "}<Highlight>break</Highlight>some code sometimes.
      </Paragraph>
      <Paragraph className="max-w-xl mt-4">
        I&apos;m a Full Stack Developer who pretend to be{" "}
        <Highlight>Batman</Highlight>while coding. In a world of spaghetti code, I bring order to the chaos. 🦇
      </Paragraph>
      <Heading
        as="h2"
        className="font-black text-lg md:text-lg lg:text-lg mt-20 mb-4"
      >
        What I&apos;ve been working on
      </Heading>
      <Products />
      <TechStack />
    </Container>
  );
}

"use client";

import React from "react";
import SectionHeading from "./section-heading";
import { motion } from "framer-motion";
import { useSectionInView } from "@/lib/hooks";

export default function About() {
  const { ref } = useSectionInView("About");

  return (
    <motion.section
      ref={ref}
      className="mb-28 max-w-[45rem] text-center leading-8 sm:mb-40 scroll-mt-28"
      initial={{ opacity: 0, y: 100 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.175 }}
      id="about"
    >
		<SectionHeading>About me</SectionHeading>
		<p className="mb-6">
			I'm all about problem-solving – love cracking those puzzles wide open.
			Teaming up with others? It's like a cool collab, bouncing ideas and making
			things happen. Tech? I geek out on that stuff, staying in the loop and using
			new concepts to . This ain't just a job; it's my mix of passion,
			teamwork, and keeping the learning vibe alive.
		</p>
		<p className="mb-6">
			When I'm not coding, I enjoy playing
			video games, art and drawing, card games, and playing bouzouki. I also enjoy{" "}
			learning new things
		</p>
		<p>
			My dream is to become a professional software developer and to be working <br />
			 with successful projects that <span className="w-2">I am proud of</span>.
			{/* After graduating with a degree in{" "}
			<span className="font-medium">Accounting</span>, I decided to pursue my
			passion for programming. I enrolled in a coding bootcamp and learned{" "}
			<span className="font-medium">full-stack web development</span>.{" "}
			<span className="italic">My favorite part of programming</span> is the
			problem-solving aspect. I <span className="underline">love</span> the
			feeling of finally figuring out a solution to a problem. My core stack
			is{" "}
			<span className="font-medium">
			React, Next.js, Node.js, and MongoDB
			</span>
			. I am also familiar with TypeScript and Prisma. I am always looking to
			learn new technologies. I am currently looking for a{" "}
			<span className="font-medium">full-time position</span> as a software
			developer. */}
		</p>

	</motion.section>
  );
}

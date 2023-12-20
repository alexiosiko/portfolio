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
			I'm someone who's passionate about creating quality products. Whether it's
			animations, designs, or programs, I am constantly learning and improving how
			I can make my code cleaner and more efficient.
		</p>
		<p className="mb-6">

			Programming isn't a job to me, it's puzzles, and I love cracking puzzles.
			My dream is to become a professional software developer and to be working <br />
			with successful projects that <span className="w-2">I am proud of</span>.
			teamwork, and keeping the learning vibe alive.
		</p>
		<p className="mb-6">
			When I'm not coding, I enjoy playing
			video games, art and drawing, card games, and playing bouzouki.
		</p>

	</motion.section>
  );
}

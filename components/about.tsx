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
      className="mb-28 max-w-[45rem] text-center text-lg leading-8 sm:mb-40 scroll-mt-28"
      initial={{ opacity: 0, y: 100 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.175 }}
      id="about"
    >
		<p className="mb-6">
			I've started off programming in Unity with <span className="font-bold">game development</span>, where I worked with both 2D and 3D enviroments.
			I quickly got addicted to seeing what <span className="font-bold">amazing</span> things I can do with a <span className="font-bold">little</span> amount of code. I haven't stopped since ... 
		</p>
		<p className="mb-6">
			Programming is puzzles to me, and I love to solve puzzle.
			Ever since I've learned such advanced topics,
			the doors really open and technology goes from once being <span className="font-bold">"that magic that the computer creates"</span> to <span className="font-bold">"the magic that I create"</span>.  
		</p>
			
		<p>
			My <span className="font-bold">dream</span> is to become a <span className="font-bold">professional software developer</span> and to be working
			with <span className="font-bold">successful people</span> that <span className="font-bold">I am proud to work with</span>.
		</p>
	</motion.section>
  );
}

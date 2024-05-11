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
			I've started off programming in Unity with game development, where I made sprites and simple animations to create puzzles.
			Seeing <span className="font-bold">simple </span>pieces of code that make my visions come to life is what got me <span className="font-bold">addicted</span> to programming; <br /><span className="font-bold"> I haven't stopped since </span>.. 
		</p>
		<p className="mb-6">
			College then taught me the basics of React, where I then jumped <span className="font-bold">10 steps</span> ahead and learned <span className="font-bold">advanced full stack developement </span>
			at my own pace. It's become to the point where if I can imagine it, <span className="font-bold">I can make it</span>. Since I've learned areas such as Next.js, React-Native, Mongodb, Figma ... etc,
			the doors really open and technology goes from once being <span className="font-bold">"that magic that the computer creates"</span> to <span className="font-bold">"the magic that I create"</span>.  
		</p>
		<p className="mb-6">
			Programming is puzzles to me, and I <span className="font-bold">love</span> solving puzzles.
			My <span className="font-bold">dream</span> is to become a <span className="font-bold">professional software developer</span> and to be working
			with <span className="font-bold">successful people</span> that <br /> <span className="font-bold">I am proud to work with</span>.
		</p>
	</motion.section>
  );
}

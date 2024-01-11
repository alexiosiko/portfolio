import React from "react";
import { CgWorkAlt } from "react-icons/cg";
import { LuGraduationCap } from "react-icons/lu";
import redditImg from "@/resources/reddit.png";
import mechanicImg from "@/resources/mechanic.png";
import cardGameImg from "@/resources/cardGame.png";
import castleImg from "@/resources/castle.png";
import devOlympus from "@/resources/devolympus.png";
import reactTimelineVeritcal from "@/resources/react-timeline-vertical.png";

export const links = [
	{
	  name: "Home",
	  hash: "#home",
	},
	{
	  name: "About",
	  hash: "#about",
	},
	{
	  name: "Projects",
	  hash: "#projects",
	},
	{
	  name: "Skills",
	  hash: "#skills",
	},
	{
	  name: "Experience",
	  hash: "#experience",
	},
	{
	  name: "Contact",
	  hash: "#contact",
	},
  ] as const;

export const experiencesData: any = [
  {
    title: "Completed Course: React – The Complete Guide 2023 on Udemy",
    description: [
		"Learned to seamlessly connect React applications with external API’s, exploring techniques like fetching data, handling responses, and update the UI dynamically",
		"Implemented React Router to manage navigations in web and mobile development",
		"Got hands on experience with react hooks and react components"
	],
    icon: React.createElement(LuGraduationCap),
    date: "2022",
  },
  {
    title: "Completed Course: Complete C# Unity Game Developer 2D",
    description: [
		"Used math and vectors for realistic game movements and interactions in unity",
		"Designed user-friendly interfaces to provide simple easy and seamless functionality",
		"Applied object-oriented programming practices to build scalable game design"
	],
	icon: React.createElement(CgWorkAlt),
    date: "2021",
  },
  {
    title: "Studied Computer Science",
    location: "Langara College",
    description: [
		"Studied Java, C++, and React, demonstrating strong programming skills.",
		"Expertise in binary, various number bases, and core computing concepts.",
		"Applied theoretical knowledge to real-world projects, emphasizing problem-solving."
	],
	icon: React.createElement(CgWorkAlt),
    date: "2021 - 2023",
	
  }
  
] as const;

export const projectsData = [
  {
    title: "Reddit Clone",
    description:
      "A reddit clone created in React Native. Upload a post or view all posts in home page.",
    tags: ["React-Native", "Python Backend", "MongoDB"],
    imageUrl: redditImg,
	githubUrl: "https://github.com/alexiosiko/reddit-clone"
  },
  {
	title: "react-timeline-vertical",
	description: "A fully customizeable open-source node package",
	tags: ["node", "vite", "tailwindcss"],
	imageUrl: reactTimelineVeritcal,
	githubUrl: "https://github.com/alexiosiko/react-timeline-vertical",
  },
  {
    title: "Mechanic Auto Shop",
    description:
      "Book an appointment for your car repair! Request an appoinment online for free and wait for a mechanic to reach back to you.",
    tags: ["Nextjs-13", "User-Auth", "Shadcn-ui", "Tailwind"],
    imageUrl: mechanicImg,
	githubUrl: "https://github.com/alexiosiko/evvg-autoshop"
  },
  {
    title: "Tech Start-up Website",
    description:
      "Nextjs website for a tech-startup designed with figma.",
    tags: ["Nextjs-13", "forms", "tailwind", "figma"],
    imageUrl: devOlympus,
	githubUrl: "https://github.com/alexiosiko/tech-startup"
  },
  {
    title: "Card Game (Steam Multiplayer)",
    description:
      "A turned based multiplayer card game made using Netcode that has Steam Multiplayer implementation.",
    tags: ["Unity", "C#", "Netcode Networking"],
    imageUrl: cardGameImg,
	githubUrl: "https://github.com/alexiosiko/Card-Game-Multiplayer"
  },
  {
    title: "Castle Mystery (NPC Interaction)",
    description:
      "An interactive first person shooter. Talk to people, pick up and use objects to unlock interactables and open new paths.",
    tags: ["Unity", "NPC Behaviours", "Inventory Management", "Props and Interactables"],
    imageUrl: castleImg,
	githubUrl: "https://github.com/alexiosiko/Castle-Npcs"
  },
] as const;

export const skillsData = [
  "HTML",
  "CSS",
  "JavaScript",
  "TypeScript",
  "React",
  "Next.js",
  "Node.js",
  "Tailwind",
  "MongoDB",
  "Express",
  "Python",
  "Django",
  "C#",
] as const;

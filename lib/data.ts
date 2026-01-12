import React from "react";
import { CgWorkAlt } from "react-icons/cg";
import { LuGraduationCap } from "react-icons/lu";
import { FaGamepad, FaChalkboardTeacher } from "react-icons/fa";


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
  title: "Game Developer",
  location: "BirdBoxGames",
  description: [
    "Working on game development projects using modern engines and tools.",
    "Collaborating with designers and developers to build engaging gameplay experiences.",
    "Contributing to debugging, feature implementation, and performance optimization."
  ],
  icon: React.createElement(FaGamepad), // 🎮 game controller icon
  date: "2025 - Present",
},
{
  title: "Computer Science Tutor",
  location: "Academic Support",
  description: [
    "Tutored students in core computer science concepts including programming and problem-solving.",
    "Helped students understand data structures, algorithms, and basic software design.",
    "Provided one-on-one support to improve academic performance and confidence."
  ],
  icon: React.createElement(FaChalkboardTeacher), // 👨‍🏫 teaching icon
  date: "2023",
},

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
		"Designed user-friendly interfaces to provide simple easy functionality",
		"Applied object-oriented programming practices to build scalable game design"
	],
	icon: React.createElement(CgWorkAlt),
    date: "2021",
  },
  {
    title: "Currently Studying Computer Science",
    location: "Langara College",
    description: [
		"Studied Java, C++, and React, demonstrating strong programming skills.",
		"Expertise in binary, various number bases, and core computing concepts.",
		"Applied theoretical knowledge to real-world projects, emphasizing problem-solving."
	],
	icon: React.createElement(CgWorkAlt),
    date: "2021 - 2024",
	
  }
  
] as const;

export const projectsData = [
	{
		title: "Pixel Dungeons",
		description: "2D Turn-based puzzle game",
		tags: ["Unity", "Aseprite", "A* Pathfinding", "UI", "Sound Effects"],
		imageUrl: "/pixel-dungeons.png",
		githubUrl: "https://store.steampowered.com/app/3896240/You_Move_I_Move/"
	},
	
	
	{
		title: "Piano Game",
		description: "Used react-native and expo-router to create an interactable puzzle game where you find correct notes that you hear!",
		tags: ["React-Native", "Expo", "Expo-router", "Expo-Av"],
		imageUrl: "/musicalnotestraining-app.png",
		githubUrl: "https://github.com/alexiosiko/musicalnotestraining-mobile-app"
	},

	{
		title: "Card Game (Steam Multiplayer)",
		description:
		"A turned based multiplayer card game made using Netcode that has Steam Multiplayer implementation.",
		tags: ["Unity", "C#", "Netcode Networking"],
		imageUrl: "/cardGame.png",
		githubUrl: "https://github.com/alexiosiko/Card-Game-Multiplayer"
	},
	{
		title: "AI Musical Transcription",
		description: "An AI-Model prediction that converts audio files to sheet music",
		tags: ["Flask", "Nextjs", "Clerk-Auth", "REST Api"],
		imageUrl: "/musictosheet.png",
		githubUrl: "https://github.com/alexiosiko/music-ai"
	},
	
	// {
	// 	title: "One Note Clone",
	// 	description:
	// 	"Developed a OneNote Clone using Next.js, Clerk, and MongoDB with PWA capabilities for offline and cross-device access.",
	// 	tags: ["Nextjs", "Clerk", "Mongodb", "PWA"],
	// 	imageUrl: "/onenotee.png",
	// 	githubUrl: "https://github.com/alexiosiko/onenote"
	// },
	
	{
		title: "2D Puzzle Game",
		description:
		"Clear blocks decrese the water level. Clicks will cost you however...",
		tags: ["Unity", "Sprites", "Animations", "Audio Player"],
		imageUrl: "/bilge.png",
		githubUrl: "https://github.com/alexiosiko/Bilge"
	},
	{
		title: "react-timeline-vertical",
		description: "A fully customizeable open-source node package",
		tags: ["node", "vite", "tailwindcss"],
		imageUrl: "/react-timeline-vertical.png",
		githubUrl: "https://github.com/alexiosiko/react-timeline-vertical",
	},
	
	{
		title: "Castle Mystery (NPC Interaction)",
		description:
		"An interactive first person shooter. Talk to people, pick up and use objects to unlock interactables and open new paths.",
		tags: ["Unity", "NPC Behaviours", "Inventory Management", "Props and Interactables"],
		imageUrl: "/castle.png",
		githubUrl: "https://github.com/alexiosiko/Castle-Npcs"
	},
	
	
	{
		title: "Fitness Tracking Mobile App",
		description: "Track your daily calories intake, and daily exercises to visualize your diet every day",
		tags: ["React-Native", "Expo", "Mongodb", "Clerk-Auth", "REST Api"],
		imageUrl: "/calories.png",
		githubUrl: "https://github.com/alexiosiko/fitness-app"
	},
	{
		title: "Mechanic Auto Shop",
		description:
		"A company website by the name EVVG",
		tags: ["Nextjs", "Shadcn-ui", "Tailwind", "Framer-Motion"],
		imageUrl: "/mechanic.png",
		githubUrl: "https://github.com/alexiosiko/evvg-autoshop"
	},
] as const;

export const skillsData = [
	"React",
	"TypeScript",
	"Next",
	"Stripe",
	"Tailwind",
	"MongoDB",
	"Firebase",
	"Clerk Auth",
	"Node.js",
	"Framer-Motion",
	"Python",
	"C#",
];

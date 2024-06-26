import React from "react";
import { CgWorkAlt } from "react-icons/cg";
import { LuGraduationCap } from "react-icons/lu";
import redditImg from "@/resources/reddit.png";
import mechanicImg from "@/resources/mechanic.png";
import cardGameImg from "@/resources/cardGame.png";
import castleImg from "@/resources/castle.png";
import devOlympus from "@/resources/devolympus.png";
import reactTimelineVeritcal from "@/resources/react-timeline-vertical.png";
import musicalNotesTraining from "@/resources/musicalnotestraining.png";
import musicalNotesTrainingApp from "@/resources/musicalnotestraining-app.png";
import calories from "@/resources/calories.png"
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
    date: "2021 - 2024",
	
  }
  
] as const;

export const projectsData = [
	{
		title: "Fitness Tracking Mobile App (Current Project",
		description: "Track your daily calories intake, and daily exercises to visualize your diet every day",
		tags: ["React-Native", "Expo", "Mongodb", "Clerk-Auth", "REST Api"],
		imageUrl: calories,
		githubUrl: "https://github.com/alexiosiko/fitness-app"
	},
	{
		title: "Musical Notes Training Web App",
		description:
		"Integrated StripeJs payments and Clerk User Auth to manage users for a subscription based service to a musical notes training web app!",
		tags: ["Stripe Payments", "Clerk User Auth", "Nextjs"],
		imageUrl: musicalNotesTraining,
		githubUrl: "https://github.com/alexiosiko/musicalnotestraining"
	},
	{
		title: "Musical Notes Training Mobile App",
		description: "Used react-native and expo-router to create an interactable puzzle game where you find correct notes that you hear!",
		tags: ["React-Native", "Expo", "Expo-router", "Expo-Av"],
		imageUrl: musicalNotesTrainingApp,
		githubUrl: "https://github.com/alexiosiko/musicalnotestraining-mobile-app"
	},
	{
		title: "Dev Olympus",
		description:
		"Nextjs website for a tech-startup designed with figma.",
		tags: ["Nextjs-13", "forms", "tailwind", "figma"],
		imageUrl: devOlympus,
		githubUrl: "https://github.com/alexiosiko/tech-startup"
	},
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
	{
		title: "Mechanic Auto Shop",
		description:
		"A company website by the name EVVG",
		tags: ["Nextjs", "Shadcn-ui", "Tailwind", "Framer-Motion"],
		imageUrl: mechanicImg,
		githubUrl: "https://github.com/alexiosiko/evvg-autoshop"
	},
] as const;

export const skillsData = [
	"React",
	"TypeScript",
	"Next",
	"Tailwind",
	"CSS",
	"MongoDB",
	"Firebase",
	"Clerk Auth",
	"Node.js",
	"Framer-Motion",
	"Python",
	"C#",
];

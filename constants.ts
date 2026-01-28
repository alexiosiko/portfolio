import { Project, Experience, Education, SkillCategory, Certification, Volunteer, Award } from './types';

export const PERSONAL_INFO = {
  name: "Alexi Ikonomou",
  role: "Software Dev | Game Dev | Teacher",
  email: "alexiosiko@gmail.com",
  location: "Vancouver, British Columbia, Canada",
  bio: [
    "I am a software developer with a background in teaching and customer service. I love simplifying complex concepts and building impactful, user-centric solutions.",
    "Programming is my ultimate puzzle—bridging technical logic with creative expression. I thrive on deconstructing problems to create elegant, efficient code.",
    "Beyond coding, I’m passionate about mentorship, using my teaching experience to communicate clearly and work effectively in diverse teams."
  ],
  social: {
    linkedin: "https://www.linkedin.com/in/alexi-ikonomou-84a257284", 
    github: "https://github.com/alexiosiko",
    website: "https://alexios.ca" 
  },
  avatar: "profile-pic.jpeg" 
};

export const PROJECTS: Project[] = [
  {
    id: "pixel-dungeons",
    title: "Pixel Dungeons",
    description: "2D Turn-based puzzle game.",
    tags: ["Unity", "Aseprite", "A* Pathfinding", "UI", "Sound Effects"],
    imageUrl: "/pixel-dungeons.png",
    githubUrl: "https://store.steampowered.com/app/3896240/You_Move_I_Move/"
  },
  {
    id: "piano-game",
    title: "Piano Game",
    description: "Interactive puzzle game built with React Native where players identify notes by ear.",
    tags: ["React-Native", "Expo", "Expo-router", "Expo-Av"],
    imageUrl: "/musicalnotestraining-app.png",
    githubUrl: "https://github.com/alexiosiko/musicalnotestraining-mobile-app"
  },
  {
    id: "card-game",
    title: "Card Game (Steam Multiplayer)",
    description: "Turn-based multiplayer card game with Steam integration using Unity Netcode.",
    tags: ["Unity", "C#", "Netcode Networking"],
    imageUrl: "/cardGame.png",
    githubUrl: "https://github.com/alexiosiko/Card-Game-Multiplayer"
  },
  {
    id: "ai-musical-transcription",
    title: "AI Musical Transcription",
    description: "AI model prediction converting audio files to sheet music using Flask and Next.js.",
    tags: ["Flask", "Nextjs", "Clerk-Auth", "REST Api"],
    imageUrl: "/musictosheet.png",
    githubUrl: "https://github.com/alexiosiko/music-ai"
  },
  {
    id: "2d-puzzle-game",
    title: "2D Puzzle Game",
    description: "Clear blocks to lower water levels in this Unity-based puzzle game.",
    tags: ["Unity", "Sprites", "Animations", "Audio Player"],
    imageUrl: "/bilge.png",
    githubUrl: "https://github.com/alexiosiko/Bilge"
  },
  {
    id: "react-timeline-vertical",
    title: "react-timeline-vertical",
    description: "Fully customizeable open-source React component package.",
    tags: ["node", "vite", "tailwindcss"],
    imageUrl: "/react-timeline-vertical.png",
    githubUrl: "https://github.com/alexiosiko/react-timeline-vertical"
  },
  {
    id: "castle-mystery",
    title: "Castle Mystery (NPC Interaction)",
    description: "Interactive FPS involving NPC dialogue, inventory management, and puzzles.",
    tags: ["Unity", "NPC Behaviours", "Inventory Management", "Props and Interactables"],
    imageUrl: "/castle.png",
    githubUrl: "https://github.com/alexiosiko/Castle-Npcs"
  },
  {
    id: "fitness-tracking-mobile-app",
    title: "Fitness Tracking Mobile App",
    description: "Mobile app to track daily calories intake and exercise visualization.",
    tags: ["React-Native", "Expo", "Mongodb", "Clerk-Auth", "REST Api"],
    imageUrl: "/calories.png",
    githubUrl: "https://github.com/alexiosiko/fitness-app"
  },
  {
    id: "mechanic-auto-shop",
    title: "Mechanic Auto Shop",
    description: "Modern company website for EVVG using Next.js and Tailwind.",
    tags: ["Nextjs", "Shadcn-ui", "Tailwind", "Framer-Motion"],
    imageUrl: "/mechanic.png",
    githubUrl: "https://github.com/alexiosiko/evvg-autoshop"
  }
];

export const SKILLS: SkillCategory[] = [
  {
    name: "Languages",
    skills: ["English (Native)", "Greek (Fluent)"]
  },
  {
    name: "Frontend & Mobile",
    skills: ["React", "React Native", "TypeScript", "Next.js", "Tailwind", "Expo", "Framer Motion"]
  },
  {
    name: "Backend & Cloud",
    skills: ["Node.js", "Python", "Flask", "MongoDB", "Stripe", "Clerk Auth", "Windows Server"]
  },
  {
    name: "Game Development",
    skills: ["Godot", "Unity", "C#", "Aseprite", "Netcode", "Steamworks", "DoTween"]
  },
  {
    name: "IT & Systems",
    skills: ["System Administration", "IT Security", "Virtualization", "Networking", "Hardware Troubleshooting"]
  }
];

export const EXPERIENCE: Experience[] = [
  {
    id: "birdbox",
    role: "Software & Game Developer",
    company: "Bird Box Games",
    period: "Mar 2025 – Present", 
    location: "Vancouver, BC",
    description: [
      "Founded the Bird Box label to publish indie games.",
      "Managing social media marketing and community growth.",
      "Leading full-cycle game logic implementation and audio engineering."
    ]
  },
  {
    id: "geotility",
    role: "GeoThermal Installer",
    company: "GeoTility",
    period: "Jul 2025 – Dec 2025",
    location: "Vancouver, BC",
    description: [
      "Collaborated on geothermal heating solutions for clients.",
      "Executed critical thermal heating installations for residential buildings."
    ]
  },
  {
    id: "homedepot",
    role: "Supervisor / Merchandiser",
    company: "The Home Depot",
    period: "Nov 2019 – Jun 2025",
    location: "Burnaby, BC",
    description: [
      "Supervised a 6-person team, boosting sales and customer satisfaction.",
      "Trained staff on POS systems, service standards, and best practices.",
      "Resolved escalations and optimized team workflow efficiency."
    ]
  }
];

export const VOLUNTEERING: Volunteer[] = [
  {
    id: "hellenic",
    role: "Greek Teacher",
    organization: "Hellenic Community of Vancouver",
    period: "2024 – 2025",
    location: "Vancouver, BC",
    description: [
      "Engaged students with interactive, relatable lessons to maintain focus.",
      "Simplified complex topics to excite students about learning."
    ]
  },
  {
    id: "langara-tutor",
    role: "Computer Science Tutor",
    organization: "Langara Workshop",
    period: "Sep 2023 – Jul 2024",
    location: "Vancouver, BC",
    description: [
      "Developed lesson plans adapting to various learning styles.",
      "Mentored students through 1-on-1 and group computer science sessions."
    ]
  },
  {
    id: "camp-met",
    role: "Youth Leader",
    organization: "Camp Met Youth",
    period: "2022 – 2024",
    location: "Vancouver, BC",
    description: [
      "Coordinated events and fostered a social environment for community youth."
    ]
  }
];

export const EDUCATION: Education[] = [
  {
    school: "Langara College",
    degree: "Associate of Science – Computer Science",
    period: "2021 – 2024 | Vancouver, Canada",
    details: [
      "Algorithms & Data Structures I – A+",
      "Algorithms & Data Structures II – A",
      "Object-Oriented Computing – A-",
      "Program Design – A-",
      "Intro to Computer Science – A-",
      "Web Development I – B+",
      "Intro to Web Programming – B+",
      "Full Stack Web Development I – B",
      "Multimedia & Animation – B+"
    ]
  },
  {
    school: "Udemy",
    degree: "Complete C# Unity Game Developer 2D",
    period: "Sep 2021",
    details: [
      "Applied OOP practices to build scalable game architectures."
    ]
  },
  {
    school: "Udemy",
    degree: "React – The Complete Guide 2023",
    period: "May 2022",
    details: [
      "Mastered API integration, data fetching, and dynamic UI updates."
    ]
  }
];

export const CERTIFICATIONS: Certification[] = [
  {
    name: "Google IT Support Professional Certificate",
    issuer: "Google",
    date: "",
    skills: ["IT Support", "Troubleshooting"]
  },
  {
    name: "IT Security: Defense against the digital dark arts",
    issuer: "Google",
    date: "",
  },
  {
    name: "Operating Systems and You: Becoming a Power User",
    issuer: "Google",
    date: "",
  },
  {
    name: "System Administration and IT Infrastructure Services",
    issuer: "Google",
    date: "",
  },
  {
    name: "Technical Support Fundamentals",
    issuer: "Google",
    date: "",
  },
  {
    name: "The Bits and Bytes of Computer Networking",
    issuer: "Google",
    date: "",
  }
];

export const AWARDS: Award[] = [
  {
    title: "Employee of the Month",
    issuer: "Home Depot",
    description: "Recognized for positive attitude and team support."
  },
  {
    title: "Customer Service Excellence",
    issuer: "Home Depot",
    description: "Awarded for impactful service and providing value to customers."
  },
  {
    title: "Homer Award",
    issuer: "Home Depot",
    description: "Honored for demonstrating company values and building customer relationships."
  },
  {
    title: "Safety Bravo Badge",
    issuer: "Home Depot",
    description: "Recognized for proactive hazard prevention and safety maintenance."
  }
];
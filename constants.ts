import { Project, Experience, Education, SkillCategory, Certification, Volunteer, Award } from './types';

export const PERSONAL_INFO = {
  name: "Alexis Ikonomou",
  role: "Software Developer",
  email: "alexiosiko@hotmail.com",
  location: "", 
  bio: [
    "I'm a software developer with five years of experience in customer service and teaching. I love helping people, breaking down hard concepts into simple terms, and building products that actually help users.",
    "My background is a mix of technical skills and people skills. Working in management and education taught me how to communicate effectively and lead teams when things get busy, which I think is just as important as writing clean code.",
    "Right now, I'm diving deep into Game Development with Unity and C#, as well as Full Stack Web projects. I also document my journey and market my games on social media."
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
    id: "you-move-i-move",
    title: "You Move, I Move",
    description: "My indie strategy game on Steam. It has over 6,000 downloads and uses a complex grid system I built from scratch.",
    tags: ["Unity", "C#", "Steamworks API", "Commercial Release"],
    imageUrl: "/pixel-dungeons.png",
    githubUrl: "https://store.steampowered.com/app/3896240/You_Move_I_Move/"
  },
  {
    id: "piano-tiles",
    title: "Piano Tiles",
    description: "A mobile app for ear training. I built it with React Native and used Clerk for logins and Stripe so users can pay for premium features.",
    tags: ["React Native", "Expo", "Next.js", "Stripe"],
    imageUrl: "/musicalnotestraining-app.png",
    githubUrl: "https://github.com/alexiosiko/musicalnotestraining-mobile-app"
  },
  {
    id: "card-game",
    title: "Card Game",
    description: "A multiplayer card game I made to learn networking. It uses Unity Netcode so players can host their own servers.",
    tags: ["Unity", "Netcode", "Steam Networking", "Multiplayer"],
    imageUrl: "/cardGame.png",
    githubUrl: "https://github.com/alexiosiko/Card-Game-Multiplayer"
  },
  {
    id: "blocks-puzzle",
    title: "Blocks Puzzle",
    description: "A fun puzzle game where I did all the art and animation myself using Aseprite and DoTween.",
    tags: ["Unity", "Aseprite", "DoTween", "C#"],
    imageUrl: "/bilge.png",
    githubUrl: "https://github.com/alexiosiko/Bilge"
  },
  {
    id: "react-timeline-vertical",
    title: "react-timeline-vertical",
    description: "An open source NPM package I published. It helps other React developers add vertical timelines to their apps easily.",
    tags: ["NPM Package", "React", "Open Source"],
    imageUrl: "/react-timeline-vertical.png",
    githubUrl: "https://github.com/alexiosiko/react-timeline-vertical"
  },
  {
    id: "ai-musical-transcription",
    title: "AI Audio Transcription",
    description: "A web app that turns audio into sheet music. I connected a Python backend to a Next.js frontend to handle the processing.",
    tags: ["Next.js", "Python/Flask", "PostgreSQL", "Stripe"],
    imageUrl: "/musictosheet.png",
    githubUrl: "https://github.com/alexiosiko/music-ai"
  },
  {
    id: "fitness-tracking-mobile-app",
    title: "Fitness Tracker Pro",
    description: "A health app that visualizes your workouts and calories. I used custom charts to make the data easy to understand.",
    tags: ["React Native", "MongoDB", "Data Visualization"],
    imageUrl: "/calories.png",
    githubUrl: "https://github.com/alexiosiko/fitness-app"
  },
  {
    id: "mechanic-auto-shop",
    title: "EVVG Auto Shop",
    description: "A fast website I built for a local mechanic shop. I focused on SEO and making sure it loads instantly.",
    tags: ["Next.js", "SEO", "Tailwind CSS"],
    imageUrl: "/mechanic.png",
    githubUrl: "https://github.com/alexiosiko/evvg-autoshop"
  }
];

export const SKILLS: SkillCategory[] = [
  {
    name: "Core Stack",
    skills: ["TypeScript", "React", "Next.js", "Node.js", "Python", "C#", "SQL"]
  },
  {
    name: "Game Engineering",
    skills: ["Unity Engine", "Godot", "HLSL Shaders", "Netcode", "Steam Integration", "Physics Systems"]
  },
  {
    name: "Infrastructure",
    skills: ["AWS Basics", "MongoDB", "PostgreSQL", "Docker", "CI/CD Pipelines", "Linux Administration"]
  },
  {
    name: "Professional",
    skills: ["Technical Leadership", "Agile/Scrum", "System Architecture", "Mentorship", "Client Communication"]
  }
];

export const EXPERIENCE: Experience[] = [
  {
    id: "birdbox",
    role: "Software & Game Developer",
    company: "Bird Box Games",
    period: "Mar 2025 – Present", 
    location: "",
    description: [
      "Started my own indie game brand to publish my work.",
      "I market my games on social media to build a community and get eyes on my projects."
    ]
  },
  {
    id: "geotility",
    role: "Geo Thermal Installer",
    company: "GeoTility",
    period: "Jul 2025 – Dec 2025",
    location: "",
    description: [
      "Worked with a team to figure out the best geothermal heating setups for customers.",
      "I handled critical heating solutions for large apartment buildings."
    ]
  },
  {
    id: "homedepot",
    role: "Supervisor - Merchandiser - Machine Operator",
    company: "The Home Depot",
    period: "Nov 2019 – Jun 2025",
    location: "",
    description: [
      "Led a team of 6, focusing on boosting sales and keeping customers happy.",
      "Trained new staff on how to use our systems and handle tricky situations properly.",
      "Won awards for being reliable and going above and beyond for customers."
    ]
  }
];

export const VOLUNTEERING: Volunteer[] = [
  {
    id: "hellenic",
    role: "Greek Teacher",
    organization: "Hellenic Community of Vancouver",
    period: "2024 – 2025",
    location: "",
    description: [
      "Kept students engaged and focused during class.",
      "I took complex topics and made them into fun, relatable lessons so students actually wanted to come back every week."
    ]
  },
  {
    id: "langara-tutor",
    role: "Computer Science Tutor",
    organization: "Langara Workshop",
    period: "Sep 2023 – Jul 2024",
    location: "",
    description: [
      "Learned how to plan lessons and adapt to different learning styles.",
      "Built up my communication skills by mentoring students one-on-one and in groups."
    ]
  },
  {
    id: "camp-met",
    role: "Youth Leader",
    organization: "Camp Met Youth",
    period: "2022 – 2024",
    location: "",
    description: [
      "Helped run events and worked with other leaders to create a fun, social environment for the youth in our community."
    ]
  }
];

export const EDUCATION: Education[] = [
  {
    school: "Langara College",
    degree: "Associate of Science – Computer Science",
    period: "2021 – 2024",
    details: [
      "Algorithms & Data Structures I (A+)",
      "Algorithms & Data Structures II (A)",
      "Object-Oriented Computing (A-)",
      "Program Design (A-)",
      "Intro to Computer Science (A-)",
      "Web Development I (B+)",
      "Intro to Web Programming (B+)",
      "Multimedia & Animation (B+)"
    ]
  },
  {
    school: "Udemy Certifications",
    degree: "Continuous Learning",
    period: "2021 – 2023",
    details: [
      "Complete C# Unity Game Developer 2D (Sep 2021)",
      "React – The Complete Guide 2023 (May 2022)"
    ]
  }
];

export const CERTIFICATIONS: Certification[] = [
  {
    name: "Google IT Support Professional",
    issuer: "Google",
    date: "2023",
  },
  {
    name: "IT Security: Defense against the digital dark arts",
    issuer: "Google",
    date: "2023",
  },
  {
    name: "Operating Systems and You: Power User",
    issuer: "Google",
    date: "2023",
  },
  {
    name: "System Administration & IT Infrastructure",
    issuer: "Google",
    date: "2023",
  },
  {
    name: "The Bits and Bytes of Computer Networking",
    issuer: "Google",
    date: "2023",
  }
];

export const AWARDS: Award[] = [
  {
    title: "Employee of the Month",
    issuer: "Home Depot",
    description: "For having a positive attitude and always being there for the team."
  },
  {
    title: "Customer Service Excellence",
    issuer: "Home Depot",
    description: "Got multiple awards for giving fair deals and great service."
  }
];
import { Project, Experience, Education, SkillCategory, Certification, Volunteer, Award } from './types';

export const PERSONAL_INFO = {
  name: "Alexis Ikonomou",
  role: "Software Developer",
  email: "alexiosiko@hotmail.com",
  location: "", 
  bio: [
    "I'm a developer driven by the pure joy of creation. My process starts with a simple curiosity: 'How does this work?' and ends with a finished product I'm proud to share.",
    "With a background in teaching and leadership, I've learned that the best code is built with empathy. I love explaining complex concepts and building things that make life better for the people using them.",
    "Whether it's the physics of a game engine or the architecture of a web app, I'm here for the challenge of development and the magic of the craft."
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
    description: "A commercial strategy game built from a love for grid-based systems. Engineered in Unity and C#, it has reached over 6,000 players on Steam and the App Store.",
    tags: ["Unity", "C#", "Steamworks", "Commercial"],
    imageUrl: "/pixel-dungeons.png",
    githubUrl: "https://store.steampowered.com/app/3896240/You_Move_I_Move/"
  },
  {
    id: "card-game",
    title: "Multiplayer Engine",
    description: "An exploration into real-time networking. Integrated Unity Netcode to create client-side server hosting, allowing players to connect seamlessly across the web.",
    tags: ["Unity", "Netcode", "Multiplayer", "Networking"],
    imageUrl: "/cardGame.png",
    githubUrl: "https://github.com/alexiosiko/Card-Game-Multiplayer"
  },
  {
    id: "blocks-puzzle",
    title: "Blocks Puzzle",
    description: "A focus on 'juiciness' and game feel. I used Aseprite for custom animations and DoTween to create an interactive, satisfying puzzle experience.",
    tags: ["Unity", "Aseprite", "DoTween", "Game Design"],
    imageUrl: "/blocks-puzzle.png", 
    githubUrl: "https://github.com/alexiosiko/Blocks-Puzzle"
  },
  {
    id: "piano-tiles",
    title: "Musical Ear Training",
    description: "A native application built to help musicians. Features a secure stack with React Native, Clerk for auth, and Stripe for payments.",
    tags: ["React Native", "Expo", "Stripe", "Clerk"],
    imageUrl: "/musicalnotestraining-app.png",
    githubUrl: "https://github.com/alexiosiko/musicalnotestraining-mobile-app"
  }
];

export const SKILLS: SkillCategory[] = [
  {
    name: "Engineering",
    skills: ["TypeScript", "React", "Next.js", "C#", "Python", "SQL", "Node.js"]
  },
  {
    name: "Game Dev",
    skills: ["Unity Engine", "Godot", "HLSL Shaders", "Netcode", "Aseprite"]
  },
  {
    name: "Languages",
    skills: ["English (Fluent)", "Greek (Fluent)", "Technical Greek Instruction"]
  },
  {
    name: "The Human Side",
    skills: ["Team Mentorship", "Technical Tutoring", "Lesson Planning", "Public Speaking"]
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
      "Founded and leading technical direction for indie game titles.",
      "Gaining traction through community-led social media marketing and rapid iteration."
    ]
  },
  {
    id: "geotility",
    role: "Geo Thermal Installer",
    company: "GeoTility",
    period: "Jul 2025 – Dec 2025",
    location: "Vancouver, BC",
    description: [
      "Worked within a team to execute complex thermal heating solutions for large-scale apartment buildings.",
      "Solved critical on-site engineering challenges to meet specific building requirements."
    ]
  },
  {
    id: "homedepot",
    role: "Team Supervisor",
    company: "The Home Depot",
    period: "Nov 2019 – Jun 2025",
    location: "Vancouver, BC",
    description: [
      "Supervised a team of 6, focusing on team development and operational efficiency.",
      "Trained staff in customer service, POS systems, and collaborative problem-solving."
    ]
  }
];

export const VOLUNTEERING: Volunteer[] = [
  {
    id: "greek-teacher",
    role: "Greek Language Teacher",
    organization: "Hellenic Community of Vancouver",
    period: "2024 – 2025",
    location: "Vancouver, CA",
    description: [
      "Simplified complex linguistic topics into engaging, relatable lessons for students.",
      "Maintained high engagement through interactive teaching methods."
    ]
  },
  {
    id: "langara-tutor",
    role: "Computer Science Tutor",
    organization: "Langara Workshop",
    period: "Sep 2023 – Jul 2024",
    location: "Vancouver, CA",
    description: [
      "Developed custom lesson plans for 1-on-1 and group mentorship sessions.",
      "Adapted teaching styles to bridge gaps in student understanding of core CS logic."
    ]
  },
  {
    id: "camp-youth",
    role: "Youth Leader",
    organization: "Camp Met Youth",
    period: "2022 – 2024",
    location: "Vancouver, CA",
    description: [
      "Co-managed marketing and event planning to foster social environments for local youth."
    ]
  }
];

export const EDUCATION: Education[] = [
  {
    school: "Langara College",
    degree: "Associate of Science in Computer Science",
    period: "2021 – 2024",
    details: [
      "Algorithms & Data Structures I — A+",
      "Algorithms & Data Structures II — A",
      "Object-Oriented Computing — A-",
      "Program Design — A-",
      "Intro to Computer Science — A-",
      "Web Development I — B+",
      "Intro to Web Programming — B+",
      "Full Stack Web Development I — B",
      "Multimedia & Animation — B+"
    ]
  },
  {
    school: "Udemy",
    degree: "Specialized Certifications",
    period: "2021 – 2023",
    details: [
      "Complete C# Unity Game Developer 2D",
      "React – The Complete Guide (2023)"
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
    name: "IT Security & Defense",
    issuer: "Google",
    date: "2023",
  },
  {
    name: "Operating Systems & Power User",
    issuer: "Google",
    date: "2023",
  }
];

export const AWARDS: Award[] = [
  {
    title: "Employee of the Month",
    issuer: "Home Depot",
    description: "Recognized for a positive attitude and unwavering support for the team."
  },
  {
    title: "Customer Service Excellence",
    issuer: "Home Depot",
    description: "Multiple awards for providing impactful solutions and exceeding customer expectations."
  }
];
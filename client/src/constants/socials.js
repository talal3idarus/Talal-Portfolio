// Import profile picture and CV
import ProfilePicture from '../assets/Profile_picture.JPEG';
import TalalCV from '../assets/Talal CV.pdf';

export const personalInfo = {
  name: "Talal Ahmed Al Aidarus",
  title: "Software Engineer & AI Developer",
  tagline: "Building intelligent systems for the next generation of tech",
  location: "Muscat, Oman",
  email: "talalaidarus@gmail.com",
  phone: "+968 9556 6842",
  interests: ["Photography", "Hiking", "Technology", "Reading", "Competitive Programming"],
  avatar: ProfilePicture,
  resumeUrl: TalalCV,
  bio: {
    short: "Final-year Software Engineering student specializing in AI-driven systems, IoT, and full-stack development. Passionate about creating innovative solutions that bridge technology and education.",
    long: "I'm a passionate Software Engineering student in my final year at the University of Technology and Applied Sciences (UTAS), Muscat. My work bridges intelligent systems, web and mobile development, and cutting-edge AI applications. With a strong foundation in programming and a proven track record in competitive coding, research publications, and real-world tech projects, I thrive at the intersection of logic and innovation. From building IoT-powered smart systems like Aqua Sink Pro, to developing platforms like UTAS-Hub serving over 3,000 students, my mission is to create tech that solves real problems. I believe that technology can empower lives—whether in education, sustainability, or digital accessibility—and I'm committed to building solutions that matter. Let's build something meaningful together."
  },
  stats: {
    projectsCompleted: "8+",
    yearsExperience: "2+",
    technologiesMastered: "25+",
    competitionsWon: "7+",
    papersPublished: "2",
    studentsHelped: "300+",
    linesOfCode: "10,000+",
    coffeeConsumed: "∞"
  }
};

export const socials = [
  {
    id: 1,
    name: "GitHub",
    url: "https://github.com/talal3idarus",
    icon: "github",
    username: "@talal3idarus",
    color: "#181717",
    description: "Check out my code repositories and open source contributions"
  },
  {
    id: 2,
    name: "LinkedIn",
    url: "https://www.linkedin.com/in/talalalaidarus",
    icon: "linkedin",
    username: "@talal-alaidarus",
    color: "#0A66C2",
    description: "Connect with me professionally and see my career journey"
  },
  {
    id: 3,
    name: "Instagram",
    url: "https://instagram.com/talal3idarus",
    icon: "instagram",
    username: "@talal_alaidarus",
    color: "#E4405F",
    description: "Follow my photography and personal interests"
  },
  {
    id: 4,
    name: "Email",
    url: "mailto:talalaidarus@gmail.com",
    icon: "email",
    username: "talalaidarus@gmail.com",
    color: "#EA4335",
    description: "Send me an email for business inquiries or collaborations"
  },
];

export const contactInfo = {
  availability: "Available for freelance projects and full-time opportunities",
  responseTime: "Usually responds within 24 hours",
  preferredContact: "email",
  timezone: "GMT+4 (Oman Standard Time)",
  workingHours: "9:00 AM - 6:00 PM (GST)",
  languages: ["English", "Arabic"],
  services: [
    "Full Stack Web Development",
    "Mobile App Development", 
    "AI/ML Consulting",
    "IoT Solutions",
  ]
};

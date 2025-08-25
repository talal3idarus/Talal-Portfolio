// Import profile picture and CV
import ProfilePicture from '../assets/profile/Profile_picture.JPEG';
import TalalCV from '../assets/profile/Talal CV.pdf';

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
    competitionsWon: "3+",
    papersPublished: "2",
    studentsHelped: "300+",
    linesOfCode: "10,000+",
    coffeeConsumed: "∞"
  }
};

export const socialLinks = [
  {
    id: 1,
    platform: "GitHub",
    handle: "@talal3idarus",
    url: "https://github.com/talal3idarus",
    color: "#181717",
    description: "Check out my code repositories and open source contributions",
    icon: (
      <svg fill="currentColor" viewBox="0 0 24 24">
        <path d="M12 0C5.374 0 0 5.373 0 12 0 17.302 3.438 21.8 8.207 23.387c.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23A11.509 11.509 0 0112 5.803c1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576C20.566 21.797 24 17.3 24 12c0-6.627-5.373-12-12-12z"/>
      </svg>
    )
  },
  {
    id: 2,
    platform: "LinkedIn",
    handle: "@talal-alaidarus",
    url: "https://www.linkedin.com/in/talalalaidarus",
    color: "#0A66C2",
    description: "Connect with me professionally and see my career journey",
    icon: (
      <svg fill="currentColor" viewBox="0 0 24 24">
        <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
      </svg>
    )
  },
  {
    id: 3,
    platform: "Instagram",
    handle: "@talal_alaidarus",
    url: "https://instagram.com/talal3idarus",
    color: "#E4405F",
    description: "Follow my photography and personal interests",
    icon: (
      <svg fill="currentColor" viewBox="0 0 24 24">
        <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
      </svg>
    )
  },
  {
    id: 4,
    platform: "Twitter",
    handle: "@talal_tech",
    url: "https://twitter.com/talal_tech",
    color: "#1DA1F2",
    description: "Follow my tech thoughts and updates",
    icon: (
      <svg fill="currentColor" viewBox="0 0 24 24">
        <path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z"/>
      </svg>
    )
  }
];

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

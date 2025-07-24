// Import project images
import PathFinderImage from '../assets/projects/PathFinder.png';
import AquaSinkProImage from '../assets/projects/ezone.JPG';
import HomeGroceryImage from '../assets/projects/Home_Grocery.png';


export const projects = [
  {
    id: 1,
    title: "Aqua Sink Pro",
    description: "A smart IoT-based water heater system designed to improve safety, save energy, and offer remote control through a mobile app.",
    longDescription: "Aqua Sink Pro solves common water heater problems like shocks, overheating, and energy waste. It uses smart monitoring, automatic shutdowns, and app-based controls to make heaters safer, more efficient, and user-friendly.",
    technologies: ["IoT", "Mobile App", "Arduino", "Firebase", "React Native"],
    category: "IoT & Research",
    featured: true,
    image: AquaSinkProImage,
    achievements: ["Best Research Paper Award", "Published in IEEE Conference"],
    color: "#4285F4"
  },
  {
    id: 2,
    title: "PathFinder",
    description: "A Web-Based IT Career Path Guidance System designed to help high school students explore and select IT career paths.",
    longDescription: "PathFinder uses personalized assessments, skills surveys, and AI-driven recommendations to guide students toward suitable IT careers based on their academic performance, skills, and interests.",
    technologies: ["React", "Node.js", "MongoDB", "Machine Learning", "Express.js"],
    category: "Web Development",
    featured: true,
    image: PathFinderImage,
    achievements: ["Helped 500+ students", "Deployed in 3 schools"],
    color: "#22C55E"
  },
  {
    id: 3,
    title: "Home Grocery",
    description: "A platform allowing family members to add grocery items to a shared list, making shopping organization easier for families.",
    longDescription: "Home Grocery simplifies family shopping with shared lists, real-time synchronization, smart categorization, and collaborative features that make grocery management effortless.",
    technologies: ["React", "Firebase", "Progressive Web App", "Real-time Database"],
    category: "Mobile Development",
    featured: false,
    image: HomeGroceryImage,
    achievements: ["Featured in University Showcase"],    color: "#F59E0B"
  },
  {
    id: 4,
    title: "AI Code Clustering System",
    description: "A trustworthy AI-driven clustering approach for formative feedback and evaluation of student code.",
    longDescription: "This research project develops an intelligent system that clusters student code submissions to provide automated feedback and enhance educational outcomes through machine learning.",
    technologies: ["Python", "Machine Learning", "Natural Language Processing", "Scikit-learn", "TensorFlow"],
    category: "IoT & Research",
    featured: true,
    image: null, // Image not available
    achievements: ["Best Paper Award IEEE 2025", "Published in Malaysia Conference"],
    color: "#8B5CF6"
  },
  {
    id: 6,
    title: "UTAS-hub: Course Summary Platform",
    description: "A comprehensive course summary platform serving over 3,000+ students across UTAS branches, centralizing academic resources and study materials.",
    longDescription: "UTAS-hub revolutionizes how students access and manage their academic resources. This platform provides a centralized hub for course materials, summaries, and study resources, serving the entire UTAS student community with advanced search functionality and personalized dashboards.",
    technologies: ["React.js", "Firebase", "JavaScript", "CSS", "Real-time Database"],
    category: "Web Development",
    featured: true,
    image: null, // Image not available
    achievements: ["Serving 3,000+ students", "Deployed across UTAS branches"],
    color: "#06B6D4"
  },
  {
    id: 7,
    title: "The Original Prices: Price Comparison App",
    description: "An app that helps consumers compare real product prices across multiple stores, addressing misleading discount practices.",
    longDescription: "The Original Prices empowers consumers to make informed purchasing decisions by providing real-time price comparisons across multiple retailers. The app features barcode scanning, map-based store search, and crowdsourced reviews to combat misleading discount practices and help users find genuine deals.",
    technologies: ["Flutter", "Dart", "Firebase", "Web Scraping", "Google Maps API"],
    category: "Mobile Development",
    featured: false,
    image: null, // Image not available
    achievements: ["Cross-platform mobile app", "Real-time price tracking"],
    color: "#F97316"
  }
];

export const projectCategories = [
  "All",
  "IoT & Research",
  "Web Development",
  "Mobile Development",
];

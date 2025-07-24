// Import achievement images
import DCPCImage from '../assets/DCPC.JPEG';
import IbriMarathonImage from '../assets/Ibri_Marathon.jpg';
import LNGProgramImage from '../assets/LNG_Program.JPG';
import CTF from '../assets/Sons_Of_Ahmed.JPG';
import AquaBestPaperImage from '../assets/Aqua_Best Research_Paper_Award.png';
import TrustworthyCertificateImage from '../assets/Trustworthy_certificate.png';
import MCBCImage from '../assets/MCBC.jpg';
import DeanImage from '../assets/Dean.JPEG';


export const achievements = [
  {
    id: 1,
    title: "Best Research Paper Award - IEEE Conference 2025",
    description: "Awarded for the research project 'A Trustworthy AI-Driven Clustering Approach for Formative Feedback and Evaluation of Student Code' at IEEE Conference in Penang, Malaysia",
    category: "Research",
    date: "2025",
    icon: "🏆",
    color: "#FFD700",
    importance: "high",
    location: "Penang, Malaysia",
    image: TrustworthyCertificateImage
  },
  {
    id: 2,
    title: "Best Research Paper Award - SITER  Conference 2024",
    description: "Won Best Research Paper Award for Aqua Sink Pro device at a prestigious conference in India",
    category: "Research",
    date: "2024",
    icon: "🏆",
    color: "#22C55E",
    importance: "high",
    location: "India",
    image: AquaBestPaperImage
  },
  {
    id: 3,
    title: "DCPC 2024 - Top 3 Finish",
    description: "Achieved top 3 finish at the Dhofar Competitive Programming Competition (DCPC) 2024 with Team Hash Arsenal",
    category: "Programming",
    date: "2024",
    icon: "💻",
    color: "#8B5CF6",
    importance: "high",
    team: "Hash Arsenal",
    image: DCPCImage
  },
  {
    id: 4,
    title: "Ibri Marathon 2024 - Top 4",
    description: "Secured top 4 position in Ibri Marathon 2024 programming competition",
    category: "Programming",
    date: "2024",
    icon: "🏃",
    color: "#FF6584",
    importance: "medium",
    image: IbriMarathonImage
  },
  {
    id: 5,
    title: "MCBC 2023 Coding Competition - Top 4",
    description: "Won top 4 in the Modern College of Business and Science (MCBC) Coding Competition",
    category: "Programming",
    date: "2023",
    icon: "💻",
    color: "#3B82F6",
    importance: "medium",
    image: MCBCImage
  },
  {
    id: 6,
    title: "LNG Program Competition - Top 2",
    description: "Secured top 2 in the LNG Program (Follow the Line Robot) competition",
    category: "Robotics",
    date: "2023",
    icon: "🤖",
    color: "#F59E0B",
    importance: "medium",
    image: LNGProgramImage
  },
  {
    id: 7,
    title: "Crack the Code CTF - Team Participation",
    description: "Participated in 'Crack the Code' Capture The Flag (CTF) competition with team 'Son's of Ahmed'",
    category: "Cybersecurity",
    date: "2023",
    icon: "🔐",
    color: "#10B981",
    importance: "low",
    image: CTF,
    team: "Son's of Ahmed"
  },
  {
    id: 8,
    title: "Dean's List Recognition",
    description: "Consistently maintained high academic performance and received Dean's List recognition",
    category: "Academic",
    date: "2022-2024",
    icon: "🎓",
    color: "#6366F1",
    importance: "medium",
    image: DeanImage
  }
];

export const achievementStats = {
  totalAchievements: achievements.length,
  competitionsWon: achievements.filter(a => a.category === "Programming" || a.category === "Robotics").length,
  researchPapers: achievements.filter(a => a.category === "Research").length,
  internationalRecognition: achievements.filter(a => a.location && a.location !== "Local").length
};

export const achievementCategories = [
  "All",
  "Research",
  "Programming", 
  "Robotics",
  "Cybersecurity",
  "Academic"
];

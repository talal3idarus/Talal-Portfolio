// Import company/institution logos
import MOHLogo from '../assets/logos/MOH_v1_0.jpg';
import UTASLogo from '../assets/logos/UTAS_Logo.png';
import UTAS from '../assets/logos/UTAS.jpg';
import JBZLogo from '../assets/logos/JBZ.jpg';

// Import certificate images
import CiscoNetworkCert from '../assets/certificates/certificate_network_v7.png';
import OracleJavaCert from '../assets/certificates/certificate_Java.png';
import OracleSQLCert from '../assets/certificates/certificate_SQL.png';
import GreatLearningJSCert from '../assets/certificates/certificate_js.png';

// Import certificate PDFs
import CiscoNetworkPDF from '../assets/certificates/certificate_Networks.pdf';
import OracleJavaPDF from '../assets/certificates/certificate_Java.pdf';
import OracleSQLPDF from '../assets/certificates/certificate_sql.pdf';
import GreatLearningJSPDF from '../assets/certificates/certificate_JavaScript.pdf';

export const experience = [
  {
    id: 1,
    company: "Ministry of Housing",
    position: "Help Desk Technician (OJT)",
    location: "Oman",
    duration: "Summer 2025",
    type: "Internship",
    description: "Provided technical support and troubleshooting services in a government environment",
    responsibilities: [
      "Troubleshot network connectivity issues for government employees",
      "Formatted and configured computer systems for optimal performance",
      "Recovered critical data from damaged storage devices",
      "Provided technical support for software and hardware issues",
      "Maintained IT inventory and equipment records",
      "Assisted in implementing cybersecurity protocols"
    ],
    technologies: ["Windows Server", "Network Troubleshooting", "Data Recovery", "Hardware Maintenance"],
    achievements: [
      "Successfully resolved 95% of technical support tickets",
      "Recovered critical data from 15+ corrupted systems",
      "Improved help desk response time by 30%"
    ],
    logo: MOHLogo,
    color: "#2563EB"
  },
  {
    id: 2,
    company: "University Research Lab",
    position: "Research Assistant",
    location: "Oman",
    duration: "2023 - Present",
    type: "Part-time",
    description: "Conducting cutting-edge research in AI-driven educational technologies and IoT systems",
    responsibilities: [
      "Developed AI algorithms for student code evaluation and clustering",
      "Designed and implemented IoT-based smart systems",
      "Collaborated with international researchers on published papers",
      "Mentored junior students in research methodologies",
      "Presented research findings at international conferences",
      "Contributed to grant proposals and research funding applications"
    ],
    technologies: ["Python", "Machine Learning", "IoT", "Research Methodologies", "Data Analysis"],
    achievements: [
      "Published 2 research papers in IEEE conferences",
      "Won 2 Best Paper Award at international conference",
    ],
    logo: UTASLogo,
    color: "#059669"
  }
];

export const education = [
  {
    id: 1,
    institution: "University of Technology and Applied Sciences (UTAS)",
    degree: "Bachelor of Engineering in Software Engineering",
    duration: "2019 - 2025",
    status: "Final Year Student",
    location: "Muscat, Oman",
    description: "A rigorous and industry-relevant program focused on full-stack development, artificial intelligence, system design, and engineering best practices.",
    coursework: [
      "Software Engineering Principles",
      "Artificial Intelligence & Machine Learning",
      "Database Management Systems (SQL, PL/SQL)",
      "Web and Mobile Application Development",
      "Computer Networks & Security",
      "Data Structures and Algorithms",
      "Internet of Things (IoT)",
      "Software Project Management"
    ],
    achievements: [
      "Dean's List Awardee (2022–2024)",
      "IEEE Research Publication – Aqua Sink Pro (2024)",
      "National Programming Competition Finalist (OCPC, GPC, MCBC)",
      "Pathfinder AI Career System Developer"
    ],
    logo: UTASLogo,
    color: "#1D4ED8"
  },
  {
    id: 2,
    institution: "Imam Jaber bin Zaid Secondary School",
    degree: "High School Diploma – Science Stream",
    duration: "2017 - 2019",
    status: "Graduated",
    location: "Muscat, Oman",
    description: "Focused on mathematics, computer science, and natural sciences with strong performance in technical subjects.",
    coursework: [
      "Mathematics & Statistics",
      "Physics & Chemistry",
      "Computer Science & Information Tech",
      "English Language & Communication"
    ],
    achievements: [],
    logo: JBZLogo,
    color: "#059669"
  }
];


export const certifications = [
  {
    id: 1,
    title: "CCNAv7: Introduction to Networks",
    issuer: "Cisco Networking Academy",
    date: "February 8, 2022",
    credentialId: "CCNA-Networks-2022",
    logo: null, // Cisco logo not available
    certificateImage: CiscoNetworkCert,
    certificatePDF: CiscoNetworkPDF
  },
  {
    id: 2,
    title: "Java Foundations",
    issuer: "Oracle Academy",
    date: "August 31, 2022",
    credentialId: "Oracle-Java-Foundations-2022",
    logo: null, // Oracle logo not available
    certificateImage: OracleJavaCert,
    certificatePDF: OracleJavaPDF
  },
  {
    id: 3,
    title: "Database Programming with SQL",
    issuer: "Oracle Academy",
    date: "December 19, 2022",
    credentialId: "Oracle-SQL-Programming-2022",
    logo: null, // Oracle logo not available
    certificateImage: OracleSQLCert,
    certificatePDF: OracleSQLPDF
  },
  {
    id: 4,
    title: "Introduction to JavaScript",
    issuer: "Great Learning",
    date: "September 2023",
    credentialId: "verify.mygreatlearning.com/SUIWNGJG",
    logo: null, // Great Learning logo not available
    certificateImage: GreatLearningJSCert,
    certificatePDF: GreatLearningJSPDF
  }
];


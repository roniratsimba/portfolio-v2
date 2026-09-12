import React from "react";

export interface TechItem {
  id: string;
  name: string;
  category: string;
  color: string;
  icon: (props: React.SVGProps<SVGSVGElement>) => React.ReactNode;
}

export const TECH_ITEMS: TechItem[] = [
  {
    id: "symfony",
    name: "Symfony",
    category: "Backend / PHP",
    color: "#ffffff",
    icon: (props) => (
      <svg viewBox="0 0 24 24" fill="none" {...props}>
        <circle cx="12" cy="12" r="11" fill="#1A1718" stroke="#ffffff" strokeWidth="1.2" />
        <path
          d="M14.8 7.5C14.2 7.1 13.4 6.8 12.3 6.8C9.5 6.8 7.8 8.4 7.8 10.6C7.8 14.5 13.6 13.2 13.6 15.6C13.6 16.5 12.8 17.2 11.5 17.2C10.2 17.2 9.2 16.6 8.5 16L7.4 17.6C8.5 18.6 10 19.2 11.6 19.2C14.7 19.2 16.5 17.5 16.5 15.2C16.5 11.2 10.7 12.5 10.7 10.2C10.7 9.4 11.4 8.7 12.5 8.7C13.4 8.7 14.2 9.1 14.7 9.5L14.8 7.5Z"
          fill="#ffffff"
        />
      </svg>
    ),
  },
  {
    id: "react",
    name: "React",
    category: "Frontend UI",
    color: "#61DAFB",
    icon: (props) => (
      <svg viewBox="0 0 24 24" fill="none" {...props}>
        <circle cx="12" cy="12" r="2.2" fill="#61DAFB" />
        <ellipse cx="12" cy="12" rx="10" ry="3.8" stroke="#61DAFB" strokeWidth="1.4" />
        <ellipse cx="12" cy="12" rx="10" ry="3.8" transform="rotate(60 12 12)" stroke="#61DAFB" strokeWidth="1.4" />
        <ellipse cx="12" cy="12" rx="10" ry="3.8" transform="rotate(120 12 12)" stroke="#61DAFB" strokeWidth="1.4" />
      </svg>
    ),
  },
  {
    id: "typescript",
    name: "TypeScript",
    category: "Language",
    color: "#3178C6",
    icon: (props) => (
      <svg viewBox="0 0 24 24" fill="none" {...props}>
        <rect width="24" height="24" rx="4" fill="#3178C6" />
        <path d="M12.5 13.5H9.5V11H15.5V13.5H12.5V20H9.5V13.5Z" fill="white" />
        <path d="M16 19.5C16.8 19.8 17.8 20 18.8 20C21 20 22 19 22 17.4C22 15.2 19.6 14.5 18.8 14.2C18.2 14 17.8 13.7 17.8 13.3C17.8 12.8 18.3 12.4 19 12.4C19.7 12.4 20.4 12.7 20.8 12.9L21.5 11.2C20.8 10.9 20 10.7 19 10.7C17.2 10.7 16 11.8 16 13.4C16 15.4 18.4 16.1 19.2 16.4C19.8 16.6 20.2 16.9 20.2 17.4C20.2 18 19.6 18.4 18.8 18.4C17.9 18.4 17 18 16.5 17.7L16 19.5Z" fill="white" />
      </svg>
    ),
  },
  {
    id: "nodejs",
    name: "Node.js",
    category: "Runtime",
    color: "#5FA04E",
    icon: (props) => (
      <svg viewBox="0 0 24 24" fill="none" {...props}>
        <path
          d="M12 2L3.5 7V17L12 22L20.5 17V7L12 2Z"
          stroke="#5FA04E"
          strokeWidth="1.8"
          strokeLinejoin="round"
          fill="#5FA04E"
          fillOpacity="0.15"
        />
        <path
          d="M12 6.5L16.5 9.2V14.8L12 17.5L7.5 14.8V9.2L12 6.5Z"
          fill="#5FA04E"
        />
      </svg>
    ),
  },
  {
    id: "postgresql",
    name: "PostgreSQL",
    category: "SQL Database",
    color: "#336791",
    icon: (props) => (
      <svg viewBox="0 0 24 24" fill="none" {...props}>
        <path
          d="M12 3C7 3 4 6.5 4 11C4 16 7 20 10 21C10.5 19 11 17.5 12 17.5C13 17.5 13.5 19 14 21C17 20 20 16 20 11C20 6.5 17 3 12 3Z"
          stroke="#4169E1"
          strokeWidth="1.8"
          fill="#336791"
          fillOpacity="0.2"
        />
        <path
          d="M8.5 11C8.5 11 9.5 9 12 9C14.5 9 15.5 11 15.5 11"
          stroke="#4169E1"
          strokeWidth="1.5"
          strokeLinecap="round"
        />
        <circle cx="9.5" cy="11.5" r="1" fill="#4169E1" />
        <circle cx="14.5" cy="11.5" r="1" fill="#4169E1" />
      </svg>
    ),
  },
  {
    id: "php",
    name: "PHP",
    category: "Language",
    color: "#777BB4",
    icon: (props) => (
      <svg viewBox="0 0 24 24" fill="none" {...props}>
        <ellipse cx="12" cy="12" rx="10.5" ry="6.5" fill="#777BB4" fillOpacity="0.25" stroke="#777BB4" strokeWidth="1.6" />
        <text
          x="12"
          y="14"
          textAnchor="middle"
          fontSize="7.5"
          fontFamily="system-ui, sans-serif"
          fontWeight="bold"
          fill="#8892BF"
        >
          php
        </text>
      </svg>
    ),
  },
  {
    id: "tailwind",
    name: "Tailwind CSS",
    category: "Design System",
    color: "#38BDF8",
    icon: (props) => (
      <svg viewBox="0 0 24 24" fill="none" {...props}>
        <path
          d="M12.5 7.5C10.5 7.5 9.5 8.5 9 10C9.8 8.8 10.8 8.4 11.8 8.8C12.4 9.1 12.8 9.5 13.3 10C14.1 10.9 15.1 12 17.5 12C19.5 12 20.5 11 21 9.5C20.2 10.7 19.2 11.1 18.2 10.7C17.6 10.4 17.2 10 16.7 9.5C15.9 8.6 14.9 7.5 12.5 7.5ZM6.5 12C4.5 12 3.5 13 3 14.5C3.8 13.3 4.8 12.9 5.8 13.3C6.4 13.6 6.8 14 7.3 14.5C8.1 15.4 9.1 16.5 11.5 16.5C13.5 16.5 14.5 15.5 15 14C14.2 15.2 13.2 15.6 12.2 15.2C11.6 14.9 11.2 14.5 10.7 14C9.9 13.1 8.9 12 6.5 12Z"
          fill="#38BDF8"
        />
      </svg>
    ),
  },
  {
    id: "python",
    name: "Python",
    category: "Language & Data",
    color: "#3776AB",
    icon: (props) => (
      <svg viewBox="0 0 24 24" fill="none" {...props}>
        <path
          d="M11.9 2C8.8 2 7 3.2 7 5.5V7.5H12V8.5H5.2C3 8.5 2 10.3 2 13.4C2 16.5 3.3 18.2 5.5 18.2H7.2V16.2C7.2 14 8.7 12.5 10.8 12.5H14.8C16.2 12.5 17.5 11.2 17.5 9.8V5.5C17.5 3.2 15.5 2 11.9 2ZM9.5 4C10.2 4 10.8 4.6 10.8 5.2C10.8 5.9 10.2 6.5 9.5 6.5C8.8 6.5 8.2 5.9 8.2 5.2C8.2 4.6 8.8 4 9.5 4Z"
          fill="#3776AB"
        />
        <path
          d="M12.1 22C15.2 22 17 20.8 17 18.5V16.5H12V15.5H18.8C21 15.5 22 13.7 22 10.6C22 7.5 20.7 5.8 18.5 5.8H16.8V7.8C16.8 10 15.3 11.5 13.2 11.5H9.2C7.8 11.5 6.5 12.8 6.5 14.2V18.5C6.5 20.8 8.5 22 12.1 22ZM14.5 20C13.8 20 13.2 19.4 13.2 18.8C13.2 18.1 13.8 17.5 14.5 17.5C15.2 17.5 15.8 18.1 15.8 18.8C15.8 19.4 15.2 20 14.5 20Z"
          fill="#FFD43B"
        />
      </svg>
    ),
  },
  {
    id: "java",
    name: "Java",
    category: "OOP / Enterprise",
    color: "#E76F00",
    icon: (props) => (
      <svg viewBox="0 0 24 24" fill="none" {...props}>
        <path
          d="M7 16C7 16 8 17 12 17C16 17 17 16 17 16C17 18 15 19 12 19C9 19 7 18 7 16Z"
          fill="#E76F00"
        />
        <path
          d="M5 20C5 20 7 22 12 22C17 22 19 20 19 20C19 21 16 22.5 12 22.5C8 22.5 5 21 5 20Z"
          fill="#5382A1"
        />
        <path
          d="M12 2C10 5 13 7 11 10C10 8 10 6 12 2Z"
          fill="#E76F00"
        />
        <path
          d="M15 4C13 7 16 9 14 12C13 10 13 8 15 4Z"
          fill="#5382A1"
        />
      </svg>
    ),
  },
  {
    id: "git",
    name: "Git",
    category: "VCS & Workflows",
    color: "#F05032",
    icon: (props) => (
      <svg viewBox="0 0 24 24" fill="none" {...props}>
        <rect width="18" height="18" rx="3" transform="rotate(45 12 12)" fill="#F05032" />
        <circle cx="9.5" cy="9.5" r="1.8" fill="white" />
        <circle cx="14.5" cy="14.5" r="1.8" fill="white" />
        <circle cx="9.5" cy="14.5" r="1.8" fill="white" />
        <line x1="9.5" y1="9.5" x2="9.5" y2="14.5" stroke="white" strokeWidth="1.5" />
        <path d="M9.5 12C11 12 12.5 13 14.5 14.5" stroke="white" strokeWidth="1.5" />
      </svg>
    ),
  },
  {
    id: "mysql",
    name: "MySQL",
    category: "Relational DB",
    color: "#00758F",
    icon: (props) => (
      <svg viewBox="0 0 24 24" fill="none" {...props}>
        <circle cx="12" cy="12" r="10.5" fill="#00758F" fillOpacity="0.2" stroke="#00758F" strokeWidth="1.5" />
        <path
          d="M17 14.5C15 13.5 14 11 12 9C10.5 7.5 8 7 6 8C5 9.5 5.5 12 7 13.5C8.5 15 11 16 14 16C15.5 16 16.5 15.5 17 14.5Z"
          fill="#F29111"
        />
        <circle cx="8" cy="10" r="1" fill="#00758F" />
      </svg>
    ),
  },
  {
    id: "vite",
    name: "Vite",
    category: "Build Tooling",
    color: "#646CFF",
    icon: (props) => (
      <svg viewBox="0 0 24 24" fill="none" {...props}>
        <path
          d="M21 4L13 21L11.5 21L3 7L11.5 4.5L21 4Z"
          fill="url(#vite-grad)"
        />
        <path
          d="M14 2L6 13H11L9.5 20L18 8H13L14 2Z"
          fill="#FFD62E"
        />
        <defs>
          <linearGradient id="vite-grad" x1="3" y1="4" x2="21" y2="21" gradientUnits="userSpaceOnUse">
            <stop stopColor="#41D1FF" />
            <stop offset="1" stopColor="#BD34FE" />
          </linearGradient>
        </defs>
      </svg>
    ),
  },
];

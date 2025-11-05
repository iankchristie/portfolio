// Helper function to automatically add IDs to items
const addIds = (items) => items.map((item, index) => ({ ...item, id: index + 1 }));

export const heroContent = {
  name: "Ian Christie",
  subtitle: "Software Engineer - Researcher - Fun Haver",
  bio: [
    "I'm passionate about Software Engineering, AI, Earth Science, Remote Sensing, and the intersection of technology & nature. When I'm not doing those things, I'm outside playing.",
    "Raised in Houston, currently based out of San Francisco and Boulder. "
  ]
};

const projectsData = [
  {
    title: "Artisanal Small Scale Mining Observation",
    description: "",
    image: "/asm.png",
    link: "#",
    tags: ["ai", "environment"]
  },
  {
    title: "Ohmward",
    description: "Power Grid Outage Prediction using meteoroligical and utility data.",
    image: "/ohmward.png",
    link: "#",
    tags: ["ai", "environment"]
  },
  {
    title: "Wildfire Vunerability",
    description: "",
    image: "/wildfire.png",
    link: "#",
    tags: ["ai", "environment"]
  },
  {
    title: "LLM Based Browser Automations",
    description: "",
    image: "llm.jpg",
    link: "#",
    tags: ["ai"]
  },
  {
    title: "GeoClimb",
    description: "",
    image: "/geoclimb.png",
    link: "#",
    tags: ["ai"]
  },
  {
    title: "Cortical Plasticity",
    description: "",
    image: "/cortical.png",
    link: "#",
    tags: ["ai", "neuroscience"]
  },
  {
    title: "Felicity Langfuse Monitoring",
    description: "",
    image: "/llm.jpg",
    link: "#",
    tags: ["engineering"]
  },
  {
    title: "GreenPortfolio Cloud Architecture",
    description: "",
    image: "https://via.placeholder.com/400x300",
    link: "#",
    tags: ["engineering"]
  },
  {
    title: "Square Go Elastic Search",
    description: "",
    image: "https://via.placeholder.com/400x300",
    link: "#",
    tags: ["engineering"]
  },
  {
    title: "GDPR Compliance",
    description: "",
    image: "https://via.placeholder.com/400x300",
    link: "#",
    tags: ["engineering"]
  },
  {
    title: "Feature Flag Bot",
    description: "",
    image: "https://via.placeholder.com/400x300",
    link: "#",
    tags: ["engineering"]
  },
  {
    title: "Android Architecture",
    description: "",
    image: "https://via.placeholder.com/400x300",
    link: "#",
    tags: ["engineering"]
  },
  {
    title: "Youtube Video Synchronization Protocol with Interleaving",
    description: "",
    image: "https://via.placeholder.com/400x300",
    link: "#",
    tags: ["engineering"]
  },
  {
    title: "The Physical Web",
    description: "",
    image: "https://via.placeholder.com/400x300",
    link: "#",
    tags: ["engineering"]
  },
  {
    title: "LifeOS",
    description: "",
    image: "/life_os.png",
    link: "#",
    tags: ["personal"]
  },
  {
    title: "El Capitan",
    description: "",
    image: "/el_cap.jpg",
    link: "#",
    tags: ["personal", "outdoors"]
  },
  {
    title: "John Muir Trail",
    description: "",
    image: "/jmt.JPG",
    link: "#",
    tags: ["personal", "outdoors"]
  },
  {
    title: "Half Dome",
    description: "",
    image: "/half_dome.jpg",
    link: "#",
    tags: ["personal", "outdoors"]
  },
  {
    title: "Lost Array Spire",
    description: "",
    image: "/lost_arrow.jpg",
    link: "#",
    tags: ["personal", "outdoors"]
  },
  {
    title: "Map Projections",
    description: "",
    image: "/map_projections.png",
    link: "#",
    tags: ["personal"]
  },
  {
    title: "Tuolumne Triple Crown",
    description: "",
    image: "/triple_crown.jpg",
    link: "#",
    tags: ["personal", "outdoors"]
  },
  {
    title: "Van",
    description: "",
    image: "/van.jpg",
    link: "#",
    tags: ["personal"]
  },
  {
    title: "The Grand Canyon",
    description: "",
    image: "/grand_canyon.jpg",
    link: "#",
    tags: ["personal", "outdoors"]
  },
  {
    title: "Marathon",
    description: "",
    image: "marathon.jpg",
    link: "#",
    tags: ["personal", "outdoors"]
  },
  {
    title: "The Servies",
    description: "",
    image: "https://via.placeholder.com/400x300",
    link: "#",
    tags: ["personal"]
  },
  {
    title: "Kilimanjaro",
    description: "",
    image: "https://via.placeholder.com/400x300",
    link: "#",
    tags: ["personal", "outdoors"]
  },
  {
    title: "NOLS",
    description: "",
    image: "https://via.placeholder.com/400x300",
    link: "#",
    tags: ["personal", "outdoors"]
  },
  {
    title: "Bike'n Build",
    description: "",
    image: "https://via.placeholder.com/400x300",
    link: "#",
    tags: ["personal", "outdoors"]
  },
];

// Add IDs to all projects
const allProjects = addIds(projectsData);

// Export filtered lists based on tags
export const aiModels = allProjects.filter(project => project.tags.includes("ai"));
export const experience = allProjects.filter(project => project.tags.includes("engineering"));
export const personalProjects = allProjects.filter(project => project.tags.includes("personal"));

// Export all projects for reference
export const projects = allProjects;

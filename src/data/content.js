// Helper function to automatically add IDs to items
const addIds = (items) => items.map((item, index) => ({ ...item, id: index + 1 }));

// Helper to get correct image path with base URL
const getImagePath = (path) => {
  const base = import.meta.env.BASE_URL || '/';
  // Remove leading slash if present to avoid double slashes
  const cleanPath = path.startsWith('/') ? path.slice(1) : path;
  return `${base}${cleanPath}`;
};

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
    image: getImagePath("/asm.png"),
    link: "#",
    tags: ["ai", "environment"]
  },
  {
    title: "Ohmward",
    description: "Power Grid Outage Prediction using meteoroligical and utility data.",
    image: getImagePath("/ohmward.png"),
    link: "#",
    tags: ["ai", "environment"]
  },
  {
    title: "Wildfire Vunerability",
    description: "",
    image: getImagePath("/wildfire.png"),
    link: "#",
    tags: ["ai", "environment"]
  },
  {
    title: "LLM Based Browser Automations",
    description: "",
    image: getImagePath("llm.jpg"),
    link: "#",
    tags: ["ai"]
  },
  {
    title: "GeoClimb",
    description: "",
    image: getImagePath("/geoclimb.png"),
    link: "#",
    tags: ["ai"]
  },
  {
    title: "Cortical Plasticity",
    description: "",
    image: getImagePath("/cortical.png"),
    link: "#",
    tags: ["ai", "neuroscience"]
  },
  {
    title: "Felicity Langfuse Monitoring",
    description: "",
    image: getImagePath("/langfuse.svg"),
    link: "#",
    tags: ["engineering"]
  },
  {
    title: "GreenPortfolio Cloud Architecture",
    description: "",
    image: getImagePath("/greenportfolio_lgo.avif"),
    link: "#",
    tags: ["engineering"]
  },
  {
    title: "Square Go Elastic Search",
    description: "",
    image: getImagePath("/square_go.webp"),
    link: "#",
    tags: ["engineering"]
  },
  {
    title: "GDPR Compliance",
    description: "",
    image: getImagePath("square.jpg"),
    link: "#",
    tags: ["engineering"]
  },
  {
    title: "Feature Flag Bot",
    description: "",
    image: getImagePath("/flag.jpg"),
    link: "#",
    tags: ["engineering"]
  },
  {
    title: "Android Architecture",
    description: "",
    image: getImagePath("/jack.png"),
    link: "#",
    tags: ["engineering"]
  },
  {
    title: "Youtube Video Synchronization Protocol with Interleaving",
    description: "",
    image: getImagePath("/youtube.png"),
    link: "#",
    tags: ["engineering"]
  },
  {
    title: "The Physical Web",
    description: "",
    image: getImagePath("/chrome.svg"),
    link: "#",
    tags: ["engineering"]
  },
  {
    title: "LifeOS",
    description: "",
    image: getImagePath("/life_os.png"),
    link: "#",
    tags: ["personal"]
  },
  {
    title: "El Capitan",
    description: "",
    image: getImagePath("/el_cap.jpg"),
    link: "#",
    tags: ["personal", "outdoors"]
  },
  {
    title: "John Muir Trail",
    description: "",
    image: getImagePath("/jmt.JPG"),
    link: "#",
    tags: ["personal", "outdoors"]
  },
  {
    title: "Half Dome",
    description: "",
    image: getImagePath("/half_dome.jpg"),
    link: "#",
    tags: ["personal", "outdoors"]
  },
  {
    title: "Lost Array Spire",
    description: "",
    image: getImagePath("/lost_arrow.jpg"),
    link: "#",
    tags: ["personal", "outdoors"]
  },
  {
    title: "Map Projections",
    description: "",
    image: getImagePath("/map_projections.png"),
    link: "#",
    tags: ["personal"]
  },
  {
    title: "Tuolumne Triple Crown",
    description: "",
    image: getImagePath("/triple_crown.jpg"),
    link: "#",
    tags: ["personal", "outdoors"]
  },
  {
    title: "Van",
    description: "",
    image: getImagePath("/van.jpg"),
    link: "#",
    tags: ["personal"]
  },
  {
    title: "The Grand Canyon",
    description: "",
    image: getImagePath("/grand_canyon.jpg"),
    link: "#",
    tags: ["personal", "outdoors"]
  },
  {
    title: "Marathon",
    description: "",
    image: getImagePath("marathon.jpg"),
    link: "#",
    tags: ["personal", "outdoors"]
  },
  {
    title: "The Servies",
    description: "",
    image: getImagePath("/servies.png"),
    link: "#",
    tags: ["personal"]
  },
  {
    title: "Kilimanjaro",
    description: "",
    image: getImagePath("kilimanjaro.jpg"),
    link: "#",
    tags: ["personal", "outdoors"]
  },
  {
    title: "NOLS Patagonia",
    description: "",
    image: getImagePath("/nols.JPG"),
    link: "#",
    tags: ["personal", "outdoors"]
  },
  {
    title: "Bike'n Build",
    description: "",
    image: getImagePath("bnb.jpg"),
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

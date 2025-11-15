// Helper function to automatically add IDs to items
const addIds = (items) => items.map((item, index) => ({ ...item, id: index + 1 }));

// Helper to get correct image path with base URL
export const getImagePath = (path) => {
  const base = import.meta.env.BASE_URL || '/';
  // Remove leading slash if present to avoid double slashes
  const cleanPath = path.startsWith('/') ? path.slice(1) : path;
  return `${base}${cleanPath}`;
};

export const heroContent = {
  name: "Ian Christie",
  subtitle: "Software Engineer - Researcher",
  bio: [
    "Masters student with 8 years of experience in Big and Small Tech.",
    "I'm passionate about Software Engineering, AI, Earth Science, Remote Sensing, and the intersection of technology & nature.",
    "Raised in Houston, currently based out of San Francisco and Boulder. "
  ]
};

const projectsData = [
  {
    title: "Small Scale Mining Detection",
    description: "Semantic Segmentation Model of Remote Sensing Data",
    image: getImagePath("/asm.png"),
    link: "/projects/small-scale-mining",
    tags: ["ai", "environment"]
  },
  {
    title: "Ohmward",
    description: "Power Grid Outage Prediction using Meteoroligical and Utility data.",
    image: getImagePath("/ohmward.png"),
    link: "/projects/ohmward",
    tags: ["ai", "environment"]
  },
  {
    title: "Wildfire Vunerability",
    description: "Agentic LLM Analysis of Operational Response Forms",
    image: getImagePath("/wildfire.png"),
    link: "/projects/wildfire-vulnerability",
    tags: ["ai", "environment"]
  },
  {
    title: "Browser Automations",
    description: "LLM Structured Outputs into an Abstract Syntax Tree DSL",
    image: getImagePath("llm.jpg"),
    link: "/projects/browser-automations",
    tags: ["ai"]
  },
  {
    title: "GeoClimb",
    description: "Geologic Foundation Model Aimed at Detecting Novel Climbing Areas",
    image: getImagePath("/geoclimb.png"),
    link: "/projects/geoclimb",
    tags: ["ai"]
  },
  {
    title: "Cortical Plasticity",
    description: "NeuroBiologic Model for the Development of Direction Selectivity",
    image: getImagePath("/cortical.png"),
    link: "/projects/cortical-plasticity",
    tags: ["ai", "neuroscience"]
  },
  {
    title: "Felicity: Scientific Prompt Development",
    description: "LLM Experimentation, Deployment, Regresssion Tracking, Dataset Development",
    image: getImagePath("/langfuse.svg"),
    link: "/projects/felicity-langfuse",
    tags: ["engineering"]
  },
  {
    title: "GreenPortfolio: Cloud Architecture",
    description: "GCP Environment Setup using Terraform",
    image: getImagePath("/greenportfolio_lgo.avif"),
    link: "/projects/greenportfolio",
    tags: ["engineering"]
  },
  {
    title: "Square: Go Elastic Search",
    description: "Before there was AI, there was Elastic Search",
    image: getImagePath("/square_go.webp"),
    link: "/projects/square-go-elastic-search",
    tags: ["engineering"]
  },
  {
    title: "Square: Fully Reactive Android App",
    description: "Overview of Android Architecture at Square Appointments",
    image: getImagePath("/jack.png"),
    link: "/projects/square-android",
    tags: ["engineering"]
  },
  {
    title: "Google: Video Synchronization Protocol",
    description: "Video Interleaving for Continous Offline Content",
    image: getImagePath("/youtube.png"),
    link: "/projects/youtube-sync",
    tags: ["engineering"]
  },
  {
    title: "Google: The Physical Web",
    description: "Long Deprecated Bluetooth Beacon Integration with Chrome",
    image: getImagePath("/chrome.svg"),
    link: "/projects/physical-web",
    tags: ["engineering"]
  },
  {
    title: "Goldman Sachs: Internship",
    description: "The Single Time I've Used AngularJS",
    image: getImagePath("/goldman.png"),
    link: "/projects/goldman-sachs",
    tags: ["engineering"]
  },

    {
    title: "Square: GDPR Compliance",
    description: "Durable System for PII Tracking",
    image: getImagePath("square.jpg"),
    link: "/gdpr",
    tags: ["engineering"]
  },
  {
    title: "Square: Feature Flag Bot",
    description: "Monitoring & Alerting System for Feature Flag Deprecation",
    image: getImagePath("/flag.jpg"),
    link: "/feature-flag-bot",
    tags: ["engineering"]
  },
  {
    title: "LifeOS",
    description: "Home Grown Task & Time Management App",
    image: getImagePath("/life_os.png"),
    link: "#",
    tags: ["personal"]
  },
  {
    title: "El Capitan",
    description: "Picking the Nose and Going Up It",
    image: getImagePath("/el_cap.jpg"),
    link: "/el-capitan",
    tags: ["personal", "outdoors"]
  },
  {
    title: "John Muir Trail",
    description: "15 Days in the Most Beautiful Place on Earth",
    image: getImagePath("/jmt.JPG"),
    link: "#",
    tags: ["personal", "outdoors"]
  },
    {
    title: "The Grand Canyon",
    description: "18 Days in the Most Beautiful Place on Earth",
    image: getImagePath("/grand_canyon.jpg"),
    link: "#",
    tags: ["personal", "outdoors"]
  },
  {
    title: "Map Projections",
    description: "My Favorite is Van Der Grinten. The Earth's not a Square, it's a Circle! I like Cricles! Today is Gonna be a Good Day!",
    image: getImagePath("/map_projections.png"),
    link: "/map-projections",
    tags: ["personal"]
  },
    {
    title: "Van",
    description: "Bob the Van Builder: Yes We Can!",
    image: getImagePath("/van.jpg"),
    link: "/van",
    tags: ["personal"]
  },
  {
    title: "Half Dome",
    description: "30th Birthday Celebration!",
    image: getImagePath("/half_dome.jpg"),
    link: "#",
    tags: ["personal", "outdoors"]
  },
  {
    title: "Lost Array Spire",
    description: "Fancy Rope Work for Cool Photos",
    image: getImagePath("/lost_arrow.jpg"),
    link: "#",
    tags: ["personal", "outdoors"]
  },
  {
    title: "Tuolumne Triple Crown",
    description: "One of the Best Days in the Mountains",
    image: getImagePath("/triple_crown.jpg"),
    link: "#",
    tags: ["personal", "outdoors"]
  },
  {
    title: "The Servies",
    description: "The Dundies Inspired Work Offsite",
    image: getImagePath("/servies.png"),
    link: "#",
    tags: ["personal"]
  },
  {
    title: "Kilimanjaro",
    description: "The Tallest Mountain in Africa with Pops",
    image: getImagePath("kilimanjaro.jpg"),
    link: "#",
    tags: ["personal", "outdoors"]
  },
  {
    title: "Patagonia",
    description: "A semester in Patagonia",
    image: getImagePath("/nols.JPG"),
    link: "#",
    tags: ["personal", "outdoors"]
  },
  {
    title: "Bike'n Build",
    description: "Cross Country Bike Trip from Rhode Island to Seattle",
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

// Export projects with actual pages (for navigation)
export const projectsWithPages = allProjects.filter(project => project.link && !project.link.includes("#"));

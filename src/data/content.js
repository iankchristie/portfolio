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
  subtitle: "Senior Software Engineer - Researcher",
  bio: [
    "Masters student researching Geospatial Machine Learning, with 8 years of experience in Big and Small Tech.",
    "I'm passionate about Software Engineering, AI, Earth Science, Remote Sensing, and the intersection of technology & nature.",
    "Currently based out of San Francisco and Boulder. "
  ]
};

const projectsData = [
  {
    title: "Small Scale Mining Detection",
    description: "Semantic Segmentation Model of Remote Sensing Data",
    image: getImagePath("/asm.png"),
    link: "/projects/small-scale-mining",
    tags: ["ai", "environment"],
    rappeller: "computer-rapeller.png"
  },
  {
    title: "Ohmward",
    description: "Power Grid Outage Prediction using Meteoroligical and Utility data.",
    image: getImagePath("/ohmward.png"),
    link: "/projects/ohmward",
    tags: ["ai", "environment"],
    rappeller: "computer-rapeller.png"
  },
  {
    title: "Wildfire Vunerability",
    description: "Agentic LLM Analysis of Operational Response Forms",
    image: getImagePath("/wildfire.png"),
    link: "/projects/wildfire-vulnerability",
    tags: ["ai", "environment"],
    rappeller: "computer-rapeller.png"
  },
  {
    title: "Browser Automations",
    description: "LLM Structured Outputs into an Abstract Syntax Tree DSL",
    image: getImagePath("llm.jpg"),
    link: "/projects/browser-automations",
    tags: ["ai"],
    rappeller: "computer-rapeller.png"
  },
  {
    title: "GeoClimb",
    description: "Geologic Foundation Model Aimed at Detecting Novel Climbing Areas",
    image: getImagePath("/geoclimb.png"),
    link: "/projects/geoclimb",
    tags: ["ai"],
    rappeller: "computer-rapeller.png"
  },
  {
    title: "Cortical Plasticity",
    description: "NeuroBiologic Model for the Development of Direction Selectivity",
    image: getImagePath("/cortical.png"),
    link: "/projects/cortical-plasticity",
    tags: ["ai", "neuroscience"],
    rappeller: "computer-rapeller.png"
  },
  {
    title: "Felicity: Scientific Prompt Development",
    description: "LLM Experimentation, Deployment, Regresssion Tracking, Dataset Development",
    image: getImagePath("/langfuse.svg"),
    link: "/projects/felicity-langfuse",
    tags: ["engineering"],
    rappeller: "computer-rapeller.png"
  },
  {
    title: "GreenPortfolio: Cloud Architecture",
    description: "LLMs + Terraform: a Match Made in Heaven",
    image: getImagePath("/greenportfolio_lgo.avif"),
    link: "/projects/greenportfolio",
    tags: ["engineering"],
    rappeller: "computer-rapeller.png"
  },
  {
    title: "Square: Go Elastic Search",
    description: "Before there was AI, there was Elastic Search",
    image: getImagePath("/square_go.webp"),
    link: "/projects/square-go-elastic-search",
    tags: ["engineering"],
    rappeller: "computer-rapeller.png"
  },
  {
    title: "Square: Fully Reactive Android App",
    description: "Overview of Android Architecture at Square Appointments",
    image: getImagePath("/jack.png"),
    link: "/projects/square-android",
    tags: ["engineering"],
    rappeller: "computer-rapeller.png"
  },
  {
    title: "Google: Video Synchronization Protocol",
    description: "Video Interleaving for Continous Offline Content",
    image: getImagePath("/youtube.png"),
    link: "/projects/youtube-sync",
    tags: ["engineering"],
    rappeller: "computer-rapeller.png"
  },
  {
    title: "Google: The Physical Web",
    description: "Long Deprecated Bluetooth Beacon Integration with Chrome",
    image: getImagePath("/chrome.svg"),
    link: "/projects/physical-web",
    tags: ["engineering"],
    rappeller: "computer-rapeller.png"
  },
  {
    title: "Goldman Sachs: Internship",
    description: "The Single Time I've Used AngularJS",
    image: getImagePath("/goldman.png"),
    link: "/projects/goldman-sachs",
    tags: ["engineering"],
    rappeller: "computer-rapeller.png"
  },
  {
    title: "Square: GDPR Compliance",
    description: "Durable System for PII Tracking",
    image: getImagePath("square.jpg"),
    link: "/gdpr",
    tags: ["engineering"],
    rappeller: "computer-rapeller.png"
  },
  {
    title: "Square: Feature Flag Bot",
    description: "Monitoring & Alerting System for Feature Flag Deprecation",
    image: getImagePath("/flag.jpg"),
    link: "/feature-flag-bot",
    tags: ["engineering"],
    rappeller: "computer-rapeller.png"
  },
  {
    title: "LifeOS",
    description: "Home Grown Task & Time Management App",
    image: getImagePath("/life_os.png"),
    link: "/projects/lifeos",
    tags: ["personal"],
    rappeller: "computer-rapeller.png"
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
    link: "/john-muir-trail",
    tags: ["personal", "outdoors"]
  },
  {
    title: "The Grand Canyon",
    description: "18 Days in the Most Beautiful Place on Earth",
    image: getImagePath("/grand_canyon.jpg"),
    link: "/grand-canyon",
    tags: ["personal", "outdoors"]
  },
  {
    title: "Map Projections",
    description: "My Favorite is Van Der Grinten. The Earth's not a Square, it's a Circle! I like Cricles! Today is Gonna be a Good Day!",
    image: getImagePath("/map_projections.png"),
    link: "/map-projections",
    tags: ["personal"],
    rappeller: "computer-rapeller.png"
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
    link: "/half-dome",
    tags: ["personal", "outdoors"]
  },
  {
    title: "Lost Arrowhead Spire",
    description: "Fancy Rope Work for Cool Photos",
    image: getImagePath("/lost_arrow.jpg"),
    link: "/lost-arrow-spire",
    tags: ["personal", "outdoors"]
  },
  {
    title: "Tuolumne Triple Crown",
    description: "One of the Best Days in the Mountains",
    image: getImagePath("/triple_crown.jpg"),
    link: "/tuolumne-triple-crown",
    tags: ["personal", "outdoors"]
  },
  {
    title: "The Servies",
    description: "The Dundies Inspired Work Offsite",
    image: getImagePath("/servies.png"),
    link: "/the-servies",
    tags: ["personal"]
  },
  {
    title: "Kilimanjaro",
    description: "The Tallest Mountain in Africa with Pops",
    image: getImagePath("kilimanjaro.jpg"),
    link: "/kilimanjaro",
    tags: ["personal", "outdoors"]
  },
  {
    title: "Patagonia",
    description: "A semester in Patagonia",
    image: getImagePath("/nols.JPG"),
    link: "/patagonia",
    tags: ["personal", "outdoors"]
  },
  {
    title: "Bike'n Build",
    description: "Cross Country Bike Trip from Rhode Island to Seattle",
    image: getImagePath("/bnb/bnb_map.jpg"),
    link: "/bike-n-build",
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

// Helper to get rappeller image path for a project by its link
export const getProjectRappeller = (link) => {
  const project = allProjects.find(p => p.link === link);
  return project?.rappeller ? getImagePath(project.rappeller) : undefined;
};

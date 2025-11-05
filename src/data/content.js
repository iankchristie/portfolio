// Helper function to automatically add IDs to items
const addIds = (items) => items.map((item, index) => ({ ...item, id: index + 1 }));

export const heroContent = {
  name: "Ian Christie",
  subtitle: "Software Engineer - Researcher - Fun Haver",
  bio: [
    "I'm passionate about Software Engineering, AI, Earth Science, and the intersection of technology and nature.",
    "Raised in Houston, TX and currently based out of San Francisco and Boulder. "
  ]
};

const aiModelsData = [
  {
    title: "Artisanal Small Scale Mining Observation",
    description: "",
    image: "https://via.placeholder.com/400x300",
    link: "#"
  },
  {
    title: "Ohmward",
    description: "Power Grid Outage Prediction using meteoroligical and utility data.",
    image: "https://via.placeholder.com/400x300",
    link: "#"
  },
  {
    title: "Wildfire Vunerability",
    description: "",
    image: "https://via.placeholder.com/400x300",
    link: "#"
  },
  {
    title: "LLM Based Browser Automations",
    description: "",
    image: "https://via.placeholder.com/400x300",
    link: "#"
  },
  {
    title: "GeoClimb",
    description: "",
    image: "https://via.placeholder.com/400x300",
    link: "#"
  },
  {
    title: "Cortical Plasticity",
    description: "",
    image: "https://via.placeholder.com/400x300",
    link: "#"
  },
];

const experienceData = [
  {
    title: "Felicity Langfuse Monitoring",
    description: "",
    image: "https://via.placeholder.com/400x300",
    link: "#"
  },
  {
    title: "GreenPortfolio Cloud Architecture",
    description: "",
    image: "https://via.placeholder.com/400x300",
    link: "#"
  },
  {
    title: "Square Go Elastic Search",
    description: "",
    image: "https://via.placeholder.com/400x300",
    link: "#"
  },
  {
    title: "GDPR Compliance",
    description: "",
    image: "https://via.placeholder.com/400x300",
    link: "#"
  },
  {
    title: "Feature Flag Bot",
    description: "",
    image: "https://via.placeholder.com/400x300",
    link: "#"
  },
  {
    title: "Android Architecture",
    description: "",
    image: "https://via.placeholder.com/400x300",
    link: "#"
  },
  {
    title: "Youtube Video Synchronization Protocol with Interleaving",
    description: "",
    image: "https://via.placeholder.com/400x300",
    link: "#"
  },
  {
    title: "The Physical Web",
    description: "",
    image: "https://via.placeholder.com/400x300",
    link: "#"
  },
];

const personalProjectsData = [
  {
    title: "LifeOS",
    description: "",
    image: "https://via.placeholder.com/400x300",
    link: "#"
  },
  {
    title: "El Capitan",
    description: "",
    image: "https://via.placeholder.com/400x300",
    link: "#"
  },
  {
    title: "John Muir Trail",
    description: "",
    image: "https://via.placeholder.com/400x300",
    link: "#"
  },
  {
    title: "Half Dome",
    description: "",
    image: "https://via.placeholder.com/400x300",
    link: "#"
  },
  {
    title: "Lost Array Spire",
    description: "",
    image: "https://via.placeholder.com/400x300",
    link: "#"
  },
  {
    title: "Map Projections",
    description: "",
    image: "https://via.placeholder.com/400x300",
    link: "#"
  },
  {
    title: "Tuolumne Triple Crown",
    description: "",
    image: "https://via.placeholder.com/400x300",
    link: "#"
  },

  {
    title: "Van",
    description: "",
    image: "https://via.placeholder.com/400x300",
    link: "#"
  },
  {
    title: "The Grand Canyon",
    description: "",
    image: "https://via.placeholder.com/400x300",
    link: "#"
  },
  {
    title: "Marathon",
    description: "",
    image: "https://via.placeholder.com/400x300",
    link: "#"
  },
  {
    title: "The Servies",
    description: "",
    image: "https://via.placeholder.com/400x300",
    link: "#"
  },
    {
    title: "Kilimanjaro",
    description: "",
    image: "https://via.placeholder.com/400x300",
    link: "#"
  },
    {
    title: "NOLS",
    description: "",
    image: "https://via.placeholder.com/400x300",
    link: "#"
  },
  {
    title: "Bike'n Build",
    description: "",
    image: "https://via.placeholder.com/400x300",
    link: "#"
  },
];

// Export with auto-generated IDs
export const aiModels = addIds(aiModelsData);
export const experience = addIds(experienceData);
export const personalProjects = addIds(personalProjectsData);

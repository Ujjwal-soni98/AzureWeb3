import { Calendar, Code, FileText, User, Clock, Rocket, Target, Lightbulb, Zap, Search, Droplets, Bot, Box } from "lucide-react";
import RadialOrbitalTimeline from "@/components/ui/radial-orbital-timeline";

const timelineData = [
  {
    id: 1,
    title: "Web3 Faucet",
    date: "",
    content: "Get free testnet tokens sent directly to your wallet. Brought to you by Microsoft Azure for Web3.",
    category: "Planning",
    icon: Droplets,
    relatedIds: [],
    status: "live" as const,
    energy: 100,
  },
  {
    id: 2,
    title: "Web3 Ai",
    date: "",
    content: "Hello, Web3\nYour AI companion to explore the decentralized world.\nAsk questions. Learn fast. Build smarter.",
    category: "Planning",
    icon: Bot,
    relatedIds: [],
    status: "live" as const,
    energy: 100,
  },
  {
    id: 4,
    title: "IPFS",
    date: "",
    content: "Get Started with Web3 Storage. Securely store your data using decentralized protocols like IPFS. Embrace the future of file storage—censorship-resistant, tamper-proof, and always accessible.",
    category: "Development",
    icon: Box,
    relatedIds: [],
    status: "future-plan" as const,
    energy: 35,
  },
  {
    id: 7,
    title: "Launch",
    date: "",
    content: "We're Live!\nThe wait is over. Dive in and explore what we've built.",
    category: "Release",
    icon: Rocket,
    relatedIds: [],
    status: "live" as const,
    energy: 100,
  },
  {
    id: 8,
    title: "Discover",
    date: "",
    content: "Discover blockchain technology with Azure Web3. Find all the different products Microsoft Azure that and the community have built for blockchain developers.",
    category: "Discovery",
    icon: Search,
    relatedIds: [],
    status: "live" as const,
    energy: 100,
  },
];

export function RadialOrbitalTimelineDemo() {
  return <RadialOrbitalTimeline timelineData={timelineData} />;
}

export default RadialOrbitalTimelineDemo;

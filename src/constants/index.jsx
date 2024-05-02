import { Blend, Podcast, Router, ScanFace, Tv2, View } from "lucide-react";

import user1 from "../assets/profile-pictures/user1.jpg";
import user2 from "../assets/profile-pictures/user2.jpg";
import user3 from "../assets/profile-pictures/user3.jpg";
import user4 from "../assets/profile-pictures/user4.jpg";
import user5 from "../assets/profile-pictures/user5.jpg";
import user6 from "../assets/profile-pictures/user6.jpg";

export const navItems = [
  { label: "Features", href: "#" },
  { label: "Preview", href: "#" },
  { label: "Testimonials", href: "#" },
  { label: "Demo Guide", href: "#" },
];

export const testimonials = [
  {
    user: "John Doe, CEO",
    company: "Stellar Solutions",
    image: user1,
    text: "Apple Vision Pro has streamlined our workflow and simplified operations significantly. Highly recommended!",
  },
  {
    user: "Jane Smith",
    company: "Blue Horizon Technologies",
    image: user2,
    text: "With Apple Vision Pro, I can stay organized, meet deadlines, and deliver high-quality work consistently. A game-changer for my business!",
  },
  {
    user: "David Johnson",
    company: "Quantum Innovations",
    image: user3,
    text: "Apple Vision Pro has revolutionized our marketing efforts. Invaluable insights and automation features have boosted our impact.",
  },
  {
    user: "Ronee Brown",
    company: "Fusion Dynamics",
    image: user4,
    text: "Since integrating Apple Vision Pro, we've seen significant improvements in patient care and operational efficiency. Elevating our standard of care.",
  },
  {
    user: "Michael Wilson",
    company: "Visionary Creations",
    image: user5,
    text: "Apple Vision Pro has become an indispensable tool in our mission to provide quality education. Empowering teachers and supporting student success.",
  },
  {
    user: "Emily Davis",
    company: "Synergy Systems",
    image: user6,
    text: "Apple Vision Pro has streamlined our business processes and allowed us to focus on growth with confidence. Highly recommended for small businesses!",
  },
];

export const features = [
  {
    icon: <View />,
    text: "Enhanced Visual Clarity",
    description:
      "Experience unparalleled visual clarity with Apple Vision Pro. Allowing you to immerse yourself in stunning visuals with unmatched precision and realism.",
  },
  {
    icon: <ScanFace />,
    text: "Intuitive Interface",
    description:
      "Designed for efficiency and ease of use, our interface empowers you to accomplish more with less effort, whether you're browsing, multitasking, or creating content.",
  },
  {
    icon: <Router />,
    text: "Seamless Connectivity",
    description:
      "Stay connected effortlessly with Apple Vision Pro. Whether you're on the go or at home, enjoy uninterrupted access to your files, media, and applications.",
  },
  {
    icon: <Blend />,
    text: "Dynamic Color Accuracy",
    description:
      "Discover true-to-life color representation with Apple Vision Pro. Allowing you to experience content exactly as intended by creators. Say goodbye to color distortion and hello to vibrant visuals.",
  },
  {
    icon: <Tv2 />,
    text: "Adaptive Display Technology",
    description:
      "Adapt to any lighting environment with Apple Vision Pro's adaptive display technology. Say goodbye to eye strain and hello to a truly comfortable viewing experience.",
  },
  {
    icon: <Podcast />,
    text: "Immersive Audio Experience",
    description:
      "Immerse yourself in rich, immersive audio with Apple Vision Pro. Whether you're watching movies, listening to music, or gaming, enjoy lifelike audio that brings your content to life.",
  },
];

export const resourcesLinks = [
  { href: "#", text: "Getting Started" },
  { href: "#", text: "Documentation" },
  { href: "#", text: "Tutorials" },
  { href: "#", text: "API Reference" },
  { href: "#", text: "Community Forums" },
];

export const platformLinks = [
  { href: "#", text: "Features" },
  { href: "#", text: "Supported Devices" },
  { href: "#", text: "System Requirements" },
  { href: "#", text: "Downloads" },
  { href: "#", text: "Release Notes" },
];

export const communityLinks = [
  { href: "#", text: "Events" },
  { href: "#", text: "Meetups" },
  { href: "#", text: "Conferences" },
  { href: "#", text: "Hackathons" },
  { href: "#", text: "Jobs" },
];

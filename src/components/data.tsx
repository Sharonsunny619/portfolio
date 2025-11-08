import { CircleStop, Component, Globe, VectorSquare } from "lucide-react";
import Education from "./icons/education";
import Languages from "./icons/languages";
import Projects from "./icons/projects";
import UiUx from "./icons/uiux";
import image2 from "./images/ecom.webp";
import GithubInactive from "./icons/github_inactive";
import GithubActive from "./icons/github_active";
import ClerkActive from "./icons/clerk_active";
import ZitadelActive from "./icons/zitadel_active";
import ZitadelInactive from "./icons/zitadel_inactive";
import ShadcnActive from "./icons/shadcn_active";
import OriginUIActive from "./icons/origin_ui_active";
import MantineInActive from "./icons/mantine_inactive";
import MantineActive from "./icons/mantine_active";
import TiptapActive from "./icons/tiptap_active";
import TiptapInactive from "./icons/tiptap_inactive";
import PlatejsActive from "./icons/platejs_active";
import NivoChartActive from "./icons/nive_chart_active";
import RechartsActive from "./icons/recharts_active";
import GsapActive from "./icons/gsap_active";
import FramerMotionActive from "./icons/framermotion_active";
import StrapiCMSActive from "./icons/strapi_active";
import SizzyActive from "./icons/sizzy_active";
import deelbaba1 from "./images/project1/Screenshot 2025-11-08 at 8.13.08 PM.png";
 import deelbaba3 from "./images/project1/Screenshot 2025-11-08 at 8.13.47 PM.png";
import deelbaba4 from "./images/project1/Screenshot 2025-11-08 at 8.14.26 PM.png";
import deelbaba5 from "./images/project1/Screenshot 2025-11-08 at 8.14.39 PM.png";
import deelbaba6 from "./images/project1/Screenshot 2025-11-08 at 8.14.59 PM.png";
import deelbaba7 from "./images/project1/Screenshot 2025-11-08 at 8.15.08 PM.png";

import corporate1 from "./images/project2/Screenshot 2025-10-26 at 2.43.05 PM.png";
import corporate2 from "./images/project2/Screenshot 2025-10-26 at 2.43.24 PM.png";
import corporate3 from "./images/project2/Screenshot 2025-10-26 at 2.43.41 PM.png";
import corporate4 from "./images/project2/Screenshot 2025-10-26 at 2.43.59 PM.png";
import Telematum1 from "./images/project3/Screenshot 2025-10-26 at 2.49.28 PM.png";
import Telematum2 from "./images/project3/Screenshot 2025-10-26 at 2.49.43 PM.png";
import Telematum3 from "./images/project3/Screenshot 2025-10-26 at 2.50.31 PM.png";
import Telematum4 from "./images/project3/Screenshot 2025-10-26 at 2.50.46 PM.png";
import Telematum5 from "./images/project3/Screenshot 2025-10-26 at 2.51.25 PM.png";






export const infoList = [
  {
    icon: <Languages />,
    title: "Tech Stack",
    description:
      "HTML, CSS, Tailwind CSS, JavaScript, Typescript, React.js, Next.js, Loopback.js, MongoDB",
  },
  {
    icon: <Education />,
    title: "Education",
    description: `Bsc in Computer Science MEARN stack Development `,
  },
  {
    icon: <Projects />,
    title: "Projects",
    description: "Built more than 5 projects",
  },
];

export const serviceData = [
  {
    icon: <Component />,
    title: "Web Design",
    shortDescription:
      "I design and build visually appealing, responsive websites using React, Next.js, and Tailwind CSS...",
    fullDescription:
      "I design and build visually appealing, responsive websites using React, Next.js, and Tailwind CSS. My focus is on creating modern, user-friendly interfaces that adapt seamlessly across all devices. I ensure each design aligns with your brand identity and enhances user experience through clean layouts, intuitive navigation, and accessibility-focused design principles.",
    link: "",
  },
  {
    icon: <UiUx />,
    title: "Web Development",
    shortDescription:
      "I integrate APIs and develop powerful web functionalities that bring your design to life...",
    fullDescription:
      "I integrate APIs and develop powerful web functionalities that bring your design to life. From handling dynamic data to setting up authentication, forms, and dashboards, I ensure smooth front-to-back connectivity. I specialize in building scalable, high-performance web applications using technologies like React, Next.js, TypeScript, and Node.js, with a focus on clean and maintainable code.",
    link: "",
  },
];


export const workData = [
  {
    title: "Corporate Website",
    description: "Smart chatbot solutions for business",
    bgImage: [corporate1,corporate2,corporate3,corporate4],
  },
  {
    title: "Deelbaba",
    description: "Seamless Ecommerce Platform",
    bgImage: [deelbaba1,deelbaba3,deelbaba4,deelbaba5,deelbaba6,deelbaba7],
  },
  {
    title: "Telematum Healthcare",
    description: "Effortless online appointments",
    bgImage: [Telematum1,Telematum2,Telematum3,Telematum4,Telematum5],
  },
];

export const navLinks = [
  { href: "#top", label: "Home" },
  { href: "#about", label: "About me" },
  { href: "#services", label: "Services" },
  { href: "#work", label: "My Work" },
  { href: "#contact", label: "Contact me" },
];

export const skillList = [
  {
    active_icon: <GithubActive />,
    inactive_icon: <GithubInactive />,
    title: "Github",
  },
  {
    inactive_icon: <p className="text-[30px] font-light">C</p>,
    active_icon: <ClerkActive />,
    title: "Clerk",
  },
  {
    active_icon: <ZitadelActive />,
    inactive_icon: <ZitadelInactive />,
    title: "Zitadel",
  },
  {
    active_icon: <ShadcnActive />,
    inactive_icon: <p className="rotate-45 text-[30px] font-light">l</p>,
    title: "ShadCN",
  },
  {
    active_icon: <OriginUIActive />,
    inactive_icon: <p className="rotate-90 text-[30px] font-light  ml-2">o</p>,
    title: "Origin",
  },
  {
    active_icon: <MantineActive />,
    inactive_icon: <MantineInActive />,
    title: "Mantine",
  },
  {
    active_icon: <TiptapActive />,
    inactive_icon: <TiptapInactive />,
    title: "Tiptap",
  },
  {
    active_icon: <PlatejsActive />,
    inactive_icon: <CircleStop />,
    title: "Platejs",
  },
  {
    active_icon: <NivoChartActive />,
    inactive_icon: <p className=" text-[30px] font-light mb-[6px]">n</p>,
    title: "Nivo",
  },
  {
    active_icon: <RechartsActive />,
    inactive_icon: <Globe />,
    title: "Recharts",
  },
  {
    active_icon: <GsapActive />,
    inactive_icon: <VectorSquare />,
    title: "",
  },
  {
    active_icon: <FramerMotionActive />,
    inactive_icon: <p className="  text-[30px] font-light ">F</p>,
    title: "Motion",
  },
  {
    active_icon: <StrapiCMSActive />,
    inactive_icon: (
      <div className="border-[2px] rounded-md p-2 h-4 w-4 flex items-center justify-center">
        <p className="rotate-45 text-[10px] font-light">M</p>
      </div>
    ),
    title: "StrapiCMS",
  },
  {
    active_icon: <SizzyActive />,
    inactive_icon: <p className="  text-[30px] font-light">S</p>,
    title: "Sizzy",
  },
];

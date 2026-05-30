"use client";

import { 
  SiNextdotjs, SiReact, SiTypescript, SiPostgresql, SiPrisma, SiClerk, 
  SiNodedotjs, SiMongodb, SiJavascript, SiTailwindcss, SiPython, SiPandas, 
  SiScikitlearn, SiPlotly, SiVercel, SiPostman, SiExpress
} from "react-icons/si";
import { FaAws } from "react-icons/fa";
import { BsCpu } from "react-icons/bs";
import { TbBrandNextjs, TbBrandReact, TbBrandTypescript, TbBrandPython, TbBrandJavascript } from "react-icons/tb";
import { DiDatabase } from "react-icons/di";
import { BiCube, BiCodeAlt } from "react-icons/bi";

export default function TechIcon({ name }: { name: string }) {
  const normalized = name.toLowerCase().replace(/[^a-z0-9]/g, '');

  switch (normalized) {
    case 'nextjs': return <SiNextdotjs className="w-4 h-4" />;
    case 'react':
    case 'reactjs': return <SiReact className="w-4 h-4 text-[#61DAFB]" />;
    case 'typescript': return <SiTypescript className="w-4 h-4 text-[#3178C6]" />;
    case 'javascript': return <SiJavascript className="w-4 h-4 text-[#F7DF1E]" />;
    case 'postgresql': return <SiPostgresql className="w-4 h-4 text-[#4169E1]" />;
    case 'mongodb': return <SiMongodb className="w-4 h-4 text-[#47A248]" />;
    case 'prisma':
    case 'prismaorm': return <SiPrisma className="w-4 h-4 text-ink" />;
    case 'clerk':
    case 'clerkauth': return <SiClerk className="w-4 h-4 text-[#6C47FF]" />;
    case 'nodejs': return <SiNodedotjs className="w-4 h-4 text-[#339933]" />;
    case 'expressjs': return <SiExpress className="w-4 h-4" />;
    case 'tailwindcss':
    case 'tailwind': return <SiTailwindcss className="w-4 h-4 text-[#06B6D4]" />;
    case 'python': return <SiPython className="w-4 h-4 text-[#3776AB]" />;
    case 'pandas': return <SiPandas className="w-4 h-4 text-[#150458]" />;
    case 'scikitlearn': return <SiScikitlearn className="w-4 h-4 text-[#F7931E]" />;
    case 'plotlydash':
    case 'plotly': return <SiPlotly className="w-4 h-4 text-[#3F4F75]" />;
    case 'vercel': return <SiVercel className="w-4 h-4" />;
    case 'awsec2':
    case 'aws': return <FaAws className="w-4 h-4 text-[#FF9900]" />;
    case 'postman': return <SiPostman className="w-4 h-4 text-[#FF6C37]" />;
    case 'sql': return <DiDatabase className="w-4 h-4 text-[#E38C00]" />;
    case 'geminiai':
    case 'claudeai':
    case 'claudesonnetapi': return <BsCpu className="w-4 h-4 text-batman-red" />; // Generic AI Icon
    default: return <BiCodeAlt className="w-4 h-4" />;
  }
}

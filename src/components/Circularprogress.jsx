import { useEffect, useState } from "react";
import {motion} from "framer-motion"

const Circularprogress = ({ percentage, label }) => {
  const radius = 45; 
  const circumference = 2 * Math.PI * radius;

  const [progress , setprogress] = useState(0);


  useEffect(() => {
    setTimeout(() => 
      
    setprogress(percentage), 1500);

  }, [percentage])

  const offset = circumference - (progress / 100) * circumference;

  return (
    <motion.div
    initial={{opacity:0, }}
    whileInView={{opacity:1}}
    transition={{duration:3}}
    
    className="lg:flex flex-col items-center hidden">
      <svg width="160" height="160" viewBox="0 0 100 100" >
      
        {/* Siva pozadina kruga */}
        <circle
          cx="50"
          cy="50"
          r={radius}
          stroke="gray"
          strokeWidth="4"
          fill="none"
          opacity="0.3"
        />
        {/* Glavni progress bar */}
        <circle
          cx="50"
          cy="50"
          r={radius}
          stroke="white"
          strokeWidth="4"
          fill="none"
          strokeDasharray={circumference}
          strokeDashoffset={offset}
          strokeLinecap="round"
          transform="rotate(-90 50 50)"
          className="transition-all duration-700 ease-in-out"
        />
        {/* Tekst sa procentom */}
        <text
          x="50"
          y="50"
          textAnchor="middle"
          dy=".3em"
          fill="white"
          className="text-sm font-semibold"
        >
          {percentage}%
        </text>
      </svg>
      <p className="text-white mt-2">{label}</p>
    </motion.div>
  );
};

export default Circularprogress;
import React from 'react'
import {Canvas} from '@react-three/fiber'
import { Environment } from '@react-three/drei'
import DollModel from './DollModel'
import ProjectCard from './ProjectCard'
import { VerticalTimeline, VerticalTimelineElement }  from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
import {AnimatePresence, color, motion} from 'framer-motion'
import { CgBoy } from "react-icons/cg";
import Loader from './Loader'
import { AnimationStore } from '../Store/AnimationStore'
import { AiOutlineJavaScript } from "react-icons/ai";
import { SiThreedotjs } from "react-icons/si";
import { TbCircleLetterC } from "react-icons/tb";
import { SiAdobephotoshop } from "react-icons/si";
import { RiBootstrapLine } from "react-icons/ri";
import { RiTailwindCssFill } from "react-icons/ri";
import { IoLogoFirebase } from "react-icons/io5";
import { FaReact,FaSchool } from "react-icons/fa";
import { CiCalculator1 } from "react-icons/ci";
import { FaJava } from "react-icons/fa";
import { MdHtml } from "react-icons/md";
import { MdCss } from "react-icons/md";
import { SiFramer } from "react-icons/si";
import { FaGitAlt } from "react-icons/fa";
import { FaGithub ,FaBlogger} from "react-icons/fa";
import { CiClock2 } from "react-icons/ci";
import { CiText } from "react-icons/ci";
import { MdSportsCricket } from "react-icons/md";
import Header from './Header'
import { useInView} from 'react-intersection-observer'
const Projects = () => {
  const projectList=[{
    title:"campus-rentals",
    technologies:[<MdHtml/>,<MdCss/>,<AiOutlineJavaScript/>,<FaReact/>,<FaGithub/>,<RiBootstrapLine/>,<RiTailwindCssFill/>,<IoLogoFirebase/>],
    dec:"Campus Rentals is a student-driven marketplace designed to make buying and selling items on campus effortless. Our platform connects students, enabling them to find great deals and make sustainable choices within their campus community.",
    icon:<FaSchool />,
    source:"https://github.com/Nithin-2005-dev/Campus--rentals.git",
    link:"https://campus-rentals.firebaseapp.com/"
  },{
    title:"todo-list",
    technologies:[<MdHtml/>,<MdCss/>,<AiOutlineJavaScript/>,<FaReact/>,<FaGithub/>,<RiBootstrapLine/>],
    dec:"ToDo-List is a straightforward and user-friendly app that helps you manage your tasks with ease. Set your to-dos, delete them manually, and stay organized effortlessly.",
    icon:<CiClock2 />,
    source:"https://github.com/Nithin-2005-dev/todo.git",
    link:"https://nithin-2005-dev.github.io/todo/"
  },{
    title:"echo-entries",
    technologies:[<MdHtml/>,<MdCss/>,<AiOutlineJavaScript/>,<FaReact/>,<FaGithub/>,<RiTailwindCssFill/>,<IoLogoFirebase/>],
    dec:"Echo-Entries is a simple and elegant platform for sharing your daily blogs. Capture your thoughts, document your experiences, and create a personal online journal with ease.",
    icon:<FaBlogger />,
    source:"https://github.com/Nithin-2005-dev/EchoEntries.git",
    link:"https://echo-entries-mvp1.vercel.app/"
  },{
    title:"text-utils",
    technologies:[<MdHtml/>,<MdCss/>,<AiOutlineJavaScript/>,<FaReact/>,<FaGithub/>,<RiBootstrapLine/>],
    dec:"Text-Utils is a versatile tool for text manipulation. Easily convert text cases, count words, remove extra spaces, and perform various other text operations with just a few clicks.",
    source:"https://github.com/Nithin-2005-dev/text_utiles.git",
    link:"https://text-utils324.netlify.app/",
    icon:<CiText />
  },{
    title:"old portfolio",
    technologies:[<MdHtml/>,<MdCss/>,<AiOutlineJavaScript/>,<FaReact/>,<FaGithub/>,<RiBootstrapLine/>,<RiTailwindCssFill/>,<IoLogoFirebase/>],
    dec:"My previous portfolio reflects my journey through diverse projects, from essential text manipulation tools to innovative student marketplaces. Each project highlights my commitment to creativity, problem-solving, and delivering impactful solutions.",
    source:"https://github.com/Nithin-2005-dev/portfolio.git",
    link:"https://portfolio-1e17b.firebaseapp.com/",
    icon:<CgBoy />,
  },{
    title:"cricket game",
    technologies:[<MdHtml/>,<MdCss/>,<AiOutlineJavaScript/>],
    dec:"Cricket Game is a fun twist on the classic rock-paper-scissors game, where you face off against the computer in a cricket-themed challenge. Strategize your moves and enjoy a quick and entertaining match!",
    icon:<MdSportsCricket />,
    link:"https://nithin-2005-dev.github.io/cricket/",
    source:"https://github.com/Nithin-2005-dev/cricket.git"
  },{
    title:"calculator",
    technologies:[<MdHtml/>,<MdCss/>,<AiOutlineJavaScript/>],
    dec:"My first project, a basic calculator built with HTML, JavaScript, and CSS, demonstrates my foundational skills in web development. It offers essential arithmetic functions in a user-friendly interface, showcasing my ability to create functional and interactive web applications.",
    source:"https://github.com/Nithin-2005-dev/calculator.git",
    link:"https://nithin-2005-dev.github.io/calculator/",
    icon:<CiCalculator1 />
  }]
  const {ref, inView, entry} = useInView({
    
  });
  return (
    <>
    <header><Header/></header>
    <h3 className='text-white text-3xl items-center flex justify-center'>Projects & Deployments</h3>
    <VerticalTimeline
    animate={true}
    >
    {projectList.map((project)=>{
      return <VerticalTimelineElement
      intersectionObserverProps={
        {

        }
      }
      icon={project.icon}
      iconStyle={{backgroundColor:"white",display:"flex",}}
       contentStyle={{ background:"#5c699e", color: '#FFF8DB',opacity:1,padding:"1rem",boxShadow:"0.5rem 0.5rem 1rem #7D8ABC" }}>
    <ProjectCard project={project}/>
    </VerticalTimelineElement>
    })}
    </VerticalTimeline>
    <p className='text-white m-3 font-mono '>My portfolio is like a greatest hits album, featuring chart-topping projects that will make you laugh, cry, and wonder how I managed to pull them off!</p>
    </>
  )
}

export default Projects

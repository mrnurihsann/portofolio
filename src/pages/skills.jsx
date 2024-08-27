import React, { useState } from "react";
import { Helmet } from "react-helmet";
import {
  FaHtml5,
  FaCss3Alt,
  FaJs,
  FaReact,
  FaNodeJs,
  FaPhp,
  FaLaravel,
  FaJava,
  FaBootstrap,
  FaGitAlt,
  FaGithub,
} from "react-icons/fa";
import {
  SiFlutter,
  SiSpring,
  SiVuedotjs,
  SiPostgresql,
  SiCodeigniter,
  SiTailwindcss,
  SiVisualstudiocode,
  SiPostman,
} from "react-icons/si";
import { Tooltip } from "react-tooltip";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import NavBar from "../components/common/navBar";
import Footer from "../components/common/footer";
import "./style/skills.css";
import INFO from "../data/user";

const techList = [
  {
    name: "HTML",
    icon: <FaHtml5 color="#E34F26" />,
    link: "https://github.com/mrnurihsann/perhiasan.git",
  },
  {
    name: "CSS",
    icon: <FaCss3Alt color="#1572B6" />,
    link: "https://github.com/mrnurihsann/desa-wotawati.git",
  },
  {
    name: "JavaScript",
    icon: <FaJs color="#F7DF1E" />,
    link: "https://github.com/mrnurihsann/Gema-45.git",
  },
  {
    name: "React",
    icon: <FaReact color="#61DAFB" />,
    link: "https://github.com/mrnurihsann/movie-react.git",
  },
  {
    name: "Node.js",
    icon: <FaNodeJs color="#339933" />,
    link: "https://github.com/mrnurihsann",
  },
  {
    name: "PHP",
    icon: <FaPhp color="#777BB4" />,
    link: "https://github.com/mrnurihsann/klaja-thrift.git",
  },
  {
    name: "Laravel",
    icon: <FaLaravel color="#FF2D20" />,
    link: "https://github.com/mrnurihsann",
  },
  {
    name: "Java",
    icon: <FaJava color="#007396" />,
    link: "https://github.com/mrnurihsann/PenilaianMatakuliah-java.git",
  },
  {
    name: "Flutter",
    icon: <SiFlutter color="#02569B" />,
    link: "https://github.com/mrnurihsann/movie-app-flutter.git",
  },
  {
    name: "Spring Boot",
    icon: <SiSpring color="#6DB33F" />,
    link: "https://github.com/mrnurihsann",
  },
  {
    name: "Vue.js",
    icon: <SiVuedotjs color="#4FC08D" />,
    link: "https://github.com/mrnurihsann",
  },
  {
    name: "PostgreSQL",
    icon: <SiPostgresql color="#336791" />,
    link: "https://github.com/mrnurihsann",
  },
  {
    name: "CodeIgniter",
    icon: <SiCodeigniter color="#EF4223" />,
    link: "https://github.com/mrnurihsann",
  },
  {
    name: "Bootstrap",
    icon: <FaBootstrap color="#7952B3" />,
    link: "https://github.com/mrnurihsann/klaja-mall.git",
  },
  {
    name: "Tailwind CSS",
    icon: <SiTailwindcss color="#38B2AC" />,
    link: "https://github.com/mrnurihsann",
  },
];

const toolList = [
  {
    name: "VSCode",
    icon: <SiVisualstudiocode color="#007ACC" />,
    link: "https://code.visualstudio.com/",
  },
  {
    name: "Git",
    icon: <FaGitAlt color="#F05032" />,
    link: "https://git-scm.com/",
  },
  {
    name: "GitHub",
    icon: <FaGithub color="#181717" />,
    link: "https://github.com/",
  },
  {
    name: "Postman",
    icon: <SiPostman color="#FF6C37" />,
    link: "https://www.postman.com/",
  },
];

const Skills = () => {
  const [hoveredTech, setHoveredTech] = useState(null);
  const [hoveredTool, setHoveredTool] = useState(null);

  const handleIconHover = (name, type) => {
    if (type === "tech") {
      setHoveredTech(name);
    } else {
      setHoveredTool(name);
    }
  };

  const handleIconLeave = () => {
    setHoveredTech(null);
    setHoveredTool(null);
  };

  const handleIconClick = (name, type) => {
    toast.info(`Navigating to ${name} projects on GitHub...`);
  };

  return (
    <div>
      <Helmet>
        <title>{`Skills | ${INFO.main.title}`}</title>
      </Helmet>
      <NavBar active="skills" />
      <div className="skills-container">
        <h1>Programming languages ​​that I master and that I have studied</h1>
        <div className="icons-grid">
          {techList.map((tech) => (
            <a
              key={tech.name}
              href={tech.link}
              target="_blank"
              rel="noopener noreferrer"
              className="icon-wrapper"
              data-tip={`Go to ${tech.name} projects on GitHub`}
              onClick={() => handleIconClick(tech.name, "tech")}
              onMouseEnter={() => handleIconHover(tech.name, "tech")}
              onMouseLeave={handleIconLeave}
            >
              <div
                className={`icon ${hoveredTech === tech.name ? "hovered" : ""}`}
              >
                {tech.icon}
              </div>
              <div className="icon-name">{tech.name}</div>
            </a>
          ))}
        </div>
        <h1>Tools</h1>
        <div className="icons-grid">
          {toolList.map((tool) => (
            <a
              key={tool.name}
              href={tool.link}
              target="_blank"
              rel="noopener noreferrer"
              className="icon-wrapper"
              data-tip={`Go to ${tool.name} projects on GitHub`}
              onClick={() => handleIconClick(tool.name, "tool")}
              onMouseEnter={() => handleIconHover(tool.name, "tool")}
              onMouseLeave={handleIconLeave}
            >
              <div
                className={`icon ${hoveredTool === tool.name ? "hovered" : ""}`}
              >
                {tool.icon}
              </div>
              <div className="icon-name">{tool.name}</div>
            </a>
          ))}
        </div>
        <Tooltip />
        <ToastContainer position="bottom-right" />
      </div>
      <Footer />
    </div>
  );
};

export default Skills;

import React from "react";
import { Helmet } from "react-helmet";
import { FaHtml5, FaCss3Alt, FaJs, FaReact, FaNodeJs, FaPhp, FaLaravel, FaJava, FaBootstrap } from 'react-icons/fa';
import { SiFlutter, SiSpring, SiVuedotjs, SiAngular, SiPostgresql, SiCodeigniter, SiExpress, SiTailwindcss } from 'react-icons/si';
import { Tooltip } from 'react-tooltip';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import NavBar from "../components/common/navBar";
import Footer from "../components/common/footer";

const techList = [
  { name: 'HTML', icon: <FaHtml5 color="#E34F26" />, link: 'https://github.com/mrnurihsann/perhiasan.git' },
  { name: 'CSS', icon: <FaCss3Alt color="#1572B6" />, link: 'https://github.com/mrnurihsann/perhiasan.git' },
  { name: 'JavaScript', icon: <FaJs color="#F7DF1E" />, link: 'https://github.com/mrnurihsann/Gema-45.git' },
  { name: 'React', icon: <FaReact color="#61DAFB" />, link: 'https://github.com/mrnurihsann/movie-react.git' },
  { name: 'Node.js', icon: <FaNodeJs color="#339933" />, link: 'https://github.com/mrnurihsann' },
  { name: 'PHP', icon: <FaPhp color="#777BB4" />, link: 'https://github.com/mrnurihsann/klaja-thrift.git' },
  { name: 'Laravel', icon: <FaLaravel color="#FF2D20" />, link: 'https://github.com/mrnurihsann' },
  { name: 'Java', icon: <FaJava color="#007396" />, link: 'https://github.com/mrnurihsann/PenilaianMatakuliah-java.git' },
  { name: 'Flutter', icon: <SiFlutter color="#02569B" />, link: 'https://github.com/mrnurihsann/movie-app-flutter.git' },
  { name: 'Spring Boot', icon: <SiSpring color="#6DB33F" />, link: 'https://github.com/mrnurihsann' },
  { name: 'Vue.js', icon: <SiVuedotjs color="#4FC08D" />, link: 'https://github.com/mrnurihsann' },
  { name: 'PostgreSQL', icon: <SiPostgresql color="#336791" />, link: 'https://github.com/mrnurihsann' },
  { name: 'CodeIgniter', icon: <SiCodeigniter color="#EF4223" />, link: 'https://github.com/mrnurihsann' },
  { name: 'Bootstrap', icon: <FaBootstrap color="#7952B3" />, link: 'https://github.com/mrnurihsann/klaja-mall.git' },
  { name: 'Tailwind CSS', icon: <SiTailwindcss color="#38B2AC" />, link: 'https://github.com/mrnurihsann' },
];

const Skills = () => {
  const handleIconClick = (techName) => {
    toast.info(`Navigating to ${techName} projects on GitHub...`);
  };

  return (
    <div>
      <Helmet>
        <title>Skills Page</title>
      </Helmet>
      <NavBar active="skills" />
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(5, 1fr)', gap: '20px', justifyItems: 'center', padding: '20px' }}>
        {techList.map((tech) => (
          <a 
            key={tech.name} 
            href={tech.link} 
            target="_blank" 
            rel="noopener noreferrer" 
            style={{ textDecoration: 'none', color: 'inherit', textAlign: 'center' }}
            data-tip={`Go to ${tech.name} projects on GitHub`}
            onClick={() => handleIconClick(tech.name)}
          >
            <div style={{ fontSize: '50px', transition: 'transform 0.2s' }} className="icon">
              {tech.icon}
            </div>
            <div>{tech.name}</div>
          </a>
        ))}
        <Tooltip />
        <ToastContainer position="bottom-right" />
      </div>
      <Footer />
    </div>
  );
};

export default Skills;

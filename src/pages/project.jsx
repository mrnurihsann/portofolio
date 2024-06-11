import React, { useEffect, useRef } from "react";
import { Helmet } from "react-helmet";

import NavBar from "../components/common/navBar";
import Footer from "../components/common/footer";
import Logo from "../components/common/logo";
import AllProjects from "../components/projects/allProject";

import INFO from "../data/user";
import SEO from "../data/seo";

import "./style/project.css";

const Projects = () => {
  const titleRef = useRef(null);
  const subtitleRef = useRef(null);
  const logoRef = useRef(null);

  useEffect(() => {
    window.scrollTo(0, 0);

    const handleIntersection = (entries, observer) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('fade-in');
          observer.unobserve(entry.target);
        }
      });
    };

    const observer = new IntersectionObserver(handleIntersection, {
      threshold: 0.1,
    });

    const elements = [titleRef.current, subtitleRef.current, logoRef.current];
    elements.forEach(el => {
      if (el) {
        observer.observe(el);
      }
    });

    return () => {
      observer.disconnect();
    };
  }, []);

  const currentSEO = SEO.find((item) => item.page === "projects");

  return (
    <React.Fragment>
      <Helmet>
        <title>{`Projects | ${INFO.main.title}`}</title>
        <meta name="description" content={currentSEO.description} />
        <meta name="keywords" content={currentSEO.keywords.join(", ")} />
      </Helmet>

      <div className="page-content">
        <NavBar active="projects" />
        <div className="content-wrapper">
          <div className="projects-logo-container">
            <div className="projects-logo" ref={logoRef}>
              <Logo width={46} />
            </div>
          </div>
          <div className="projects-container">
            <div className="title projects-title" ref={titleRef}>
              Projects that I have worked on while studying in the IT world
            </div>

            <div className="subtitle projects-subtitle" ref={subtitleRef}>
              As a fullstack developer, I have worked on various projects spanning both front-end and back-end development. On the front-end side, I use technologies like React, Angular, and Vue.js to build responsive and intuitive user interfaces. On the back-end side, I use Node.js, Express, and Spring Boot to develop efficient and scalable APIs, and manage databases using PostgreSQL and MongoDB. These projects cover a wide range of applications, from e-commerce, jewelry sales, cinema ticket sales, etc.
            </div>

            <div className="projects-list">
              <AllProjects />
            </div>
          </div>
          <div className="page-footer">
            <Footer />
          </div>
        </div>
      </div>
    </React.Fragment>
  );
};

export default Projects;

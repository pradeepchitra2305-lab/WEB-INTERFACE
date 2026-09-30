import { NavLink, Routes, Route, Link } from "react-router-dom"; 
import "./index.css"; 
const projects = [ 
{ 
title: "Smart Shopping", 
description: 
"A responsive e-commerce interface with product cards, categories and a 
clean shopping experience.", 
tech: ["React", "JavaScript", "CSS"], 
}, 
{ 
title: "Weather Dashboard", 
description: 
"A simple weather dashboard that displays useful weather information 
through an API.", 
tech: ["React", "API", "CSS"], 
}, 
{ 
title: "Task Manager", 
description: 
"A productivity application for creating, organizing and completing daily 
tasks.", 
tech: ["React", "JavaScript", "LocalStorage"], 
}, 
]; 
const skills = [ 
"HTML5", 
"CSS3", 
"JavaScript", 
"React.js", 
"React Router", 
"Git", 
"GitHub", 
"Responsive Design", 
]; 
function Navbar() { 
return ( 
<nav className="navbar"> 
<Link to="/" className="logo"> 
PRAVEEN<span>.</span> 
</Link> 
 
      <div className="nav-links"> 
        <NavLink to="/" end>Home</NavLink> 
        <NavLink to="/about">About</NavLink> 
        <NavLink to="/projects">Projects</NavLink> 
        <NavLink to="/skills">Skills</NavLink> 
        <NavLink to="/contact">Contact</NavLink> 
      </div> 
    </nav> 
  ); 
} 
 
function Home() { 
  return ( 
    <section className="hero"> 
      <div className="hero-content"> 
        <p className="small-text">WELCOME TO MY PORTFOLIO</p> 
        <h1>Hi, I'm <span>Pradeep</span></h1> 
        <h2>Frontend Developer</h2> 
        <p className="description"> 
          I build clean, responsive and interactive websites using 
          React and modern web technologies. 
        </p> 
 
        <div className="buttons"> 
          <Link to="/projects" className="btn primary"> 
            Explore Projects 
          </Link> 
          <Link to="/contact" className="btn secondary"> 
            Let's Connect 
          </Link> 
        </div> 
      </div> 
 
      <div className="hero-card"> 
        <div className="profile-circle">P</div> 
        <h3>PRADEEP</h3> 
        <p>React • UI • Web Development</p> 
 
        <div className="status"> 
          <span></span> 
          Available for opportunities 
        </div> 
      </div> 
    </section> 
  ); 
} 
 
function About() { 
  return ( 
    <section className="page"> 
      <p className="small-text">A LITTLE ABOUT ME</p> 
      <h1>About Me</h1> 
 
      <div className="about-content"> 
        <div> 
          <h2>Building ideas into websites.</h2> 
          <p> 
            I'm Pradeep, a frontend developer who enjoys creating 
            modern and user-friendly web experiences. 
          </p> 
          <p> 
            I like working with React, experimenting with UI designs, 
            and learning new technologies through real-world projects. 
          </p> 
          <p> 
            My goal is to continuously improve my development skills 
            and build websites that are both useful and visually clean. 
          </p> 
        </div> 
 
        <div className="info-card"> 
          <p><strong>Name</strong><br />Pradeep</p> 
          <p><strong>Role</strong><br />Frontend Developer</p> 
          <p><strong>Experience</strong><br />Fresher</p> 
          <p><strong>Specialization</strong><br />React Development</p> 
        </div> 
      </div> 
    </section> 
  ); 
} 
 
function Projects() { 
  return ( 
    <section className="page"> 
      <p className="small-text">THINGS I'VE BUILT</p> 
      <h1>My Projects</h1> 
 
      <div className="projects-grid"> 
        {projects.map((project, index) => ( 
          <div className="project-card" key={project.title}> 
            <div className="project-number">0{index + 1}</div> 
            <h2>{project.title}</h2> 
            <p>{project.description}</p> 
 
            <div className="tech-list"> 
              {project.tech.map((tech) => ( 
                <span key={tech}>{tech}</span> 
              ))} 
            </div> 
 
            <Link to="/contact" className="project-link"> 
              Discuss Project → 
            </Link> 
          </div> 
        ))} 
      </div> 
    </section> 
  ); 
} 
 
function Skills() { 
  return ( 
    <section className="page"> 
      <p className="small-text">MY TOOLKIT</p> 
      <h1>Skills & Technologies</h1> 
 
      <div className="skills-grid"> 
        {skills.map((skill, index) => ( 
          <div className="skill-card" key={skill}> 
            <span>0{index + 1}</span> 
            <h3>{skill}</h3> 
          </div> 
        ))} 
      </div> 
    </section> 
  ); 
} 
 
function Contact() { 
  return ( 
    <section className="page contact-page"> 
      <p className="small-text">LET'S TALK</p> 
      <h1>Get In Touch</h1> 
 
      <p className="contact-text"> 
        Have an idea, project or opportunity? I'd love to hear 
        from you and build something useful together. 
      </p> 
 
      <div className="contact-card"> 
        <div> 
          <span>       </span> 
          <h3>Email</h3> 
          <p>pradeep@example.com</p> 
        </div> 
 
        <div> 
          <span>      </span> 
          <h3>GitHub</h3> 
          <p>github.com/pradeep</p> 
        </div> 
 
        <div> 
          <span>  </span> 
          <h3>LinkedIn</h3> 
          <p>linkedin.com/in/pradeep</p> 
        </div> 
      </div> 
 
      <Link to="/" className="btn primary back-btn"> 
        Back to Home 
      </Link> 
    </section> 
); 
} 
function App() { 
return ( 
<> 
<Navbar /> 
<main> 
<Routes> 
<Route path="/" element={<Home />} /> 
<Route path="/about" element={<About />} /> 
<Route path="/projects" element={<Projects />} /> 
<Route path="/skills" element={<Skills />} /> 
<Route path="/contact" element={<Contact />} /> 
</Routes> 
</main> 
</> 
); 
} 
export default App;
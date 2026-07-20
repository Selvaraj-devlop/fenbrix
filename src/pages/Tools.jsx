import React, { useEffect } from 'react';
import { Palette, Code2, Database, Cloud, Users, Image as ImageIcon, PenTool, Layout, Rocket } from 'lucide-react';
import { 
  SiFigma, SiSketch,
  SiReact, SiNextdotjs, SiNodedotjs, SiPython,
  SiDjango, SiPostgresql, SiMongodb, SiFirebase, SiRedis,
  SiGit, SiGithub, SiDocker, SiNginx,
  SiJira, SiNotion, SiTrello, SiAsana, SiJavascript, SiPostman
} from 'react-icons/si';
import { FaArrowRight, FaAws, FaSlack } from "react-icons/fa6";
import { VscVscode } from "react-icons/vsc";
import { useModal } from '../context/ModalContext';
import brandLogo from '../assets/brand.png';

function Tools() {
  const { openModal } = useModal();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const toolCategories = [
    {
      category: "Design",
      description: "Crafting beautiful and user-focused designs.",
      icon: <Palette size={32} strokeWidth={1.5} />,
      tools: [
        { name: "Figma", sub: "UI/UX Design", Icon: SiFigma, color: "#F24E1E" },
        { name: "Adobe XD", sub: "Prototyping", Icon: Layout, color: "#FF61F6" },
        { name: "Photoshop", sub: "Image Editing", Icon: ImageIcon, color: "#31A8FF" },
        { name: "Illustrator", sub: "Vector Design", Icon: PenTool, color: "#FF9A00" },
        { name: "Sketch", sub: "UI Design", Icon: SiSketch, color: "#F7B500" }
      ]
    },
    {
      category: "Development",
      description: "Building robust and scalable applications.",
      icon: <Code2 size={32} strokeWidth={1.5} />,
      tools: [
        { name: "VS Code", sub: "Code Editor", Icon: VscVscode, color: "#007ACC" },
        { name: "React", sub: "Frontend Library", Icon: SiReact, color: "#61DAFB" },
        { name: "Next.js", sub: "React Framework", Icon: SiNextdotjs, color: "#FFFFFF" },
        { name: "Node.js", sub: "Runtime", Icon: SiNodedotjs, color: "#339933" },
        { name: "Python", sub: "Programming", Icon: SiPython, color: "#3776AB" }
      ]
    },
    {
      category: "Backend & Database",
      description: "Powering applications with secure and efficient data solutions.",
      icon: <Database size={32} strokeWidth={1.5} />,
      tools: [
        { name: "Django", sub: "Web Framework", Icon: SiDjango, color: "#092E20" },
        { name: "PostgreSQL", sub: "Database", Icon: SiPostgresql, color: "#4169E1" },
        { name: "MongoDB", sub: "NoSQL Database", Icon: SiMongodb, color: "#47A248" },
        { name: "Firebase", sub: "Backend Platform", Icon: SiFirebase, color: "#FFCA28" },
        { name: "Redis", sub: "Caching", Icon: SiRedis, color: "#DC382D" }
      ]
    },
    {
      category: "DevOps & Deployment",
      description: "Automating and deploying with speed and confidence.",
      icon: <Cloud size={32} strokeWidth={1.5} />,
      tools: [
        { name: "Git", sub: "Version Control", Icon: SiGit, color: "#F05032" },
        { name: "GitHub", sub: "Code Hosting", Icon: SiGithub, color: "#FFFFFF" },
        { name: "Docker", sub: "Containerization", Icon: SiDocker, color: "#2496ED" },
        { name: "AWS", sub: "Cloud Platform", Icon: FaAws, color: "#FF9900" },
        { name: "Nginx", sub: "Web Server", Icon: SiNginx, color: "#009639" }
      ]
    },
    {
      category: "Collaboration & Productivity",
      description: "Streamlining teamwork and improving productivity.",
      icon: <Users size={32} strokeWidth={1.5} />,
      tools: [
        { name: "Slack", sub: "Team Communication", Icon: FaSlack, color: "#4A154B" },
        { name: "Jira", sub: "Task Tracking", Icon: SiJira, color: "#0052CC" },
        { name: "Notion", sub: "Notes & Docs", Icon: SiNotion, color: "#FFFFFF" },
        { name: "Trello", sub: "Project Board", Icon: SiTrello, color: "#0052CC" },
        { name: "Asana", sub: "Task Management", Icon: SiAsana, color: "#273347" }
      ]
    }
  ];

  return (
    <div className="tools-page-wrapper">
      {/* 1. HERO SECTION */}
      <section className="tools-hero">
        <div className="container tools-hero-container" data-aos="fade-up">
          <div className="th-left">
            <span className="section-badge">TOOLS WE USE</span>
            <h1 className="th-title">
              Powerful Tools.<br/>
              Seamless <span className="highlight-blue">Solutions.</span>
            </h1>
            <p className="th-desc">
              We use the best tools and technologies to design, develop and deliver exceptional digital solutions.
            </p>
          </div>
          
          <div className="th-right">
            <div className="orbital-system">
              <div className="center-logo">
                <img src={brandLogo} alt="Fenbrix Logo" style={{ width: '120px', height: '120px', objectFit: 'contain', position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%, -50%)' }} />
              </div>
              
              <div className="orbit-ring ring-2"></div>
              <div className="orbit-ring ring-3"></div>
              
              <div className="orbit-icon icon-figma"><SiFigma size={24} color="#F24E1E"/></div>
              <div className="orbit-icon icon-react"><SiReact size={28} color="#61DAFB"/></div>
              <div className="orbit-icon icon-js"><SiPostman size={22} color="#FF6C37"/></div>
              <div className="orbit-icon icon-github"><SiGit size={26} color="#F05032"/></div>
              <div className="orbit-icon icon-docker"><SiDocker size={24} color="#2496ED"/></div>
              <div className="orbit-icon icon-node"><SiNodedotjs size={24} color="#339933"/></div>
              <div className="orbit-icon icon-vscode"><VscVscode size={24} color="#007ACC"/></div>
              
              {/* Dots between icons */}
              <div className="orbit-dot dot-1"></div>
              <div className="orbit-dot dot-2"></div>
              <div className="orbit-dot dot-3"></div>
              <div className="orbit-dot dot-4"></div>
              <div className="orbit-dot dot-5"></div>
              <div className="orbit-dot dot-6"></div>
              <div className="orbit-dot dot-7"></div>
            </div>
          </div>
        </div>
      </section>

      {/* 2. EXPLORE OUR TOOLBOX */}
      <section className="toolbox-section" data-aos="fade-up">
        <div className="container">
          <div className="section-header-center">
            <h2 className="section-title text-white">Explore Our <span className="highlight-blue">Toolbox</span></h2>
            <div className="title-underline"></div>
            <p className="section-subtitle">
              A carefully selected set of tools that help us build innovative, scalable and reliable solutions.
            </p>
          </div>
          
          <div className="toolbox-categories">
            {toolCategories.map((cat, idx) => (
              <div className="toolbox-row" key={idx}>
                <div className="tr-left">
                  <div className="tr-icon-wrap">
                    {cat.icon}
                  </div>
                  <div className="tr-text">
                    <h3>{cat.category}</h3>
                    <p>{cat.description}</p>
                  </div>
                </div>
                <div className="tr-right">
                  {cat.tools.map((tool, i) => (
                    <div className="tool-item" key={i}>
                      <div className="tool-icon" style={{ color: tool.color }}>
                        <tool.Icon size={36} />
                      </div>
                      <h5>{tool.name}</h5>
                      <p>{tool.sub}</p>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 3. CTA SECTION */}
      <section className="tools-cta">
        <div className="container">
          <div className="cta-banner-new tools-cta-banner">
            <div className="tools-cta-icon-mock" style={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
              <Rocket size={48} color="var(--primary-blue)" />
            </div>
            <div className="cta-text-new">
              <h3>Great tools. Better outcomes.<br/>Let's build something <span className="highlight-blue">amazing</span> together.</h3>
              <p>Have a project in mind? We're ready to help.</p>
            </div>
            <button className="btn-primary" onClick={openModal}>
              Let's Talk <FaArrowRight style={{ marginLeft: '6px' }} />
            </button>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Tools;

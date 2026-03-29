/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from "react";
import { motion } from "motion/react";
import { 
  Github, 
  Linkedin, 
  Mail, 
  ExternalLink, 
  Terminal,
  ChevronRight,
  Award,
  Rocket,
  Instagram,
  Twitter,
  MessageSquare,
  CheckCircle2,
  Target,
  Brain,
  Globe,
  Zap
} from "lucide-react";
import { CardStack, type CardStackItem } from "./components/ui/card-stack";

const PROJECTS: CardStackItem[] = [
  {
    id: "ai-cofounder",
    title: "AI Cofounder",
    description: "An AI-powered platform that helps users generate startup ideas, validate concepts, and guide early-stage product thinking.",
    imageSrc: "/projects/ai-cofounder.jpg",
    href: "https://aicofounder-alpha.vercel.app",
    tag: "AI"
  },
  {
    id: "ai-bias",
    title: "AI Bias Detection",
    description: "A tool designed to detect bias in AI-generated outputs and datasets, promoting fairness and responsible AI usage.",
    imageSrc: "/projects/ai-bias.jpg",
    href: "https://ai-bias-eight.vercel.app/",
    tag: "AI"
  },
  {
    id: "swap-circle",
    title: "Swap Circle",
    description: "A platform that enables users to exchange items, promoting reuse and a circular economy model.",
    imageSrc: "/projects/swap-circle.jpg",
    href: "https://swapcircle1-not-raghu-not-raghus-projects.vercel.app/",
    tag: "Web"
  },
];

const SKILLS = [
  { title: "Programming", items: ["C", "C++", "Python", "Java"] },
  { title: "Web Dev", items: ["HTML", "CSS", "JavaScript", "React"] },
  { title: "AI & Tools", items: ["AI APIs", "Prompt Engineering", "Git", "Vercel"] }
];

const fadeInRise = {
  initial: { opacity: 0, y: 20 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
  transition: { duration: 0.6 }
};

const revealEffect = {
  initial: { 
    opacity: 0, 
    scale: 1.2,
    clipPath: "polygon(50% 50%, 50% 50%, 50% 50%, 50% 50%)" 
  },
  whileInView: { 
    opacity: 1, 
    scale: 1,
    clipPath: "polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)" 
  },
  viewport: { once: true, margin: "-50px" },
  transition: { 
    duration: 1.5, 
    ease: [0.86, 0, 0.31, 1] as const
  }
};

export default function App() {
  return (
    <div className="relative min-h-screen w-full bg-background font-body selection:bg-primary selection:text-primary-foreground">
      {/* Video Background */}
      <div className="fixed inset-0 z-0 h-full w-full">
        <video
          autoPlay
          loop
          muted
          playsInline
          className="h-full w-full object-cover opacity-60"
        >
          <source
            src="https://d8j0ntlcm91z4.cloudfront.net/user_38xzZboKViGWJOttwIXH07lWA1P/hf_20260314_131748_f2ca2a28-fed7-44c8-b9a9-bd9acdd5ec31.mp4"
            type="video/mp4"
          />
        </video>
        <div className="absolute inset-0 bg-gradient-to-b from-background/20 via-background/40 to-background" />
      </div>

      {/* Navigation Bar */}
      <nav className="fixed top-0 z-50 w-full border-b border-white/5 bg-background/10 backdrop-blur-md">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-8 py-6">
          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            className="text-3xl tracking-tight font-medium bg-clip-text text-transparent bg-gradient-to-r from-white via-white/90 to-white/70"
            style={{ fontFamily: "'Instrument Serif', serif" }}
          >
            RAJESH VVS<sup className="text-xs text-white/50 ml-1">®</sup>
          </motion.div>
          
          <div className="hidden items-center gap-8 md:flex">
            {["Home", "About", "Projects", "Achievements", "Hire Me", "Skills", "Contact"].map((item, i) => (
              <motion.a
                key={item}
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.1 }}
                href={`#${item.toLowerCase().replace(" ", "")}`}
                className="text-sm text-muted-foreground transition-colors hover:text-foreground"
              >
                {item}
              </motion.a>
            ))}
          </div>

          <motion.a 
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            href="#contact" 
            className="liquid-glass rounded-full px-6 py-2.5 text-sm text-foreground hover:scale-[1.03]"
          >
            Let's Talk
          </motion.a>
        </div>
      </nav>

      <main className="relative z-10">
        {/* Hero Section */}
        <section id="home" className="flex min-h-screen flex-col items-center justify-center px-6 text-center">
          <motion.div
            {...fadeInRise}
            className="mb-6 rounded-full border border-white/10 bg-white/5 px-4 py-1.5 text-xs font-bold uppercase tracking-[0.2em] text-muted-foreground"
          >
            AI Builder | Problem Solver
          </motion.div>
          
          <motion.h1 
            {...fadeInRise}
            transition={{ ...fadeInRise.transition, delay: 0.1 }}
            className="max-w-7xl text-6xl font-normal leading-[0.95] tracking-[-2.46px] text-foreground sm:text-8xl md:text-9xl"
            style={{ fontFamily: "'Instrument Serif', serif" }}
          >
            I am <em className="not-italic text-muted-foreground">Rajesh VVS.</em><br />
            I don’t just <em className="not-italic text-muted-foreground">learn</em> tech — <br />
            I <em className="not-italic text-muted-foreground">build</em> with it.
          </motion.h1>
          
          <motion.p 
            {...fadeInRise}
            transition={{ ...fadeInRise.transition, delay: 0.3 }}
            className="mt-8 max-w-2xl text-base leading-relaxed text-muted-foreground sm:text-lg"
          >
            Turning ideas into <em className="not-italic text-white">real, usable</em> products. 
            Computer Science Engineer focused on building impactful applications.
          </motion.p>

          <motion.div 
            {...fadeInRise}
            transition={{ ...fadeInRise.transition, delay: 0.4 }}
            className="mt-12 flex gap-4"
          >
            <a href="#projects" className="liquid-glass rounded-full px-10 py-4 text-base text-foreground hover:scale-[1.03]">
              View Work
            </a>
            <div className="flex gap-2">
              <a href="https://github.com" target="_blank" className="liquid-glass flex h-14 w-14 items-center justify-center rounded-full text-foreground hover:scale-[1.05]">
                <Github size={20} />
              </a>
              <a href="https://linkedin.com" target="_blank" className="liquid-glass flex h-14 w-14 items-center justify-center rounded-full text-foreground hover:scale-[1.05]">
                <Linkedin size={20} />
              </a>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1, duration: 1 }}
            className="absolute bottom-10 flex flex-col items-center gap-2"
          >
            <span className="text-[10px] uppercase tracking-[0.3em] text-muted-foreground/50">Scroll to reveal</span>
            <motion.div 
              animate={{ y: [0, 10, 0] }}
              transition={{ repeat: Infinity, duration: 2 }}
              className="h-10 w-[1px] bg-gradient-to-b from-white/20 to-transparent"
            />
          </motion.div>
        </section>

        {/* About Section */}
        <section id="about" className="mx-auto max-w-7xl px-8 py-32">
          <div className="grid gap-16 md:grid-cols-2">
            <motion.div {...fadeInRise}>
              <h2 
                className="text-5xl tracking-tight text-foreground sm:text-6xl"
                style={{ fontFamily: "'Instrument Serif', serif" }}
              >
                The <em className="not-italic text-muted-foreground">Builder.</em>
              </h2>
              <div className="mt-8 space-y-6 text-lg leading-relaxed text-muted-foreground">
                <p>
                  I am a passionate Computer Science engineer focused on building impactful real-world applications using AI and modern web technologies.
                </p>
                <p>
                  I enjoy solving practical problems and turning ideas into working products. With hands-on experience in full-stack development and AI tools, I continuously experiment, build, and improve my technical and problem-solving skills.
                </p>
              </div>
            </motion.div>
            <div className="grid grid-cols-2 gap-4">
              {[
                { label: "Projects", value: "10+", icon: <Rocket className="text-muted-foreground" /> },
                { label: "Hackathons", value: "7+", icon: <Award className="text-muted-foreground" /> },
                { label: "AI Tools", value: "62+", icon: <Terminal className="text-muted-foreground" /> },
                { label: "Experience", value: "Builder", icon: <ChevronRight className="text-muted-foreground" /> }
              ].map((stat, i) => (
                <motion.div 
                  key={i}
                  {...fadeInRise}
                  transition={{ ...fadeInRise.transition, delay: i * 0.1 }}
                  className="liquid-glass flex flex-col items-center justify-center rounded-3xl p-8 text-center"
                >
                  <div className="mb-4">{stat.icon}</div>
                  <div className="text-3xl font-bold text-foreground">{stat.value}</div>
                  <div className="text-xs uppercase tracking-widest text-muted-foreground">{stat.label}</div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Founder Vibe: Current Focus & Learning Approach */}
        <section className="mx-auto max-w-7xl px-8 py-32">
          <div className="grid gap-8 md:grid-cols-2">
            <motion.div 
              {...revealEffect}
              className="liquid-glass rounded-[2rem] p-10"
            >
              <div className="mb-6 flex h-12 w-12 items-center justify-center rounded-xl bg-white/5">
                <Target className="text-muted-foreground" size={24} />
              </div>
              <h3 className="mb-4 text-3xl text-foreground" style={{ fontFamily: "'Instrument Serif', serif" }}>
                Current <em className="not-italic text-muted-foreground">Focus.</em>
              </h3>
              <p className="mb-6 text-lg text-muted-foreground">
                Currently exploring and building AI-powered applications that solve practical everyday problems.
              </p>
              <div className="space-y-3">
                {["Full-stack development", "AI integration", "Problem-solving & system thinking"].map((item, i) => (
                  <div key={i} className="flex items-center gap-3 text-sm text-muted-foreground">
                    <div className="h-1 w-1 rounded-full bg-foreground/40" />
                    {item}
                  </div>
                ))}
              </div>
            </motion.div>

            <motion.div 
              {...revealEffect}
              transition={{ ...revealEffect.transition, delay: 0.2 }}
              className="liquid-glass rounded-[2rem] p-10"
            >
              <div className="mb-6 flex h-12 w-12 items-center justify-center rounded-xl bg-white/5">
                <Brain className="text-muted-foreground" size={24} />
              </div>
              <h3 className="mb-4 text-3xl text-foreground" style={{ fontFamily: "'Instrument Serif', serif" }}>
                Learning <em className="not-italic text-muted-foreground">Approach.</em>
              </h3>
              <p className="text-lg leading-relaxed text-muted-foreground">
                I believe in learning by building. I continuously experiment with new tools, break things, fix them, and improve through hands-on experience.
              </p>
            </motion.div>
          </div>
        </section>

        {/* Projects Section */}
        <section id="projects" className="mx-auto max-w-7xl px-8 py-32">
          <motion.div {...fadeInRise} className="mb-16 text-center">
            <h2 
              className="text-5xl tracking-tight text-foreground sm:text-6xl"
              style={{ fontFamily: "'Instrument Serif', serif" }}
            >
              Featured <em className="not-italic text-muted-foreground">Creations.</em>
            </h2>
          </motion.div>
          
          <div className="mx-auto w-full max-w-5xl">
            <CardStack
              items={PROJECTS}
              initialIndex={0}
              autoAdvance
              intervalMs={3000}
              pauseOnHover
              showDots
              cardWidth={window.innerWidth < 768 ? window.innerWidth - 64 : 600}
              cardHeight={400}
              renderCard={(item, { active }) => (
                <div className="relative h-full w-full liquid-glass overflow-hidden rounded-2xl">
                  {/* image */}
                  <div className="absolute inset-0">
                    {item.imageSrc ? (
                      <img
                        src={item.imageSrc}
                        alt={item.title}
                        className="h-full w-full object-cover"
                        draggable={false}
                        loading="eager"
                        referrerPolicy="no-referrer"
                      />
                    ) : (
                      <div className="flex h-full w-full items-center justify-center bg-secondary text-sm text-muted-foreground">
                        No image
                      </div>
                    )}
                  </div>

                  {/* subtle gradient overlay at bottom for text readability */}
                  <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />

                  {/* content */}
                  <div className="relative z-10 flex h-full flex-col justify-end p-8">
                    <div className="flex items-center justify-between">
                      <div className="truncate text-3xl font-bold text-white" style={{ fontFamily: "'Instrument Serif', serif" }}>
                        {item.title}
                      </div>
                      {item.href && (
                        <a 
                          href={item.href} 
                          target="_blank" 
                          rel="noreferrer"
                          className="flex h-10 w-10 items-center justify-center rounded-full bg-white/10 backdrop-blur-md text-white hover:bg-white/20 transition-colors"
                        >
                          <ExternalLink size={18} />
                        </a>
                      )}
                    </div>
                    {item.description ? (
                      <div className="mt-2 line-clamp-2 text-base text-white/90">
                        {item.description}
                      </div>
                    ) : null}
                  </div>
                </div>
              )}
            />
          </div>
        </section>

        {/* Achievements Section */}
        <section id="achievements" className="mx-auto max-w-7xl px-8 py-32">
          <motion.div {...fadeInRise} className="mb-16 text-center">
            <h2 
              className="text-5xl tracking-tight text-foreground sm:text-6xl"
              style={{ fontFamily: "'Instrument Serif', serif" }}
            >
              Key <em className="not-italic text-muted-foreground">Milestones.</em>
            </h2>
          </motion.div>
          
          <div className="grid gap-8 md:grid-cols-3">
            {[
              {
                title: "Google Tech 2024",
                description: "Secured 2nd Place in Google Tech 2024 Hackathon by building a functional and impactful solution in a competitive environment.",
                icon: <Award className="text-muted-foreground" />
              },
              {
                title: "Real-world Impact",
                description: "Developed 3+ real-world projects focused on AI and web applications, solving practical user problems.",
                icon: <Rocket className="text-muted-foreground" />
              },
              {
                title: "Continuous Growth",
                description: "Continuously improving problem-solving and development skills through hands-on building and experimentation.",
                icon: <Terminal className="text-muted-foreground" />
              }
            ].map((ach, i) => (
              <motion.div 
                key={i}
                {...fadeInRise}
                transition={{ ...fadeInRise.transition, delay: i * 0.1 }}
                className="liquid-glass flex flex-col items-center rounded-[2rem] p-10 text-center"
              >
                <div className="mb-6 flex h-16 w-16 items-center justify-center rounded-2xl bg-white/5">
                  {ach.icon}
                </div>
                <h3 className="mb-4 text-2xl font-bold text-foreground">{ach.title}</h3>
                <p className="text-sm leading-relaxed text-muted-foreground">{ach.description}</p>
              </motion.div>
            ))}
          </div>
        </section>

        {/* Why Hire Me Section */}
        <section id="hireme" className="mx-auto max-w-7xl px-8 py-32">
          <motion.div {...fadeInRise} className="mb-16 text-center">
            <h2 
              className="text-5xl tracking-tight text-foreground sm:text-6xl"
              style={{ fontFamily: "'Instrument Serif', serif" }}
            >
              Why <em className="not-italic text-muted-foreground">Hire Me.</em>
            </h2>
          </motion.div>
          
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {[
              "I focus on building real-world solutions, not just academic projects",
              "I can create full-stack applications for businesses and early-stage startups within 1 week",
              "I learn fast and adapt quickly to new technologies",
              "I have hands-on experience building complete applications",
              "I enjoy solving problems and turning ideas into products",
              "I bring a strong builder mindset and consistency"
            ].map((point, i) => (
              <motion.div 
                key={i}
                {...fadeInRise}
                transition={{ ...fadeInRise.transition, delay: i * 0.1 }}
                className="liquid-glass flex items-start gap-4 rounded-3xl p-8"
              >
                <div className="mt-1 flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-white/10">
                  {i === 1 ? <Zap size={14} className="text-foreground" /> : <CheckCircle2 size={14} className="text-foreground" />}
                </div>
                <p className="text-lg leading-relaxed text-muted-foreground">{point}</p>
              </motion.div>
            ))}
            <motion.div 
              {...fadeInRise}
              transition={{ ...fadeInRise.transition, delay: 0.5 }}
              className="liquid-glass flex flex-col items-center justify-center rounded-3xl p-8 text-center border-dashed border-white/20"
            >
              <Rocket className="mb-4 text-muted-foreground opacity-50" size={32} />
              <p className="text-sm font-bold uppercase tracking-widest text-muted-foreground/50">Ready for Impact</p>
            </motion.div>
          </div>
        </section>

        {/* Skills Section */}
        <section id="skills" className="mx-auto max-w-7xl px-8 py-32">
          <div className="grid gap-16 md:grid-cols-3">
            {SKILLS.map((skill, i) => (
              <motion.div 
                key={i}
                {...fadeInRise}
                transition={{ ...fadeInRise.transition, delay: i * 0.1 }}
                className="liquid-glass rounded-[2rem] p-10"
              >
                <h3 
                  className="mb-8 text-3xl text-foreground"
                  style={{ fontFamily: "'Instrument Serif', serif" }}
                >
                  {skill.title}
                </h3>
                <ul className="space-y-4">
                  {skill.items.map((item, j) => (
                    <li key={j} className="flex items-center gap-3 text-muted-foreground">
                      <div className="h-1.5 w-1.5 rounded-full bg-foreground/20" />
                      {item}
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </section>

        {/* Beyond Coding Section */}
        <section className="mx-auto max-w-7xl px-8 py-32 text-center">
          <motion.div 
            {...revealEffect}
            className="liquid-glass inline-flex flex-col items-center rounded-[3rem] px-12 py-16"
          >
            <div className="mb-6 flex h-16 w-16 items-center justify-center rounded-2xl bg-white/5">
              <Globe className="text-muted-foreground" size={32} />
            </div>
            <h2 
              className="mb-6 text-4xl tracking-tight text-foreground sm:text-5xl"
              style={{ fontFamily: "'Instrument Serif', serif" }}
            >
              Beyond <em className="not-italic text-muted-foreground">Coding.</em>
            </h2>
            <p className="max-w-2xl text-xl leading-relaxed text-muted-foreground">
              Interested in exploring ideas, technology trends, and building impactful solutions that can help people in real life. I believe tech is a tool to empower human potential.
            </p>
          </motion.div>
        </section>

        {/* Contact Section */}
        <section id="contact" className="mx-auto max-w-5xl px-8 py-40 text-center">
          <motion.h2 
            {...fadeInRise}
            className="text-6xl tracking-tighter text-foreground md:text-8xl"
            style={{ fontFamily: "'Instrument Serif', serif" }}
          >
            Let's <em className="not-italic text-muted-foreground">Connect.</em>
          </motion.h2>
          <motion.p 
            {...fadeInRise}
            transition={{ ...fadeInRise.transition, delay: 0.2 }}
            className="mt-8 text-xl text-muted-foreground max-w-2xl mx-auto"
          >
            I'm always open to discussing new projects, creative ideas, or opportunities to be part of your visions.
          </motion.p>
          
          <motion.div 
            {...fadeInRise}
            transition={{ ...fadeInRise.transition, delay: 0.4 }}
            className="mt-16 flex flex-col items-center gap-12"
          >
            {/* Primary Highlight: LinkedIn */}
            <a 
              href="https://www.linkedin.com/in/venkata-sai-rajesh-v-854148326/"
              target="_blank"
              rel="noopener noreferrer"
              title="Connect on LinkedIn"
              className="liquid-glass group relative flex items-center gap-4 rounded-full px-12 py-6 text-2xl font-bold text-foreground transition-all duration-300 hover:scale-[1.05] hover:shadow-[0_0_30px_rgba(255,255,255,0.15)]"
            >
              <Linkedin size={32} className="transition-transform duration-300 group-hover:rotate-12" />
              LinkedIn
              <div className="absolute inset-0 rounded-full bg-white/5 opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
            </a>

            <div className="flex flex-wrap justify-center items-center gap-6">
              {/* Secondary Highlight: Email */}
              <a 
                href="mailto:rajeshvavilapalli406@gmail.com" 
                title="Send me an email"
                className="liquid-glass group flex items-center gap-3 rounded-full border border-white/10 px-8 py-4 text-lg font-bold text-foreground transition-all duration-300 hover:scale-[1.05] hover:bg-white/5"
              >
                <Mail size={24} /> Contact Me
              </a>

              {/* Other Platforms */}
              {[
                { name: "GitHub", url: "https://github.com/RajeshVvs-prog", icon: <Github size={24} />, tooltip: "View my code on GitHub" },
                { name: "Reddit", url: "https://www.reddit.com/user/RAJESH_VVS_2006/", icon: <MessageSquare size={24} />, tooltip: "Find me on Reddit" },
                { name: "Instagram", url: "https://www.instagram.com/rajesh_vvs_18/", icon: <Instagram size={24} />, tooltip: "Follow me on Instagram" },
                { name: "Twitter", url: "https://x.com/rajeshvvs18", icon: <Twitter size={24} />, tooltip: "Follow me on X (Twitter)" },
              ].map((platform) => (
                <a
                  key={platform.name}
                  href={platform.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  title={platform.tooltip}
                  className="liquid-glass flex h-16 w-16 items-center justify-center rounded-full text-foreground transition-all duration-300 hover:scale-[1.1] hover:bg-white/5 hover:shadow-[0_0_20px_rgba(255,255,255,0.1)]"
                >
                  {platform.icon}
                </a>
              ))}
            </div>
          </motion.div>
        </section>
      </main>

      {/* Footer */}
      <footer className="border-t border-white/5 bg-background/50 py-12 backdrop-blur-md">
        <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-8 px-8 md:flex-row">
          <div className="text-sm font-medium bg-clip-text text-transparent bg-gradient-to-r from-white to-white/60">
            RAJESH VVS © 2026 — Built with focus.
          </div>
          <div className="flex gap-8 text-[10px] font-bold uppercase tracking-[0.2em] text-muted-foreground">
            <a href="#home" className="hover:text-foreground">Home</a>
            <a href="#about" className="hover:text-foreground">About</a>
            <a href="#projects" className="hover:text-foreground">Projects</a>
            <a href="#achievements" className="hover:text-foreground">Achievements</a>
            <a href="#hireme" className="hover:text-foreground">Hire Me</a>
            <a href="#contact" className="hover:text-foreground">Contact</a>
          </div>
        </div>
      </footer>
    </div>
  );
}

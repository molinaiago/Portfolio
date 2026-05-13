import React, { useState, useEffect, useRef } from 'react';

// typewriter
const Typewriter = ({ text }: { text: string }) => {
  const [displayedText, setDisplayedText] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const timeout = setTimeout(() => {
      if (!isDeleting) {
        if (displayedText.length < text.length) {
          setDisplayedText(text.slice(0, displayedText.length + 1));
        } else {
          setTimeout(() => setIsDeleting(true), 2500);
        }
      } else {
        if (displayedText.length > 0) {
          setDisplayedText(text.slice(0, displayedText.length - 1));
        } else {
          setIsDeleting(false);
        }
      }
    }, isDeleting ? 75 : 150);
    return () => clearTimeout(timeout);
  }, [displayedText, isDeleting, text]);

  return (
    <span className="text-purple-500 relative">
      {displayedText}
      <span className="animate-pulse ml-1 absolute -right-3 md:-right-6 border-r-4 border-purple-500 h-full"></span>
    </span>
  );
};

// --- DICIONÁRIO DE TRADUÇÕES ---
type Language = 'BR' | 'US' | 'ES';

const translations = {
  BR: {
    nav: { home: "Início", about: "Sobre", services: "Serviços", projects: "Projetos", contact: "Contato" },
    hero: {
      s1: "Eu penso.", s2: "Eu construo.", s3: "Eu entrego.", stype: "Você usa.",
      desc: "Desenvolvedor Full Stack e Arquiteto de Integrações. Transformo desafios corporativos complexos em ecossistemas escaláveis, seguros e de altíssima performance.",
      tags: "Fullstack · Oracle Expert · Applied AI · Node.js · React · Java"
    },
    about: {
      title: "Engenharia de Software de Alto Impacto",
      subtitle: "Não apenas escrevo código. Eu orquestro ecossistemas.",
      bullets: [
        { label: "Experiência Comprovada", text: "Mais de 4 anos atuando na linha de frente de projetos críticos para gigantes do mercado, como Unimed e CPFL." },
        { label: "O Core do Negócio", text: "Especialista em construir pontes seguras entre sistemas legados e soluções modernas em nuvem." },
        { label: "Foco em Performance", text: "Desenho arquiteturas de APIs com Sensedia e ORDS, resolvendo gargalos que sistemas comuns não suportam." }
      ],
      skills_title: "Arsenal Tecnológico",
      skills: ["Ecossistema Oracle (OIC, APEX, DB)", "API Management (Sensedia, REST, SOAP)", "Full Stack Dev (JS, React, Node.js, Java)", "Banco de Dados (PL/SQL, SQL Avançado)", "Inteligência Artificial & Vector Search", "Integrações ERP, CRM & Mensageria"]
    },
    services: {
      step_title: "A PIPELINE",
      step_subtitle: "COMO FUNCIONA",
      steps: [
        { num: "/01", title: "Análise Arquitetural", desc: "Mapeamento do seu gargalo, definição de escopo técnico e viabilidade da integração." },
        { num: "/02", title: "Desenvolvimento do Core", desc: "Criação da arquitetura, automação e interfaces utilizando tecnologias Enterprise-grade." },
        { num: "/03", title: "Deploy e Monitoramento", desc: "Entrega documentada com garantia de estabilidade, segurança e zero surpresas de escopo." }
      ],
      do_title: "O QUE EU FAÇO",
      cards: [
        { title: "Oracle Integration Cloud (OIC)", desc: "Orquestração e automação de fluxos críticos de negócios conectando ferramentas Oracle e de terceiros em nuvem." },
        { title: "Arquitetura Low-Code Segura", desc: "Desenvolvimento ágil de aplicações corporativas utilizando Oracle APEX sem abrir mão de segurança e performance." },
        { title: "API Management & Gateways", desc: "Exposição, governança e migração de APIs legadas utilizando arquiteturas modernas e seguras como Sensedia e ORDS." },
        { title: "Desenvolvimento Full Stack", desc: "Construção de plataformas completas, do banco de dados relacional (SQL/PLSQL) ao frontend moderno com React e Node.js." },
        { title: "Inteligência Artificial Aplicada", desc: "Integração de LLMs, agentes autônomos e OCI AI Vector Search para automatizar decisões baseadas nos seus dados." },
        { title: "Sincronização de Ecossistemas", desc: "Integrações pesadas entre ERPs, CRMs e sistemas logísticos via mensageria, webhooks ou chamadas REST/SOAP." }
      ]
    },
    projects: {
      title: "Soluções em Produção",
      p1: {
        name: "CODE.STUDEO",
        desc: <>Plataforma <span className="bg-purple-500/20 text-purple-300 px-2 py-0.5 rounded-md border border-purple-500/40 shadow-[0_0_10px_rgba(168,85,247,0.3)]">avançada</span> para ensino de lógica. Trilhas interativas e painel docente.</>,
        tags: ["React", "Vite", "Tailwind", "Firebase"],
        link: "https://code-studeo-tcc.pages.dev/"
      },
      p2: {
        name: "PagAÍ SaaS",
        desc: <>Sistema <span className="bg-cyan-500/20 text-cyan-300 px-2 py-0.5 rounded-md border border-cyan-500/40 shadow-[0_0_10px_rgba(34,211,238,0.3)]">completo</span> para gestão de recebíveis. Inclui dashboard analítico e PIX.</>,
        tags: ["React", "Dashboard", "SaaS", "API"],
        link: "https://pagai-9el.pages.dev/"
      }
    },
    contact: {
      title: "Vamos construir o próximo nível.",
      desc: "Traga seu desafio de arquitetura, integração ou desenvolvimento de produto. Respondo rápido.",
      form_title: "Enviar uma mensagem",
      form: { name: "Seu nome", email: "E-mail de contato", msg: "Conte-me sobre o projeto...", btn: "Enviar Mensagem" },
      connect: "Conexões Diretas"
    },
    footer: "think. build. deliver.",
    nodes: {
      IA: { title: "Applied AI", desc: "Automação e OCI AI Vector Search." },
      OIC: { title: "Oracle OIC", desc: "Orquestração de sistemas em nuvem." },
      APEX: { title: "Oracle APEX", desc: "Low-code enterprise grade." },
      DB: { title: "Database", desc: "PL/SQL, Tuning e Modelagem." },
      SENSEDIA: { title: "Sensedia", desc: "API Gateway e Governança." },
      FULLSTACK: { title: "Full Stack", desc: "Node.js, Java, React." }
    }
  },
  US: {
    nav: { home: "Home", about: "About", services: "Services", projects: "Projects", contact: "Contact" },
    hero: {
      s1: "I think.", s2: "I build.", s3: "I deliver.", stype: "You use.",
      desc: "Full Stack Developer & Integration Architect. I transform complex corporate challenges into scalable, secure, and high-performance ecosystems.",
      tags: "Fullstack · Oracle Expert · Applied AI · Node.js · React · Java"
    },
    about: {
      title: "High-Impact Software Engineering",
      subtitle: "I don't just write code. I orchestrate ecosystems.",
      bullets: [
        { label: "Proven Experience", text: "Over 4 years on the front lines of critical projects for market giants like Unimed and CPFL." },
        { label: "The Business Core", text: "Expert in building secure bridges between legacy systems and modern cloud solutions." },
        { label: "Performance Focus", text: "Designing API architectures with Sensedia and ORDS, solving bottlenecks that common systems cannot handle." }
      ],
      skills_title: "Tech Arsenal",
      skills: ["Oracle Ecosystem (OIC, APEX, DB)", "API Management (Sensedia, REST, SOAP)", "Full Stack Dev (JS, React, Node.js, Java)", "Databases (PL/SQL, Advanced SQL)", "Artificial Intelligence & Vector Search", "ERP, CRM & Messaging Integrations"]
    },
    services: {
      step_title: "THE PIPELINE",
      step_subtitle: "HOW IT WORKS",
      steps: [
        { num: "/01", title: "Architectural Analysis", desc: "Mapping your bottleneck, defining the technical scope and integration feasibility." },
        { num: "/02", title: "Core Development", desc: "Creation of architecture, automation, and interfaces using Enterprise-grade tech." },
        { num: "/03", title: "Deploy & Monitor", desc: "Documented delivery with guaranteed stability, security, and no scope surprises." }
      ],
      do_title: "WHAT I DO",
      cards: [
        { title: "Oracle Integration Cloud", desc: "Orchestration and automation of critical business workflows connecting Oracle and third-party cloud tools." },
        { title: "Secure Low-Code Architecture", desc: "Agile development of corporate applications using Oracle APEX without compromising security and performance." },
        { title: "API Management & Gateways", desc: "Exposure, governance, and migration of legacy APIs using modern architectures like Sensedia and ORDS." },
        { title: "Full Stack Development", desc: "Building complete platforms, from relational databases to modern frontends with React and Node.js." },
        { title: "Applied Artificial Intelligence", desc: "Integration of LLMs and OCI AI Vector Search to automate decisions based on your data." },
        { title: "Ecosystem Synchronization", desc: "Heavy integrations between ERPs, CRMs, and logistics systems via messaging or REST/SOAP." }
      ]
    },
    projects: {
      title: "Production Solutions",
      p1: {
        name: "CODE.STUDEO",
        desc: <>An <span className="bg-purple-500/20 text-purple-300 px-2 py-0.5 rounded-md border border-purple-500/40 shadow-[0_0_10px_rgba(168,85,247,0.3)]">advanced</span> logic teaching platform. Interactive tracks and real-time dashboard.</>,
        tags: ["React", "Vite", "Tailwind", "Firebase"],
        link: "https://code-studeo-tcc.pages.dev/"
      },
      p2: {
        name: "PagAÍ SaaS",
        desc: <>A <span className="bg-cyan-500/20 text-cyan-300 px-2 py-0.5 rounded-md border border-cyan-500/40 shadow-[0_0_10px_rgba(34,211,238,0.3)]">complete</span> system for managing receivables. Includes analytical dashboard and payment generation.</>,
        tags: ["React", "Dashboard", "SaaS", "API"],
        link: "https://pagai-9el.pages.dev/"
      }
    },
    contact: {
      title: "Let's build the next level.",
      desc: "Bring your architecture, integration, or product development challenge. I reply fast.",
      form_title: "Send a message",
      form: { name: "Your name", email: "Contact email", msg: "Tell me about your current project...", btn: "Send Message" },
      connect: "Direct Connections"
    },
    footer: "think. build. deliver.",
    nodes: {
      IA: { title: "Applied AI", desc: "Automation and OCI AI Vector Search." },
      OIC: { title: "Oracle OIC", desc: "Cloud systems orchestration." },
      APEX: { title: "Oracle APEX", desc: "Low-code enterprise grade." },
      DB: { title: "Database", desc: "PL/SQL, Tuning and Modeling." },
      SENSEDIA: { title: "Sensedia", desc: "API Gateway & Governance." },
      FULLSTACK: { title: "Full Stack", desc: "Node.js, Java, React." }
    }
  },
  ES: {
    nav: { home: "Inicio", about: "Sobre mí", services: "Servicios", projects: "Proyectos", contact: "Contacto" },
    hero: {
      s1: "Yo pienso.", s2: "Yo construyo.", s3: "Yo entrego.", stype: "Tú usas.",
      desc: "Desarrollador Full Stack y Arquitecto de Integraciones. Transformo desafíos corporativos complejos en ecosistemas escalables y seguros.",
      tags: "Fullstack · Oracle Expert · Applied AI · Node.js · React · Java"
    },
    about: {
      title: "Ingeniería de Software de Alto Impacto",
      subtitle: "No solo escribo código. Orquesto ecosistemas.",
      bullets: [
        { label: "Experiencia Comprobada", text: "Más de 4 años en la primera línea de proyectos críticos para gigantes del mercado como Unimed y CPFL." },
        { label: "El Núcleo del Negocio", text: "Experto en construir puentes seguros entre sistemas heredados y soluciones modernas en la nube." },
        { label: "Enfoque en el Rendimiento", text: "Diseñando arquitecturas de APIs con Sensedia y ORDS, resolviendo cuellos de botella." }
      ],
      skills_title: "Arsenal Tecnológico",
      skills: ["Ecosistema Oracle (OIC, APEX, DB)", "API Management (Sensedia, REST)", "Full Stack Dev (JS, React, Node.js)", "Bases de Datos (PL/SQL, SQL)", "Inteligencia Artificial y Vector Search", "Integraciones ERP y CRM"]
    },
    services: {
      step_title: "LA PIPELINE",
      step_subtitle: "CÓMO FUNCIONA",
      steps: [
        { num: "/01", title: "Análisis Arquitectónico", desc: "Mapeo de tu cuello de botella, definición del alcance técnico y viabilidad." },
        { num: "/02", title: "Desarrollo del Core", desc: "Creación de la arquitectura y automatización utilizando tecnología Enterprise-grade." },
        { num: "/03", title: "Deploy y Monitoreo", desc: "Entrega documentada con garantía de estabilidad, seguridad y sin sorpresas." }
      ],
      do_title: "LO QUE HAGO",
      cards: [
        { title: "Oracle Integration Cloud", desc: "Orquestación y automatización de flujos críticos conectando herramientas en la nube." },
        { title: "Arquitectura Low-Code", desc: "Desarrollo ágil de aplicaciones corporativas utilizando Oracle APEX con alta seguridad." },
        { title: "API Management & Gateways", desc: "Exposición y migración de APIs heredadas utilizando arquitecturas como Sensedia y ORDS." },
        { title: "Desarrollo Full Stack", desc: "Construcción de plataformas desde bases de datos relacionales hasta frontends modernos." },
        { title: "IA Aplicada", desc: "Integración de LLMs y OCI AI Vector Search para automatizar decisiones basadas en datos." },
        { title: "Sincronización de Ecosistemas", desc: "Integraciones pesadas entre ERPs, CRMs y sistemas logísticos vía REST/SOAP." }
      ]
    },
    projects: {
      title: "Soluciones en Producción",
      p1: {
        name: "CODE.STUDEO",
        desc: <>Plataforma <span className="bg-purple-500/20 text-purple-300 px-2 py-0.5 rounded-md border border-purple-500/40 shadow-[0_0_10px_rgba(168,85,247,0.3)]">avanzada</span> para enseñanza de lógica y panel docente en tiempo real.</>,
        tags: ["React", "Vite", "Tailwind", "Firebase"],
        link: "https://code-studeo-tcc.pages.dev/"
      },
      p2: {
        name: "PagAÍ SaaS",
        desc: <>Sistema <span className="bg-cyan-500/20 text-cyan-300 px-2 py-0.5 rounded-md border border-cyan-500/40 shadow-[0_0_10px_rgba(34,211,238,0.3)]">completo</span> para la gestión de cuentas por cobrar. Incluye panel analítico y pagos.</>,
        tags: ["React", "Dashboard", "SaaS", "API"],
        link: "https://pagai-9el.pages.dev/"
      }
    },
    contact: {
      title: "Construyamos el siguiente nivel.",
      desc: "Trae tu desafío de arquitectura o integración. Respondo rápido.",
      form_title: "Enviar un mensaje",
      form: { name: "Tu nombre", email: "Correo de contacto", msg: "Cuéntame sobre el proyecto actual...", btn: "Enviar Mensaje" },
      connect: "Conexiones Directas"
    },
    footer: "think. build. deliver.",
    nodes: {
      IA: { title: "Applied AI", desc: "Automatización y OCI AI Vector Search." },
      OIC: { title: "Oracle OIC", desc: "Orquestación de sistemas en la nube." },
      APEX: { title: "Oracle APEX", desc: "Low-code enterprise grade." },
      DB: { title: "Database", desc: "PL/SQL, Tuning y Modelado." },
      SENSEDIA: { title: "Sensedia", desc: "API Gateway y Gobernanza." },
      FULLSTACK: { title: "Full Stack", desc: "Node.js, Java, React." }
    }
  }
};

function App() {
  const [lang, setLang] = useState<Language>('BR');
  const t = translations[lang];

  const [showToast, setShowToast] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  // desktop = lg (1024px+)
  const [isDesktop, setIsDesktop] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const [activeSection, setActiveSection] = useState(0);
  const totalSections = 5;

  const isScrolling = useRef(false);

  useEffect(() => {
    const handleResize = () => setIsDesktop(window.innerWidth >= 1024);
    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  // Scroll / teclado só no desktop
  useEffect(() => {
    if (!isDesktop) return;

    const handleWheel = (e: WheelEvent) => {
      if (isScrolling.current) return;
      isScrolling.current = true;
      if (e.deltaY > 0) setActiveSection(prev => Math.min(prev + 1, totalSections - 1));
      else if (e.deltaY < 0) setActiveSection(prev => Math.max(prev - 1, 0));
      setTimeout(() => { isScrolling.current = false; }, 1200);
    };

    const handleKeyDown = (e: KeyboardEvent) => {
      if (isScrolling.current) return;
      if (e.key === 'ArrowDown' || e.key === 'PageDown') {
        isScrolling.current = true;
        setActiveSection(prev => Math.min(prev + 1, totalSections - 1));
        setTimeout(() => { isScrolling.current = false; }, 1000);
      } else if (e.key === 'ArrowUp' || e.key === 'PageUp') {
        isScrolling.current = true;
        setActiveSection(prev => Math.max(prev - 1, 0));
        setTimeout(() => { isScrolling.current = false; }, 1000);
      }
    };

    window.addEventListener('wheel', handleWheel, { passive: false });
    window.addEventListener('keydown', handleKeyDown);
    return () => {
      window.removeEventListener('wheel', handleWheel);
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [isDesktop]);

  const [hoveredSection, setHoveredSection] = useState<'about' | 'skills' | null>(null);
  const [activeNode, setActiveNode] = useState<keyof typeof t.nodes | null>(null);
  const [msgCount, setMsgCount] = useState(0);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);
    const formData = new FormData(e.currentTarget);
    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: formData
      });
      if (response.ok) {
        setShowToast(true);
        (e.target as HTMLFormElement).reset();
        setMsgCount(0);
        setTimeout(() => setShowToast(false), 3000);
      }
    } catch (error) {
      console.error("Erro ao enviar:", error);
    } finally {
      setIsSubmitting(false);
    }
  };

  const [logoClicks, setLogoClicks] = useState(0);
  const [isShattered, setIsShattered] = useState(false);
  const [shatterConfig] = useState(() =>
    "molina.dev".split('').map(() => ({
      x: (Math.random() - 0.5) * 600,
      y: (Math.random() - 0.5) * 600,
      rot: (Math.random() - 0.5) * 1080,
    }))
  );

  const handleLogoClick = () => {
    if (isShattered) {
      setIsShattered(false);
      setLogoClicks(0);
      return;
    }
    const newClicks = logoClicks + 1;
    setLogoClicks(newClicks);
    if (newClicks >= 5) {
      setIsShattered(true);
      setTimeout(() => {
        setIsShattered(false);
        setLogoClicks(0);
      }, 4000);
    }
  };

  const navigateTo = (idx: number, id: string) => {
    if (isDesktop) {
      setActiveSection(idx);
    } else {
      document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
      setIsMobileMenuOpen(false);
    }
  };

  const NextArrow = () => (
    <div onClick={() => setActiveSection(prev => Math.min(prev + 1, totalSections - 1))}
      className="hidden lg:flex absolute bottom-4 left-1/2 -translate-x-1/2 z-50 flex-col items-center cursor-pointer group p-2">
      <div className="flex flex-col -space-y-3 text-purple-500 group-hover:text-cyan-400 transition-colors animate-bounce">
        <svg className="w-6 h-6 xl:w-8 xl:h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M19 9l-7 7-7-7" /></svg>
        <svg className="w-6 h-6 xl:w-8 xl:h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M19 9l-7 7-7-7" /></svg>
      </div>
    </div>
  );

  const PrevArrow = () => (
    <div onClick={() => setActiveSection(prev => Math.max(prev - 1, 0))}
      className="hidden lg:flex absolute top-20 xl:top-24 left-1/2 -translate-x-1/2 z-50 flex-col items-center cursor-pointer group p-2">
      <div className="flex flex-col -space-y-3 text-purple-500 group-hover:text-cyan-400 transition-colors animate-bounce">
        <svg className="w-6 h-6 xl:w-8 xl:h-8 rotate-180" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M19 9l-7 7-7-7" /></svg>
        <svg className="w-6 h-6 xl:w-8 xl:h-8 rotate-180" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M19 9l-7 7-7-7" /></svg>
      </div>
    </div>
  );

  const apiNodes = [
    { id: 'IA' as const,          label: 'IA',       top: '5%',  left: '50%' },
    { id: 'OIC' as const,         label: 'OIC',      top: '15%', left: '85%' },
    { id: 'APEX' as const,        label: 'APEX',     top: '50%', left: '95%' },
    { id: 'DB' as const,          label: 'DB',       top: '85%', left: '85%' },
    { id: 'SENSEDIA' as const,    label: 'SENSEDIA', top: '95%', left: '50%' },
    { id: 'FULLSTACK' as const,  label: 'NODE.JS',  top: '85%', left: '15%' },
    { id: 'FULLSTACK' as const,  label: 'REACT',     top: '50%', left: '5%'  },
    { id: 'FULLSTACK' as const,  label: 'JAVA',      top: '15%', left: '15%' },
  ];

  return (
    <div className={`w-full bg-black text-gray-300 selection:bg-purple-600 selection:text-white relative font-sans ${isDesktop ? 'h-screen overflow-hidden' : 'min-h-screen overflow-x-hidden'}`}>

      {/* ── NAVBAR CORRIGIDA (FLEX-BETWEEN REAL) ── */}
      <header className="fixed top-0 w-full z-[100] bg-black/80 backdrop-blur-md border-b border-gray-900">
        <nav className="h-16 md:h-20 lg:h-20 2xl:h-24 flex items-center justify-between px-6 lg:px-12 max-w-screen-2xl mx-auto w-full relative">

          {/* Esquerda: Seletor Mobile + Logo */}
          <div className="flex items-center gap-4 z-50">
            {/* Seletor Mobile (aparece até lg) */}
            <div className="flex lg:hidden gap-2 text-xs font-mono font-bold bg-gray-900/50 px-3 py-1.5 rounded-full border border-gray-800 shrink-0">
              {(['BR', 'US', 'ES'] as Language[]).map(l => (
                <button key={l} onClick={() => setLang(l)} className={`transition-colors ${lang === l ? 'text-purple-400' : 'text-gray-500'}`}>{l}</button>
              ))}
            </div>

            {/* Logo  */}
            <div className="font-bold text-xl md:text-2xl lg:text-3xl tracking-tight cursor-pointer flex select-none shrink-0" onClick={handleLogoClick} title="Easter Egg 👀">
              {"molina.dev".split('').map((char, i) => {
                const isDev = i >= 6;
                const jiggleX = !isShattered && logoClicks >= 3 ? (Math.random() - 0.5) * (logoClicks * 1.5) : 0;
                const jiggleY = !isShattered && logoClicks >= 3 ? (Math.random() - 0.5) * (logoClicks * 1.5) : 0;
                return (
                  <span key={i} className={`inline-block transition-all duration-[800ms] ${isDev ? 'text-purple-500' : 'text-white'}`}
                    style={{
                      transform: isShattered ? `translate(${shatterConfig[i].x}px, ${shatterConfig[i].y}px) rotate(${shatterConfig[i].rot}deg)` : `translate(${jiggleX}px, ${jiggleY}px)`,
                      opacity: isShattered ? 0 : 1,
                    }}>
                    {char}
                  </span>
                );
              })}
            </div>
          </div>

          {/* Centro: Links  */}
          <div className="hidden lg:flex absolute left-1/2 -translate-x-1/2 gap-6 xl:gap-10 font-medium text-sm xl:text-base 2xl:text-lg text-gray-400 z-40">
            {(['home', 'about', 'services', 'projects', 'contact'] as const).map((item, idx) => (
              <button key={item} onClick={() => navigateTo(idx, item)} className={`hover:text-purple-400 transition-colors ${activeSection === idx ? 'text-purple-500' : ''}`}>
                {t.nav[item]}
              </button>
            ))}
          </div>

          {/* Direita: Seletor Desktop ou Hambúrguer Mobile */}
          <div className="flex items-center justify-end z-50">
            {/* Seletor Desktop */}
            <div className="hidden lg:flex gap-3 text-xs xl:text-sm font-mono font-bold bg-gray-900/50 px-4 py-2 rounded-full border border-gray-800">
              {(['BR', 'US', 'ES'] as Language[]).map((l, i) => (
                <React.Fragment key={l}>
                  <button onClick={() => setLang(l)} className={`transition-colors ${lang === l ? 'text-purple-400' : 'text-gray-500 hover:text-white'}`}>{l}</button>
                  {i < 2 && <span className="text-gray-700">|</span>}
                </React.Fragment>
              ))}
            </div>

            {/* Hambúrguer Mobile */}
            <button className="lg:hidden text-white p-2 ml-2" onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}>
              {isMobileMenuOpen
                ? <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" /></svg>
                : <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16m-7 6h7" /></svg>
              }
            </button>
          </div>

        </nav>

        {/* Menu mobile overlay */}
        {isMobileMenuOpen && (
          <div className="lg:hidden fixed inset-0 top-16 bg-[#050505] flex flex-col items-center justify-center gap-10 z-[90]">
            {(['home', 'about', 'services', 'projects', 'contact'] as const).map((item, idx) => (
              <button key={item} onClick={() => navigateTo(idx, item)} className="text-2xl font-bold text-white hover:text-purple-500 transition-colors">
                {t.nav[item]}
              </button>
            ))}
          </div>
        )}
      </header>

      {/* ── MODAL API CORE ── */}
      {activeNode && (
        <div className="fixed inset-0 z-[120] flex items-center justify-center bg-black/90 backdrop-blur-md p-4 animate-[fadeIn_0.2s_ease-out]">
          <div className="bg-[#050505] border border-cyan-500 rounded-2xl p-6 sm:p-10 max-w-lg w-full shadow-[0_0_80px_rgba(34,211,238,0.2)] relative">
            <button onClick={() => setActiveNode(null)} className="absolute top-4 right-4 text-gray-500 hover:text-white text-xl transition-colors">✕</button>
            <div className="text-cyan-400 font-mono text-xs sm:text-sm mb-2">&gt; System Component</div>
            <h3 className="text-xl sm:text-3xl font-bold text-white mb-3">{t.nodes[activeNode].title}</h3>
            <p className="text-gray-300 leading-relaxed text-sm sm:text-lg">{t.nodes[activeNode].desc}</p>
          </div>
        </div>
      )}

      {/* ── WRAPPER DE SEÇÕES ── */}
      <div className={`w-full flex flex-col ${isDesktop ? 'h-[500vh] transition-transform duration-[1200ms]' : ''}`} style={isDesktop ? { transform: `translateY(-${activeSection * 100}vh)` } : {}}>

        {/* ══════════════════════════════════════
            BLOCO 0 — HERO
        ══════════════════════════════════════ */}
        <section id="home" className={`w-full relative flex items-center overflow-hidden ${isDesktop ? 'h-screen pt-10' : 'min-h-[100svh] pt-24 pb-16'}`}>
          <div className="absolute top-1/2 left-1/4 -translate-y-1/2 w-[250px] h-[250px] md:w-[400px] md:h-[400px] bg-purple-900/15 rounded-full blur-[100px] pointer-events-none -z-10" />

          <div className="px-6 lg:px-12 max-w-screen-2xl mx-auto flex flex-col lg:flex-row gap-8 lg:gap-10 2xl:gap-16 items-center w-full">

            {/* texto hero */}
            <div className="flex-1 space-y-4 lg:space-y-5 2xl:space-y-6 w-full z-10 text-center lg:text-left">
              <h1 className="text-[2rem] sm:text-4xl md:text-5xl lg:text-[2.75rem] xl:text-6xl 2xl:text-7xl font-extrabold text-white leading-[1.1] tracking-tight">
                <span className="block">{t.hero.s1}</span>
                <span className="block">{t.hero.s2}</span>
                <span className="block">{t.hero.s3}</span>
                <span className="block mt-1"><Typewriter text={t.hero.stype} /></span>
              </h1>
              <p className="text-sm sm:text-base md:text-lg lg:text-lg 2xl:text-2xl text-gray-400 max-w-2xl leading-relaxed font-light mx-auto lg:mx-0">
                {t.hero.desc}
              </p>
              <div className="pt-1 2xl:pt-2 text-[9px] sm:text-[10px] md:text-xs lg:text-xs 2xl:text-sm text-gray-500 font-mono tracking-widest uppercase">
                {t.hero.tags}
              </div>
            </div>

            {/* Diagrama API CORE */}
            <div className="flex flex-1 justify-center w-full relative items-center mt-6 lg:mt-0">
              <div className="relative w-full max-w-[260px] sm:max-w-[320px] md:max-w-[400px] lg:max-w-[360px] xl:max-w-[420px] 2xl:max-w-[540px] aspect-square flex items-center justify-center mx-auto">

                <div className="absolute w-16 h-16 sm:w-24 sm:h-24 md:w-32 md:h-32 lg:w-28 lg:h-28 2xl:w-40 2xl:h-40 rounded-full border border-purple-500 bg-purple-900/20 flex items-center justify-center animate-[pulse_4s_cubic-bezier(0.4,0,0.6,1)_infinite] shadow-[0_0_40px_rgba(168,85,247,0.3)] z-20">
                  <div className="w-12 h-12 sm:w-16 sm:h-16 md:w-24 md:h-24 lg:w-20 lg:h-20 2xl:w-32 2xl:h-32 rounded-full border-2 border-dashed border-purple-500/50 animate-[spin_20s_linear_infinite]" />
                  <span className="absolute text-purple-400 font-mono font-bold tracking-widest text-[7px] sm:text-[9px] lg:text-[10px] 2xl:text-base z-30">API_CORE</span>
                </div>

                <svg className="absolute inset-0 w-full h-full opacity-25 pointer-events-none z-0" viewBox="0 0 550 550">
                  <circle cx="275" cy="275" r="180" fill="none" stroke="#22d3ee" strokeWidth="1" strokeDasharray="4 4" className="animate-[spin_50s_linear_infinite_reverse]"/>
                  <line x1="275" y1="185" x2="275" y2="20" stroke="#22d3ee" strokeWidth="1"/>
                  <line x1="365" y1="275" x2="530" y2="275" stroke="#22d3ee" strokeWidth="1"/>
                  <line x1="275" y1="365" x2="275" y2="530" stroke="#22d3ee" strokeWidth="1"/>
                  <line x1="185" y1="275" x2="20" y2="275" stroke="#22d3ee" strokeWidth="1"/>
                  <line x1="339" y1="211" x2="455" y2="95" stroke="#22d3ee" strokeWidth="1"/>
                  <line x1="339" y1="339" x2="455" y2="455" stroke="#22d3ee" strokeWidth="1"/>
                  <line x1="211" y1="339" x2="95" y2="455" stroke="#22d3ee" strokeWidth="1"/>
                  <line x1="211" y1="211" x2="95" y2="95" stroke="#22d3ee" strokeWidth="1"/>
                </svg>

                {apiNodes.map((node, i) => (
                  <button key={node.id + i} onClick={() => setActiveNode(node.id)}
                    className="absolute -translate-x-1/2 -translate-y-1/2 border-2 border-cyan-500/80 bg-black/90 backdrop-blur-md rounded-xl flex items-center justify-center shadow-[0_0_20px_rgba(34,211,238,0.2)] hover:scale-110 hover:border-cyan-400 hover:shadow-[0_0_40px_rgba(34,211,238,0.6)] transition-all duration-300 z-30 group cursor-pointer animate-[floating_6s_ease-in-out_infinite]
                      w-10 h-10 lg:w-12 lg:h-12 2xl:w-20 2xl:h-20"
                    style={{ top: node.top, left: node.left, animationDelay: `${i * 0.5}s` }}>
                    <span className="text-[6px] lg:text-[7px] 2xl:text-xs font-mono text-cyan-400 font-bold group-hover:text-white transition-colors">{node.label}</span>
                  </button>
                ))}
              </div>
            </div>

          </div>
          {isDesktop && <NextArrow />}
        </section>

        {/* ══════════════════════════════════════
            BLOCO 1 — SOBRE MIM
        ══════════════════════════════════════ */}
        <section id="about" className={`w-full relative bg-[#030303] flex items-center justify-center overflow-hidden border-t border-gray-900/50 ${isDesktop ? 'h-screen' : 'min-h-[100svh] py-24'}`}>
          {isDesktop && <PrevArrow />}
          <div className="px-6 lg:px-12 max-w-screen-2xl mx-auto w-full">
            <div className="grid lg:grid-cols-2 gap-8 lg:gap-8 xl:gap-12 2xl:gap-24 relative">

              {/* Coluna esquerda */}
              <div onMouseEnter={() => setHoveredSection('about')} onMouseLeave={() => setHoveredSection(null)}
                className={`transition-all duration-700 ${hoveredSection === 'skills' ? 'lg:blur-md lg:opacity-10 lg:grayscale' : 'opacity-100'} cursor-default flex flex-col justify-center`}
              >
                <div>
                  <h2 className="text-3xl sm:text-4xl lg:text-[2.5rem] 2xl:text-6xl font-bold text-white tracking-tight leading-tight">{t.about.title}</h2>
                  <h3 className="text-base sm:text-lg lg:text-xl 2xl:text-2xl text-purple-400 mt-2 2xl:mt-3 font-light">{t.about.subtitle}</h3>
                </div>
                <div className="w-16 h-1.5 2xl:w-20 2xl:h-2 bg-purple-500 rounded-full shadow-[0_0_15px_rgba(168,85,247,0.8)] mt-4 2xl:mt-6" />

                <div className="space-y-4 lg:space-y-5 2xl:space-y-6 mt-6 2xl:mt-8">
                  {t.about.bullets.map((bullet, idx) => (
                    <div key={idx} className="flex gap-3 2xl:gap-4 items-start">
                      <div className="text-cyan-400 font-mono text-base lg:text-lg 2xl:text-xl mt-0.5">{"//"}</div>
                      <div>
                        <h4 className="text-white font-bold text-base lg:text-lg mb-0.5">{bullet.label}</h4>
                        <p className="text-gray-400 text-sm lg:text-sm 2xl:text-base leading-relaxed">{bullet.text}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Coluna direita */}
              <div onMouseEnter={() => setHoveredSection('skills')} onMouseLeave={() => setHoveredSection(null)}
                className={`bg-[#080808] border border-gray-900/50 p-6 lg:p-6 xl:p-8 2xl:p-12 rounded-3xl flex flex-col justify-center transition-all duration-700 ${hoveredSection === 'about' ? 'lg:blur-md lg:opacity-10 lg:grayscale lg:scale-95' : 'opacity-100 scale-100'} hover:border-purple-500/40 cursor-default shadow-2xl`}
              >
                <h3 className="text-lg lg:text-xl 2xl:text-2xl font-bold text-white mb-4 lg:mb-5 2xl:mb-6 font-mono tracking-widest uppercase">{t.about.skills_title}</h3>
                <ul className="grid gap-3 lg:gap-4 2xl:gap-5">
                  {t.about.skills.map((skill, idx) => (
                    <li key={idx} className="flex items-center gap-3 2xl:gap-4 text-gray-300 group">
                      <div className="w-2 h-2 2xl:w-2.5 2xl:h-2.5 rounded-full bg-purple-500 group-hover:bg-cyan-400 group-hover:shadow-[0_0_15px_rgba(34,211,238,1)] transition-all shrink-0" />
                      <span className="text-sm lg:text-base xl:text-lg 2xl:text-xl font-light group-hover:text-white transition-colors">{skill}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
          {isDesktop && <NextArrow />}
        </section>

        {/* ══════════════════════════════════════
            BLOCO 2 — SERVIÇOS
        ══════════════════════════════════════ */}
        <section id="services" className={`w-full relative bg-black flex flex-col justify-center overflow-hidden border-t border-gray-900/50 ${isDesktop ? 'h-screen' : 'min-h-[100svh] py-24'}`}>
          {isDesktop && <PrevArrow />}
          <div className="px-6 lg:px-12 max-w-screen-2xl mx-auto w-full">

            <div className="mb-6 lg:mb-8 2xl:mb-12">
              <h3 className="text-lg lg:text-xl 2xl:text-2xl font-bold text-white mb-4 2xl:mb-6 tracking-wider">{t.services.step_title}</h3>
              <div className="grid sm:grid-cols-3 gap-4 lg:gap-6 2xl:gap-8">
                {t.services.steps.map((step, idx) => (
                  <div key={idx} className="space-y-1.5 lg:space-y-2 2xl:space-y-3 border-l-2 border-gray-900 pl-4 2xl:pl-5 hover:border-purple-500 transition-colors">
                    <span className="text-cyan-400 font-mono font-bold text-sm lg:text-base">{step.num}</span>
                    <h4 className="text-white font-bold text-base lg:text-lg 2xl:text-xl">{step.title}</h4>
                    <p className="text-gray-400 text-xs lg:text-sm 2xl:text-base leading-relaxed">{step.desc}</p>
                  </div>
                ))}
              </div>
            </div>

            <div className="w-full h-px bg-gray-900 mb-6 lg:mb-8 2xl:mb-10" />

            {/* Cards */}
            <div>
              <h3 className="text-lg lg:text-xl 2xl:text-2xl font-bold text-white mb-4 2xl:mb-6 tracking-wider">{t.services.do_title}</h3>
              <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-3 lg:gap-4 2xl:gap-5">
                {t.services.cards.map((card, idx) => (
                  <div key={idx} className="bg-[#080808] border border-gray-800 p-4 lg:p-5 2xl:p-7 rounded-xl lg:rounded-2xl hover:border-cyan-500 hover:-translate-y-1 transition-all duration-300 group">
                    <h4 className="text-white font-bold text-sm lg:text-base 2xl:text-lg mb-1 lg:mb-2 group-hover:text-cyan-400 transition-colors">{card.title}</h4>
                    <p className="text-gray-400 text-xs lg:text-[13px] 2xl:text-base leading-relaxed font-light">{card.desc}</p>
                  </div>
                ))}
              </div>
            </div>

          </div>
          {isDesktop && <NextArrow />}
        </section>

        {/* ══════════════════════════════════════
            BLOCO 3 — PROJETOS
        ══════════════════════════════════════ */}
        <section id="projects" className={`w-full relative bg-[#030303] flex items-center overflow-hidden border-t border-gray-900/50 ${isDesktop ? 'h-screen' : 'min-h-[100svh] py-24'}`}>
          {isDesktop && <PrevArrow />}
          <div className="px-6 lg:px-12 max-w-screen-2xl mx-auto w-full">
            <h2 className="text-2xl sm:text-4xl lg:text-[2.5rem] 2xl:text-6xl font-bold text-white tracking-tight mb-6 lg:mb-8 2xl:mb-10 text-center lg:text-left">{t.projects.title}</h2>

            <div className="grid lg:grid-cols-2 gap-6 lg:gap-8 2xl:gap-12">

              {/* Projeto 1 */}
              <div className="group bg-[#080808] border border-gray-800 rounded-2xl p-5 lg:p-6 2xl:p-8 hover:border-purple-500 hover:shadow-[0_0_40px_rgba(168,85,247,0.1)] transition-all duration-500 flex flex-col">
                <div className="flex justify-between items-start mb-3 lg:mb-4">
                  <h3 className="text-xl sm:text-2xl lg:text-2xl 2xl:text-3xl font-bold text-white group-hover:text-purple-400 transition-colors">{t.projects.p1.name}</h3>
                  <a href={t.projects.p1.link} target="_blank" rel="noreferrer" className="w-9 h-9 lg:w-10 lg:h-10 2xl:w-11 2xl:h-11 rounded-full bg-purple-500/10 flex items-center justify-center text-purple-500 group-hover:bg-purple-500 group-hover:text-white transition-all hover:scale-110 shrink-0 ml-3">
                    <svg className="w-4 h-4 2xl:w-5 2xl:h-5 -rotate-45" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" /></svg>
                  </a>
                </div>
                <p className="text-gray-400 text-xs lg:text-sm 2xl:text-base leading-relaxed mb-4 lg:mb-5">{t.projects.p1.desc}</p>
                <div className="flex flex-wrap gap-2 mb-4 lg:mb-5">
                  {t.projects.p1.tags.map(tag => (
                    <span key={tag} className="text-[10px] lg:text-xs font-mono bg-purple-900/20 text-purple-300 px-2 lg:px-3 py-1 lg:py-1.5 rounded border border-purple-500/20">{tag}</span>
                  ))}
                </div>
                <div className="w-full aspect-[16/9] relative overflow-hidden rounded-xl bg-black border border-gray-800 mt-auto">
                  <div className="absolute top-0 w-full h-4 2xl:h-5 bg-gray-900 flex items-center px-2 2xl:px-3 gap-1 2xl:gap-1.5 z-10">
                    <div className="w-1.5 h-1.5 2xl:w-2 2xl:h-2 rounded-full bg-red-500/50" /><div className="w-1.5 h-1.5 2xl:w-2 2xl:h-2 rounded-full bg-yellow-500/50" /><div className="w-1.5 h-1.5 2xl:w-2 2xl:h-2 rounded-full bg-green-500/50" />
                  </div>
                  <iframe src={t.projects.p1.link} className="absolute top-4 2xl:top-5 left-0 w-[200%] h-[200%] scale-50 origin-top-left pointer-events-none opacity-80 group-hover:opacity-100 transition-opacity" tabIndex={-1} />
                </div>
              </div>

              {/* Projeto 2 */}
              <div className="group bg-[#080808] border border-gray-800 rounded-2xl p-5 lg:p-6 2xl:p-8 hover:border-cyan-500 hover:shadow-[0_0_40px_rgba(34,211,238,0.1)] transition-all duration-500 flex flex-col">
                <div className="flex justify-between items-start mb-3 lg:mb-4">
                  <h3 className="text-xl sm:text-2xl lg:text-2xl 2xl:text-3xl font-bold text-white group-hover:text-cyan-400 transition-colors">{t.projects.p2.name}</h3>
                  <a href={t.projects.p2.link} target="_blank" rel="noreferrer" className="w-9 h-9 lg:w-10 lg:h-10 2xl:w-11 2xl:h-11 rounded-full bg-cyan-500/10 flex items-center justify-center text-cyan-500 group-hover:bg-cyan-500 group-hover:text-white transition-all hover:scale-110 shrink-0 ml-3">
                    <svg className="w-4 h-4 2xl:w-5 2xl:h-5 -rotate-45" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" /></svg>
                  </a>
                </div>
                <p className="text-gray-400 text-xs lg:text-sm 2xl:text-base leading-relaxed mb-4 lg:mb-5">{t.projects.p2.desc}</p>
                <div className="flex flex-wrap gap-2 mb-4 lg:mb-5">
                  {t.projects.p2.tags.map(tag => (
                    <span key={tag} className="text-[10px] lg:text-xs font-mono bg-cyan-900/20 text-cyan-300 px-2 lg:px-3 py-1 lg:py-1.5 rounded border border-cyan-500/20">{tag}</span>
                  ))}
                </div>
                <div className="w-full aspect-[16/9] relative overflow-hidden rounded-xl bg-black border border-gray-800 mt-auto">
                  <div className="absolute top-0 w-full h-4 2xl:h-5 bg-gray-900 flex items-center px-2 2xl:px-3 gap-1 2xl:gap-1.5 z-10">
                    <div className="w-1.5 h-1.5 2xl:w-2 2xl:h-2 rounded-full bg-red-500/50" /><div className="w-1.5 h-1.5 2xl:w-2 2xl:h-2 rounded-full bg-yellow-500/50" /><div className="w-1.5 h-1.5 2xl:w-2 2xl:h-2 rounded-full bg-green-500/50" />
                  </div>
                  <iframe src={t.projects.p2.link} className="absolute top-4 2xl:top-5 left-0 w-[200%] h-[200%] scale-50 origin-top-left pointer-events-none opacity-80 group-hover:opacity-100 transition-opacity" tabIndex={-1} />
                </div>
              </div>

            </div>
          </div>
          {isDesktop && <NextArrow />}
        </section>

        {/* ══════════════════════════════════════
            BLOCO 4 — CONTATO
        ══════════════════════════════════════ */}
        <section id="contact" className={`w-full relative bg-black flex flex-col overflow-hidden border-t border-gray-900/50 ${isDesktop ? 'h-screen' : 'min-h-[100svh]'}`}>
          {isDesktop && <PrevArrow />}

          <div className={`flex-1 flex flex-col justify-center px-6 lg:px-12 max-w-screen-2xl mx-auto w-full ${isDesktop ? 'pt-10 2xl:pt-16' : 'pt-24 pb-8'}`}>

          
            <div className="mb-6 lg:mb-6 2xl:mb-10 w-full">
              <h2 className="text-3xl sm:text-4xl lg:text-5xl xl:text-6xl 2xl:text-[5rem] font-bold text-white tracking-tight mb-2 lg:mb-4 leading-[1.1]">
                {t.contact.title}
              </h2>
              <p className="text-sm lg:text-base 2xl:text-xl text-gray-400 font-light max-w-3xl">{t.contact.desc}</p>
            </div>

            {/* Form + Conexões */}
            <div className="grid lg:grid-cols-2 gap-6 lg:gap-12 2xl:gap-24 items-start w-full">

              {/* Form */}
              <div className="w-full flex flex-col space-y-4 2xl:space-y-5">
                <h3 className="text-lg lg:text-xl 2xl:text-3xl font-bold text-white">{t.contact.form_title}</h3>

                <form onSubmit={handleSubmit} className="space-y-3 2xl:space-y-4">
                  <input type="hidden" name="access_key" value={import.meta.env.VITE_WEB3FORMS_KEY} />
                  <div className="grid sm:grid-cols-2 gap-3 2xl:gap-4">
                    <input type="text" name="name" required placeholder={t.contact.form.name}
                      className="w-full bg-[#080808] border border-gray-800 rounded-lg 2xl:rounded-xl px-4 2xl:px-5 py-3 2xl:py-4 text-white text-sm 2xl:text-base focus:outline-none focus:border-purple-500 transition-colors" />
                    <input type="email" name="email" required placeholder={t.contact.form.email}
                      className="w-full bg-[#080808] border border-gray-800 rounded-lg 2xl:rounded-xl px-4 2xl:px-5 py-3 2xl:py-4 text-white text-sm 2xl:text-base focus:outline-none focus:border-purple-500 transition-colors" />
                  </div>
                  <div>
                    <textarea name="message" required rows={4} maxLength={500}
                      onChange={(e) => setMsgCount(e.target.value.length)}
                      placeholder={t.contact.form.msg}
                      className="w-full bg-[#080808] border border-gray-800 rounded-lg 2xl:rounded-xl px-4 2xl:px-5 py-3 2xl:py-4 text-white text-sm 2xl:text-base focus:outline-none focus:border-purple-500 transition-colors resize-none"
                    />
                    <div className="text-right text-gray-600 font-mono text-[10px] 2xl:text-xs mt-1">{msgCount} / 500</div>
                  </div>
                  <button type="submit" disabled={isSubmitting}
                    className="bg-white text-black hover:bg-purple-600 hover:text-white font-bold py-3 2xl:py-4 px-8 2xl:px-10 rounded-lg 2xl:rounded-xl transition-all duration-300 hover:shadow-[0_0_25px_rgba(168,85,247,0.6)] hover:scale-105 text-sm 2xl:text-base w-full sm:w-auto disabled:opacity-50 disabled:cursor-not-allowed"
                  >
                    {isSubmitting ? "Enviando..." : `${t.contact.form.btn} →`}
                  </button>
                </form>
              </div>

              {/* Conexões */}
              <div className="w-full flex flex-col space-y-4 2xl:space-y-5 mt-4 lg:mt-0">
                <h3 className="text-lg lg:text-xl 2xl:text-3xl font-bold text-white">{t.contact.connect}</h3>

                <a href="mailto:molinakmargo@hotmail.com"
                  className="group block bg-[#080808] border border-gray-800 hover:border-white rounded-xl 2xl:rounded-2xl p-4 lg:p-5 2xl:p-7 transition-all duration-300 w-full">
                  <div className="flex items-center gap-4 2xl:gap-5">
                    <div className="w-12 h-12 lg:w-14 lg:h-14 2xl:w-16 2xl:h-16 bg-white/5 rounded-full flex items-center justify-center group-hover:bg-white transition-colors duration-300 shrink-0">
                      <svg className="w-6 h-6 2xl:w-7 2xl:h-7 text-white group-hover:text-black transition-colors duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" /></svg>
                    </div>
                    <div>
                      <div className="text-white font-bold text-lg lg:text-xl 2xl:text-2xl mb-0.5 lg:mb-1">E-mail Direto</div>
                      <div className="text-gray-500 font-mono text-[10px] lg:text-xs 2xl:text-sm">molinakmargo@hotmail.com</div>
                    </div>
                  </div>
                </a>

                <a href="https://www.linkedin.com/in/molinaiago" target="_blank" rel="noreferrer"
                  className="group block bg-[#080808] border border-gray-800 hover:border-[#0A66C2] rounded-xl 2xl:rounded-2xl p-4 lg:p-5 2xl:p-7 transition-all duration-300 w-full">
                  <div className="flex items-center gap-4 2xl:gap-5">
                    <div className="w-12 h-12 lg:w-14 lg:h-14 2xl:w-16 2xl:h-16 bg-[#0A66C2]/10 rounded-full flex items-center justify-center group-hover:bg-[#0A66C2] transition-colors duration-300 shrink-0">
                      <svg className="w-6 h-6 2xl:w-7 2xl:h-7 text-[#0A66C2] group-hover:text-white transition-colors duration-300" fill="currentColor" viewBox="0 0 24 24"><path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/></svg>
                    </div>
                    <div>
                      <div className="text-white font-bold text-lg lg:text-xl 2xl:text-2xl mb-0.5 lg:mb-1">LinkedIn</div>
                      <div className="text-gray-500 font-mono text-[10px] lg:text-xs 2xl:text-sm">/in/molinaiago</div>
                    </div>
                  </div>
                </a>
              </div>

            </div>
          </div>

          {/* Footer */}
          <footer className="w-full text-center py-1 border-t border-gray-900 bg-[#050505] shrink-0 z-[100] mt-auto">
            <div className="flex items-center justify-center gap-2 2xl:gap-3">
              <img src="/logo.svg" alt="Logo Molina" className="w-20 h-20 2xl:w-28 2xl:h-28 object-contain" />
              <div className="flex flex-col items-start justify-center gap-0.5">
                <span className="text-gray-600 font-mono text-[10px] 2xl:text-xs">© {new Date().getFullYear()} molina.dev</span>
                <span className="text-purple-500 font-bold tracking-widest uppercase text-[10px] 2xl:text-xs">{t.footer}</span>
              </div>
            </div>
          </footer>
        </section>

      </div>

      {/* Toast */}
      {showToast && (
        <div className="fixed bottom-8 left-1/2 -translate-x-1/2 z-[200] animate-[fadeIn_0.3s_ease-out]">
          <div className="bg-purple-600 text-white px-5 py-2 2xl:px-6 2xl:py-3 rounded-2xl shadow-[0_0_30px_rgba(168,85,247,0.5)] border border-purple-400 flex items-center gap-3">
            <svg className="w-4 h-4 2xl:w-5 2xl:h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" /></svg>
            <span className="font-bold tracking-wide text-sm 2xl:text-base">Email enviado com sucesso!</span>
          </div>
        </div>
      )}

      <style>{`
        @keyframes floating {
          0%   { transform: translate(-50%, -50%) translateY(0px); }
          50%  { transform: translate(-50%, -50%) translateY(-12px); }
          100% { transform: translate(-50%, -50%) translateY(0px); }
        }
        @keyframes fadeIn {
          from { opacity: 0; transform: scale(0.95); }
          to   { opacity: 1; transform: scale(1); }
        }
      `}</style>
    </div>
  );
}

export default App;
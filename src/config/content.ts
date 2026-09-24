export const siteConfig = {
  name: "AmirHSoukhteh",
  description: "A showcase of my work and thoughts",
  nav: {
    home: "Home",
    posts: "Pos",
    projects: "Projects",
    about: "About"
  },
  home: {
    greeting: "Hello, I'm Kai.",
    description: "A passionate frontend developer with a keen eye for design and a love for creating beautiful, functional web experiences.",
    buttons: {
      viewProjects: "View Projects",
      myWorks: "Read Posts"
    }
  },
  projects: {
    title: "My Projects",
    description: "Here are some of the current projects I've been working on. I really enjoy creating new projects and coming up with new ideas. I'm always working on something new, so check back often!",
    backButton: "Back to Home",
    noProjects: "No projects found.",
    items: [
      {
        title: "TempMail.Best",
        description: "Best Temporary Email.",
        href: "#",
        imageUrl: "/assets/images/projects/tempmail.best.png"
      },
      {
        title: "DNS.Surf",
        description: "Querying DNS Resolution Results in Different Regions Worldwide.",
        href: "#!",
        imageUrl: "/assets/images/projects/dns.surf.png"
      },
      {
        title: "HTML.ZONE",
        description: "Web Toolbox.",
        href: "#!",
        imageUrl: "/assets/images/projects/html.zone.png"
      },
      {
        title: "Sink",
        description: "A Simple / Speedy / Secure Link Shortener with Analytics.",
        href: "#!",
        imageUrl: "/assets/images/projects/sink.cool.png"
      },
      {
        title: "BroadcastChannel",
        description: "Turn your Telegram Channel into a MicroBlog.",
        href: "#!",
        imageUrl: "/assets/images/projects/broadcast-channel.png"
      },
      {
        title: "L(O*62).ONG",
        description: "Make your URL looooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooonger",
        href: "#!",
        imageUrl: "/assets/images/projects/long.png"
      }
    ]
  },
  about: {
    title: "About",
    description: "Learn more about me and my journey.",
    backButton: "Back to Home"
  },
  theme: {
    dayMode: "Day mode",
    nightMode: "Night mode"
  }
} as const 
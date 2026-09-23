export const globalConfig = {
  site: {
    name: "Your Portfolio Name",
    author: "AmirH Soukhteh",
    description: "A brief description of your portfolio website",
    url: "/"
  },
  navigation: {
    aria: "Main Navigation",
    items: [
      {
        title: "Home",
        href: "/"
      },
      {
        title: "Projects",
        href: "/projects"
      },
      {
        title: "Posts",
        href: "/posts"
      },
      {
        title: "About",
        href: "/about"
      }
    ]
  },
  footer: {
    aria: "Footer Navigation",
    copyright: "© 2025 AmirHossein Soukhteh. All rights reserved ",
    social: {
      twitter: "#",
      github: "#",
      email: "[EMAIL_ADDRESS]"
    }
  }
} as const; 
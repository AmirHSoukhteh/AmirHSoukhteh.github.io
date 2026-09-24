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
        title: "About",
        href: "/about"
      }
    ]
  },
  footer: {
    aria: "Footer Navigation",
    date: new Date().toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'short',
      day: '2-digit'
    }).replace(/ /g, '-').replace(',', ''),
    social: {
      telegram: "https://t.me/AHSoukhteh",
      github: "https://github.com/AmirHSoukhteh",
      email: "AHSoukhteh@gmail.com"
    }
  }
} as const; 
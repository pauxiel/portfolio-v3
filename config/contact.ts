export enum ContactType {
  github = 'github',
  linkedin = 'linkedin',
  twitter = 'twitter',
  youtube = 'youtube',
  email = 'email',
  buymeacoffee = 'buymeacoffee',
  freelancer = 'freelancer',
}

export interface Contact {
  twitter: string;
  site: string;
  calendly?: string;
  links: Record<ContactType, string>;
}

export const contact: Contact = {
  twitter: '@obayuwanaPaul',
  site: 'pauloba.vercel.app',
  calendly: 'https://calendly.com/obayuwanap',
  links: {
    github: 'https://github.com/pauxiel',
    linkedin: 'https://linkedin.com/in/obayuwana-paul',
    twitter: 'https://twitter.com/Obayuwanapaul',
    youtube: 'https://www.youtube.com/c/KaranPratapSingh',
    email: 'mailto:obayuwanap@gmail.com',
    buymeacoffee: 'https://www.buymeacoffee.com/obayuwana',
    freelancer: 'https://www.freelancer.com/u/Pauxiel',
  },
};

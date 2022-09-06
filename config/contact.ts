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
  calendly: 'https://calendly.com/karanpratapsingh',
  links: {
    github: 'https://github.com/karanpratapsingh',
    linkedin: 'https://linkedin.com/in/karan99',
    twitter: 'https://twitter.com/karan_6864',
    youtube: 'https://www.youtube.com/c/KaranPratapSingh',
    email: 'mailto:contact@karanpratapsingh.com',
    buymeacoffee: 'https://www.buymeacoffee.com/karanps',
    freelancer: 'https://www.freelancer.com/u/Pauxiel',
  },
};

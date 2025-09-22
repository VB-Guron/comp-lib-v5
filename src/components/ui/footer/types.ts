export interface SocialMediaLink {
  platform: 'facebook' | 'twitter' | 'linkedin';
  url: string;
  icon?: React.ReactNode;
}

export interface ContactInfo {
  email: string;
  phone: string;
}

export interface CompanyInfo {
  name: string;
  description: string;
  learnMoreUrl?: string;
  learnMoreText?: string;
}

export interface FooterLink {
  label: string;
  url: string;
  target?: '_blank' | '_self';
}

export interface CopyrightInfo {
  year: number;
  productName: string;
  version: string;
  designedBy: string;
  designedByUrl?: string;
}

export interface FooterProps {
  company?: CompanyInfo;
  links?: FooterLink[];
  contact?: ContactInfo;
  socialMedia?: SocialMediaLink[];
  copyright?: CopyrightInfo;
  className?: string;
}
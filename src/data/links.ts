export interface LinkItem {
  id: string;
  title: string;
  url: string;
  description?: string;
  icon?: string;
  featured?: boolean;
  category?: "social" | "work" | "project" | "other";
}

export interface ProfileData {
  name: string;
  bio: string;
  avatar: string;
  location?: string;
  email?: string;
}

export const profileData: ProfileData = {
  name: "Muhammad Dwi Susanto",
  bio: "Creative Developer & Digital Enthusiast",
  avatar: "/images/profile.jpg",
  location: "Bogor, Indonesia",
  email: "dwisusanto784@gmail.com",
};

export const links: LinkItem[] = [
  {
    id: "github",
    title: "GitHub",
    url: "https://github.com/mdwisu",
    description: "My code repositories",
    icon: "github",
    featured: true,
    category: "work",
  },
  {
    id: "portfolio",
    title: "Portfolio",
    url: "https://mdwisu.com",
    description: "My latest works",
    icon: "briefcase",
    featured: true,
    category: "work",
  },
  {
    id: "linkedin",
    title: "LinkedIn",
    url: "https://www.linkedin.com/in/muhammad-dwi-susanto-684298201",
    description: "Professional network",
    icon: "linkedin",
    category: "social",
  },
  {
    id: "twitter",
    title: "Twitter",
    url: "https://twitter.com/Mdwis_",
    description: "Thoughts and updates",
    icon: "twitter",
    category: "social",
  },
  {
    id: "instagram",
    title: "Instagram",
    url: "https://instagram.com/mdwisu",
    description: "Follow me on Instagram",
    icon: "instagram",
    category: "social",
  },
  {
    id: "youtube",
    title: "YouTube",
    url: "https://youtube.com/@muhammaddwisusanto5925",
    description: "Watch my videos",
    icon: "youtube",
    category: "social",
  },
];

export const socialLinks = [
  {
    name: "GitHub",
    url: "https://github.com/mdwisu",
    icon: "github",
  },
  {
    name: "LinkedIn",
    url: "https://www.linkedin.com/in/muhammad-dwi-susanto-684298201",
    icon: "linkedin",
  },
  {
    name: "Twitter",
    url: "https://twitter.com/Mdwis_",
    icon: "twitter",
  },
  {
    name: "Instagram",
    url: "https://instagram.com/mdwisu",
    icon: "instagram",
  },
  {
    name: "YouTube",
    url: "https://youtube.com/@muhammaddwisusanto5925",
    icon: "youtube",
  },
];

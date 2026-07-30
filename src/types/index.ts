import { ReactNode } from "react";

export interface NavLinkItem {
  id: string;
  label: string;
}

export interface GalleryImageItem {
  src: string;
  label: string;
  sub: string;
}

export interface FeatureItem {
  icon: ReactNode;
  title: string;
  desc: string;
}

export interface TestimonialItem {
  name: string;
  role: string;
  initials: string;
  quote: string;
}

export interface SocialLinkItem {
  label: string;
  href: string;
  icon: ReactNode;
}

export type CTAButtonVariant = "primary" | "whatsapp" | "outline";
export type CTAButtonSize = "sm" | "md" | "lg";

export interface CTAButtonProps {
  href?: string;
  children: ReactNode;
  size?: CTAButtonSize;
  variant?: CTAButtonVariant;
  className?: string;
  onClick?: () => void;
  ariaLabel?: string;
}

export interface FadeInProps {
  children: ReactNode;
  className?: string;
  delay?: number;
}

export interface SectionHeadingProps {
  tag: string;
  children: ReactNode;
  id?: string;
}

export interface IconProps {
  size?: number | string;
  className?: string;
}

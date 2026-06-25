import type { LucideIcon } from "lucide-react";

export interface SectionContent {
  title: string;
  subtitle: string;
}

export interface BaseCard {
  id: number;
  title: string;
  description: string;
}

export interface IconCard extends BaseCard {
  icon: LucideIcon;
}

export interface ImageCard extends BaseCard {
  image: string;
}
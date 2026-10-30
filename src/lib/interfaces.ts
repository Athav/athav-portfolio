import type { ReactNode } from "react";
import type { SxProps, Theme } from "@mui/material";
import type { IconType } from "react-icons";

export interface GradientBlobProps {
    top?: string | number;
    left?: string | number;
    right?: string | number;
    bottom?: string | number;
    color: string;
    delay?: number;
}

export interface RevealProps {
    children: ReactNode;
    delay?: number;
    sx?: SxProps<Theme>;
}

export interface SpotlightCardProps {
    children: ReactNode;
    sx?: SxProps<Theme>;
}

export interface NavItem { id: string; label: string }
export interface ExperienceItem { date: string; company: string; title: string; body: string }
export interface ProjectItem { tag: string; title: string; body: string; tech: string[] }
export interface EducationItem { title: string; school: string; date: string; grade: string }
export interface TechItem { name: string; Icon: IconType; color: string }
export interface SkillSet { name: string; items: TechItem[] }

import { type SxProps, type Theme } from "@mui/material";

export interface GradientBlobProps {
    top?: string | number;
    left?: string | number;
    right?: string | number;
    bottom?: string | number;
    color: string;
    delay?: number;
}

export interface RevealProps {
    children: React.ReactNode;
    delay?: number;
    [key: string]: any;
}

export interface SpotlightCardProps {
    children: React.ReactNode;
    sx?: SxProps<Theme>;
}
import { PropsWithChildren } from "react";

export type VisibleSection = "biography" | "experience" | "projects" | null;

export type ObservedComponent = {
  setInView: (inView: boolean, entry: any) => void;
  visibleSection: VisibleSection;
};

export interface AnchorProps extends PropsWithChildren {
  className?: string;
  href: string;
  label?: string;
  isExternal?: boolean;
}

export interface NavigationProps {
  visibleSection: VisibleSection;
}

export interface NavItemProps extends PropsWithChildren {
  visibleSection?: VisibleSection;
  id?: VisibleSection;
  linkProps?: AnchorProps;
}

export interface TagProps {
  tag: string;
}

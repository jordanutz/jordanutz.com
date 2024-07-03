import { NavigationProps } from "../types";
import { NavItem } from "./NavItem";

export function Navigation(props: NavigationProps) {
  const { visibleSection } = props;

  return (
    <nav className="navigation">
      <ul className="navigation__list">
        <NavItem visibleSection={visibleSection} id="biography">
          Biography
        </NavItem>
        <NavItem visibleSection={visibleSection} id="experience">
          Experience
        </NavItem>
        <NavItem visibleSection={visibleSection} id="projects">
          Projects
        </NavItem>
        <NavItem linkProps={{ href: "/resume.pdf", isExternal: true }}>
          Resume
        </NavItem>
      </ul>
    </nav>
  );
}

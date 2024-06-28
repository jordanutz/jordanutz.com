import { NavItemProps } from "../types";
import { Anchor } from "./Anchor";

export function NavItem(props: NavItemProps) {
  const { id, children, visibleSection } = props;

  const casted = children as string;

  return (
    <li
      className={`${visibleSection === casted.toLowerCase() ? "active" : ""}`}
    >
      <Anchor href={`#${id}`}>{children}</Anchor>
    </li>
  );
}

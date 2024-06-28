import { AnchorProps } from "../types";

export const Anchor = (props: AnchorProps) => {
  const {
    children,
    className = "",
    href,
    label = "",
    isExternal = false,
  } = props;

  return (
    <a
      aria-label={label}
      className={`anchor ${className}`}
      href={href}
      target={isExternal ? "_blank" : undefined}
      rel={isExternal ? "noopener noreferrer" : undefined}
    >
      {children}
    </a>
  );
};

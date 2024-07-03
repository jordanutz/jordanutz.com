import { PropsWithChildren } from "react";
import { IoArrowForwardOutline } from "react-icons/io5";
import { Anchor, Tag } from "./";
import { AnchorProps } from "../types";
import "../styles/card.css";

interface CardProps extends PropsWithChildren {
  heading: string;
  subheading?: string;
  linkProps: AnchorProps;
  tags: string[];
  marker: JSX.Element;
}

export function Card(props: CardProps) {
  const { heading, subheading, children, tags, linkProps, marker } = props;

  return (
    <li className="card">
      <Anchor {...linkProps}>
        <div className="card-marker">{marker}</div>
        <div className="card-content">
          <h3>
            {heading} <IoArrowForwardOutline className="card-icon" />
          </h3>
          <h4>{subheading}</h4>
          <span className="card-text">{children}</span>
          <div className="card-tags">
            {tags.map((tag: string) => (
              <Tag tag={tag} key={tag} />
            ))}
          </div>
        </div>
      </Anchor>
    </li>
  );
}

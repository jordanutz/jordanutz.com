import { TagProps } from "../types";
import "../styles/tag.css";

export function Tag(props: TagProps) {
  return <span className="tag">{props.tag}</span>;
}

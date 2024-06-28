import { Anchor } from "./";
import {
  RiLinkedinFill,
  RiInstagramFill,
  RiGithubFill,
  RiSpotifyFill,
} from "react-icons/ri";
import "../styles/social.css";

export function Social() {
  return (
    <section className="social">
      <Anchor href="https://github.com/jordanutz" label="Github" isExternal>
        <RiGithubFill />
      </Anchor>
      <Anchor
        href="https://www.linkedin.com/in/jordanutz/"
        label="LinkedIn"
        isExternal
      >
        <RiLinkedinFill />
      </Anchor>
      <Anchor
        href="https://www.instagram.com/thejordanutz/"
        label="Instagram"
        isExternal
      >
        <RiInstagramFill />
      </Anchor>
      <Anchor
        href="https://open.spotify.com/user/jordanuky"
        label="Spotify"
        isExternal
      >
        <RiSpotifyFill />
      </Anchor>
    </section>
  );
}

import { InView } from "react-intersection-observer";
import { Card } from ".";
import { ObservedComponent } from "../types";
import "../styles/block.css";

export function Projects(props: ObservedComponent) {
  const key = "projects";
  return (
    <InView onChange={props.setInView} threshold={0.5} key={key}>
      {({ ref }) => {
        return (
          <section className="projects block" id={key} ref={ref}>
            <h3 className={props.visibleSection === key ? "active" : ""}>
              Projects
            </h3>
            <ol>
              <Card
                heading="Open Graph Tag Generator"
                linkProps={{
                  href: "https://github.com/jordanutz/open-graph-tag-generator",
                  isExternal: true,
                }}
                tags={["React", "TypeScript", "JavaScript", "CSS3"]}
                marker={
                  <picture>
                    <img src="/images/opengraph.webp" alt="" />
                  </picture>
                }
              >
                Web application that dynamically generates Open Graph tags by
                using information derived from custom meta keys. The value set
                for all Open Graph tags is based on their meta counterpart or
                static placeholders, unless a custom value is specified.
              </Card>
              <Card
                heading="WeatherFi"
                linkProps={{
                  href: "https://github.com/jordanutz/weatherfi",
                  isExternal: true,
                }}
                tags={["React", "JavaScript", "SCSS", "Axios"]}
                marker={
                  <picture>
                    <img src="/images/weather.webp" alt="" />
                  </picture>
                }
              >
                Web application that utilizes the WeatherAPI to generate a
                three-day weather forecast. Users can search by city and state
                or zip code to retrieve the forecast for their location. The
                forecast is visualized using a series of cards with current
                highlighted.
              </Card>
              <Card
                heading="React Calculator"
                linkProps={{
                  href: "https://github.com/jordanutz/react-calculator",
                  isExternal: true,
                }}
                tags={["React", "JavaScript", "SCSS", "HTML5"]}
                marker={
                  <picture>
                    <img src="/images/calculator.webp" alt="" />
                  </picture>
                }
              >
                React-powered calculator with a stylish user interface. The
                expression is not evaluated until explicit computation is
                triggered by the user after the selection of an operator.
                Validation states are applied to buttons to minimize user error.
              </Card>
              <Card
                heading="Quiz Time"
                linkProps={{
                  href: "https://github.com/jordanutz/quiz-time",
                  isExternal: true,
                }}
                tags={["React", "TypeScript", "SCSS", "Axios"]}
                marker={
                  <picture>
                    <img src="/images/quiz.webp" alt="" />
                  </picture>
                }
              >
                An intuitive trivia game that tests players on their knowledge
                of video games using questions from the Open Trivia API. Visual
                cues are used to indicate whether the player's selection is
                correct or incorrect, and their progress is tracked with each
                question.
              </Card>
            </ol>
          </section>
        );
      }}
    </InView>
  );
}

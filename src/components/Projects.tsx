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
                link="https://github.com/jordanutz/open-graph-tag-generator"
                tags={["React", "TypeScript", "JavaScript", "CSS3"]}
                marker={
                  <picture>
                    <img src="/images/opengraph.webp" alt="" />
                  </picture>
                }
              >
                Web application that dynamically generates Open Graph tags by
                using information derived from custom meta keys. The value is
                set for all required Open Graph tags based on their meta
                counterpart or static placeholders, unless a custom value is
                specified.
              </Card>
              <Card
                heading="WeatherFi"
                link="https://github.com/jordanutz/weatherfi"
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
                forecast is displayed across a series of cards, with the default
                forecast set to the current date.
              </Card>
              <Card
                heading="React Calculator"
                link="https://github.com/jordanutz/react-calculator"
                tags={["React", "JavaScript", "SCSS", "HTML5"]}
                marker={
                  <picture>
                    <img src="/images/calculator.webp" alt="" />
                  </picture>
                }
              >
                React-powered calculator with a stylish and accessible
                interface. The expression is not evaluated until explicit
                computation is triggered by the user after the selection of an
                operator. Validation states are applied to buttons to ensure
                that user error is minimized.
              </Card>
              <Card
                heading="Quiz Time"
                link="https://github.com/jordanutz/quiz-time"
                tags={["React", "TypeScript", "SCSS", "Axios"]}
                marker={
                  <picture>
                    <img src="/images/quiz.webp" alt="" />
                  </picture>
                }
              >
                "An intuitive trivia game that tests players on their knowledge
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

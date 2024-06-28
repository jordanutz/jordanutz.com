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
                    <img src="/images/opengraph.webp" />
                  </picture>
                }
              >
                Web application that dynamically generates Open Graph tags using
                information derived from custom meta keys. Value set for all
                required open graph tags is derived from its meta counterpart or
                static placeholders, unless a custom value is set for it.
              </Card>
              <Card
                heading="WeatherFi"
                link="https://github.com/jordanutz/weatherfi"
                tags={["React", "JavaScript", "SCSS", "Axios"]}
                marker={
                  <picture>
                    <img src="/images/weather.webp" />
                  </picture>
                }
              >
                Web application that generates the three day weather forecast
                using the WeatherAPI. The user can search by city and state or
                zip code to retrieve forecast for their location. Cards used to
                render the three day forecast, active defaulting to the current
                date. ​
              </Card>
              <Card
                heading="React Calculator"
                link="https://github.com/jordanutz/react-calculator"
                tags={["React", "JavaScript", "SCSS", "HTML5"]}
                marker={
                  <picture>
                    <img src="/images/calculator.webp" />
                  </picture>
                }
              >
                React powered calculator with a stylish and accessible
                interface. The expression is not evaluated until explicit
                computation is triggered by the user subsequent to the selection
                of an operant. Validation states applied to buttons to ensure
                that user error is minimized.
              </Card>
              <Card
                heading="Quiz Time"
                link="https://github.com/jordanutz/quiz-time"
                tags={["React", "TypeScript", "SCSS", "Axios"]}
                marker={
                  <picture>
                    <img src="/images/quiz.webp" />
                  </picture>
                }
              >
                Intuitive trivia game that tests players on their knowledge of
                video games with questions retrieved from the Open Trivia API.
                Visual cues are leveraged to alert the player if their selection
                is correct or incorrect, and their progress is tracked with each
                question.
              </Card>
            </ol>
          </section>
        );
      }}
    </InView>
  );
}

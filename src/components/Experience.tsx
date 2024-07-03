import { InView } from "react-intersection-observer";
import { ObservedComponent } from "../types";
import { Card } from "./";
import "../styles/block.css";

export function Experience(props: ObservedComponent) {
  const key = "experience";

  return (
    <InView onChange={props.setInView} threshold={0.5} key={key}>
      {({ ref }) => {
        return (
          <section className="experience block" id={key} ref={ref}>
            <h3 className={props.visibleSection === key ? "active" : ""}>
              Experience
            </h3>
            <ol>
              <Card
                heading="Senior Front End Engineer"
                subheading="Kroger Technology & Digital"
                link="https://www.kroger.com"
                tags={[
                  "React",
                  "TypeScript",
                  "JavaScript",
                  "Redux",
                  "Figma",
                  "React Test Library",
                ]}
                marker={<span>2021 - Present</span>}
              >
                Drove sales and improved customer shopping experiences by
                creating performant, reusable components for the authoring
                experience. Supported broader initiatives within the
                organization to reduce technical debt and optimize web
                performance.
              </Card>
              <Card
                heading="Front End Developer"
                subheading="WebstaurantStore"
                link="https://www.webstaurantstore.com/"
                tags={[
                  "React",
                  "TypeScript",
                  "JavaScript",
                  "Figma",
                  "Ant Design",
                  "Tailwind",
                  "Webpack",
                ]}
                marker={<span>2020 - 2021</span>}
              >
                Collaborated with product designers to develop new user
                interfaces for internal platforms and tools, ensuring ADA
                compliance and improving performance of internal application
                tools, thereby reducing build speeds for running and deployment.
              </Card>
              <Card
                heading="Web Developer"
                subheading="eLink Design"
                link="https://www.elinkdesign.com/"
                tags={[
                  "JavaScript",
                  "HTML5",
                  "CSS3",
                  "Vue",
                  "WordPress",
                  "Bootstrap 4",
                  "PHP",
                ]}
                marker={<span>2019 - 2020</span>}
              >
                Designed and developed responsive and cross-browser compatible
                websites. Collaborated with clients across the Bluegrass region,
                enabling communication and managing their projects from the
                initial concept phase through to the final launch.
              </Card>
            </ol>
          </section>
        );
      }}
    </InView>
  );
}

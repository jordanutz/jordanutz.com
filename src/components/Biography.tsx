import { InView } from "react-intersection-observer";
import { ObservedComponent } from "../types";
import { Anchor } from "./";

export function Biography(props: ObservedComponent) {
  const key = "biography";
  return (
    <InView onChange={props.setInView} threshold={0.5} key={key}>
      {({ ref }) => {
        return (
          <section
            className={`biography block ${
              props.visibleSection === key ? "active" : ""
            }`}
            id={key}
            ref={ref}
          >
            <h3>About</h3>
            <p>
              Before I plunged into web development, my knowledge of its inner
              workings was limited to what I learned creating templates for
              Myspace as a hobby in high school. Years later, after my plans to
              pursue a career in the medical field upon graduating from the{" "}
              <Anchor href="https://www.uky.edu/" isExternal>
                University of Kentucky{" "}
              </Anchor>{" "}
              were suddenly derailed, I found myself gravitating back to
              technology. To level up my skills, I enrolled at{" "}
              <Anchor href="https://www.devmountain.com" isExternal>
                DevMountain
              </Anchor>
              , completing their Full Stack Web Development course before
              powering on a career that has given me the opportunity to work at
              a{" "}
              <Anchor href="https://www.elinkdesign.com/" isExternal>
                marketing agency
              </Anchor>
              ,{" "}
              <Anchor href="https://www.webstaurantstore.com/" isExternal>
                an e-commerce platform
              </Anchor>
              , and a{" "}
              <Anchor href="https://www.kroger.com" isExternal>
                Fortune 500 company
              </Anchor>
              .
            </p>
            <p>
              While developing features that elevate the customer-facing
              experience for the nation’s largest grocery retailer, I remain
              deeply invested in what allows me to disconnect from technology
              entirely. I spend my free time exploring new terrains, practicing
              hot yoga, and writing my debut novel. If you think I’d be an
              excellent fit for an open role you are hiring for, let’s{" "}
              <Anchor href="mailto:jordanutz@outlook.com">
                set something up
              </Anchor>
              . Currently, I am only considering opportunities that are 100%
              remote, but I'm willing to make an exception for the right offer.{" "}
            </p>
          </section>
        );
      }}
    </InView>
  );
}

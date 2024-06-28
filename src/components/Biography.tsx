import { InView } from "react-intersection-observer";
import { ObservedComponent } from "../types";

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
              Jordan Utz has spent the last five years contributing software
              solutions to several companies as a front-end engineer, acquiring
              an accomplished skill set that allows him to confidently craft
              user interfaces that are engaging, responsive, and accessible to
              all. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
              do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat.
            </p>
            <p>
              While delivering features that elevate the customer-facing
              experience for the nation’s largest grocery retailer, Jordan
              remains deeply invested in what allows him to disconnect from
              technology entirely - a fitness journey, practicing real estate,
              and writing his debut novel. Lorem ipsum dolor sit amet,
              consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
              labore et dolore magna aliqua. Ut enim ad minim veniam, quis
              nostrud exercitation.{" "}
            </p>
          </section>
        );
      }}
    </InView>
  );
}

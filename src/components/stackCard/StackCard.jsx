import React from "react";
import { useSprings, animated } from "@react-spring/web";

import Spring from "../Spring";

import styles from "./styles.module.css";

const to = (i) => ({
  x: 0,
  y: i * -4,
  scale: 1,
  rot: 0,
  delay: i * 100,
});
const from = (_i) => ({ x: 0, rot: 0, scale: 1.5, y: -1000 });

export default function StackCard({ cards }) {
  const [props] = useSprings(cards.length, (i) => ({
    ...to(i),
    from: from(i),
  })); // Create a bunch of springs using the helpers above
  // Create a gesture, we're interested in down-state, delta (current-pos - click-pos), direction and velocity

  // Now we're just mapping the animated values to our view, that's it. Btw, this component only renders once. :-)
  return (
    <>
      {props.map(({ x, y }, i) => (
        <animated.div className={styles.deck} key={i} style={{ x, y }}>
          <Spring front={cards[i].front} back={cards[i].back} />
        </animated.div>
      ))}
    </>
  );
}

import React from "react";
import { useSprings, animated } from "@react-spring/web";

import styles from "./styles.module.css";
import FlippedCard from "../FlippedCard";

const to = (i) => ({
  x: 0,
  y: i * -10,
  scale: 1,
  rot: 0,
  delay: i * 100,
});
const from = (_i) => ({ x: 0, rot: 0, scale: 1.5, y: -1000 });

export default function StackCard({ cards }) {
  const [props] = useSprings(cards.length, (i) => ({
    ...to(i),
    from: from(i),
  }));

  return (
    <div className="relative h-[52vh] my-auto">
      {props.map(({ x, y }, i) => (
        <animated.div className={styles.deck} key={i} style={{ x, y }}>
          <FlippedCard
            front={cards[i].front}
            back={cards[i].back}
            src={cards[i].src}
          />
        </animated.div>
      ))}
    </div>
  );
}

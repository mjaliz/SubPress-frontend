import React, { useState } from "react";
import { useSpring, a } from "@react-spring/web";

import styles from "./styles.module.css";
import FlashCard from "./FlashCard";

export default function FillipedCard({ front, back }) {
  const [flipped, set] = useState(false);
  const { transform, opacity } = useSpring({
    opacity: flipped ? 1 : 0,
    transform: `perspective(2000px) rotateY(${flipped ? 180 : 0}deg)`,
    config: { mass: 5, tension: 400, friction: 100 },
  });
  return (
    <div className={styles.container} onClick={() => set((state) => !state)}>
      <a.div
        className={`${styles.c}`}
        style={{ opacity: opacity.to((o) => 1 - o), transform }}
      >
        <FlashCard word={front[0]} sentence={front[1]} />
      </a.div>
      <a.div
        className={`${styles.c}`}
        style={{
          opacity,
          transform,
          rotateY: "180deg",
        }}
      >
        <FlashCard word={back[0]} sentence={back[1]} />
      </a.div>
    </div>
  );
}

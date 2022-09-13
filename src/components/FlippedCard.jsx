import React, { useState } from "react";
import { useSpring, a } from "@react-spring/web";

import styles from "./styles.module.css";
import FlashCard from "./FlashCard";

export default function FlippedCard({ src, front, back }) {
  const [flipped, set] = useState(true);
  const { transform, opacity } = useSpring({
    opacity: flipped ? 1 : 0,
    transform: `perspective(2000px) rotateY(${flipped ? 180 : 0}deg)`,
    config: { mass: 5, tension: 400, friction: 100 },
  });
  const handleFillipCard = () => {
    set((state) => !state);
    console.log("clicked");
  };

  return (
    <div className={styles.container}>
      <a.div
        className={`${styles.c}`}
        style={{ opacity: opacity.to((o) => 1 - o), transform }}
      >
        <FlashCard
          src={src}
          word={back[0]}
          sentence={back[1]}
          onClick={handleFillipCard}
          flipped={flipped}
        />
      </a.div>
      <a.div
        className={`${styles.c}`}
        style={{
          opacity,
          transform,
          rotateY: "180deg",
        }}
      >
        <FlashCard
          src={src}
          word={front[0]}
          sentence={front[1]}
          onClick={handleFillipCard}
          flipped={flipped}
        />
      </a.div>
    </div>
  );
}

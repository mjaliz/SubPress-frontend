import React from "react";
import { useSprings, animated } from "@react-spring/web";

import styles from "./styles.module.css";
import FlippedCard from "../FlippedCard";
import { useDispatch, useSelector } from "react-redux";
import { getSelectedFlashCards, loadFlashCards } from "../../store/flashCard";
import { useEffect } from "react";

const to = (i) => ({
  x: 0,
  y: i * -10,
  scale: 1,
  rot: 0,
  delay: i * 100,
});
const from = (_i) => ({ x: 0, rot: 0, scale: 1.5, y: -1000 });

export default function StackCard() {
  const flashCards = useSelector(getSelectedFlashCards);
  const cards = flashCards.slice(-3);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(loadFlashCards());
  }, [dispatch]);

  const [props] = useSprings(cards.length, (i) => ({
    ...to(i),
    from: from(i),
  }));

  return (
    <div className="relative h-[52vh] my-auto">
      {props.map(({ x, y }, i) => (
        <animated.div className={styles.deck} key={i} style={{ x, y }}>
          <FlippedCard
            src={cards[i].src}
            front={cards[i].front}
            back={cards[i].back}
          />
        </animated.div>
      ))}
    </div>
  );
}

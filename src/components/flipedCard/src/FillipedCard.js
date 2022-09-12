import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import "./styles.css";

var cardId = "whale";

export default function FillipedCard() {
  let [revealed, setRevealed] = useState(false);

  let clickHandler = () => setRevealed((prevRevealed) => !prevRevealed);

  return (
    <div className="App">
      <AnimatePresence mode="wait">
        <Card
          key={`${cardId}-${revealed}`}
          cardId={cardId}
          clickHandler={clickHandler}
          revealed={revealed}
        />
      </AnimatePresence>
    </div>
  );
}

function Card({ cardId, clickHandler, revealed }) {
  let cardProps = {
    layoutId: cardId,
    id: cardId,
    className: "card",
    onClick: clickHandler,
  };
  let animationProps = {
    initial: { rotateY: 180 },
    animate: { rotateY: 170, transition: { duration: 3 } },
    exit: { rotateY: 170, transition: { duration: 3 } },
  };
  return (
    <motion.div {...cardProps} {...animationProps}>
      <img alt={cardId} src={`images/${revealed ? cardId : "back"}.png`} />
    </motion.div>
  );
}

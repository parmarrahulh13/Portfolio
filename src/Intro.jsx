import { useEffect } from "react";
import { motion } from "motion/react";
import HyperText from "./HyperText";

function Intro({ onComplete }) {

  useEffect(() => {
    const timer = setTimeout(() => {
      onComplete();
    }, 2500);

    return () => clearTimeout(timer);
  }, [onComplete]);

  return (
    <motion.div
      className="intro"
      initial={{ opacity: 1 }}
      exit={{
        opacity: 0,
        scale: 1,
      }}
      transition={{
        duration: 0.8,
      }}
    >
      <HyperText
        duration={1200}
        delay={300}
        animateOnHover={false}
        className="intro-name"
      >
        RAHUL
      </HyperText>
    </motion.div>
  );
}

export default Intro;
import { useEffect, useRef, useState } from "react";
import { motion } from "motion/react";

const DEFAULT_CHARACTER_SET =
  "ABCDEFGHIJKLMNOPQRSTUVWXYZ".split("");

const getRandomInt = (max) =>
  Math.floor(Math.random() * max);

function HyperText({
  children,
  className = "",
  duration = 800,
  delay = 0,
  startOnView = false,
  animateOnHover = true,
  characterSet = DEFAULT_CHARACTER_SET,
}) {
  const [displayText, setDisplayText] = useState(
    children.split("")
  );

  const [isAnimating, setIsAnimating] = useState(false);

  const iterationCount = useRef(0);
  const elementRef = useRef(null);

  const handleAnimationTrigger = () => {
    if (animateOnHover && !isAnimating) {
      iterationCount.current = 0;
      setIsAnimating(true);
    }
  };

  useEffect(() => {
    if (!startOnView) {
      const timeout = setTimeout(() => {
        setIsAnimating(true);
      }, delay);

      return () => clearTimeout(timeout);
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setTimeout(() => {
            setIsAnimating(true);
          }, delay);

          observer.disconnect();
        }
      },
      {
        threshold: 0.1,
      }
    );

    if (elementRef.current) {
      observer.observe(elementRef.current);
    }

    return () => observer.disconnect();
  }, [delay, startOnView]);

  useEffect(() => {
    let animationFrameId;

    if (isAnimating) {
      const maxIterations = children.length;
      const startTime = performance.now();

      const animate = (currentTime) => {
        const elapsed = currentTime - startTime;

        const progress = Math.min(
          elapsed / duration,
          1
        );

        iterationCount.current =
          progress * maxIterations;

        setDisplayText((currentText) =>
          currentText.map((letter, index) =>
            letter === " "
              ? letter
              : index <= iterationCount.current
              ? children[index]
              : characterSet[
                  getRandomInt(characterSet.length)
                ]
          )
        );

        if (progress < 1) {
          animationFrameId =
            requestAnimationFrame(animate);
        } else {
          setIsAnimating(false);
        }
      };

      animationFrameId =
        requestAnimationFrame(animate);
    }

    return () => {
      if (animationFrameId) {
        cancelAnimationFrame(animationFrameId);
      }
    };
  }, [
    children,
    duration,
    isAnimating,
    characterSet,
  ]);

  return (
    <motion.div
      ref={elementRef}
      className={`overflow-hidden py-2 text-4xl font-bold ${className}`}
      onMouseEnter={handleAnimationTrigger}
    >
      {displayText.map((letter, index) => (
        <motion.span
          key={index}
          className={`font-mono ${
            letter === " " ? "w-3" : ""
          }`}
        >
          {letter.toUpperCase()}
        </motion.span>
      ))}
    </motion.div>
  );
}

export default HyperText;
import { animate, useSpring, useTransform } from "framer-motion";
import { useEffect } from "react";

type Options = {
  value: number;
  type?: "percentage" | "numeric";
};

const useMotionValue = (options: Options) => {
  const { value, type = "numeric" } = options;
  const count = useSpring(0);
  const rounded = useTransform(count, (latest) => {
    return `${latest.toFixed(0)}${type === "percentage" ? "%" : "+"}`;
  });

  useEffect(() => {
    const controls = animate(count, value, { duration: 3 });
    return controls.stop;
  }, [count, value]);
  return rounded;
};

export default useMotionValue;

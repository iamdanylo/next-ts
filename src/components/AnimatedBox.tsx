import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { FC, useEffect, useMemo } from "react";

type Props = {
  children: any;
  delay?: number;
  duration?: number;
  disableYAnimation?: boolean;
};

const AnimatedBox: FC<Props> = ({ children, delay, duration, disableYAnimation = false }) => {
  const control = useAnimation();
  const [ref, inView] = useInView();

  useEffect(() => {
    if (inView) {
      control.start("visible");
    }
  }, [control, inView]);

  return (
    <motion.div
      ref={ref}
      variants={{
        visible: { opacity: 1, y: 0, transition: { duration: duration || 0.6, delay: delay || 0.2 } },
        hidden: { opacity: 0, y: disableYAnimation ? 0 : 30 },
      }}
      initial="hidden"
      animate={control}
    >
      {children}
    </motion.div>
  );
};

export default AnimatedBox;

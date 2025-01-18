import { motion, AnimatePresence } from "framer-motion";

const slideIn = {
    hidden: { y: "100%", opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      zIndex: 2,
      transition: { type: "spring", stiffness: 300, damping: 30 },
    },
    exit: {
      y: "-100%",
      opacity: 0,
      zIndex: 1,
      transition: { type: "spring", stiffness: 300, damping: 30 },
    },
  };
  
export const MotionComponent = ({ Component }) => {
    return (
      <AnimatePresence>
        <motion.div
          className={Component.name.toLowerCase()}
          variants={slideIn}
          initial="hidden"
          animate="visible"
          exit="exit"
        >
          <Component />
        </motion.div>
      </AnimatePresence>
    );
  };
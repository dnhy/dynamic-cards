"use client";

import clsx from "clsx";
import { AnimatePresence, motion } from "framer-motion";
import "./overlayAlways.css";

export const PostItemHoverOverlayAlways = ({
  border,
}: {
  border: React.CSSProperties;
}) => {
  return (
    <>
      <div className="absolute inset-0 z-50" />

      <AnimatePresence initial={false}>
        {
          <motion.div
            layout
            initial={{
              opacity: 0.2,
              scale: 0.95,
            }}
            animate={{
              opacity: 1,
              scale: 1,
            }}
            exit={{
              opacity: 0,
              scale: 0.95,
            }}
            layoutId="222"
            key="222"
            className={clsx(
              "absolute  rounded-lg h-full",
              "bg-accent/10 dark:bg-neutral-800",
              "inset-y-4 left-[1px] right-[1px] top-[1px]",
              "fitscreen"
            )}
            style={border}
          />
        }
      </AnimatePresence>
    </>
  );
};

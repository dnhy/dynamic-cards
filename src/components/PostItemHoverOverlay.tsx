"use client";

import { useEffect, useRef, useState } from "react";
import clsx from "clsx";
import { AnimatePresence, motion } from "framer-motion";

export const PostItemHoverOverlay = ({
  border,
}: {
  border: React.CSSProperties;
}) => {
  const [mouseEnter, setMouseEnter] = useState(false);

  const ref = useRef<HTMLDivElement>(null);
  useEffect(() => {
    const $ref = ref.current;
    if (!$ref) return;
    const $parent = $ref.parentElement;
    if (!$parent) return;
    $parent.onfocus = () => {
      setMouseEnter(true);
    };

    $parent.onblur = () => {
      setMouseEnter(false);
    };

    return () => {
      $parent.onfocus = null;
      $parent.onblur = null;
    };
  }, []);
  return (
    <>
      <div
        ref={ref}
        className="absolute inset-0 z-50"
        onMouseEnter={() => {
          setMouseEnter(true);
        }}
        onMouseLeave={() => {
          setMouseEnter(false);
        }}
      />

      <AnimatePresence initial={false}>
        {mouseEnter && (
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
            layoutId="111"
            key="111"
            className={clsx(
              "absolute  rounded-lg h-full",
              // "bg-accent/10 dark:bg-neutral-800",
              "inset-y-4 left-[1px] right-[1px] top-[1px]"
            )}
            style={border}
          />
        )}
      </AnimatePresence>
    </>
  );
};

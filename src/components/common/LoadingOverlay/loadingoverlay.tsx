/* eslint-disable react/display-name */
"use client";

import React, { useCallback, useRef } from "react";
import "./loadingoverlay.scss";
import { motion } from "framer-motion";
//import ReactLoading from "react-loading";

const LoadingOverlay = React.forwardRef<HTMLDivElement, any>((p, ref) => {
  const handlePreventInteraction = useCallback((e: React.MouseEvent | React.WheelEvent | React.KeyboardEvent | React.TouchEvent) => {
    e.preventDefault();
    e.stopPropagation();
  }, []);

  const handleContextMenu = useCallback((e: React.MouseEvent) => {
    e.preventDefault();
    return false;
  }, []);

  React.useEffect(() => {
    // Prevent body scroll when overlay is mounted
    const originalOverflow = document.body.style.overflow;
    document.body.style.overflow = 'hidden';

    // Cleanup on unmount
    return () => {
      document.body.style.overflow = originalOverflow;
    };
  }, []);

  return (
    <div
      className={"background"}
      ref={ref}
      onContextMenu={handleContextMenu}
      onWheel={handlePreventInteraction}
      onTouchMove={handlePreventInteraction}
      onKeyDown={handlePreventInteraction}
      style={{ userSelect: 'none' }}
    >
      <div>
        {/*<ReactLoading
          type="spinningBubbles"
          color="#052A38"
          width={50}
          className={styles.loading}
        />*/}

        {/* Circular Dots Spinner with More Dots */}
        <div className="relative h-28 w-28">
          {[...Array(12)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute h-2 w-2 rounded-full bg-white"
              animate={{
                opacity: [0.3, 1, 0.3],
                scale: [0.8, 1, 0.8],
              }}
              transition={{
                duration: 1.2,
                repeat: Infinity,
                delay: i * 0.1,
              }}
              style={{
                top: `calc(50% + ${Math.sin((i * Math.PI) / 6) * 30}px)`,
                left: `calc(50% + ${Math.cos((i * Math.PI) / 6) * 30}px)`,
                transform: "translate(-50%, -50%)",
              }}
            />
          ))}
        </div>
      </div>
    </div>
  );
});

export default LoadingOverlay;

export const LoadingOverlayContext = React.createContext<(s: boolean) => void>(
  () => {}
);

export const LoadingOverlayProvider = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  const loadingRef = useRef<HTMLDivElement>(null);

  const toggleLoading = useCallback((show: boolean) => {
    if (!loadingRef.current) return;

    loadingRef.current.className = show ? "shown" : "hidden";
  }, []);

  return (
    <LoadingOverlayContext.Provider value={toggleLoading}>
      <LoadingOverlay ref={loadingRef} />
      {children}
    </LoadingOverlayContext.Provider>
  );
};

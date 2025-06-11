import { useEffect } from "react";

export const useResizeObserver = (
  elementRef: React.RefObject<HTMLDivElement | null> | null,
  onResize: () => void
) => {
  useEffect(() => {
    const el = elementRef?.current ?? null;

    const observer = el ? new ResizeObserver(onResize) : null;

    if (el && observer) {
      observer.observe(el);
    }

    window.addEventListener("resize", onResize);
    onResize();

    return () => {
      if (el && observer) {
        observer.unobserve(el);
        observer.disconnect();
      }
      window.removeEventListener("resize", onResize);
    };
  }, [elementRef, onResize]);
};

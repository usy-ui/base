/* eslint-disable @typescript-eslint/no-explicit-any */
import { useEffect, useRef } from "react";

export const useOutsideClick = (callback: () => void, isDisabled?: boolean) => {
  const elementRef = useRef<HTMLDivElement>(null);
  const triggerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (isDisabled) {
      return;
    }

    const handleClick = (event: any) => {
      if (triggerRef.current) {
        if (
          elementRef.current &&
          triggerRef.current &&
          !elementRef.current.contains(event.target) &&
          !triggerRef.current.contains(event.target)
        ) {
          callback();
        }
        return;
      }

      if (elementRef.current && !elementRef.current.contains(event.target)) {
        callback();
      }
    };

    document.addEventListener("click", handleClick);

    return () => {
      document.removeEventListener("click", handleClick);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isDisabled]);

  return { elementRef, triggerRef };
};

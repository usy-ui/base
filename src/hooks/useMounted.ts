import { useEffect, useState } from "react";

export const useMounted = (): { isMounted: boolean } => {
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  return { isMounted };
};

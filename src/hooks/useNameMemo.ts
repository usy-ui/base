import { useEffect, useRef } from "react";

import { getUniqueTime } from "@src/utils";

export const useNameMemo = (name?: string, prefix?: string) => {
  const nameRef = useRef("");

  useEffect(() => {
    if (!nameRef.current) {
      nameRef.current = name || `${prefix}-${getUniqueTime()}`;
    }
  }, [name, prefix]);

  return { nameMemo: nameRef.current };
};

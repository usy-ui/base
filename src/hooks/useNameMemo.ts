import { useRef } from "react";

import { getUniqueTime } from "@src/utils";

export const useNameMemo = (name: string, prefix?: string) => {
  const nameRef = useRef(name || `${prefix}-${getUniqueTime()}`);

  return { nameMemo: nameRef.current };
};

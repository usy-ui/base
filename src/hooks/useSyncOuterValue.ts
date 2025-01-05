import { useEffect, Dispatch } from "react";

export const useSyncOuterValue = <T>(
  setValue: Dispatch<React.SetStateAction<T>>,
  value: T
) => {
  useEffect(() => {
    setValue(value);
  }, [value, setValue]);
};

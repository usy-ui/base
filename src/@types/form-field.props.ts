import { ChangeEvent, FocusEvent } from "react";

export type FormFieldProps<ValueType, ElementType = HTMLElement> = {
  value?: ValueType;
  disabled?: boolean;
  hasError?: boolean;
  onChange?: (value: ValueType, e?: ChangeEvent<ElementType>) => void;
  onBlur?: (value: ValueType, e?: FocusEvent<ElementType>) => void;
};

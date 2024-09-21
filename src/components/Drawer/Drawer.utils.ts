export const disableScroll = (isDisabledScroll: boolean) => {
  document.body.style.overflow = isDisabledScroll ? "hidden" : "auto";
};

import * as React from "react";
import type { SVGProps } from "react";
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const SvgBrandWindows = ({
  title,
  titleId,
  ...props
}: SVGProps<SVGSVGElement> & SVGRProps) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="20px"
    height="20px"
    fill="none"
    viewBox="0 0 24 24"
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <path
      fill="currentColor"
      fillRule="evenodd"
      d="M3.005 12 3 6.408l6.8-.923v6.517H3.005ZM11 5.32 19.997 4v8H11zM20.067 13l-.069 8-9.065-1.275L11 13zM9.8 19.58l-6.795-.931V13H9.8z"
      clipRule="evenodd"
    />
  </svg>
);
export default SvgBrandWindows;

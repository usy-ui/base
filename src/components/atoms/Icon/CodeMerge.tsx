import * as React from "react";
import type { SVGProps } from "react";
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const SvgCodeMerge = ({
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
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="M8 8v8m0-8a2 2 0 1 0 0-4 2 2 0 0 0 0 4m0 8a2 2 0 1 0 0 4 2 2 0 0 0 0-4m6-2a2 2 0 1 1 4 0 2 2 0 0 1-4 0m0 0h-1a5 5 0 0 1-5-5v-.5"
    />
  </svg>
);
export default SvgCodeMerge;

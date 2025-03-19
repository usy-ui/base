import * as React from "react";
import type { SVGProps } from "react";
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const SvgCommand = ({
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
      d="M8 8v8m0-8h8M8 8H6a2 2 0 1 1 2-2zm0 8h8m-8 0H6a2 2 0 1 0 2 2zm8 0V8m0 8h2a2 2 0 1 1-2 2zm0-8h2a2 2 0 1 0-2-2z"
    />
  </svg>
);
export default SvgCommand;

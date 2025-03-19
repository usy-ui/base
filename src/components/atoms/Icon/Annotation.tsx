import * as React from "react";
import type { SVGProps } from "react";
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const SvgAnnotation = ({
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
      d="M7.556 8.5h8m-8 3.5H12m7.111-7H4.89a.9.9 0 0 0-.629.256.87.87 0 0 0-.26.619v9.25c0 .232.094.455.26.619A.9.9 0 0 0 4.89 16H9l3 4 3-4h4.111a.9.9 0 0 0 .629-.256.87.87 0 0 0 .26-.619v-9.25a.87.87 0 0 0-.26-.619.9.9 0 0 0-.63-.256Z"
    />
  </svg>
);
export default SvgAnnotation;

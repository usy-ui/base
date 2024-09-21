import * as React from "react";
import type { SVGProps } from "react";
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const SvgBellActiveAlt = ({
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
      d="M12 5.365V3m0 2.365a5.34 5.34 0 0 1 5.133 5.368v1.8c0 2.386 1.867 2.982 1.867 4.175 0 .593 0 1.193-.538 1.193H5.538c-.538 0-.538-.6-.538-1.193 0-1.193 1.867-1.789 1.867-4.175v-1.8A5.34 5.34 0 0 1 12 5.365m-8.134 5.368a8.46 8.46 0 0 1 2.252-5.714m14.016 5.714a8.46 8.46 0 0 0-2.252-5.714M8.54 17.901a3.48 3.48 0 0 0 6.92 0z"
    />
  </svg>
);
export default SvgBellActiveAlt;

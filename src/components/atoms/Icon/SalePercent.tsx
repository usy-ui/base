import * as React from "react";
import type { SVGProps } from "react";
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const SvgSalePercent = ({
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
      d="M8.891 15.107 15.11 8.89m-5.183-.52h.01m3.089 7.254h.01M14.08 3.902a2.85 2.85 0 0 0 2.176.902 2.845 2.845 0 0 1 2.94 2.94 2.85 2.85 0 0 0 .901 2.176 2.847 2.847 0 0 1 0 4.16 2.85 2.85 0 0 0-.901 2.175 2.843 2.843 0 0 1-2.94 2.94 2.85 2.85 0 0 0-2.176.902 2.847 2.847 0 0 1-4.16 0 2.85 2.85 0 0 0-2.176-.902 2.845 2.845 0 0 1-2.94-2.94 2.85 2.85 0 0 0-.901-2.176 2.85 2.85 0 0 1 0-4.16 2.85 2.85 0 0 0 .901-2.176 2.845 2.845 0 0 1 2.941-2.94 2.85 2.85 0 0 0 2.176-.901 2.847 2.847 0 0 1 4.159 0"
    />
  </svg>
);
export default SvgSalePercent;

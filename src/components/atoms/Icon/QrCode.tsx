import * as React from "react";
import type { SVGProps } from "react";
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const SvgQrCode = ({
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
      strokeLinejoin="round"
      strokeWidth={2}
      d="M4 4h6v6H4zm10 10h6v6h-6zm0-10h6v6h-6zm-4 10h.01v.01H10zm0 4h.01v.01H10zm-3 2h.01v.01H7zm0-4h.01v.01H7zm-3 2h.01v.01H4zm0-4h.01v.01H4z"
    />
    <path
      stroke="currentColor"
      strokeLinejoin="round"
      strokeWidth={2}
      d="M7 7h.01v.01H7zm10 10h.01v.01H17z"
    />
  </svg>
);
export default SvgQrCode;

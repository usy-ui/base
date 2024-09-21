import * as React from "react";
import type { SVGProps } from "react";
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const SvgThumbsDown = ({
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
      d="M17 13c-.889.086-1.416.543-2.156 1.057a22.3 22.3 0 0 0-3.958 5.084 1.6 1.6 0 0 1-.582.628 1.55 1.55 0 0 1-1.466.087 1.6 1.6 0 0 1-.537-.406 1.67 1.67 0 0 1-.384-1.279l1.389-4.114M17 13h3V6.5A1.5 1.5 0 0 0 18.5 5v0A1.5 1.5 0 0 0 17 6.5zm-6.5 1H5.585c-.286 0-.372-.014-.626-.15a1.8 1.8 0 0 1-.637-.572 1.87 1.87 0 0 1-.215-1.673l2.098-6.4C6.462 4.48 6.632 4 7.88 4c2.302 0 4.79.943 6.67 1.475"
    />
  </svg>
);
export default SvgThumbsDown;

import * as React from "react";
import type { SVGProps } from "react";
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const SvgCalendarPlus = ({
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
      d="M4 9.05H3v2h1zm16 2h1v-2h-1zM10 14a1 1 0 1 0 0 2zm4 2a1 1 0 1 0 0-2zm-3 1a1 1 0 1 0 2 0zm2-4a1 1 0 1 0-2 0zm-2-5.95a1 1 0 1 0 2 0zm2-3a1 1 0 1 0-2 0zm-7 3a1 1 0 0 0 2 0zm2-3a1 1 0 1 0-2 0zm8 3a1 1 0 1 0 2 0zm2-3a1 1 0 1 0-2 0zm-13 3h14v-2H5zm14 0v12h2v-12zm0 12H5v2h14zm-14 0v-12H3v12zm0 0H3a2 2 0 0 0 2 2zm14 0v2a2 2 0 0 0 2-2zm0-12h2a2 2 0 0 0-2-2zm-14-2a2 2 0 0 0-2 2h2zm-1 6h16v-2H4zM10 16h4v-2h-4zm3 1v-4h-2v4zm0-9.95v-3h-2v3zm-5 0v-3H6v3zm10 0v-3h-2v3z"
    />
  </svg>
);
export default SvgCalendarPlus;

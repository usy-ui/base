import * as React from "react";
import type { SVGProps } from "react";
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const SvgBrandTwitter = ({
  title,
  titleId,
  ...props
}: SVGProps<SVGSVGElement> & SVGRProps) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="20px"
    height="20px"
    fill="currentColor"
    viewBox="0 0 24 24"
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <path
      fillRule="evenodd"
      d="M22 5.892a8.2 8.2 0 0 1-2.355.635 4.07 4.07 0 0 0 1.8-2.235 8.3 8.3 0 0 1-2.605.981A4.13 4.13 0 0 0 15.85 4a4.07 4.07 0 0 0-4.1 4.038q0 .466.105.919A11.7 11.7 0 0 1 3.4 4.734a4.006 4.006 0 0 0 1.268 5.392 4.2 4.2 0 0 1-1.859-.5v.05A4.06 4.06 0 0 0 6.1 13.635a4.2 4.2 0 0 1-1.856.07 4.11 4.11 0 0 0 3.831 2.807A8.36 8.36 0 0 1 2 18.184 11.73 11.73 0 0 0 8.291 20 11.5 11.5 0 0 0 19.964 8.5c0-.177 0-.349-.012-.523A8.1 8.1 0 0 0 22 5.892"
      clipRule="evenodd"
    />
  </svg>
);
export default SvgBrandTwitter;

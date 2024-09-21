import * as React from "react";
import type { SVGProps } from "react";
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const SvgBrandReddit = ({
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
      d="M12.008 16.521a3.84 3.84 0 0 0 2.47-.77v.04a.28.28 0 0 0 .005-.396.28.28 0 0 0-.395-.005 3.3 3.3 0 0 1-2.09.61 3.27 3.27 0 0 1-2.081-.63.27.27 0 0 0-.38.381 3.84 3.84 0 0 0 2.47.77Z"
    />
    <path
      fill="currentColor"
      fillRule="evenodd"
      d="M22 12c0 5.523-4.477 10-10 10S2 17.523 2 12 6.477 2 12 2s10 4.477 10 10m-4.845-1.407A1.463 1.463 0 0 1 18.67 12a1.46 1.46 0 0 1-.808 1.33q.015.22 0 .44c0 2.242-2.61 4.061-5.829 4.061s-5.83-1.821-5.83-4.061a3 3 0 0 1 0-.44 1.458 1.458 0 0 1-.457-2.327 1.46 1.46 0 0 1 2.063-.064 7.16 7.16 0 0 1 3.9-1.23l.738-3.47v-.006a.31.31 0 0 1 .37-.236l2.452.49a1 1 0 1 1-.132.611l-2.14-.45-.649 3.12a7.1 7.1 0 0 1 3.85 1.23c.259-.246.6-.393.957-.405"
      clipRule="evenodd"
    />
    <path
      fill="currentColor"
      d="M15.305 13a1 1 0 1 1-2 0 1 1 0 0 1 2 0m-4.625 0a1 1 0 1 1-2 0 1 1 0 0 1 2 0"
    />
  </svg>
);
export default SvgBrandReddit;

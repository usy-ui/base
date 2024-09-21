import * as React from "react";
import type { SVGProps } from "react";
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const SvgBrandDiscord = ({
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
    <path d="M18.942 5.556a16.3 16.3 0 0 0-4.126-1.3 12 12 0 0 0-.529 1.1 15.2 15.2 0 0 0-4.573 0 12 12 0 0 0-.535-1.1 16.3 16.3 0 0 0-4.129 1.3 17.4 17.4 0 0 0-2.868 11.662 15.8 15.8 0 0 0 4.963 2.521q.616-.847 1.084-1.785a10.6 10.6 0 0 1-1.706-.83q.215-.16.418-.331a11.66 11.66 0 0 0 10.118 0q.206.172.418.331-.817.492-1.71.832a12.6 12.6 0 0 0 1.084 1.785 16.5 16.5 0 0 0 5.064-2.595 17.3 17.3 0 0 0-2.973-11.59M8.678 14.813a1.94 1.94 0 0 1-1.8-2.045 1.93 1.93 0 0 1 1.8-2.047 1.92 1.92 0 0 1 1.8 2.047 1.93 1.93 0 0 1-1.8 2.045m6.644 0a1.94 1.94 0 0 1-1.8-2.045 1.93 1.93 0 0 1 1.8-2.047 1.92 1.92 0 0 1 1.8 2.047 1.93 1.93 0 0 1-1.8 2.045" />
  </svg>
);
export default SvgBrandDiscord;

import * as React from "react";
import type { SVGProps } from "react";
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const SvgBrandStackoverflow = ({
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
    <path d="M17 20v-5h2v6.988H3V15h1.98v5z" />
    <path d="m6.84 14.522 8.73 1.825.369-1.755-8.73-1.825zm1.155-4.323 8.083 3.764.739-1.617-8.083-3.787zm3.372-5.481L10.235 6.08l6.859 5.704 1.132-1.362zM15.57 17H6.655v2h8.915zM12.861 3.111l6.193 6.415 1.414-1.415-6.43-6.177z" />
  </svg>
);
export default SvgBrandStackoverflow;

import * as React from "react";
import type { SVGProps } from "react";
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const SvgBrandYoutube = ({
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
      d="M21.7 8.037a4.26 4.26 0 0 0-.789-1.964 2.84 2.84 0 0 0-1.984-.839c-2.767-.2-6.926-.2-6.926-.2s-4.157 0-6.928.2a2.84 2.84 0 0 0-1.983.839 4.2 4.2 0 0 0-.79 1.965 30 30 0 0 0-.2 3.206v1.5a30 30 0 0 0 .2 3.206c.094.712.364 1.39.784 1.972.604.536 1.38.837 2.187.848 1.583.151 6.731.2 6.731.2s4.161 0 6.928-.2a2.84 2.84 0 0 0 1.985-.84 4.3 4.3 0 0 0 .787-1.965 30 30 0 0 0 .2-3.206v-1.516a31 31 0 0 0-.202-3.206m-11.692 6.554v-5.62l5.4 2.819z"
      clipRule="evenodd"
    />
  </svg>
);
export default SvgBrandYoutube;

import type { SVGProps } from 'react';

export function KaunaLogo(props: SVGProps<SVGSVGElement>) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 180 50"
      width="180"
      height="50"
      aria-label="Kaûna Logo"
      {...props}
    >
      <text
        x="50%"
        y="50%"
        dominantBaseline="middle"
        textAnchor="middle"
        fontFamily="Playfair Display, serif"
        fontSize="38"
        fill="currentColor"
      >
        Kaûna
      </text>
    </svg>
  );
}

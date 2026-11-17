import type { CSSProperties } from 'react';

interface SafinanceMarkProps {
  className?: string;
  style?: CSSProperties;
  topColor?: string;
  opacity?: number;
}

/**
 * Safinance Brand Mark: Geometric smart finance symbol.
 */
const SafinanceMark = ({
  className = 'h-8 w-auto',
  topColor = '#3b82f6',
  opacity,
  style,
}: SafinanceMarkProps) => (
  <svg
    viewBox="0 0 100 100"
    className={className}
    style={style}
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    aria-hidden="true"
    focusable="false"
  >
    <g opacity={opacity}>
      <circle cx="50" cy="50" r="44" stroke="currentColor" strokeWidth="6" opacity="0.25" />
      <path
        d="M32 62L46 48L56 56L68 38"
        stroke={topColor}
        strokeWidth="7"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <circle cx="68" cy="38" r="5" fill={topColor} />
    </g>
  </svg>
);

export default SafinanceMark;

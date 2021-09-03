import * as React from "react";

function SvgFlutter(props) {
  return (
    <svg
      viewBox="0 0 256 317"
      xmlns="http://www.w3.org/2000/svg"
      preserveAspectRatio="xMidYMid"
      {...props}
    >
      <defs>
        <linearGradient
          x1="3.952%"
          y1="26.993%"
          x2="75.897%"
          y2="52.919%"
          id="prefix__a"
        >
          <stop offset="0%" />
          <stop stopOpacity={0} offset="100%" />
        </linearGradient>
      </defs>
      <path
        fill="#47C5FB"
        d="M157.666 0L0 157.667l48.8 48.8L255.268.001zM156.567 145.397L72.15 229.815l48.984 49.716 48.71-48.71 85.425-85.424z"
      />
      <path
        fill="#00569E"
        d="M121.133 279.531l37.082 37.082h97.052l-85.425-85.792z"
      />
      <path
        fill="#00B5F8"
        d="M71.6 230.364l48.801-48.801 49.441 49.258-48.71 48.71z"
      />
      <path
        fillOpacity={0.8}
        fill="url(#prefix__a)"
        d="M121.133 279.531l40.56-13.459 4.029-31.13z"
      />
    </svg>
  );
}

export default SvgFlutter;

import React from "react";

export const Logo = () => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="207.343"
      height="236.211"
      viewBox="0 0 207.343 236.211">
      <g transform="translate(-5071.329 -332.895)">
        <g transform="translate(5071.329 332.895)">
          <g transform="translate(0 0)">
            <path
              d="M252.078,181.289V289.026a10.368,10.368,0,0,0,5.185,8.98l93.3,53.868a10.371,10.371,0,0,0,10.367,0l93.3-53.869a10.367,10.367,0,0,0,5.184-8.98V181.289a10.367,10.367,0,0,0-5.183-8.977L360.933,118.44a10.371,10.371,0,0,0-10.367,0l-93.3,53.871a10.367,10.367,0,0,0-5.184,8.977Z"
              transform="translate(-252.078 -117.052)"
              fill="#121213"
            />
            <path
              d="M300.23,195.73l44.236-25.54a4.993,4.993,0,0,1,2.442-.582V124.435a4.993,4.993,0,0,0-2.442.582l-83.355,48.127a5,5,0,0,0-1.724,1.823l39.12,22.584A4.969,4.969,0,0,1,300.23,195.73Z"
              transform="translate(-242.519 -107.395)"
              fill="#a664fe"
            />
            <path
              d="M298.2,222.4V171.325a4.994,4.994,0,0,1,.723-2.41L259.8,146.331a5,5,0,0,0-.72,2.407v96.249a4.988,4.988,0,0,0,.718,2.4l39.12-22.587a4.98,4.98,0,0,1-.72-2.4Z"
              transform="translate(-242.928 -78.76)"
              fill="#a664fe"
              opacity="0.8"
            />
            <path
              d="M300.232,182.163a4.983,4.983,0,0,1-1.726-1.828l-39.12,22.587a4.994,4.994,0,0,0,1.726,1.826l83.356,48.129a5,5,0,0,0,2.444.584V208.285a5,5,0,0,1-2.444-.582Z"
              transform="translate(-242.521 -34.289)"
              fill="#a664fe"
              opacity="0.7"
            />
            <path
              d="M383.447,202.078a1.251,1.251,0,0,1,0,2.167l-83.693,48.58a5.01,5.01,0,0,1-2.437.586V208.238a5.819,5.819,0,0,0,1.56-.224,4.325,4.325,0,0,0,.877-.353l46.11-27.29Z"
              transform="translate(-192.921 -34.242)"
              fill="#a664fe"
              opacity="0.8"
            />
            <path
              d="M299.756,170.19l44.234,25.54a5.421,5.421,0,0,0,4.886,0l34.234-19.762c1.343-.775,1.343-2.045,0-2.82l-83.353-48.131a5.009,5.009,0,0,0-2.444-.582v45.173A5.008,5.008,0,0,1,299.756,170.19Z"
              transform="translate(-192.922 -107.395)"
              fill="#a664fe"
            />
            <path
              d="M331.721,215.7l32.848-19.438-48.55-28.029-33.012,19.059Z"
              transform="translate(-211.629 -50.126)"
              fill="#a664fe"
              opacity="0.87"
            />
            <path
              d="M346.442,173.9v52.2a4.005,4.005,0,0,1-.577,1.915L297.309,200V143.94a4.1,4.1,0,0,1,1.962.462l45.21,26.1a4.312,4.312,0,0,1,1.962,3.393Z"
              transform="translate(-192.925 -81.887)"
              fill="#171717"
            />
            <path
              d="M325.139,143.94V200l-48.556,28.017a3.969,3.969,0,0,1-.554-1.915V173.9a4.374,4.374,0,0,1,1.938-3.393L323.2,144.4A4.078,4.078,0,0,1,325.139,143.94Z"
              transform="translate(-220.748 -81.885)"
              fill="#171717"
            />
            <path
              d="M326.392,213.1a4.325,4.325,0,0,0,.877-.353l13.263-7.849-48.713-28.412-15.551,8.968,0,.007.152-.087a4.984,4.984,0,0,0,1.726,1.828l44.236,25.54a4.993,4.993,0,0,0,2.442.582,11.634,11.634,0,0,0,1.563-.224Z"
              transform="translate(-220.441 -39.326)"
              fill="#171717"
            />
          </g>
        </g>
      </g>
    </svg>
  );
};

export const ChevronDown = ({ fill, size, height, width, ...props }) => {
  return (
    <svg
      fill="none"
      height={size || height || 24}
      viewBox="0 0 24 24"
      width={size || width || 24}
      xmlns="http://www.w3.org/2000/svg"
      {...props}>
      <path
        d="m19.92 8.95-6.52 6.52c-.77.77-2.03.77-2.8 0L4.08 8.95"
        stroke={fill}
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeMiterlimit={10}
        strokeWidth={1.5}
      />
    </svg>
  );
};

export const SearchIcon = ({
  size = 24,
  strokeWidth = 1.5,
  width,
  height,
  fill,
  ...props
}) => (
  <svg
    aria-hidden="true"
    fill="none"
    focusable="false"
    height={height || size}
    role="presentation"
    viewBox="0 0 24 24"
    width={width || size}
    {...props}>
    <path
      d="M11.5 21C16.7467 21 21 16.7467 21 11.5C21 6.25329 16.7467 2 11.5 2C6.25329 2 2 6.25329 2 11.5C2 16.7467 6.25329 21 11.5 21Z"
      stroke={fill}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={strokeWidth}
    />
    <path
      d="M22 22L20 20"
      stroke={fill}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={strokeWidth}
    />
  </svg>
);

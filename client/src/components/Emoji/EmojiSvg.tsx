import React, { memo } from 'react';

function EmojiSvg() {
  return (
    <svg
      width="24"
      height="24"
      viewBox="0 0 24 24"
      xmlns="http://www.w3.org/2000/svg"
    >
      <g fill="none" fillRule="evenodd">
        <rect
          stroke="#07132B"
          strokeWidth="2"
          x="1"
          y="1"
          width="22"
          height="22"
          rx="11"
        ></rect>
        <path
          d="M16.353 15.002c-.937 1.52-2.537 2.522-4.353 2.522-1.8 0-3.388-.984-4.328-2.482"
          stroke="#07132B"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        ></path>
        <circle fill="#07132B" cx="8" cy="8.5" r="1.5"></circle>
        <path
          d="M15.5 9.077c1.38 0 2.5 1.774 2.5.404A2.49 2.49 0 0015.5 7 2.49 2.49 0 0013 9.48c0 1.37 1.12-.403 2.5-.403z"
          fill="#07132B"
        ></path>
      </g>
    </svg>
  );
}

export default memo(EmojiSvg);

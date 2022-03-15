import React, { memo } from 'react';

function LanguageSvg() {
  return (
    <svg
      width="24"
      height="24"
      viewBox="0 0 24 24"
      xmlns="http://www.w3.org/2000/svg"
    >
      <g fill="none" fillRule="evenodd">
        <rect
          stroke="#333"
          strokeWidth="2"
          x="1"
          y="1"
          width="22"
          height="22"
          rx="11"
        ></rect>
        <text
          fontFamily="PingFangSC-Semibold, PingFang SC"
          fontSize="14"
          fontWeight="500"
          fill="#333"
        >
          <tspan x="5" y="17">
            常
          </tspan>
        </text>
      </g>
    </svg>
  );
}

export default memo(LanguageSvg);

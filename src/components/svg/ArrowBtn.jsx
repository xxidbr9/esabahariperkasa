import React from "react";

function ArrowBtn(props) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="36"
      height="36"
      fill="none"
      viewBox="0 0 36 36"
    >
      <path
        stroke={props.fill || "#fff"}
        strokeLinecap="round"
        strokeWidth="2"
        d="M10 18h15"
      ></path>
      <path
        stroke={props.fill || "#fff"}
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="2"
        d="M21 13s4.5 4.772 4.5 5c0 .228-4.5 5-4.5 5"
      ></path>
      <rect
        width="33.5"
        height="34"
        x="1"
        y="1"
        stroke={props.fill || "#fff"}
        strokeWidth="2"
        rx="16.75"
      ></rect>
    </svg>
  );
}

export default ArrowBtn;
import { Icon } from "@chakra-ui/react";

export default function DottedArrow(props) {
  return (
    <Icon
      width="192"
      height="383"
      viewBox="0 0 192 383"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path
        d="M7.50016 33C2.00027 58.5 -1.99998 143 77.0001 143C155 143 189 204 189 244C189 287 193 365 37.9999 365"
        stroke="black"
        strokeWidth="4"
        strokeLinecap="round"
        strokeDasharray="15 15"
      />
      <circle
        cx="12.998"
        cy="12.5"
        r="10"
        fill="white"
        stroke="black"
        strokeWidth="4"
      />
      <path
        d="M31.5884 350.554L20.0856 363.306C18.9759 364.537 19.0737 366.434 20.304 367.543L34.2091 380.086"
        stroke="black"
        strokeWidth="4"
        strokeLinecap="round"
      />
    </Icon>
  );
}

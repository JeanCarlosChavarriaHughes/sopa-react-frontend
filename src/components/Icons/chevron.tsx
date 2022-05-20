import { FC } from "react";
interface Props {
  fill?: string;
  stroke?: string;
}
const Chevron = () => {
  return (
    <svg width="10" height="5" viewBox="0 0 10 5" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M10 0H0L5 5L10 0Z" />
    </svg>

  );
};

export default Chevron;

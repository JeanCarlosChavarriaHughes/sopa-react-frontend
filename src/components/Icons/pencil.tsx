import { FC } from "react";
interface Props {
  fill?: string;
  stroke?: string;
}
const Pencil = () => {
  return (
    <svg width="19" height="19" viewBox="0 0 19 19" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M18.4083 2.30373C18.5192 2.41502 18.5815 2.56577 18.5815 2.72292C18.5815 2.88007 18.5192 3.03081 18.4083 3.1421L17.1697 4.38185L14.7947 2.00685L16.0333 0.767104C16.1446 0.655793 16.2956 0.593262 16.4531 0.593262C16.6105 0.593262 16.7615 0.655793 16.8729 0.767104L18.4083 2.30254V2.30373ZM16.3302 5.22023L13.9552 2.84523L5.86473 10.9369C5.79937 11.0022 5.75017 11.0819 5.72104 11.1696L4.7651 14.0362C4.74776 14.0885 4.7453 14.1445 4.75799 14.1981C4.77068 14.2517 4.79802 14.3007 4.83695 14.3396C4.87589 14.3786 4.92488 14.4059 4.97846 14.4186C5.03204 14.4313 5.08809 14.4288 5.14035 14.4115L8.00698 13.4555C8.09457 13.4268 8.17426 13.378 8.23973 13.313L16.3302 5.22142V5.22023Z" />
      <path fillRule="evenodd" clipRule="evenodd" d="M1.1875 16.0312C1.1875 16.5037 1.37517 16.9567 1.70922 17.2908C2.04327 17.6248 2.49633 17.8125 2.96875 17.8125H16.0312C16.5037 17.8125 16.9567 17.6248 17.2908 17.2908C17.6248 16.9567 17.8125 16.5037 17.8125 16.0312V8.90625C17.8125 8.74878 17.7499 8.59775 17.6386 8.48641C17.5272 8.37506 17.3762 8.3125 17.2188 8.3125C17.0613 8.3125 16.9103 8.37506 16.7989 8.48641C16.6876 8.59775 16.625 8.74878 16.625 8.90625V16.0312C16.625 16.1887 16.5624 16.3397 16.4511 16.4511C16.3397 16.5624 16.1887 16.625 16.0312 16.625H2.96875C2.81128 16.625 2.66026 16.5624 2.54891 16.4511C2.43756 16.3397 2.375 16.1887 2.375 16.0312V2.96875C2.375 2.81128 2.43756 2.66026 2.54891 2.54891C2.66026 2.43756 2.81128 2.375 2.96875 2.375H10.6875C10.845 2.375 10.996 2.31244 11.1073 2.20109C11.2187 2.08974 11.2812 1.93872 11.2812 1.78125C11.2812 1.62378 11.2187 1.47276 11.1073 1.36141C10.996 1.25006 10.845 1.1875 10.6875 1.1875H2.96875C2.49633 1.1875 2.04327 1.37517 1.70922 1.70922C1.37517 2.04327 1.1875 2.49633 1.1875 2.96875V16.0312Z" />
    </svg>

  );
};

export default Pencil;

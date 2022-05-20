import { FC } from "react";
interface Props {
  fill?: string;
  stroke?: string;
}
const Report: FC<Props> = ({ fill = "gray", stroke = "gray" }) => {
  return (
    <svg className={`fill-${fill || 'gray'} stroke-${stroke} `} width="14" height="15" viewBox="0 0 14 15" xmlns="http://www.w3.org/2000/svg">
      <path fillRule="evenodd" clipRule="evenodd" d="M3 10.7143H1V13.9286H3V10.7143ZM8 6.42857H6V13.9286H8V6.42857ZM13 1.07143H11V13.9286H13V1.07143ZM11 0C10.7348 0 10.4804 0.112882 10.2929 0.313814C10.1054 0.514746 10 0.787268 10 1.07143V13.9286C10 14.2127 10.1054 14.4853 10.2929 14.6862C10.4804 14.8871 10.7348 15 11 15H13C13.2652 15 13.5196 14.8871 13.7071 14.6862C13.8946 14.4853 14 14.2127 14 13.9286V1.07143C14 0.787268 13.8946 0.514746 13.7071 0.313814C13.5196 0.112882 13.2652 0 13 0H11ZM5 6.42857C5 6.14441 5.10536 5.87189 5.29289 5.67096C5.48043 5.47003 5.73478 5.35714 6 5.35714H8C8.26522 5.35714 8.51957 5.47003 8.70711 5.67096C8.89464 5.87189 9 6.14441 9 6.42857V13.9286C9 14.2127 8.89464 14.4853 8.70711 14.6862C8.51957 14.8871 8.26522 15 8 15H6C5.73478 15 5.48043 14.8871 5.29289 14.6862C5.10536 14.4853 5 14.2127 5 13.9286V6.42857ZM0 10.7143C0 10.4301 0.105357 10.1576 0.292893 9.95667C0.48043 9.75574 0.734784 9.64286 1 9.64286H3C3.26522 9.64286 3.51957 9.75574 3.70711 9.95667C3.89464 10.1576 4 10.4301 4 10.7143V13.9286C4 14.2127 3.89464 14.4853 3.70711 14.6862C3.51957 14.8871 3.26522 15 3 15H1C0.734784 15 0.48043 14.8871 0.292893 14.6862C0.105357 14.4853 0 14.2127 0 13.9286V10.7143Z" />
    </svg>

  );
};

export default Report;
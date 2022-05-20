import { FC } from "react";
interface Props {
  fill?: string;
  stroke?: string;
}
const Print = () => {
  return (
    <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M17.0703 5.03906H16.5234V2.92969C16.5234 1.31426 15.2092 0 13.5938 0H6.40625C4.79082 0 3.47656 1.31426 3.47656 2.92969V5.03906H2.92969C1.31426 5.03906 0 6.35332 0 7.96875V12.6562C0 14.2717 1.31426 15.5859 2.92969 15.5859H3.47656V18.2422C3.47656 19.2114 4.26512 20 5.23438 20H14.7656C15.7349 20 16.5234 19.2114 16.5234 18.2422V15.5859H17.0703C18.6857 15.5859 20 14.2717 20 12.6562V7.96875C20 6.35332 18.6857 5.03906 17.0703 5.03906ZM4.64844 2.92969C4.64844 1.96043 5.43699 1.17188 6.40625 1.17188H13.5938C14.563 1.17188 15.3516 1.96043 15.3516 2.92969V5.03906H4.64844V2.92969ZM15.3516 18.2422C15.3516 18.5653 15.0887 18.8281 14.7656 18.8281H5.23438C4.91129 18.8281 4.64844 18.5653 4.64844 18.2422V12.4609H15.3516V18.2422ZM18.8281 12.6562C18.8281 13.6255 18.0396 14.4141 17.0703 14.4141H16.5234V12.4609H16.875C17.1986 12.4609 17.4609 12.1986 17.4609 11.875C17.4609 11.5514 17.1986 11.2891 16.875 11.2891H3.125C2.80141 11.2891 2.53906 11.5514 2.53906 11.875C2.53906 12.1986 2.80141 12.4609 3.125 12.4609H3.47656V14.4141H2.92969C1.96043 14.4141 1.17188 13.6255 1.17188 12.6562V7.96875C1.17188 6.99949 1.96043 6.21094 2.92969 6.21094H17.0703C18.0396 6.21094 18.8281 6.99949 18.8281 7.96875V12.6562Z" />
      <path d="M11.5625 13.7891H8.4375C8.11391 13.7891 7.85156 14.0514 7.85156 14.375C7.85156 14.6986 8.11391 14.9609 8.4375 14.9609H11.5625C11.8861 14.9609 12.1484 14.6986 12.1484 14.375C12.1484 14.0514 11.8861 13.7891 11.5625 13.7891Z" />
      <path d="M11.5625 16.2891H8.4375C8.11391 16.2891 7.85156 16.5514 7.85156 16.875C7.85156 17.1986 8.11391 17.4609 8.4375 17.4609H11.5625C11.8861 17.4609 12.1484 17.1986 12.1484 16.875C12.1484 16.5514 11.8861 16.2891 11.5625 16.2891Z" />
      <path d="M5 7.53906H3.125C2.80141 7.53906 2.53906 7.80141 2.53906 8.125C2.53906 8.44859 2.80141 8.71094 3.125 8.71094H5C5.32359 8.71094 5.58594 8.44859 5.58594 8.125C5.58594 7.80141 5.32359 7.53906 5 7.53906Z" />
    </svg>
  );
};

export default Print;
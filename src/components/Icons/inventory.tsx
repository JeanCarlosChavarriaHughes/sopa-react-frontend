import { FC } from "react";
interface Props {
  fill?: string;
  stroke?: string;
}
const Inventory = () => {
  return (
    <svg width="16" height="15" viewBox="0 0 16 15" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path fillRule="evenodd" clipRule="evenodd" d="M14.5 13.9286H1.5C1.36739 13.9286 1.24021 13.8721 1.14645 13.7717C1.05268 13.6712 1 13.5349 1 13.3929V5.89286C1 5.75078 1.05268 5.61452 1.14645 5.51405C1.24021 5.41358 1.36739 5.35714 1.5 5.35714H14.5C14.6326 5.35714 14.7598 5.41358 14.8536 5.51405C14.9473 5.61452 15 5.75078 15 5.89286V13.3929C15 13.5349 14.9473 13.6712 14.8536 13.7717C14.7598 13.8721 14.6326 13.9286 14.5 13.9286ZM1.5 15C1.10218 15 0.720644 14.8307 0.43934 14.5293C0.158035 14.2279 0 13.8191 0 13.3929L0 5.89286C0 5.46662 0.158035 5.05783 0.43934 4.75644C0.720644 4.45504 1.10218 4.28571 1.5 4.28571H14.5C14.8978 4.28571 15.2794 4.45504 15.5607 4.75644C15.842 5.05783 16 5.46662 16 5.89286V13.3929C16 13.8191 15.842 14.2279 15.5607 14.5293C15.2794 14.8307 14.8978 15 14.5 15H1.5ZM2 2.67857C2 2.82065 2.05268 2.95691 2.14645 3.05738C2.24021 3.15784 2.36739 3.21429 2.5 3.21429H13.5C13.6326 3.21429 13.7598 3.15784 13.8536 3.05738C13.9473 2.95691 14 2.82065 14 2.67857C14 2.53649 13.9473 2.40023 13.8536 2.29976C13.7598 2.1993 13.6326 2.14286 13.5 2.14286H2.5C2.36739 2.14286 2.24021 2.1993 2.14645 2.29976C2.05268 2.40023 2 2.53649 2 2.67857V2.67857ZM4 0.535714C4 0.677795 4.05268 0.814056 4.14645 0.914521C4.24021 1.01499 4.36739 1.07143 4.5 1.07143H11.5C11.6326 1.07143 11.7598 1.01499 11.8536 0.914521C11.9473 0.814056 12 0.677795 12 0.535714C12 0.393634 11.9473 0.257373 11.8536 0.156907C11.7598 0.0564411 11.6326 0 11.5 0H4.5C4.36739 0 4.24021 0.0564411 4.14645 0.156907C4.05268 0.257373 4 0.393634 4 0.535714V0.535714Z"/>
    </svg>
  );
};

export default Inventory;
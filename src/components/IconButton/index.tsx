import { ReactNode } from 'react';
import './style.scss'
const IconButton = ({ icon, size = 20, onClick, outlined = false }:
  { icon: ReactNode; size?: number; onClick: any; outlined?: boolean }) => {
  return (
    <div className={`icon-button w-${size} h-${size} ${outlined ? 'outlined' : ''}`} onClick={onClick}>
      {icon}
    </div>
  );
}

export default IconButton;

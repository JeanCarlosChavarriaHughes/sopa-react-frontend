import { Box, Hidden, Tooltip } from '@mui/material';
import { Link } from 'react-router-dom';
import logo from '../../assets/logo.png'

const Logo = ({ width = '43', height = '43' }) => {
  return (
    <div className='text-center'>
      <img className={`w-${width} h-${height}`} src={logo} />
    </div>
  );
}

export default Logo;

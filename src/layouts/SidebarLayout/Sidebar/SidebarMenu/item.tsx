import { FC, ReactNode } from "react";
import PropTypes from 'prop-types';
import '../style.scss'

interface SidebarMenuItemProps {
  children?: ReactNode
  link?: string;
  icon?: any;
  badge?: string;
  active?: boolean;
  name?: string;
}

const SidebarMenuItem: FC<SidebarMenuItemProps> = ({
  children,
  link,
  icon: Icon,
  badge,
  active,
  name,
  ...rest
}) => {
  return (
    <a href={link} className={`item mv-12 flex align-center w-full h-36 bradius-4 decoration-none${active ? ' active' : ''}`}>
      <span className="mh-10"><Icon className={`${active ? 'primary' : ''}`} /></span>
      {name}
    </a>
  )
}
SidebarMenuItem.propTypes = {
  children: PropTypes.node,
  active: PropTypes.bool,
  link: PropTypes.string,
  icon: PropTypes.elementType,
  badge: PropTypes.string,
  name: PropTypes.string.isRequired
}
SidebarMenuItem.defaultProps = {
  active: false,
};
export default SidebarMenuItem
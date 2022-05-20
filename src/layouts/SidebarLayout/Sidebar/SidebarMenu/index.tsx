import { FC } from "react";
import { useSelector } from "react-redux";
import { matchPath } from "react-router";
import SidebarMenuItem from "./item";
import menuItems, { MenuItem } from "./items";

const renderSidebarMenuItem = ({
  path, item }: {
    path: string;
    item: MenuItem
  }): JSX.Element => {
  const key = item.name

  return (<SidebarMenuItem
    key={key}
    active={path == item.link}
    name={item.name}
    icon={item.icon}
    link={item.link}
    badge={item.badge} />)
}
const SidebarMenu: FC = () => {
  const location = window.location.pathname
  return (
    <div className="sidebar-menu flex">
      <ul className='align-start ph-15 w-full'>
        {menuItems.map((item) => (
          renderSidebarMenuItem({ path: location, item })
        ))}
      </ul>
    </div>
  )
}

export default SidebarMenu
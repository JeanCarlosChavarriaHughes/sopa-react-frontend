import { FC, useContext } from "react"
import Logo from "../../../components/Logo";
import { SidebarContext } from "../../../context/SidebarContext"
import SidebarMenu from "./SidebarMenu";

const Sidebar: FC = () => {

  const { sidebarToggle, toggleSidebar } = useContext(SidebarContext)
  const closeSidebar = () => toggleSidebar();
  return (
    <div className="sidebar w-180 h-full pt-25 ">
      <Logo width="43" height="43" />
      <SidebarMenu />
    </div>
  )
}
export default Sidebar
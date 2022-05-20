import { FC, ReactNode } from "react";
import { Outlet } from "react-router";
import Sidebar from "./Sidebar";

interface SidebarLayoutProps {
  children?: ReactNode;
}

const SidebarLayout: FC<SidebarLayoutProps> = ({ children }: SidebarLayoutProps) => {
  return (
    <div className="main-wrapper flex">
      <Sidebar />
      <div className="main-content ph-32 pv-24">
        <Outlet />
      </div>
    </div>
  )
}

export default SidebarLayout
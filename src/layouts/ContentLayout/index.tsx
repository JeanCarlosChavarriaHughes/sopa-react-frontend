import { Children, FC, ReactNode } from "react";

interface ContentLayoutProps {
  children?: ReactNode;
  title?: string;
  description?: string;
}
const ContentLayout: FC<ContentLayoutProps> = (props: ContentLayoutProps) => {
  return (
    <div className="main-content-layout">
      <div className="content-header">
        <p className="content-title text-black text-32">{props.title}</p>
        <p className="content-description text-gray text-16 mt-6">{props.description}</p>
      </div>
      <div className="content-body mt-36">
        {props.children}
      </div>
    </div>
  )
}
export default ContentLayout;
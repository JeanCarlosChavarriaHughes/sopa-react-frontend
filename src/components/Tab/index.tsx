import { FC, ReactNode } from "react"
import './style.scss'
interface ITab {
  items: string[];
  active: number;
  onChange: any
}
const Tab: FC<ITab> = (props: ITab) => {
  const count = props.items.length
  return (
    <div className="tab w-full flex">
      {props.items.map((e: string, i: number) =>
        <div className={`tab-item flex flex-1 justify-center text-20 pb-10${props.active == i ? ' active' : ''}`}
          onClick={() => { props.onChange(i) }}
          key={i}>{e}</div>)}
    </div>
  )
}

export default Tab
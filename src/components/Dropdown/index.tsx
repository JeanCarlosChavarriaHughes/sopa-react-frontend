import { useEffect, useRef, useState } from 'react';
import Chevron from '../Icons/chevron';
import './style.scss'
interface DropdownPropTypes {
  items: any;
  onSelect: any;
  value: any;
  className?: string;
  valueName?: string;
  idName?: string;
}
const useOutsideAlerter = (ref: any, onEvent: any) => {
  useEffect(() => {
    function handleClickOutside(event: any) {
      if (ref.current && !ref.current.contains(event.target)) {
        onEvent()
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [ref]);
}
const Dropdown = ({ items, onSelect, value, className }: DropdownPropTypes) => {

  const [open, setOpen] = useState(false)
  const handleToggle = () => {
    setOpen(!open)
  }
  const ref = useRef(null)
  useOutsideAlerter(ref, () => {
    setOpen(false)
  })
  return (
    <div ref={ref} className={`dropdown relative text-14 text-gray ${open ? 'open' : ''} ${className}`}>
      <div className="input h-30 ph-8 flex align-center justify-between" onClick={handleToggle}>
        <span>{value}</span><Chevron /></div>
      {open && <div className="menus absolute w-full">
        {items.map((e: any, i: number) =>
          <div className="menu-item ph-8 pv-4" key={i} onClick={() => {
            setOpen(false);
            onSelect(i)
          }}>{e}</div>)}
      </div>}
    </div>
  )
}

export default Dropdown
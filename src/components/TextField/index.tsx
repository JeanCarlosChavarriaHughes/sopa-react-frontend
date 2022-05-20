import { FC, ReactNode } from "react"
import './style.scss'
interface TextFieldProps {
  type?: string;
  value: string | number;
  onChange: any;
  placeholder: string;
  suffix?: ReactNode;
  prefix?: ReactNode;
  className?: string;
}
const TextField: FC<TextFieldProps> =
  ({ type = 'text', value, onChange, placeholder, prefix, suffix, className }: TextFieldProps) => {
    var wclass = 'w-160'
    var hclass = 'h-32'
    if (className?.indexOf('w-')! >= 0) wclass = ''
    if (className?.indexOf('h-')! >= 0) hclass = ''
    return (
      <div className={`textfield flex align-center justify-between text-14 ${className} ${wclass} ${hclass}`}>
        {prefix && <>{prefix}</>}
        <input className={`w-full mv-3 mh-9 h-full`} type={type} value={value} onChange={onChange} placeholder={placeholder} />
        {suffix && <>{suffix}</>}
      </div>
    )
  }

export default TextField
import './style.scss'
interface ButtonProps {
  onClick: any;
  text: string;
  className?: string;
  type?: string;
}
const Button = ({ onClick, text, className, type = 'filled' }: ButtonProps) => {
  var wclass = 'w-96'
  var hclass = 'h-36'
  if (className?.indexOf('w-')! >= 0) wclass = ''
  if (className?.indexOf('h-')! >= 0) hclass = ''
  return (
    <div className={`${className} button button-${type} text-center text-16 ${hclass} ${wclass}`} onClick={onClick}>
      {text}
    </div>
  )
}

export default Button
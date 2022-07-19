import './style.scss'
interface ButtonProps {
  onClick: any;
  text: string;
  className?: string;
  type?: string;
  prefix?: any;
}
const Button1 = ({ onClick, text, className, type = 'filled', prefix }: ButtonProps) => {
  var wclass = 'w-96'
  var hclass = 'h-36'
  if (className?.indexOf('w-')! >= 0) wclass = ''
  if (className?.indexOf('h-')! >= 0) hclass = ''
  return (
    <div className={`${className} align-center justify-center button button-${type}`}
      onClick={onClick}>
      {prefix && prefix}{text}
    </div>
  )
}

export default Button1
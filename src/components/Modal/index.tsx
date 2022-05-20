import { FC, ReactNode, useRef } from 'react'
import IconButton from '../IconButton';
import './style.scss'
interface ModalProps {
  open: boolean;
  title?: string;
  description?: string;
  children: ReactNode;
  width?: number;
  height?: number;
  onClose: any
}
const Modal: FC<ModalProps> =
  ({ width = 640, height = 400, open, title, description, onClose, children }: ModalProps) => {
    const ref = useRef(null)
    return (
      <div ref={ref} className={`modal-wrap ${open ? 'active' : ''}`}>
        <div className={`modal w-${width} h-${height}`}>
          <div className="modal-header">
            <div className='flex justify-end mb-12'>
              <IconButton icon={<p className='text-12 text-center'>╳</p>} size={20} onClick={onClose} />
            </div>
            {title && <p className='title text-32 text-black'>{title}</p>}
            {description && <p className='description text-20 text-gray mt-8'>{description}</p>}
          </div>
          <div className="body">{children}</div>
        </div>
      </div >
    )
  }

export default Modal
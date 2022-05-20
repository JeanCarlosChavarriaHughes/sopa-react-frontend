import { Children, ReactNode } from 'react';
import './style.scss'
interface DataTableProps {
  headers: string[];
  count: number;
  children: ReactNode;
  offset: number;
  onChange: any
}
const DataTable = (props: DataTableProps) => {

  return (
    <div className='table-wrapper'>
      <table className="data-table w-full">
        <thead className='table-header'>
          <tr className='flex'>
            {props.headers.map((e: string, i: number) =>
              <td className='flex flex-1 text-16 text-black pb-6 justify-center' key={i}>{e}</td>)}
          </tr>
        </thead>
        <tbody className='table-body'>
          {props.children}
        </tbody>
      </table>
      <div className='pagination text-16 inline-flex mt-32'>
        <div className={`item start b-right ${props.offset == 0 ? 'disabled' : ''}`} onClick={() => props.onChange(0)}>Anterior</div>
        {props.offset > 1 && <div className={`item disabled b-right`}>...</div>}
        {props.offset > 0 && <div className='item b-right' onClick={() => props.onChange(props.offset - 1)}>{props.offset}</div>}
        <div className='item active b-right'>{props.offset + 1}</div>
        {props.offset < props.count - 1 && <div className='item b-right' onClick={() => props.onChange(props.offset + 1)}>{props.offset + 2}</div>}
        {props.offset < props.count - 2 && <div className='item disabled b-right'>...</div>}
        <div className={`item end ${props.offset == props.count - 1 ? 'disabled' : ''}`} onClick={() => props.onChange(props.count - 1)}>Siguiente</div>
      </div>
    </div>
  )
}

export default DataTable
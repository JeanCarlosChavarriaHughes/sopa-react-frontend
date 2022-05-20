import { useState } from 'react'
import DataTable from '../../../components/DataTable'
import IconButton from '../../../components/IconButton'
import Pencil from '../../../components/Icons/pencil'
import Print from '../../../components/Icons/print'
import Search from '../../../components/Icons/search'
import Modal from '../../../components/Modal'
import TextField from '../../../components/TextField'
import Row from './row'
import './style.scss'
const Category = () => {
  const headers = ['ID', 'Fecha', 'Periodo', 'Cliente', 'Subtotal', 'Descuento', 'Estado', '']
  const [word, setWord] = useState('')
  const data = [
    { id: 1, date: '02/08/2020', period: 'Segundo', client: 'Jean Carlos Chavarria', subtotal: '¢100,000', discount: 0, status: 0 },
    { id: 1, date: '02/08/2020', period: 'Segundo', client: 'Jean Carlos Chavarria', subtotal: '¢100,000', discount: 0, status: 0 },
    { id: 1, date: '02/08/2020', period: 'Segundo', client: 'Jean Carlos Chavarria', subtotal: '¢100,000', discount: 0, status: 0 },
    { id: 1, date: '02/08/2020', period: 'Segundo', client: 'Jean Carlos Chavarria', subtotal: '¢100,000', discount: 0, status: 0 },
    { id: 1, date: '02/08/2020', period: 'Segundo', client: 'Jean Carlos Chavarria', subtotal: '¢100,000', discount: 0, status: 0 },
    { id: 1, date: '02/08/2020', period: 'Segundo', client: 'Jean Carlos Chavarria', subtotal: '¢100,000', discount: 0, status: 0 },
    { id: 1, date: '02/08/2020', period: 'Segundo', client: 'Jean Carlos Chavarria', subtotal: '¢100,000', discount: 0, status: 0 },
  ]
  const [offset, setOffset] = useState(0)
  const [open, setOpen] = useState(false)
  return (
    <div className="category p-16">
      <div className='category-header flex justify-between'>
        <div>
          <p className='category-title text-dark text-20'>Categoría</p>
          <p className='category-count text-gray text-14 mt-5'>11 facturas</p>
        </div>
        <TextField onChange={(e: any) => { setWord(e.target.value) }} className='pr-9'
          value={word} placeholder='Buscar...' suffix={<Search />} />
      </div>
      <div className='category-body mt-32'>
        <DataTable headers={headers} offset={offset} count={200} onChange={(value: number) => setOffset(value)}>
          {data.map((e: any, i: number) => <Row data={e} key={i} onPrint={() => { }} onEdit={() => { setOpen(true) }} />)}
        </DataTable>
      </div>
      <Modal onClose={() => { setOpen(false) }} open={open} title='Editar factura' description='Al editar la factura se creará una nota de crédito. ' >
        <div className='pt-36'>
          <div className='flex'>
            <div>
              <p className='text-black text-16 mb-8'>Productos</p>
              <TextField placeholder='Busca un material...' onChange={(e: any) => { }} value={''} />
            </div>
            <div>
              <p className='text-black text-16 mb-8'>Cantidad</p>
              <TextField placeholder='Busca un material...' onChange={(e: any) => { }} value={''} />
            </div>
          </div>
        </div>
      </Modal>
    </div>
  )
}

export default Category
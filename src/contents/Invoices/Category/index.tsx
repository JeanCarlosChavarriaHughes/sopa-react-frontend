import { useState } from 'react'
import Button from '../../../components/Button'
import DataTable from '../../../components/DataTable'
import IconButton from '../../../components/IconButton'
import Pencil from '../../../components/Icons/pencil'
import Print from '../../../components/Icons/print'
import Search from '../../../components/Icons/search'
import Trash from '../../../components/Icons/trash'
import Modal from '../../../components/Modal'
import TextField from '../../../components/TextField'
import Row from './row'
import './style.scss'

const Product = ({ data, onRemove }: { data: any, onRemove: any }) => {
  return (
    <div className='product flex align-center text-16 h-44'>
      <p className='name w-300'>{data.pname}</p>
      <p className='amount w-96 ml-30 text-gray'>{data.pamount}</p>
      <p className='unit w-96 ml-30 text-gray'>ml</p>
      <IconButton icon={<Trash />} onClick={onRemove} />
    </div>
  )
}
const Facturas = () => {
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
  const [openFacturaRemove, setOpenFacturaRemove] = useState(false)
  const [products, setProducts] = useState<any>([])
  const [pname, setpName] = useState('')
  const [pamount, setpAmount] = useState(0)

  const onClose = () => {
    setOpen(false); setProducts([]);
    setpAmount(0)
    setpName('')
  }
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
      <Modal onClose={onClose} open={open} title='Editar factura' description='Al editar la factura se creará una nota de crédito. ' >
        <div className='pt-20'>
          <div className='flex align-center justify-between'>
            <div className='flex'>
              <div>
                <p className='text-black text-16 mb-8'>Productos</p>
                <TextField placeholder=''
                  onChange={(e: any) => { setpName(e.target.value) }}
                  value={pname} className='w-300 h-30' />
              </div>
              <div className='ml-30'>
                <p className='text-black text-16 mb-8'>Cantidad</p>
                <TextField placeholder='' type='number'
                  onChange={(e: any) => { setpAmount(parseFloat(e.target.value)) }}
                  value={pamount} className='w-96 h-30' />
              </div>
            </div>
            <div>
              <p className='text-black text-16 mb-8'>&nbsp;</p>
              <div className="flex align-center text-primary text-14 cursor-pointer"
                onClick={() => {
                  setProducts([...products, { pname, pamount }])
                  setpAmount(0); setpName('')
                }}>
                <span className='text-22'>+</span><span>&nbsp;&nbsp;&nbsp;Agregar</span>
              </div>
            </div>
          </div>
          <div className='mt-40'>
            {products.map((e: any, i: number) => <Product data={e} key={i}
              onRemove={() => {
                setProducts([...products.slice(0, i), ...products.slice(i + 1)])
              }} />)}
          </div>
          <div className="mt-60 flex justify-between">
            <div className="flex align-center text-primary text-14 cursor-pointer"
              onClick={() => { setOpen(false); setOpenFacturaRemove(true) }}>
              <div className="text-9 bold text-primary text-center round border-primary w-18 h-18"
                style={{ lineHeight: '16px' }}>╳</div>
              <span>&nbsp;&nbsp;Anular factura</span>
            </div>
            <div className="flex">
              <Button onClick={onClose}
                text='Cancelar' type="outlined" className="mr-16" />
              <Button onClick={() => { setOpen(false) }} text='Guardar' type="filled" />
            </div>
          </div >
        </div >
      </Modal >
      <Modal onClose={() => { setOpenFacturaRemove(false) }} open={openFacturaRemove}
        title='Anular factura' width={360}
        description='' >
        <div className='pt-20'>
          <div className='flex'>
            <p className='text-gray text-16 mb-8'>
              ¿Estás seguro que deseás anular esta factura?<br /><br />
              Al anularla se generara una nota de credito por el mismo monto de la factura original.</p>
          </div>
          <div className="flex justify-end mt-54">
            <Button onClick={() => { setOpenFacturaRemove(false) }}
              text='No, mantener' type="outlined" className="mr-16" />
            <Button onClick={() => { setOpenFacturaRemove(false) }} text='Si, anular' type="filled" />
          </div>
        </div >
      </Modal >
    </div >
  )
}

export default Facturas
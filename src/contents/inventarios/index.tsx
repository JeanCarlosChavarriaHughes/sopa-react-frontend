import { useEffect, useState } from "react"
import { getApi, postApi, putApi } from "../../apis/apis"
import apiurls from "../../apis/apiurls"
import Button from "../../components/Button"
import DataTable from "../../components/DataTable"
import Dropdown from "../../components/Dropdown"
import IconButton from "../../components/IconButton"
import IcDownload from "../../components/Icons/icdownload"
import Search from "../../components/Icons/search"
import Trash from "../../components/Icons/trash"
import Modal from "../../components/Modal"
import TextField from "../../components/TextField"
import ContentLayout from "../../layouts/ContentLayout"
import { IInventario } from "../../Models/inventario/IInventario"
import { IProductos } from "../../Models/inventario/IProductos"
import Row from "./row"
import './style.scss'
interface IGasto {
  descripciongasto: string;
  descripciontipogasto: string;
  estadogasto: string;
  fechagasto: string;
  idgasto: number;
  montogasto: string;
  observaciongasto: string;
}
const Tipo = ({ tipo, onClick, active }:
  {
    onClick: any; active: boolean;
    tipo: IInventario
  }) => {
  return (
    <div className={`tipo h-25 text-12 cursor-pointer ml-10 ph-8 ${active ? 'active' : ''}`}
      onClick={() => { onClick(tipo) }}>{tipo.descripcioncategoria}</div>
  )
}

const Inventario = () => {

  const [word, setWord] = useState('')
  const headers = ['Fecha', 'Tipo', 'Descripción', 'Monto', 'Estado', 'Obervación', '']
  const statuses = ['Pagado', 'Se debe']
  const [offset, setOffset] = useState(0)
  const [open, setOpen] = useState(false)
  const [openTipoModal, setOpenTipoModal] = useState(false)
  const [data, setData] = useState<IGasto[]>([])
  const [gastos, setGastos] = useState<IGasto[]>([])
  const [categorias, setCategorias] = useState<IInventario[]>([])
  const [productos, setProductos] = useState<IInventario[]>([])

  const [tipoId, setTipoid] = useState(0)

  const [tipoCategorySelected, setTipoCategorySelected] = useState<IInventario>();

  const [tipoName, setTipoName] = useState('')
  const [gasto, setGasto] = useState({
    idgasto: 0,
    idTipoGasto: 0, descripcionGasto: '', estadoGasto: '', montoGasto: '', observacionGasto: ''
  })
  useEffect(() => {
    fetchCategorias()
    fetchProductos()
  }, [])

  const fetchCategorias = async () => {
    try {
      const res: IInventario[] = await getApi(apiurls.getcategories, false)
      console.log(res)
      const todosCategory: IInventario = { descripcioncategoria: "Todos", idcategoria: 0, text: "Todos" }
      const allCategories = [todosCategory, ...res];
      setCategorias(allCategories)
      setTipoCategorySelected(allCategories && allCategories[0]);
    } catch (e) {
      console.log(e)
    }
  }

  const fetchProductos = async () => {
    try {
      const res = await getApi(apiurls.getProducts, false)
      console.log(res)
      setProductos(res)
    } catch (e) {
      console.log(e)
    }
  }

  const onClose = () => {
    setGasto({ idgasto: 0, descripcionGasto: '', estadoGasto: '', idTipoGasto: 0, montoGasto: '', observacionGasto: '' })
    setOpen(false);
  }

  const onRemove = async () => {
    try {
      const res = await postApi(apiurls.deleteGasto, { idGasto: gasto.idgasto }, false)
      setGastos(gastos.filter(e => e.idgasto != gasto.idgasto))
      onClose()
    } catch (e) {
      console.log(e)
    }
  }

  const onSave = async () => {
    setOpen(false);
    try {
      if (gasto.idgasto > 0) {
        //edit
        const res = await putApi(apiurls.updateGasto, {
          descripcionGasto: gasto.descripcionGasto,
          estadoGasto: gasto.estadoGasto,
          montoGasto: gasto.montoGasto,
          observacionGasto: gasto.observacionGasto,
          idGasto: gasto.idgasto
        }, false)

      } else {
        //new
        const res = await postApi(apiurls.newGasto, { ...gasto }, false)
        fetchCategorias()
      }
    }
    catch (e) {
      console.log(e)
    }
  }

  const onSaveTipo = async () => {
    try {

      setOpenTipoModal(false)
      var res = await postApi(apiurls.newTipoGasto, { descripcionTipoGasto: tipoName }, false)
      setTipoName('')
      //await fetchTipoGastos()
    } catch (e) {
      console.log(e)
    }
  }

  const onReport = async () => {
    try {
      //const res = await getApi(apiurls.reportGastos, false)
      window.open('https://sopa-bar-desarrollo-develop.herokuapp.com' + apiurls.reportGastos, '_blank')
    } catch (e) {
      console.log(e)
    }
  }

  return (
    <ContentLayout title="Inventario de productos" description="Revisa tus productos en venta y los materiales que los componen.">

      <div className="content-expenses">
        <div className="report-btn" >
          <Button text="&nbsp;&nbsp;Descargar reporte" className="w-180" onClick={onReport} type='outlined'
            prefix={<IcDownload />} />
        </div>
        <div className="flex mb-30">
          <IconButton outlined onClick={() => { setOpenTipoModal(true) }} size={25}
            icon={<div className="text-24 text-primary text-center" style={{ lineHeight: '24px' }}>+</div>} />
          {/* <Tipo tipo={{ idcategoria: 0, descripcioncategoria: 'Todos', text: 'Todos' }} active={tipoCategorySelected?.idcategoria === 0}
            onClick={(tipo: IInventario) => {
              setTipoCategorySelected(tipo)
            }} /> */}

          {categorias.map((e: IInventario, i: number) =>
            <Tipo tipo={e} active={e.idcategoria === tipoCategorySelected?.idcategoria} key={i}
              onClick={(tipo: IInventario) => {
                setTipoCategorySelected(tipo)
              }} />)}


        </div>
        <div className="containerGridStyle">

          <div className="productos" >
            <div className='category-header flex justify-between'>
              <div>
                <p className='category-title text-dark text-20'>Categoría * {tipoCategorySelected && tipoCategorySelected.descripcioncategoria}</p>
                <p className='category-count text-gray text-14 mt-5'>{productos.length} productos</p>
              </div>

              <TextField onChange={(e: any) => { setWord(e.target.value) }} className='pr-9'
                value={word} placeholder='Buscar...' suffix={<Search />} />
            </div>

            <div className="gridStyle">
              {productos.map((producto: any, i: number) =>
                // <Producto tipo={producto} active={producto.idtipogasto == tipoId} key={i}
                //   onClick={(value: number) => { setTipoid(value) }} />
                <Button className="producto " text={producto.descripcionproducto}
                  onClick={() => {
                    if (tipoId > 0)
                      setGasto({ ...gasto, idTipoGasto: tipoId })
                    setOpen(true)
                  }} />
              )}
            </div>
          </div>


          {/* <Modal onClose={onClose} open={open}
            width={680}
            title={gasto.idgasto > 0 ? 'Editar un gasto' : 'Nuevo registro de gasto'} description='' > */}
          <div className="productos">
            <div className='category-header flex justify-between'>
              <div>
                <p className='category-title text-dark text-20'>Categoría * {tipoCategorySelected && tipoCategorySelected.descripcioncategoria}</p>
                <p className='category-count text-gray text-14 mt-5'>{productos.length} productos</p>
              </div>

              <TextField onChange={(e: any) => { setWord(e.target.value) }} className='pr-9'
                value={word} placeholder='Buscar...' suffix={<Search />} />
            </div>

            <div className='pt-9'>
              <div className='flex'>
                <div className="w-full">
                  <p className='text-black text-16 mb-8'>Tipo de gasto</p>
                  {/* <Dropdown onSelect={(i: number) => { setGasto({ ...gasto, idTipoGasto: tipos[i].idtipogasto }) }}
                    items={tipos.map(e => e.descripciontipogasto)} value={tipos.find((e) => e.idtipogasto == gasto.idTipoGasto)?.descripciontipogasto} valueName='descripciontipogasto' className='w-300' /> */}
                  <p className='text-black text-16 mb-8 mt-25'>Descripción del gasto</p>
                  <TextField placeholder='Descripción' onChange={(e: any) => { setGasto({ ...gasto, descripcionGasto: e.target.value }) }}
                    value={gasto.descripcionGasto} className='w-300 h-30' />
                  <div className="flex mt-25 w-full justify-between">
                    <div>
                      <p className='text-black text-16 mb-8'>Monto</p>
                      <TextField placeholder='Monto' type="number"
                        prefix={
                          <p className="bg-lightgray h-full w-32 text-center opacity-3 line-30 border-right"
                          >$</p>}
                        onChange={(e: any) => { setGasto({ ...gasto, montoGasto: e.target.value }) }}
                        value={gasto.montoGasto} className='w-300 h-30' />
                    </div>
                    <div>
                      <p className='text-black text-16 mb-8'>Estado</p>
                      <Dropdown onSelect={(i: number) => { setGasto({ ...gasto, estadoGasto: statuses[i] }) }}
                        items={statuses} value={gasto.estadoGasto} className='w-300' />
                    </div>
                  </div>
                  <div className="mt-25">
                    <p className='text-black text-16 mb-8'>Observación</p>
                    <TextField placeholder='Observación'
                      onChange={(e: any) => { setGasto({ ...gasto, observacionGasto: e.target.value }) }}
                      value={gasto.observacionGasto} className='w-300 h-30' />
                  </div>
                  <div className="mt-35 flex justify-between">
                    {gasto.idgasto > 0 ? <div className="flex align-center text-primary text-14 cursor-pointer" onClick={onRemove}>
                      <Trash /><span>&nbsp;Eliminar gasto</span>
                    </div> : <div />}
                    <div className="flex">
                      <Button onClick={onClose}
                        text='Cancelar' type="outlined" className="mr-16" />
                      <Button onClick={onSave} text='Guardar' type="filled" />
                    </div>
                  </div>
                </div>
              </div>
            </div>

          </div>
          {/* </Modal> */}

        </div>
      </div>
    </ContentLayout>
  )
}
export default Inventario;
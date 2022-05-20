import { useEffect, useState } from "react"
import { getApi, postApi, putApi } from "../../apis/apis"
import apiurls from "../../apis/apiurls"
import Button from "../../components/Button"
import DataTable from "../../components/DataTable"
import Dropdown from "../../components/Dropdown"
import IconButton from "../../components/IconButton"
import Search from "../../components/Icons/search"
import Trash from "../../components/Icons/trash"
import Modal from "../../components/Modal"
import TextField from "../../components/TextField"
import ContentLayout from "../../layouts/ContentLayout"
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
    tipo: { idtipogasto: number; descripciontipogasto: string }
  }) => {
  return (
    <div className={`tipo h-25 text-12 cursor-pointer ml-10 ph-8 ${active ? 'active' : ''}`}
      onClick={() => { onClick(tipo.idtipogasto) }}>{tipo.descripciontipogasto}</div>
  )
}
const Expenses = () => {

  const [word, setWord] = useState('')
  const headers = ['Fecha', 'Tipo', 'Descripción', 'Monto', 'Estado', 'Obervación', '']
  const statuses = ['Pagado', 'Se debe']
  const [offset, setOffset] = useState(0)
  const [open, setOpen] = useState(false)
  const [openTipoModal, setOpenTipoModal] = useState(false)
  const [data, setData] = useState<IGasto[]>([])
  const [gastos, setGastos] = useState<IGasto[]>([])
  const [tipos, setTipos] = useState<{ idtipogasto: number; descripciontipogasto: string }[]>([])
  const [tipoId, setTipoid] = useState(0)
  const [tipoName, setTipoName] = useState('')
  const [gasto, setGasto] = useState({
    idgasto: 0,
    idTipoGasto: 0, descripcionGasto: '', estadoGasto: '', montoGasto: '', observacionGasto: ''
  })
  useEffect(() => {
    fetchGastos()
    fetchTipoGastos()
  }, [])
  const fetchTipoGastos = async () => {
    try {
      const res = await getApi(apiurls.fetchTipoGastos, false)
      setTipos(res)
    } catch (e) {
      console.log(e)
    }
  }
  const fetchGastos = async () => {
    try {
      const res = await getApi(apiurls.fetchGastos, false)
      console.log(res)
      setData(res)
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
      console.log(res)
    } catch (e) {
      console.log(e)
    }
  }
  const onSave = async () => {
    setOpen(false);
    try {
      if (gasto.idgasto > 0) {
        //edit
        const res = await putApi(apiurls.updateGasto, { ...gasto }, false)
        console.log(res)
      } else {
        //new
        const res = await postApi(apiurls.newGasto, { ...gasto }, false)
        fetchGastos()
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
      await fetchTipoGastos()
    } catch (e) {
      console.log(e)
    }
  }
  useEffect(() => {
    var tmp: IGasto[] = data
    if (tipoId > 0) {
      const tipoGastoName = tipos.find(e => e.idtipogasto == tipoId)?.descripciontipogasto
      tmp = tmp.filter(e => e.descripciontipogasto == tipoGastoName)
    }
    if (word) {
      tmp = tmp.filter(e => e.descripciongasto.indexOf(word) >= 0 ||
        e.descripciontipogasto.indexOf(word) >= 0 ||
        e.estadogasto.indexOf(word) >= 0 ||
        e.observaciongasto.indexOf(word) >= 0)
    }
    setGastos(tmp)
  }, [data, tipoId, word])
  return (
    <ContentLayout title="Gastos" description="Lleva el control de tus facturas por pagar.">
      <div className="content-expenses">
        <div className="flex mb-30">
          <IconButton outlined onClick={() => { setOpenTipoModal(true) }} size={25}
            icon={<div className="text-24 text-primary text-center" style={{ lineHeight: '24px' }}>+</div>} />
          <Tipo tipo={{ idtipogasto: 0, descripciontipogasto: 'Todos' }} active={tipoId == 0}
            onClick={(value: number) => { setTipoid(value) }} />
          {tipos.map((e: any, i: number) =>
            <Tipo tipo={e} active={e.idtipogasto == tipoId} key={i}
              onClick={(value: number) => { setTipoid(value) }} />)}
        </div>
        <div className="category p-16">
          <div className='category-header flex justify-between'>
            <div>
              <p className='category-title text-dark text-20'>Categoría</p>
              <p className='category-count text-gray text-14 mt-5'>{gastos.length} gastos</p>
            </div>
            <TextField onChange={(e: any) => { setWord(e.target.value) }} className='pr-9'
              value={word} placeholder='Buscar...' suffix={<Search />} />
          </div>
          <div className='category-body mt-32'>
            <DataTable headers={headers} offset={offset}
              count={Math.ceil(gastos.length / 10)}
              onChange={(value: number) => setOffset(value)}>
              {
                gastos.map((e: IGasto, i: number) =>
                  <Row data={e} key={i} onPrint={() => { }}
                    onEdit={() => {
                      setGasto({
                        idgasto: e.idgasto,
                        descripcionGasto: e.descripciongasto,
                        estadoGasto: e.estadogasto,
                        montoGasto: e.montogasto,
                        observacionGasto: e.observaciongasto,
                        idTipoGasto: tipos.find(t => t.descripciontipogasto == e.descripciontipogasto)?.idtipogasto!
                      });
                      setOpen(true)
                    }} />
                )
              }
            </DataTable>
            <div className="flex justify-end">
              <Button className="w-140" text="+&nbsp;&nbsp;&nbsp;Nuevo gasto"
                onClick={() => { setOpen(true) }} />
            </div>
          </div>
          <Modal onClose={onClose} open={open}
            width={680}
            title={gasto.idgasto > 0 ? 'Editar un gasto' : 'Nuevo registro de gasto'} description='' >
            <div className='pt-9'>
              <div className='flex'>
                <div className="w-full">
                  <p className='text-black text-16 mb-8'>Tipo de gasto</p>
                  <Dropdown onSelect={(i: number) => { setGasto({ ...gasto, idTipoGasto: tipos[i].idtipogasto }) }}
                    items={tipos.map(e => e.descripciontipogasto)} value={tipos.find((e) => e.idtipogasto == gasto.idTipoGasto)?.descripciontipogasto} valueName='descripciontipogasto' className='w-300' />
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
                    {gasto.idgasto > 0 && <div className="flex align-center text-primary text-14 cursor-pointer" onClick={onRemove}>
                      <Trash /><span>&nbsp;Eliminar gasto</span>
                    </div>}
                    <div className="flex">
                      <Button onClick={onClose}
                        text='Cancelar' type="outlined" className="mr-16" />
                      <Button onClick={onSave} text='Guardar' type="filled" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </Modal>
          <Modal onClose={() => { setOpenTipoModal(false); setTipoName('') }} open={openTipoModal}
            width={360}
            title='Nueva categoría' description='' >
            <div className='pt-9 w-full'>
              <p className='text-black text-16 mb-8'>Nombre de la categoría</p>
              <TextField placeholder='' onChange={(e: any) => { setTipoName(e.target.value) }}
                value={tipoName} className='w-full h-30' />
            </div>
            <div className="mt-35 flex justify-end">
              <Button onClick={() => { setOpenTipoModal(false); setTipoName('') }}
                text='Cancelar' type="outlined" className="mr-16" />
              <Button onClick={onSaveTipo} text='Guardar' type="filled" />
            </div>
          </Modal>
        </div>
      </div>
    </ContentLayout>
  )
}
export default Expenses
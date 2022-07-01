import IconButton from "../../../components/IconButton"
import Pencil from "../../../components/Icons/pencil"
import Print from "../../../components/Icons/print"
import { IFactura } from "../../../Models/Facturas/IFactura";

const Row = ({ data, onEdit, onPrint }: { data: IFactura; onEdit: any; onPrint: any }) => {
  return (
    <tr className="row flex h-50 align-center text-gray text-14">
      <td className="flex flex-1">{data.clavenumerica.substring(data.clavenumerica.length - 8, data.clavenumerica.length)}</td>
      <td className="flex flex-1">{data.fecha}</td>
      <td className="flex flex-1">{data.periodo}</td>
      <td className="flex flex-1">{data.nombre}</td>
      <td className="flex flex-1">{data.subtotal}</td>
      <td className="flex flex-1">{data.totaldescuentos}</td>
      <td className="flex flex-1">{data.estadofactura}</td>
      <td className="flex flex-1">
        <div className="flex">
          <IconButton icon={<Print />} onClick={onPrint} />
          <div className="mh-8" />
          <IconButton icon={<Pencil />} onClick={onEdit} />
        </div>
      </td>
    </tr >
  )
}
export default Row
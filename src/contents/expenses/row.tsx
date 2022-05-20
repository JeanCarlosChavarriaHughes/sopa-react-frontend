import IconButton from "../../components/IconButton"
import Pencil from "../../components/Icons/pencil"
import Print from "../../components/Icons/print"

const Row = ({ data, onEdit, onPrint }: { data: any; onEdit: any; onPrint: any }) => {
  return (
    <tr className="row flex h-50 align-center text-gray text-14">
      <td className="flex flex-1">{data.fechagasto}</td>
      <td className="flex flex-1">{data.descripciontipogasto}</td>
      <td className="flex flex-1">{data.descripciongasto}</td>
      <td className="flex flex-1">{data.montogasto}</td>
      <td className="flex flex-1">{data.estadogasto}</td>
      <td className="flex flex-1">{data.observaciongasto}</td>
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
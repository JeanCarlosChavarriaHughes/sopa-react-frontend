import { useState } from "react"
import Tab from "../../components/Tab"
import ContentLayout from "../../layouts/ContentLayout"
import Facturas from "./Category"

const Invoices = () => {

  const items = ['Factura electrónica', 'Tiquete electrónico', 'Nota de crédito', 'Nota de débito']
  const tabs = [<Facturas />]
  const [tabIndex, setTabIndex] = useState(0)
  return (
    <ContentLayout title="Facturas" description="Busca las facturas realizadas en tu negocio">
      <div className="content-invoices">
        <div className="tabs">
          <Tab items={items} active={tabIndex} onChange={(i: number) => { setTabIndex(i) }} />
          <div className="tab-view pt-21">
            {tabs[tabIndex]}
          </div>
        </div>
      </div>
    </ContentLayout>
  )
}
export default Invoices
import { FaAccusoft, FaCog, FaDesktop } from 'react-icons/fa'

import { ReactNode } from "react"
import iconlist from '../../../../components/Icons/iconlist';
import Report from '../../../../components/Icons/report';
import Inventory from '../../../../components/Icons/inventory';
import Users from '../../../../components/Icons/users';
import Invoices from '../../../../components/Icons/invoices';
import Spending from '../../../../components/Icons/spending';
import Setting from '../../../../components/Icons/setting';
export interface MenuItem {
  link?: string;
  icon?: ReactNode;
  badge?: string;
  items?: MenuItem[];
  name?: string
}

export interface MenuItems {
  items: MenuItem[];
  heading: string;
}

const menuItems: MenuItem[] = [
  {
    name: 'Reportes',
    link: '/admin/reports',
    icon: Report
  },
  {
    name: 'Inventario',
    link: '/admin/inventario',
    icon: Inventory
  },
  {
    name: 'Clientes',
    link: '/admin/clients',
    icon: Users
  },
  {
    name: 'Facturas',
    link: '/admin/facturas',
    icon: Invoices
  },
  {
    name: 'Gastos',
    link: '/admin/gastos',
    icon: Spending
  },
  {
    name: 'Configuración',
    link: '/admin/configuration',
    icon: Setting
  }
]

export default menuItems
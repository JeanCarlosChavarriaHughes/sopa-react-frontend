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
    link: '/reports',
    icon: Report
  },
  {
    name: 'Inventario',
    link: '/inventory',
    icon: Inventory
  },
  {
    name: 'Clientes',
    link: '/clients',
    icon: Users
  },
  {
    name: 'Facturas',
    link: '/invoices',
    icon: Invoices
  },
  {
    name: 'Gastos',
    link: '/gastos',
    icon: Spending
  },
  {
    name: 'Configuración',
    link: '/configuration',
    icon: Setting
  }
]

export default menuItems
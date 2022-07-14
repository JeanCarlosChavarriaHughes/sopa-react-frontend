import { Children } from 'react';
import { PartialRouteObject } from 'react-router'
import Expenses from './contents/expenses';
import Invoices from './contents/Invoices';
import SidebarLayout from './layouts/SidebarLayout';

const routes: PartialRouteObject[] = [
  {
    path: '*',
    element: <SidebarLayout />,
    children: [
      {
        path: 'admin/facturas', element: <Invoices />
      }, {
        path: 'admin/gastos', element: <Expenses />
      }
    ]
  }
]
export default routes;

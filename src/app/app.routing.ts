import { Routes, RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { ContentComponent } from './content/content.component';
import { WelcomeComponent } from './welcome/welcome.component';


import { CategoryComponent } from './category/category.component';
import { CategoryCreateComponent } from './category-create/category-create.component';
import { CategoryListComponent } from './category-list/category-list.component';
import { CategoryModifyComponent } from './category-modify/category-modify.component';

import { StockComponent } from './stock/stock.component';
import { StockCreateComponent } from './stock-create/stock-create.component';
import { StockListComponent } from './stock-list/stock-list.component';
import { StockModifyComponent } from './stock-modify/stock-modify.component';

import { ClientComponent } from './client/client.component';
import { ClientCreateComponent } from './client-create/client-create.component';
import { ClientListComponent } from './client-list/client-list.component';
import { ClientModifyComponent } from './client-modify/client-modify.component';

import { WorkOrderComponent } from './work-order/work-order.component';
import { WorkOrderCreateComponent } from './work-order-create/work-order-create.component';
import { WorkOrderListComponent } from './work-order-list/work-order-list.component';
import { WorkOrderModifyComponent } from './work-order-modify/work-order-modify.component';
import { WorkOrderPrintComponent } from './work-order-print/work-order-print.component';

import { EmployeeComponent } from './employee/employee.component';
import { EmployeeCreateComponent } from './employee-create/employee-create.component';
import { EmployeeListComponent } from './employee-list/employee-list.component';
import { EmployeeModifyComponent } from './employee-modify/employee-modify.component';

// AuthGuard
import { AuthGuard } from './services/auth-guard.service';

export const router: Routes = [
  {
    path: '',
    redirectTo: 'welcome',
    pathMatch: 'full'
  },
  {
    path: 'welcome',
    component: WelcomeComponent,
  },
  {
    path: 'content',
    component: ContentComponent,
    canActivate: [ AuthGuard ],
    children: [
      {
        path: 'work-order',
        component: WorkOrderComponent,
        children: [
          {
            path: 'create',
            component: WorkOrderCreateComponent
          },
          {
            path: 'read',
            component: WorkOrderListComponent
          },
          {
            path: 'update',
            component: WorkOrderModifyComponent
          },
          {
            path: 'print',
            component: WorkOrderPrintComponent
          }
        ]
      },
      {
        path: 'stock',
        component: StockComponent,
        canActivate: [ AuthGuard ],
        children: [
          {
            path: 'create',
            component: StockCreateComponent
          },
          {
            path: 'read',
            component: StockListComponent
          },
          {
            path: 'update',
            component: StockModifyComponent
          }
        ]
      },
      {
        path: 'category',
        component: CategoryComponent,
        canActivate: [ AuthGuard ],
        children: [
          {
            path: 'create',
            component: CategoryCreateComponent
          },
          {
            path: 'read',
            component: CategoryListComponent
          },
          {
            path: 'update',
            component: CategoryModifyComponent
          }
        ]
      },
      {
        path: 'employee',
        component: EmployeeComponent,
        canActivate: [ AuthGuard ],
        children: [
          {
            path: 'create',
            component: EmployeeCreateComponent
          },
          {
            path: 'read',
            component: EmployeeListComponent
          },
          {
            path: 'update',
            component: EmployeeModifyComponent
          }
        ]
      },
      {
        path: 'client',
        component: ClientComponent,
        canActivate: [ AuthGuard ],
        children: [
          {
            path: 'create',
            component: ClientCreateComponent
          },
          {
            path: 'read',
            component: ClientListComponent
          },
          {
            path: 'update',
            component: ClientModifyComponent
          }
        ]
      }
    ]
  },
  {
    path: '**',
    redirectTo: 'welcome'
  }
];

export const routes = RouterModule.forRoot(router);

import { Routes, RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { ContentComponent } from './content/content.component';
// import { LoginComponent } from './login/login.component';
import { WorkOrderComponent } from './work-order/work-order.component';
import { WelcomeComponent } from './welcome/welcome.component';
import { StockComponent } from './stock/stock.component';

import { CategoryComponent } from './category/category.component';
import { CategoryCreateComponent } from './category-create/category-create.component';
import { CategoryListComponent } from './category-list/category-list.component';
import { CategoryModifyComponent } from './category-modify/category-modify.component';

import { StockCreateComponent } from './stock-create/stock-create.component';
import { StockListComponent } from './stock-list/stock-list.component';
import { StockModifyComponent } from './stock-modify/stock-modify.component';

import { ClientCreateComponent } from './client-create/client-create.component';
import { ClientListComponent } from './client-list/client-list.component';
import { ClientModifyComponent } from './client-modify/client-modify.component';

import { WorkOrderCreateComponent } from './work-order-create/work-order-create.component';
import { WorkOrderListComponent } from './work-order-list/work-order-list.component';
import { WorkOrderModifyComponent } from './work-order-modify/work-order-modify.component';

import { EmployeesComponent } from './employees/employees.component';
import { ClientComponent } from './client/client.component';

// AuthGuard
// import { AuthGuard } from './services/auth-guard/auth-guard.service';

export const router: Routes = [
  {
    path: '',
    redirectTo: 'welcome',
    pathMatch: 'full'
  },
  {
    path: 'content',
    component: ContentComponent,
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
          }
        ]
      },
      {
        path: 'stock',
        component: StockComponent,
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
        path: 'employees',
        component: EmployeesComponent,
      },
      {
        path: 'client',
        component: ClientComponent,
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

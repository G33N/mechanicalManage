import { Routes, RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { ContentComponent } from './content/content.component';
// import { LoginComponent } from './login/login.component';
import { WorkOrderComponent } from './work-order/work-order.component';
// import { WelcomeComponent } from './welcome/welcome.component';
import { StockComponent } from './stock/stock.component';

import { CategoryComponent } from './category/category.component';
import { CategoryCreateComponent } from './category-create/category-create.component';
import { CategoryListComponent } from './category-list/category-list.component';
import { CategoryModifyComponent } from './category-modify/category-modify.component';

import { EmployeesComponent } from './employees/employees.component';
import { ClientComponent } from './client/client.component';

//AuthGuard
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
        component: WorkOrderComponent
      },
      {
        path: 'stock',
        component: StockComponent,
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
      }
    ]
  },
  {
    path: '**',
    redirectTo: 'welcome'
  }
];

export const routes = RouterModule.forRoot(router);

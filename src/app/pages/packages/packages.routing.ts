import { PackagesMainComponent } from './packages-main/packages-main.component';
import { RouterModule, Routes } from "@angular/router";
import { PackagesFormComponent } from './packages-form/packages-form.component';

const routes: Routes = [
    {
        path: '',
        component: PackagesMainComponent,
    },
    {
        path: 'add',
        component: PackagesFormComponent
    },
    {
        path: 'edit/:id',
        component: PackagesFormComponent
    }
];
export const PackagesRoutes = RouterModule.forChild(routes);
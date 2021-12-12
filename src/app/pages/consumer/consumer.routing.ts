import { ConsumerFormComponent } from './consumer-form/consumer-form.component';
import { ConsumerListComponent } from './consumer-list/consumer-list.component';
import { RouterModule, Routes } from "@angular/router";

const routes: Routes = [
    {
        path: '',
        component: ConsumerListComponent
    },
    {
        path: 'add',
        component: ConsumerFormComponent
    },
    {
        path: 'edit/:id',
        component: ConsumerFormComponent
    }
];
export const ConsumerRoutes = RouterModule.forChild(routes);
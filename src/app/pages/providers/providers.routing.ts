import { ProvidersFormComponent } from './providers-form/providers-form.component';
import { RouterModule } from '@angular/router';
import { ProvidersMainComponent } from './providers-main/providers-main.component';
import { Routes } from '@angular/router';

const routes: Routes = [
    {
        path: '',
        component: ProvidersMainComponent,
    },
    {
        path: 'add',
        component: ProvidersFormComponent
    },
    {
        path: 'edit/:id',
        component: ProvidersFormComponent
    }
];
export const ProvidersRoutes = RouterModule.forChild(routes);
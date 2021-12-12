import { RouterModule, Routes } from "@angular/router";
import { ServersFormComponent } from "./servers-form/servers-form.component";
import { ServersMainComponent } from "./servers-main/servers-main.component";

const routes: Routes = [
    {
        path: '',
        component: ServersMainComponent,
    },
    {
        path: 'add',
        component: ServersFormComponent
    },
    {
        path: 'edit/:id',
        component: ServersFormComponent
    }
];
export const ServersRoutes = RouterModule.forChild(routes);
/* tslint:disable: ordered-imports*/
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SBRouteData } from '@modules/navigation/models';

/* Module */
import { UsersModule } from './users.module';

/* Containers */
import * as usersContainers from './containers';

/* Guards */
import * as usersGuards from './guards';
import { DirtycheckGuard } from '@app/dirtycheck.guard';

/* Routes */
export const ROUTES: Routes = [
    {
        path: '',
        canActivate: [],
        component: usersContainers.UsersComponent,
        canDeactivate:[DirtycheckGuard],
        data: {
            title: 'Users - SB Admin Angular',
            breadcrumbs: [
                {
                    text: 'Dashboard',
                    link: '/dashboard',
                },
                {
                    text: 'Users',
                    active: true,
                },
            ],
        } as SBRouteData,
    },
];

@NgModule({
    imports: [UsersModule, RouterModule.forChild(ROUTES)],
    exports: [RouterModule],
})
export class UsersRoutingModule {}

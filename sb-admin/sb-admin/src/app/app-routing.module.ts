import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CreateComponent } from './create/create.component';
import { DatacheckComponent } from './datacheck/datacheck.component';
import { DirtycheckGuard } from './dirtycheck.guard';
import { ReadComponent } from './read/read.component';

const routes: Routes = [
    {
        path:'create',
        component:CreateComponent,
        canDeactivate:[DirtycheckGuard]
    },
    {
        path:'create/:id',
        component:CreateComponent
    },
    {
        path:'read',
        component:ReadComponent
    },
    {
        path:'datacheck',
        component:DatacheckComponent
    },
    {
        path: '',
        pathMatch: 'full',
        redirectTo: '/dashboard',
    },
    {
        path: 'user',
        loadChildren: () =>
          import('modules/users/users-routing.module').then(m => m.UsersRoutingModule),
        //   canDeactivate:[DirtycheckGuard],
    },
    {
        path: 'user/:id',
        loadChildren: () =>
          import('modules/users/users-routing.module').then(m => m.UsersRoutingModule),
    },
    {
        path: 'tables',
        loadChildren: () =>
            import('modules/tables/tables-routing.module').then(m => m.TablesRoutingModule),
    },
    // {
    //     path: 'login',
    //     loadChildren: () =>
    //         import('modules/login/login-routing.module').then(m => m.LoginRoutingMOdule),
    // },

    {
        path: 'dashboard',
        loadChildren: () =>
            import('modules/dashboard/dashboard-routing.module').then(
                m => m.DashboardRoutingModule
            ),
    },
    {
        path: 'auth',
        loadChildren: () =>
            import('modules/auth/auth-routing.module').then(m => m.AuthRoutingModule),
    },
    {
        path: 'error',
        loadChildren: () =>
            import('modules/error/error-routing.module').then(m => m.ErrorRoutingModule),
    },
    {
        path: 'version',
        loadChildren: () =>
            import('modules/utility/utility-routing.module').then(m => m.UtilityRoutingModule),
    },
    {
        path: '**',
        loadChildren: () =>
          import('modules/users/users-routing.module').then(m => m.UsersRoutingModule),
    },
    {
        path: '**',
        pathMatch: 'full',
        loadChildren: () =>
            import('modules/error/error-routing.module').then(m => m.ErrorRoutingModule),
    },
];

@NgModule({
    imports: [RouterModule.forRoot(routes, { relativeLinkResolution: 'legacy' })],
    exports: [RouterModule],
})
export class AppRoutingModule {}

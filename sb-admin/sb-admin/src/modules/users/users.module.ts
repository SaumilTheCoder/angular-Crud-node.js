/* tslint:disable: ordered-imports*/
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';

/* Modules */
import { AppCommonModule } from '@common/app-common.module';
import { NavigationModule } from '@modules/navigation/navigation.module';

/* Components */
import * as usersComponents from './components';

/* Containers */
import * as usersContainers from './containers';

/* Guards */
import * as usersGuards from './guards';

/* Services */
import * as usersServices from './services';

@NgModule({
    imports: [
        CommonModule,
        RouterModule,
        ReactiveFormsModule,
        FormsModule,
        AppCommonModule,
        NavigationModule,
    ],
    providers: [...usersServices.services, ...usersGuards.guards],
    declarations: [...usersContainers.containers, ...usersComponents.component],
    exports: [...usersContainers.containers, ...usersComponents.component],
})
export class UsersModule {
    country:any = "";
    state:any = "";
    city:any = "";
    stateArr: any;
    cityArr: any;
}

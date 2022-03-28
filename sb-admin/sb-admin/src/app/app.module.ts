import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ApiserviceService } from './apiservice.service';
// import {StudentService} from './student.service';

// import { PopupModule } from 'ng2-opd-popup';


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CreateComponent } from './create/create.component';
import { ReadComponent } from './read/read.component';



// import {UserareaComponent} from './users/users.component';

import {FormsModule,ReactiveFormsModule} from '@angular/forms';
import { DatacheckComponent } from './datacheck/datacheck.component';

@NgModule({
    declarations: [
        AppComponent,
        CreateComponent,
        ReadComponent,
        DatacheckComponent,
        // StudentService
        // UserareaComponent
    ],
    imports: [
        BrowserModule,
         AppRoutingModule,
         HttpClientModule,
         FormsModule,
         ReactiveFormsModule,
        //  PopupModule.forRoot(),
         // UserareaComponent
        ],
    providers: [ApiserviceService],
    bootstrap: [AppComponent],
})
export class AppModule {}

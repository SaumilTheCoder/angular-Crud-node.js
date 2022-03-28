import { Component } from '@angular/core';
import { NgForm } from '@angular/forms'
import { Title } from '@angular/platform-browser';
import { ChildActivationEnd, Router } from '@angular/router';
import { filter } from 'rxjs/operators';
import { HostListener } from '@angular/core';

//must include hostlistner event in themewise side-nav.components.ts this project

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.scss'],
})
export class AppComponent {
    isSubmitted = false;
    title = 'sb-admin-angular';

    constructor(public router: Router, private titleService: Title) {
        this.router.events
        .pipe(filter(event => event instanceof ChildActivationEnd))
        .subscribe(event => {
            let snapshot = (event as ChildActivationEnd).snapshot;
            while (snapshot.firstChild !== null) {
                    snapshot = snapshot.firstChild;
                }
                this.titleService.setTitle(snapshot.data.title || 'SB Admin Angular');
            });
    }
    @HostListener('window:beforeunload', ['$event'])
    beforeunloadHandler(event:any) {
      return true;
      //I have used return false but you can your other functions or any query or condition
    }
    submitForm(form: NgForm) {
    this.isSubmitted = true;
    if(!form.valid) {
      return false;
    } else {
    alert(JSON.stringify(form.value))
    }
  }

}

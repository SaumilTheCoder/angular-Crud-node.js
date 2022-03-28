import { ChangeDetectionStrategy, Component, Input, OnDestroy, OnInit } from '@angular/core';
import { UserService } from '@modules/auth/services';
import { SideNavItems, SideNavSection } from '@modules/navigation/models';
import { NavigationService } from '@modules/navigation/services';
import { Subscription } from 'rxjs';
import { Router } from '@angular/router';

import { HostListener } from '@angular/core';


@Component({
    selector: 'sb-side-nav',
    changeDetection: ChangeDetectionStrategy.OnPush,
    templateUrl: './side-nav.component.html',
    styleUrls: ['side-nav.component.scss'],
})
export class SideNavComponent implements OnInit, OnDestroy {
    @Input() sidenavStyle!: string;
    @Input() sideNavItems!: SideNavItems;
    @Input() sideNavSections!: SideNavSection[];

    subscription: Subscription = new Subscription();
    routeDataSubscription!: Subscription;

    constructor(public navigationService: NavigationService, public userService: UserService,private router: Router) {}

      @HostListener('window:beforeunload', ['$event'])
      beforeunloadHandler(event:any) {

        return false;
        //I have used return false but you can your other functions or any query or condition
      }

    //   dashboard() {
    //     const user_approval = window.confirm ('Leave Site ? Changes that you made may not be saved.');
    //       if ( !user_approval ) {
    //         //   alert('Action is cancelled. \nYou are not going there.');
    //           return false;
    //       } else {
    //           this.router.navigate(['/dashboard']);
    //       }
    //   }
    //   check() {
    //       alert("hii");
    //     const user_approval = window.confirm ('Leave Site ? Changes that you made may not be saved.');
    //       if ( !user_approval ) {
    //         //   alert('Action is cancelled. \nYou are not going there.');
    //           return false;
    //       } else {
    //           this.router.navigate(['/users']);
    //       }
    //   }
    ngOnInit() {}

    ngOnDestroy() {
        this.subscription.unsubscribe();
    }
}

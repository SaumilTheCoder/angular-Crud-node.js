import { ChangeDetectionStrategy, Component, Input, OnInit } from '@angular/core';
import { SBRouteData, SideNavItem } from '@modules/navigation/models';
import { HostListener } from '@angular/core';

@Component({
    selector: 'sb-side-nav-item',
    changeDetection: ChangeDetectionStrategy.OnPush,
    templateUrl: './side-nav-item.component.html',
    styleUrls: ['side-nav-item.component.scss'],
})
export class SideNavItemComponent implements OnInit {
    @Input() sideNavItem!: SideNavItem;
    @Input() isActive!: boolean;

    expanded = false;
    routeData!: SBRouteData;

    constructor() {}
    ngOnInit() {}

    @HostListener('window:beforeunload', ['$expanded'])
    beforeunloadHandler(event:any) {
      return true;
      //I have used return false but you can your other functions or any query or condition
    }
}

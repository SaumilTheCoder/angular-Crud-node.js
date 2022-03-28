import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';

@Injectable()
export class UsersService {
    constructor() {}

    getCharts$(): Observable<{}> {
        return of({});
    }
}

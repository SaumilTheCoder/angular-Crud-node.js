import { TestBed } from '@angular/core/testing';

import { UsersService } from './users.service';

describe('UsersService', () => {
    let usersService: UsersService;

    beforeEach(() => {
        TestBed.configureTestingModule({
            providers: [UsersService],
        });
        usersService = TestBed.inject(UsersService);
    });

    describe('getCharts$', () => {
        it('should return Observable<Charts>', () => {
            usersService.getCharts$().subscribe(response => {
                expect(response).toEqual({});
            });
        });
    });
});

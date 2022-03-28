import { TestBed } from '@angular/core/testing';

import { UsersGuard } from './users.guard';

describe('Charts Guards', () => {
    let usersGuard: UsersGuard;

    beforeEach(() => {
        TestBed.configureTestingModule({
            imports: [],
            providers: [UsersGuard],
        });
        usersGuard = TestBed.inject(UsersGuard);
    });

    describe('canActivate', () => {
        it('should return an Observable<boolean>', () => {
            usersGuard.canActivate().subscribe(response => {
                expect(response).toEqual(true);
            });
        });
    });
});

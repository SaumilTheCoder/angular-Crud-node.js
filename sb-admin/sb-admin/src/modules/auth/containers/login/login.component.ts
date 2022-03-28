import { HttpClient } from '@angular/common/http';
import { ChangeDetectionStrategy, Component, Injectable, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { first } from 'rxjs/operators';
import { Observable } from 'rxjs';

// import { AlertService, AuthenticationService } from '@/_services';


@Injectable({
    providedIn: 'root'
})

export class ApiserviceService {
    constructor(private _http: HttpClient,private router: Router,private $route: ActivatedRoute) { }

    // connect to frontend to backend
    apiUrl = 'http://localhost:3000/user';
    apiCountry = 'http://localhost:3000/country';
    apiState = 'http://localhost:3000/state';
    apiCity = 'http://localhost:3000/city';

    // get all data

    getAllData(): Observable<any> {
        return this._http.get(`${this.apiUrl}`);
    }
    // country
    getCountry(): Observable<any> {
        return this._http.get(`${this.apiCountry}`);
    }
    getState(data: any): Observable<any> {
        return this._http.post(`${this.apiState}`, data);
    }
    getCity(data: any): Observable<any> {
        return this._http.post(`${this.apiCity}`, data);
    }

    // create the data
    createData(data: any): Observable<any> {
        return this._http.post(`${this.apiUrl}`, data);
    }

    LoginData(data: any): Observable<any> {
        return this._http.post(`${this.apiUrl}`, data);
    }

    // update data
    updateData(data: any, id: any): Observable<any> {
        // alert("hii");
        let ids = id;
        return this._http.put(`${this.apiUrl}/${ids}`, data);
    }
    // getsingle data

    getSingleData(id: any): Observable<any> {
        let ids = id;
        return this._http.get(`${this.apiUrl}/${ids}`);
    }
}

@Component({
    selector: 'sb-login',
    changeDetection: ChangeDetectionStrategy.OnPush,
    templateUrl: './login.component.html',
    styleUrls: ['login.component.scss'],
})
export class LoginComponent implements OnInit {
    successmsg: any;
    service: any;
    submitted: boolean | undefined;
    getparamid: any;
    constructor(
        private formBuilder: FormBuilder,
        private route: ActivatedRoute,
        private router: Router,

        ) {}

    errormsg:any;
    ngOnInit(): void {
        if (this, this.getparamid) {
            this.service.getSingleData(this.getparamid).subscribe((res: { data: { email:any,password: any; }[]; }) => {
                console.log(res, 'res==>');
                this.LoginForm.patchValue({
                    email: res.data[0].email,
                    password: res.data[0].password
                });
            });
        }
        // this.LoginForm = this.formBuilder.group({
        //     'email': new FormControl('', Validators.required),
        //     'password': new FormControl('', Validators.required),
        // })
    }

    LoginForm =  new FormGroup({
        'email': new FormControl('', [Validators.required,Validators.email]),
        'password': new FormControl(null, [Validators.required,Validators.minLength(6)]),
    });
    get f() { return this.LoginForm.controls; }


    onSubmit() {
        this.submitted = true;
        // stop here if form is invalid
        if (this.LoginForm.invalid) {
            return;
        }
        // display form values on success
        alert('SUCCESS!! :-)\n\n' + JSON.stringify(this.LoginForm.value, null, 4));
    }

    LoginSubmit() {

    //    console.log(this.LoginForm.value);
        if(this.LoginForm.valid)
        {
            // console.log(this.LoginForm.value);

        }
        else
        {
            this.errormsg = 'All Fields Are Required..';
        }
        if (this.LoginForm.valid) {
            console.log(this.LoginForm.value);
            this.service.LoginData(this.LoginForm.value).subscribe((res: { message: any; }) => {
                console.log(res, 'res==>');
                this.LoginForm.reset();
                this.successmsg = res.message;
            });
        }
        else {
            // console.log('All fields are required..');
            // this.errormsg = 'All Fields are Required..!';
        }
    }
}

import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { THIS_EXPR } from '@angular/compiler/src/output/output_ast';
import { ActivatedRoute, Router } from '@angular/router';

@Injectable({
    providedIn: 'root'
})

export class ApiserviceService {
    deleteData(id: any) {
        throw new Error('Method not implemented.');
    }
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
        alert("hii");
        let ids = id;
        return this._http.put(`${this.apiUrl}/${ids}`, data);
    }
    // getsingle data

    getSingleData(id: any): Observable<any> {
        let ids = id;
        return this._http.get(`${this.apiUrl}/${ids}`);
    }
}


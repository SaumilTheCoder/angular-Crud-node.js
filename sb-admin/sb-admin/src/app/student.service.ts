import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class StudentService {

    constructor(private _http:HttpClient) { }

    apiUrl = 'http://localhost:3000/user';
    apiCountry = 'http://localhost:3000/country';
    apiState = 'http://localhost:3000/state';
    apiCity = 'http://localhost:3000/city';


}

import { Injectable } from '@angular/core';
import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { THIS_EXPR } from '@angular/compiler/src/output/output_ast';

import { HostListener } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ApiserviceService {

  constructor(private _http:HttpClient) { }

// connect to frontend to backend

apiUrl = 'http://localhost:3000/user';

// get all data

getAllData():Observable<any>
{
    return this._http.get(`${this.apiUrl}`);
}

// create the data

createData(data:any):Observable<any>
{
    console.log(data,'Createapi=>');
    return this._http.post(`${this.apiUrl}`,data);
}

// delete data

deleteData(id:any):Observable<any>
{
    let ids = id;
    return this._http.delete(`${this.apiUrl}/${ids}`);
}

// update data

updateData(data:any,id:any):Observable<any>
{
    let ids = id;
    return this._http.put(`${this.apiUrl}/${ids}`,data);
}

// getsingle data

getSingleData(id:any):Observable<any>
{
    let ids = id;
    return this._http.get(`${this.apiUrl}/${ids}`);
}


}

@Component({
    selector: 'sb-tables',
    templateUrl: './tables.component.html',
    styleUrls: ['./tables.component.scss'],
})
export class TablesComponent implements OnInit {

  constructor(private service:ApiserviceService) { }

  readData:any;
  successmsg:any;

  ngOnInit(): void {
    //   console.log("tables checking..");
    this.getAllData();0
}


// deleteid

deleteId(id:any){
    console.log(id,'deleteid==>');
    this.service.deleteData(id).subscribe((res)=>{
        console.log(res,'deleteres==>');
        this.successmsg = res.message;

        this.service.getAllData().subscribe((res)=>{
            console.log(res,"res==>");
            this.readData = res.data;
            this.getAllData();
        });
    });

}

// getData

getAllData()
{
    this.service.getAllData().subscribe((res)=>{
        console.log(res,"res==>");
        this.readData = res.data;
    });
}

@HostListener('window:beforeunload', ['$event'])
beforeunloadHandler(event:any) {

  return false;
  //I have used return false but you can your other functions or any query or condition
}



}

import { Component, OnInit } from '@angular/core';

import {ApiserviceService} from '../apiservice.service';

@Component({
  selector: 'sb-read',
  templateUrl: './read.component.html',
  styleUrls: ['./read.component.scss']
})
export class ReadComponent implements OnInit {

  constructor(private service:ApiserviceService) { }

  readData:any;
  successmsg:any;

  ngOnInit(): void {
    this.getAllData();
}

// deleteid

// deleteId(id:any){
//     console.log(id,'deleteid==>');
//     this.service.deleteData(id).subscribe((res)=>{
//         console.log(res,'deleteres==>');
//         this.successmsg = res.message;

//         this.service.getAllData().subscribe((res)=>{
//             console.log(res,"res==>");
//             this.readData = res.data;
//             this.getAllData();
//         });
//     });

// }

// getData

getAllData()
{
    this.service.getAllData().subscribe((res)=>{
        console.log(res,"res==>");
        this.readData = res.data;
    });
}



}


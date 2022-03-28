import { Component, OnInit } from '@angular/core';

import {FormControl, FormGroup, Validators} from '@angular/forms';
import {ApiserviceService} from '../apiservice.service'

import {ActivatedRoute} from '@angular/router'
import { ComponentCanDeactivate } from '@app/component-can-deactivate';


@Component({
  selector: 'sb-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.scss']
})
export class CreateComponent implements OnInit,ComponentCanDeactivate {

    canDeactivate():boolean{
        return !this.isDirty;
    }

    isDirty = false;

  constructor(private service:ApiserviceService,private router:ActivatedRoute) { }

    errormsg:any;
    successmsg:any;
    getparamid:any;

  ngOnInit(): void {
    //  console.log(this.router.snapshot.paramMap.get('id'),'getid');
     this.getparamid = this.router.snapshot.paramMap.get('id');

    if(this,this.getparamid)
    {
        this.service.getSingleData(this.getparamid).subscribe((res)=>{
            console.log(res,'res==>');
            this.userForm.patchValue({
                firstname:res.data[0].firstname,
                lastname:res.data[0].lastname,
                age:res.data[0].age,
                email:res.data[0].email
            });
     });
    }
}

  userForm = new FormGroup({

        'firstname':new FormControl('',Validators.required),
        'lastname':new FormControl('',Validators.required),
        'age':new FormControl('',Validators.required),
        'email':new FormControl('',Validators.required),


  });

//   createnewuser

  userSubmit(){

        // console.log(this.userForm.value); checking for data..

    if(this.userForm.valid)
    {
        console.log(this.userForm.value);

        this.service.createData(this.userForm.value).subscribe((res)=>{
            console.log(res,'res==>');
            this.userForm.reset();
            this.successmsg = res.message;

        });
    }
    else
    {
        // console.log('All fields are required..');
        this.errormsg = 'All Fields are Required..!';
    }
  }

//   updateData

userUpdate(){
    console.log(this.userForm.value,'Updated Form..');

    if(this.userForm.valid)
    {
        this.service.updateData(this.userForm.value,this.getparamid).subscribe((res)=>{
            console.log(res,'resupdated..');
            this.successmsg =res.message;

        });
    }
    else
    {
        this.errormsg = 'All Fields Are Required..';
    }

}


}

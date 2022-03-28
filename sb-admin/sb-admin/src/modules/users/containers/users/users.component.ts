import { Injectable } from '@angular/core';
import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Observable } from 'rxjs';
import { Router } from '@angular/router';
import { ComponentCanDeactivate } from '@app/component-can-deactivate';

import { ApiserviceService } from '@app/apiservice.service';

import {CustomValidators} from '@app/providers/CustomValidators';

import { ConfirmedValidator } from '../../../../app/confirmed.validator'

// update data
import { ActivatedRoute } from '@angular/router';

@Component({
    selector: 'sb-users',
    templateUrl: './users.component.html',
    styleUrls: ['./users.component.scss'],
})
export class UsersComponent implements OnInit, ComponentCanDeactivate {

    constructor(private service: ApiserviceService,private router:ActivatedRoute) {}

    canDeactivate():boolean{
        return !this.isDirty;
    }
    isDirty = false;
    submitted: boolean | undefined;
    stateArr: any;
    cityArr: any;

    errormsg: any;
    successmsg: any;
    getparamid:any;
    countryArr: any;

    ngOnInit(): void {
        // console.log("users checking..");
         console.log(this.router.snapshot.paramMap.get('id'),'getid');
        this.getCountry();
        this.getparamid = this.router.snapshot.paramMap.get('id');
        if (this, this.getparamid) {
            this.service.getSingleData(this.getparamid).subscribe((res) => {
                console.log(res, 'res==>');
                this.userForm.patchValue({
                    firstname: res.data[0].firstname,
                    lastname: res.data[0].lastname,
                    country: res.data[0].country,
                    state: res.data[0].state,
                    city: res.data[0].city,
                    gender: res.data[0].gender,
                    age: res.data[0].age,
                    email: res.data[0].email,
                    mobile: res.data[0].mobile
                });
            });
        }
    }

    url = "./assets/img/tree.jpg";

    onSelectFile(e: { target: { files: any; }; }){
        if(e.target.files)
        {
            var reader = new FileReader();
            reader.readAsDataURL(e.target.files[0]);
            reader.onload=(event:any)=>{
                this.url= event.target.result;
            }
        }
    }

    userForm = new FormGroup({
        'firstname': new FormControl('', Validators.required),
        'lastname': new FormControl('', Validators.required),
        'age': new FormControl('', Validators.required),
        'email': new FormControl('', [Validators.required,Validators.email]),
        'password': new FormControl(null, [Validators.required,Validators.minLength(6)]),
        'confirm_password': new FormControl(null, [Validators.required]),
        // 'confirm_password': new FormControl('', Validators.required),
        'country': new FormControl('', Validators.required),
        'state': new FormControl('', Validators.required),
        'city': new FormControl('', Validators.required),
        'gender': new FormControl('', Validators.required),
        'mobile': new FormControl('', Validators.required),
    },

        // CustomValidators.mustMatch('password', 'confirm_password') // insert here
    );

    get f() { return this.userForm.controls; }

    onSubmit() {
        this.submitted = true;
        // stop here if form is invalid
        if (this.userForm.invalid) {
            return;
        }
        // display form values on success
        alert('SUCCESS!! :-)\n\n' + JSON.stringify(this.userForm.value, null, 4));
    }


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
    // updateData
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
    getCountry() {
        this.service.getCountry().subscribe((res: any) => {
            // console.log(res,'get country..'); checking..
            this.countryArr = res.data;
        });
    }
    getState(event: any) {
        var obj = {
            country_id: event.target.value
        }
        // 1 DB Cotunry Id dynamic
        this.service.getState(obj).subscribe((res) => {
            var newArray = res.data.filter(function (el:any) {
                return el['country_id'] === Number(event.target.value)
              });
            this.stateArr = newArray;
        });
    }
    getCity(event: any) {
        // console.log("city change..");
        // console.log(event.target.value);
        var obj = {
            state_id: event.target.value
        }
        this.service.getCity(obj).subscribe((res) => {
            var newArray = res.data.filter(function (el:any) {
                return el['state_id'] === Number(event.target.value)
              });
            this.cityArr = newArray;
        });
    }

}

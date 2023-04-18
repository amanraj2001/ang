import { Component } from '@angular/core';
import {FormGroup,FormControl, FormArray, Validators} from '@angular/forms'
import { data } from '../model/data';
import { fname } from '../model/fullname';
@Component({
  selector: 'app-newform',
  templateUrl: './newform.component.html',
  styleUrls: ['./newform.component.css']
})
export class NewformComponent {

  f1!:string;
  f2!:string;
  f3!:string;

  arr:Array<any>=[]
  // arr2:Array<fname>=[]
  // hobbies:Array<string>=[]
// x1:data={
//   username:"amam",
//   fname: {
//     firstname:"amam",
//     middlename:"ajfapwo",
//     lastname:"adjo"

//   },
//   age:"af",
//   // hobbies:[]
// }
    login = new FormGroup(
      {
        username : new FormControl('',Validators.required),
        fname: new FormGroup({
          firstname: new FormControl(),
          middlename: new FormControl(),
          lastname: new FormControl()
        }),
        age: new FormControl(),
        hobbies:new FormArray([new FormControl(''),new FormControl()])
      }
    )
      get gethob(){
        return this.login.get('hobbies') as FormArray;
      }

    sub(){
      // console.log(this.login.value.fname?);

      this.arr.push({username:this.login.value.username,fname:{firstname:this.login.value.fname?.firstname,middlename:this.login.value.fname?.middlename,lastname:this.login.value.fname?.lastname},age:this.login.value.age,hobbies:this.login.value.hobbies})

      console.log(this.arr);


      // this.arr2.push({firstname:this.login.value.fullname?.firstname})
    }
}


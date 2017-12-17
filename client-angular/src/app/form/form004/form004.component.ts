import { Component, OnInit } from '@angular/core';
import {FormGroup, FormBuilder, Validators, FormControl, AbstractControl} from "@angular/forms";
import {mobileValidator, equalValidator, mobileAsyncValidator} from "../validator/validators";

@Component({
  selector: 'app-form004',
  templateUrl: './form004.component.html',
  styleUrls: ['./form004.component.css']
})
export class Form004Component implements OnInit {

  formModel: FormGroup;
  
    constructor(fb: FormBuilder) {
      this.formModel = fb.group({
        username: ['', [Validators.required, Validators.minLength(6)]],
        mobile: ['', mobileValidator, mobileAsyncValidator],
        passwordsGroup: fb.group({
          password: ['', Validators.minLength(6)],
          pconfirm: ['']
        }, {validator: equalValidator})
      })
    }
  
    onSubmit(){
      let isValid:boolean = this.formModel.get("username").valid;
      console.log("username的校验结果:"+isValid);
      let errors:any = this.formModel.get("username").errors;
      console.log("username的错误信息是:"+JSON.stringify(errors));
      if(this.formModel.valid){
        console.log(this.formModel.value);
      }
  
    }
  

  ngOnInit() {
  }

}

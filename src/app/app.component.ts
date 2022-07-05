import { AuthService } from './services/auth.service';
import { Component } from '@angular/core';
import {ScriptService} from "./script.service";
import { FormControl, FormGroup } from '@angular/forms';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  formReg: FormGroup;
  formLogin: FormGroup;
  title = 'ecommerce';
  constructor(private _script:ScriptService,private authService:AuthService){
    _script.carga(["/script"]);
    this.formReg = new FormGroup({
      email:new FormControl(),
      password: new FormControl()
    })
    this.formLogin = new FormGroup({
      email:new FormControl(),
      password: new FormControl()
    })
  }
  registrar(){
    this.authService.register(this.formReg.value)
    .then(response =>{
      console.log(response);
    })
    .catch(error => console.log(error));
  }
  Ingresar(){
    this.authService.login(this.formLogin.value)
    .then(response =>{
      console.log(response);
    })
    .catch(error => console.log(error));
  }
}


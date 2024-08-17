import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AuthService } from 'src/shared/services/auth.service';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { Router } from '@angular/router';


@Component({
  selector: 'app-login',
  standalone: true,
  imports: [CommonModule,ReactiveFormsModule],
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {

  constructor(private _AuthService:AuthService,private _Router:Router){  }

  loginFrom:FormGroup=new FormGroup({
    username:new FormControl('',[Validators.required,Validators.minLength(5),Validators.maxLength(15)]),
    password:new FormControl('',[Validators.required,Validators.minLength(5),Validators.maxLength(15)])
  })

  login():void{

   if(this.loginFrom.valid){

    this._AuthService.login(this.loginFrom.value).subscribe({
      next:(res)=>{
        console.log(res.token);
        localStorage.setItem('Token',res.token)
        this._Router.navigate(['/home'])
      },
      error:(err)=>{
        console.log(err);
        
      }
    })
   }
  }

}

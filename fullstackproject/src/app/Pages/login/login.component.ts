import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from 'express';
import { AuthService } from 'src/app/service/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  
  loginForm!:FormGroup

  constructor(private fb:FormBuilder,private auth:AuthService) { 
    this.loginForm = this.fb.group({
      
      'email': ['', Validators.required],
      'password': ['', Validators.required],
    })
  }

  ngOnInit(): void {
  }

  login(){
    //alert("login successfull")
    const data = this.loginForm.value;
    this.auth.signin(data).subscribe((res)=>{
      if(res.success){
        localStorage.setItem('token',res.token)
        alert(res.message)
      }else{
        alert(res.message)
      }
     

    },err=>{
      alert("Login failed!")
    })
  }

}

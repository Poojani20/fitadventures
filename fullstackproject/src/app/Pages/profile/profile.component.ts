import { Component, OnInit } from '@angular/core';
import { Router } from 'express';
import { AuthService } from 'src/app/service/auth.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss']
})
export class ProfileComponent implements OnInit {

  data!:any;

  constructor(private auth:AuthService) { }

  ngOnInit(): void {
  }
  getProfile(){
    this.auth.getProfile().subscribe(res=>{
      if(res.success){
        this.data = res.data;
        
      }else{
        this.logout();
      }
    },err=>{

    })
  }
  logout(){
    
   
  }

  

}

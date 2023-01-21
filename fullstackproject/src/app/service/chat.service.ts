import { HttpClient,HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
    providedIn: 'root'
  })
  export class ChatService {
  
    constructor(private http:HttpClient) { }
  
    signup(data:any) :Observable<any>{
      return this.http.post('http://localhost:8080/auth/chat', data);
   }
   
  }
  
  
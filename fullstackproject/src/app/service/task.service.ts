import { provideImgixLoader } from '@angular/common';
import { HttpClient,HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';


@Injectable({
    providedIn:'root'
})
export class TaskService {

  constructor(private http:HttpClient) { }

  signup(data:any) :Observable<any>{
    return this.http.post('http://localhost:8080/auth/task', data);
 }
 signin(data:any):Observable<any>{
  return this.http.post('http://localhost:8080/auth/task',data )
 }
   

}
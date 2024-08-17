import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { AuthBody } from '../interfaces/auth-body';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private _HttpClient:HttpClient) { }

  

  login(body:AuthBody):Observable<any>
  {
    return this._HttpClient.post('https://dummyjson.com/auth/login',body)

  }


}

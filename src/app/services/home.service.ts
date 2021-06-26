import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class HomeService {

  private URL = 'http://localhost:3000/api'
  
  constructor(
    private htpp: HttpClient
  ) { }

  getHome(){
    return this.htpp.get<any>(this.URL + '/home');
  }
}

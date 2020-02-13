import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Employee } from './employee';

@Injectable({
  providedIn: 'root'
})
export class TableService {

  constructor(private http:HttpClient) { }
  getData(){
    return this.http.get<Employee[]>('http://localhost:3003/posts');
  }

}

import { Injectable } from '@angular/core';
import { joblisting } from './model/joblist';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class JobServiceService {

  constructor(private http:HttpClient) { }
  url: string = " http://localhost:3000/joblisting"

  getJobRoles()
  {
    return this.http.get<joblisting[]>(this.url);
  }
}

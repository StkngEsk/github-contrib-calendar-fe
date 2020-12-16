import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { URL_API } from 'src/app/config/config';

@Injectable({
  providedIn: 'root'
})
export class GithubCalendarService {

  constructor(private http: HttpClient) { }

  getSvgGithubCalendar(user:string, year:string){
    return  this.http.get(`${URL_API}/${user}/${year}`);
  }
}

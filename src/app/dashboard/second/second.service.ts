import { Injectable } from '@angular/core';
import {Observable} from "rxjs";
import {HttpClient} from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class SecondService {

  constructor(private http: HttpClient) {
  }

  public getPeopleFromSwapi(): Observable<any> {
    return this.http.get('https://swapi.dev/api/people');
  }

  public getPeoplePage(url: string): Observable<any> {
    return this.http.get(url);
  }
}

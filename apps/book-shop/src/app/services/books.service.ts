import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class BooksService {

  constructor(
    private http: HttpClient,
  ) {}

  public getPopularBooks(): Observable<any> {
    return this.http.get('./assets/data/popular.json');
  }
}

import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { environment } from '../../environments/environment';
import { Quote } from '@angular/compiler';


@Injectable({
  providedIn: 'root'
})
export class QuoteService {

  private baseUrl = environment.baseUrl;

  constructor(private httpClient: HttpClient) { }

  findAll(limit: number = 21): Observable<Quote[]> {
    return this.httpClient.get<any>(`${this.baseUrl}/quotes?limit=${limit}`)
      .pipe(
        map((data) => data.quotes)
      );
  }
}

import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class HttpService {

  public readonly api: string = 'https://google.com.br';

  constructor(private httpClient: HttpClient) { }

  public post(route, body): Observable<any> {
    return this.httpClient.post<any>(`${this.api}${route}`, body);
  }

}

import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class HttpService {

  private commonUrl = 'http://localhost:3000/';

  constructor(private http: HttpClient) {
  }

  public post(url: string, data: any) {
    const headers = new HttpHeaders();
    headers.append('Content-Type', 'application/json');
    headers.append('Accept', 'application/json');
    headers.append('Access-Control-Allow-Origin', '*');
    return this.http.post(this.commonUrl + url, data, {headers});
  }

  public get(url: string, data?: any) {
    const headers = new HttpHeaders();
    return this.http.get(this.commonUrl + url, data);
  }
}

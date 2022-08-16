import { product } from './../products/Models/product';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AppService {
  constructor(private http: HttpClient) { }
  baseURL = "http://localhost:3000/"
  postData(endpoint: string, body: product) {
    let headers = new HttpHeaders()
    headers = headers.set("content-type", "Application/json")
    return this.http.post(this.baseURL + endpoint, body, { "headers": headers })
  }
  getData(endpoint: string) {
    let headers = new HttpHeaders()
    headers = headers.set("content-type", "Application/json")
    return this.http.get<product[]>(this.baseURL + endpoint, { "headers": headers })
  }
  getProductById(endpoint: string, id: number) {
    let headers = new HttpHeaders()
    headers = headers.set("content-type", "Application/json")
    return this.http.get<product>(this.baseURL + endpoint + "/" + id, { "headers": headers })
  }
  updatedata(endpoint: string, body: product) {
    let headers = new HttpHeaders()
    headers = headers.set("content-type", "Application/json")
    return this.http.put(this.baseURL + endpoint + "/" + body.id, body, { "headers": headers })
  }
  deletedata(endpoint: string, id: number) {
    let headers = new HttpHeaders()
    headers = headers.set("content-type", "Application/json")
    return this.http.delete(this.baseURL + endpoint + "/" + id, { "headers": headers })
  }
}

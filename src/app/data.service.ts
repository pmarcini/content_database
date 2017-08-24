import { Injectable } from '@angular/core';
import { Http, Headers, Response, RequestOptions } from '@angular/http';
import { Observable } from 'rxjs/Rx';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';

@Injectable()
export class DataService {

  result:any;
  constructor(private http: Http) { }
  

  getUsers(){
    //return this.http.get("/api/users")
    return this.http.get("/api/users")
      .map(result => this.result = result.json());
  }

  getProducts(){
    return this.http.get("/api/products")
      .map(result => this.result = result.json());

  }


    insertProduct(post){
        let body = JSON.stringify(post);
        let url: string = "/api/products";
        let headers = new Headers({ 'Content-Type': 'application/json'});
        let options = new RequestOptions({headers:headers});
        console.log("data service: " + body);
        return this.http.post(url,body,options)
        

    }














}

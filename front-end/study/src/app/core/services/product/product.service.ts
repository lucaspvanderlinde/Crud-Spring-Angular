import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  constructor(private http: HttpClient) { }
  
  private baseUrl = 'http://localhost:8080/products';

  
  public getProducts(): Observable<any>{
    return this.http.get(`${this.baseUrl}`);
  }

  public getProductById(id: number): Observable<any>{
    return this.http.get(`${this.baseUrl}/${id}`);
  }

  public insertProduct(obj: Object): Observable<Object>{
    return this.http.post(`${this.baseUrl}`, obj);
  }

  public deleteProduct(id: number): Observable<any>{
    return this.http.delete(`${this.baseUrl}/${id}`);
  }

  public updateProduct(id: number, obj: Object): Observable<Object>{
    return this.http.put(`${this.baseUrl}/${id}`, obj);
  }
}

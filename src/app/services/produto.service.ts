import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment';
import { HttpClient } from '@angular/common/http';
import { Observable, catchError, pipe } from 'rxjs';
import { Produtos } from '../models/Produtos';
import { Response } from '../models/Response';

@Injectable({
  providedIn: 'root'
})
export class ProdutoService {
  public apiUrl = `${environment.baseApiUrl}/Produto`

  constructor(public http: HttpClient) { }

  GetProducts() : Observable<Response<Produtos[]>>{
    return this.http.get<Response<Produtos[]>>(this.apiUrl);
  }

  GetProductById(id: number): Observable<Response<Produtos>>{
    return this.http.get<Response<Produtos>>(`${this.apiUrl}/${id}`);
  }

  CreateProduct(produto: Produtos) : Observable<Response<Produtos[]>>{
    console.log('Dados do produto:', produto);
    return this.http.post<Response<Produtos[]>>(`${this.apiUrl}`, produto)

  }

  UpdateProduto(produto: Produtos): Observable<Response<Produtos[]>>{
    return this.http.put<Response<Produtos[]>>(`${this.apiUrl}`, produto);
  }

  DisableProduct(id: number): Observable<Response<Produtos[]>>{
    return this.http.put<Response<Produtos[]>>(`${this.apiUrl}/indisponibilizaProduto/${id}`, id);
  }

  DeleteProduct(id: number): Observable<Response<Produtos[]>>{
    return this.http.delete<Response<Produtos[]>>(`${this.apiUrl}?idProduto=${id}`);
}
}

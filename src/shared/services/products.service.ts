import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {

  constructor(private _HttpClient:HttpClient) { }

  searchQuery:BehaviorSubject<string>=new BehaviorSubject('')
  addToCard:BehaviorSubject<number>=new BehaviorSubject(0)
  currentSearchQuery = this.searchQuery.asObservable();


  updateSearchQuery(query: string) {
    this.searchQuery.next(query);
  }

  getAllProducts():Observable<any>
  {
    return this._HttpClient.get('https://dummyjson.com/products')

  }
  getAllCategories():Observable<any>
  {
    return this._HttpClient.get('https://dummyjson.com/products/categories')

  }
  getProductsByCategory(category:string):Observable<any>
  {
    return this._HttpClient.get(`https://dummyjson.com/products/category/${category}`)

  }

  homePagination(skip:number):Observable<any>
  {
    return this._HttpClient.get(`https://dummyjson.com/products?limit=10&skip=${skip*10}`)

  }

  searchProducts(realTimeSearchWord:string):Observable<any>
  {
    
    return this._HttpClient.get(`https://dummyjson.com/products/search?q=${realTimeSearchWord}`)

  }
  getCategoriesList():Observable<any>
  {
    return this._HttpClient.get('https://dummyjson.com/products/category-list')
  }
  
  
}

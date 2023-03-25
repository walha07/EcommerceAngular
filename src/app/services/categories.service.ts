import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import {Categories} from '../models/categories';

@Injectable({
  providedIn: 'root'
})
export class CategoriesService {
  baseurl="http://localhost:3001/api/categories";

  constructor(private http:HttpClient) {
    
   }
   ListCategories():Observable<Categories[]>
   {
      return this.http.get<Categories[]>(this.baseurl);
   }
   Deletecategories(id:object):Observable<Categories>
  {
    return this.http.delete<Categories>(this.baseurl+'/'+id);
  }
  Addcategories=(cat: Categories)=>
  {
    return this.http.post<Categories>(this.baseurl,cat)
  }
  UpdateCategorie(id:object,cat:Categories): Observable<Categories>
   {
       return this.http.put<Categories>(this.baseurl + '/' + id,cat);
   }
}

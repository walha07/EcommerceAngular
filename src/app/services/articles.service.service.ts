import { HttpClient } from '@angular/common/http';
import { Component, Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Articles } from '../models/articles';



@Injectable({
  providedIn: 'root'
})


export class ArticlesServiceService {
  baseur2="http://localhost:3001/api/articles"

  constructor( private http:HttpClient) { }
  getarticles():Observable<Articles[]>{
    return this.http.get<Articles[]>(this.baseur2)
  }
  Deletearticle(id:object):Observable<Articles>
  {
    return this.http.delete<Articles>(this.baseur2+'/'+id);
  }
  AddArticle=(art: Articles)=>
  {
    return this.http.post<Articles>(this.baseur2,art)
  }
  UpdateArticle(id:object,art:Articles): Observable<Articles>
   {
       return this.http.put<Articles>(this.baseur2 + '/' + id,art);
   }
   GetArticle(id:object):Observable<Articles>{
    return this.http.get<Articles>(this.baseur2+'/'+id);
   }
}

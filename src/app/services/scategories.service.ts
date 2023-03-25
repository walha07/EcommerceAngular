import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import{Scategories} from '../model/scategories'



@Injectable({
  providedIn: 'root'
})
export class ScategoriesService {
  baseur1="http://localhost:3001/api/scategories"

  constructor(private http:HttpClient) { }

getscategories():Observable<Scategories[]>
{
  return this.http.get<Scategories[]>(this.baseur1);
}
Deletescategories(id:object):Observable<Scategories>
{
  return this.http.delete<Scategories>(this.baseur1+'/'+id);
}
Addscategories=(cat: Scategories)=>
{
  return this.http.post<Scategories>(this.baseur1,cat)
}
UpdateScategorie(id:object,scat:Scategories): Observable<Scategories>
   {
       return this.http.put<Scategories>(this.baseur1 + '/' + id,scat);
   }
}


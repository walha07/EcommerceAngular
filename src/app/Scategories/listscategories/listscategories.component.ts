import { Component } from '@angular/core';
import { Scategories } from 'src/app/model/scategories';
import { ScategoriesService } from 'src/app/services/scategories.service';

@Component({
  selector: 'app-listscategories',
  templateUrl: './listscategories.component.html',
  styleUrls: ['./listscategories.component.css']
})
export class ListscategoriesComponent {
  scategories:Scategories[]
  constructor(private catserv :ScategoriesService){}
  ngOnInit(){
    return this.catserv.getscategories().subscribe(data=>this.scategories =data),
    (err:any)=>console.log(err)
  }
  

}

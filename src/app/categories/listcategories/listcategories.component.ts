import { Component } from '@angular/core';
import {CategoriesService} from'src/app/services/categories.service'
import { Categories } from '../../models/categories';
@Component({
  selector: 'app-listcategories',
  templateUrl: './listcategories.component.html',
  styleUrls: ['./listcategories.component.css']
})
export class ListcategoriesComponent {
  categories:Categories[]
  constructor(private catserv:CategoriesService){}
  ngOnInit() {
    return this.catserv.ListCategories().subscribe(data =>
      this.categories = data),
      (err:any)=>console.log(err)
      }
}

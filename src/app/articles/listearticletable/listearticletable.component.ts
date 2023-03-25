
import { Component } from '@angular/core';
import{Articles}from '../../models/articles';
import { ArticlesServiceService } from 'src/app/services/articles.service.service';

@Component({
  selector: 'app-listearticletable',
  templateUrl: './listearticletable.component.html',
  styleUrls: ['./listearticletable.component.css']
})
export class ListearticletableComponent {
  articles:Articles[];
  constructor(private catserv:ArticlesServiceService){}


  ngOnInit(){
    return this.catserv.getarticles().subscribe( data => this.articles= data),
    (err:any)=> console.log(err)

;}
    

}

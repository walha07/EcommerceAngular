import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Articles } from 'src/app/models/articles';
import { ArticlesServiceService } from 'src/app/services/articles.service.service';

@Component({
  selector: 'app-modifarticles',
  templateUrl: './modifarticles.component.html',
  styleUrls: ['./modifarticles.component.css']
})
export class ModifarticlesComponent {
  id:object
  article :Articles=new Articles()
  constructor(private artserv:ArticlesServiceService,private route:ActivatedRoute,private router:Router){}
  ngOnInit(){
    this.id=this.route.snapshot.params['id'];
    this.artserv.GetArticle(this.id).subscribe(data=>this.article=data);
  } 
  modifarticles(){
    this.artserv.UpdateArticle(this.id,this.article).subscribe(data=>this.router.navigate(['/articl']))
  }

}

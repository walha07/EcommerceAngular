import { Component } from '@angular/core';
import { ArticlesServiceService } from'../../../app/services/articles.service.service';
import { Articles } from '../../../app/models/articles';
import { Router } from '@angular/router';
import { Scategories } from 'src/app/model/scategories';
import { ScategoriesService } from 'src/app/services/scategories.service';

@Component({
  selector: 'app-insertarticle',
  templateUrl: './insertarticle.component.html',
  styleUrls: ['./insertarticle.component.css']
})
export class InsertarticleComponent {
  constructor(private art: ArticlesServiceService ,private serscat:ScategoriesService) { }
nouvarticle: Articles = new Articles();
scategories:Scategories[];
router:Router;
ajoutarticle(){
  this.art.AddArticle(this.nouvarticle).subscribe(data=>this.router.navigate(['/articles/listarticles']),
  err=>console.log(err));
  }
  onFileChanged(event:any) {
    this.nouvarticle.imageart="images/articles/"+event.target.files[0]
    .nameconsole.log(this.nouvarticle.imageart);
  }
  ngOnInit(){
    this.loadscategorie();
  }
  loadscategorie() {
    return this.serscat.getscategories().subscribe(data =>
      this.scategories = data),
      (err:any)=>console.log(err)
  }
  
  

}

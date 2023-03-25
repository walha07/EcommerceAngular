import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { InsertarticleComponent } from './articles/insertarticle/insertarticle.component';
import { ListarticlesComponent } from './articles/listarticles/listarticles.component';
import { ListearticletableComponent } from './articles/listearticletable/listearticletable.component';
import { ModifarticlesComponent } from './articles/modifarticles/modifarticles.component';
import { ListcategoriesComponent } from './categories/listcategories/listcategories.component';
import { ListscategoriesComponent } from './Scategories/listscategories/listscategories.component';

const routes: Routes = [
  {path:"larticles",component:ListarticlesComponent},
  {path:"lcategories",component:ListcategoriesComponent},
  {path:"lscategories",component:ListscategoriesComponent},
  {path:"lcardart",component:ListarticlesComponent},
  {path:"insertart",component:InsertarticleComponent},
  {path:"editart/:id",component:ModifarticlesComponent},

  {path:"listarticletable",component:ListearticletableComponent}
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

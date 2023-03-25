import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';




import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MenuComponent } from './menu/menu.component';
import { ListcategoriesComponent } from './categories/listcategories/listcategories.component';

import { ListarticlesComponent } from './articles/listarticles/listarticles.component';
import { ModifarticlesComponent } from './articles/modifarticles/modifarticles.component';
import { ModifscategoriesComponent } from './Scategories/modifscategories/modifscategories.component';

import { InsertscategoriesComponent } from './Scategories/insertscategories/insertscategories.component';
import { ListscategoriesComponent } from './Scategories/listscategories/listscategories.component';
import { HttpClientModule } from '@angular/common/http';

import { InsertarticleComponent } from './articles/insertarticle/insertarticle.component';
import { FormsModule } from '@angular/forms';
import { DataTablesModule } from 'angular-datatables';
import { ListearticletableComponent } from './articles/listearticletable/listearticletable.component';


@NgModule({
  declarations: [
    AppComponent,
    MenuComponent,
    ListcategoriesComponent,
    
    ListarticlesComponent,
    ModifarticlesComponent,
    ModifscategoriesComponent,
    InsertscategoriesComponent,
    ListscategoriesComponent,
   
    InsertarticleComponent,
        ListearticletableComponent,
    
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    DataTablesModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

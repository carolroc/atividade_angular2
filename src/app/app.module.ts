import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { HelloComponent } from './hello.component';
import { RouterModule } from '@angular/router';
import { TabuadaComponent } from './tabuada/tabuada.component';
import { SobreComponent } from './sobre/sobre.component';
import { HomeComponent } from './home/home.component';

@NgModule({
  imports:      [ BrowserModule, FormsModule,
    RouterModule.forRoot([
      { path: '', component: HomeComponent }, //passa os parametros caminho e o componente
      { path: 'sobre', component: SobreComponent },
      { path: 'tabuada', component: TabuadaComponent }
    ])//configura as rotas a partir da raiz
  ],
  declarations: [ AppComponent, HelloComponent, TabuadaComponent, SobreComponent ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }

import { HomeComponent } from './home/home.component';
import { SobrevivenciaComponent } from './categoria/sobrevivencia/sobrevivencia.component';
import { SimulacaoComponent } from './categoria/simulacao/simulacao.component';
import { RpgComponent } from './categoria/rpg/rpg.component';
import { LutaComponent } from './categoria/luta/luta.component';
import { IndieComponent } from './categoria/indie/indie.component';
import { FutebolComponent } from './categoria/futebol/futebol.component';
import { EstrategiaComponent } from './categoria/estrategia/estrategia.component';
import { CorridaComponent } from './categoria/corrida/corrida.component';
import { AcaoComponent } from './categoria/acao/acao.component';
import { FpsComponent } from './categoria/fps/fps.component';
import { NgModule, Component } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {path:"fps",
  component : FpsComponent,
},{
  path:"acao",
  component : AcaoComponent,
},{
  path:"corrida",
  component : CorridaComponent,
},{
  path:"estrategia",
  component : EstrategiaComponent,
},{
  path:"futebol",
  component : FutebolComponent,
},{
  path:"indie",
  component : IndieComponent,
},{
  path:"luta",
  component : LutaComponent,
  
},{
  path:"rpg",
  component : RpgComponent,
},{
  path:"simulacao", 
  component : SimulacaoComponent,
},{
  path:"sobrevivencia",
  component : SobrevivenciaComponent,
},{
  path:"home",
  component : HomeComponent,
}
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

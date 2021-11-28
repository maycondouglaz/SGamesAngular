import {MatToolbarModule} from '@angular/material/toolbar';
import { LayoutModule } from '@angular/cdk/layout';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HeaderComponent } from './header/header.component';
import { MenuComponent } from './menu/menu.component';
import { FpsComponent } from './categoria/fps/fps.component';
import { SimulacaoComponent } from './categoria/simulacao/simulacao.component';
import { RpgComponent } from './categoria/rpg/rpg.component';
import { AcaoComponent } from './categoria/acao/acao.component';
import { CorridaComponent } from './categoria/corrida/corrida.component';
import { FutebolComponent } from './categoria/futebol/futebol.component';
import { LutaComponent } from './categoria/luta/luta.component';
import { SobrevivenciaComponent } from './categoria/sobrevivencia/sobrevivencia.component';
import { IndieComponent } from './categoria/indie/indie.component';
import { EstrategiaComponent } from './categoria/estrategia/estrategia.component';
import {MatCardModule} from '@angular/material/card';
import { MatListModule } from '@angular/material/list';
import { MatSidenavModule } from '@angular/material/sidenav';
import { HomeComponent } from './home/home.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    MenuComponent,
    FpsComponent,
    SimulacaoComponent,
    RpgComponent,
    AcaoComponent,
    CorridaComponent,
    FutebolComponent,
    LutaComponent,
    SobrevivenciaComponent,
    IndieComponent,
    EstrategiaComponent,
    HomeComponent,
    
  ],
  imports: [
    LayoutModule,
    MatToolbarModule,
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatCardModule,
    MatListModule,
    MatSidenavModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

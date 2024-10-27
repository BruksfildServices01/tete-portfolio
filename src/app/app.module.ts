import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SobreComponent } from './pages/sobre/sobre.component';
import { ExperienciaComponent } from './pages/experiencia/experiencia.component';
import { CursosComponent } from './pages/cursos/cursos.component';

@NgModule({
  declarations: [
    AppComponent,
    SobreComponent,
    ExperienciaComponent,
    CursosComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

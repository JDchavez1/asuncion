import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { CursosComponent } from './cursos/cursos.component';
import { ProfesoresComponent } from './profesores/profesores.component';
import { EventosComponent } from './eventos/eventos.component';
import { ContactoComponent } from './contacto/contacto.component';
import { EstudiantesComponent } from './estudiantes/estudiantes.component';
import { AdministracionComponent } from './administracion/administracion.component';
import { ComunidadComponent } from './comunidad/comunidad.component';

const routes: Routes = [

  {
    path:'', redirectTo:'home', pathMatch:'full'
  },
  {
    path:'home', component:HomeComponent
  },
  {
    path:'curso', component:CursosComponent
  },{
    path:'profesores', component:ProfesoresComponent
  },{
    path:'evento', component:EventosComponent
  },{
    path:'contacto', component:ContactoComponent
  },
  {
    path:'estudiantes', component:EstudiantesComponent
  },
  {
    path:'administracion', component:AdministracionComponent
  },
  {
    path:'comunidad', component:ComunidadComponent
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

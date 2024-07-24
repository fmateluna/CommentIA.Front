import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MainComponent } from './main/main.component'; // Asegúrate de que la ruta sea correcta

const routes: Routes = [
  { path: '', redirectTo: '/main', pathMatch: 'full' }, // Redirigir la raíz al componente principal
  { path: 'main', component: MainComponent } // Ruta para el componente principal
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

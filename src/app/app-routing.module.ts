import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { LogueadoGuard, NoLogueadoGuard } from './logueado.guard'
1
const routes: Routes = [
  {
    path: 'home',
    canActivate:[LogueadoGuard],
    loadChildren: () => import('./home/home.module').then( m => m.HomePageModule)
  },
  {
    path: '',
    redirectTo: 'login',
    pathMatch: 'full'
  },
  {
    path: 'login',
    canActivate:[NoLogueadoGuard],
    loadChildren: () => import('./login/login.module').then( m => m.LoginPageModule)
  },
  {
    path: 'reestablecer',
    canActivate:[NoLogueadoGuard],
    loadChildren: () => import('./reestablecer/reestablecer.module').then( m => m.ReestablecerPageModule)
  },
   {
    path: 'registro',
    canActivate:[NoLogueadoGuard],
    loadChildren: () => import('./registro/registro.module').then( m => m.RegistroPageModule)
  },
  {
    path: 'vista-profe',
    canActivate:[LogueadoGuard],
    loadChildren: () => import('./vista-profe/vista-profe.module').then( m => m.VistaProfePageModule)
  },
  {
    path: 'genera-qr',
    canActivate:[LogueadoGuard],
    loadChildren: () => import('./genera-qr/genera-qr.module').then( m => m.GeneraQRPageModule)
  },
  {
    path: 'vista-alumno',
    canActivate:[LogueadoGuard],
    loadChildren: () => import('./vista-alumno/vista-alumno.module').then( m => m.VistaAlumnoPageModule)
  },
  {
    path:'**',
    redirectTo:'notfound'
  },
  {
    path: 'notfound',
    loadChildren: () => import('./notfound/notfound.module').then( m => m.NotfoundPageModule)
  }

  

 


];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }

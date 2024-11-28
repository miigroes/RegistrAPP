import { Component,OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';



@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  usuario: any; // Declarar una variable para almacenar los datos del usuario.

  constructor(private router: Router) {
    // Recupera los datos del usuario de localStorage si están disponibles.
    const usuarioString = localStorage.getItem('usuario');
    if (usuarioString) {
      this.usuario = JSON.parse(usuarioString);
    }
  }

  logOut(){
    localStorage.clear()
    this.router.navigate(['/login']); 
  }
  
}

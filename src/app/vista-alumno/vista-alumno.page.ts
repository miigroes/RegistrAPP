import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { QrscanService } from '../qrscan.service'



@Component({
  selector: 'app-vista-alumno',
  templateUrl: './vista-alumno.page.html',
  styleUrls: ['./vista-alumno.page.scss'],
})
export class VistaAlumnoPage implements OnInit {
  usuario: any;

  constructor(private router: Router, private qrscanservice: QrscanService) {
    const usuarioString = localStorage.getItem('usuario');
    if (usuarioString) {
      this.usuario = JSON.parse(usuarioString);
    }
   }

  ngOnInit() {
  }

  logOut(){
    localStorage.clear()
    this.router.navigate(['/login']); 
  }

  iniciarEscaneo() {
    // Llama al método startScan del servicio cuando se haga clic en el botón
    this.qrscanservice.startScan();
  }
}

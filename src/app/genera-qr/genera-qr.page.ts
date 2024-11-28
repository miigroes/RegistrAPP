import { Component, OnInit } from '@angular/core';
import { ApiService } from '../servicios/api.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-genera-qr',
  templateUrl: './genera-qr.page.html',
  styleUrls: ['./genera-qr.page.scss'],
})
export class GeneraQRPage implements OnInit {

  /*Crea lista vacia para desplegar en html asociado */
  listaClase: any[] =[]

  qrdata = 'Registrar asistencia en ';
  preqr = 'Asginatura';

  mostrar: boolean = false;

  constructor(private router: Router,private api:ApiService /*Conexión con servicio API creado */) { }

  ngOnInit() {
    this.api.obtenerClase().subscribe((respuesta)=>{
      console.log(respuesta)
      this.listaClase = respuesta;
      })
    
  }

  obtenerClase(){
    this.api.obtenerClase().subscribe((respuesta)=>{
    console.log(respuesta)
    this.listaClase = respuesta;
    })

    
  }

  mostrarQR(){
    this.mostrar = !this.mostrar
  }

  cambiarOpcion(event:any){
    if (event.detail.value != 'opcion1'){
      
      this.mostrar = false;
    }
  }

  logOut(){
    localStorage.clear()
    this.router.navigate(['/home']); 
  }
}

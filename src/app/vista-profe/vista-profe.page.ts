import { Component, OnInit } from '@angular/core';
import { ApiService } from '../servicios/api.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-vista-profe',
  templateUrl: './vista-profe.page.html',
  styleUrls: ['./vista-profe.page.scss'],
})
export class VistaProfePage implements OnInit {

  mensaje: string = "";
  /*Crea lista vacia para desplegar en html asociado */
  listaAlumnos: any[] =[]
  listaClase: any[] =[]

  constructor(private router: Router,private api:ApiService /*Conexión con servicio API creado */) { 
    

  }

  ngOnInit() {
    this.api.obtenerClase().subscribe((respuesta)=>{
      console.log(respuesta)
      this.listaClase = respuesta;
      })
    
  }

  /*Funcion de mismo nombre que en api.ts */
  obtenerAlumno(){
    this.api.obtenerAlumno().subscribe((respuesta)=>{
    console.log(respuesta)
    this.listaAlumnos = respuesta;
    })

    
  }

  obtenerClase(){
    this.api.obtenerClase().subscribe((respuesta)=>{
    console.log(respuesta)
    this.listaClase = respuesta;
    })

    
  }

  logOut(){
    localStorage.clear()
    this.router.navigate(['/home']); 
  }
  
}

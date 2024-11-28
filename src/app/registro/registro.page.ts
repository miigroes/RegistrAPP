import { Component, OnInit } from '@angular/core';
import { FormBuilder,  FormControl, FormGroup, Validators } from '@angular/forms';
import { AlertController, NavController } from '@ionic/angular';

@Component({
  selector: 'app-registro',
  templateUrl: './registro.page.html',
  styleUrls: ['./registro.page.scss'],
  
 
})
export class RegistroPage implements OnInit {

  formularioRegistro: FormGroup;

  constructor(public form: FormBuilder, public alerta: AlertController, public Navctrl: NavController){
    this.formularioRegistro = this.form.group({
      'nombre': new FormControl("", Validators.required),
      'apellido': new FormControl("",Validators.required),
      'usuario' : new FormControl("",Validators.required),
      'password': new FormControl("",Validators.required),
      'confirmaPassword': new FormControl("",Validators.required),
      
    })
  }

  

  ngOnInit() {
  }

  async registro(){
    var f = this.formularioRegistro.value;

    if(this.formularioRegistro.invalid){
      const alert = await this.alerta.create({
        header: 'Datos incompletos',
        message: 'Tienes que llenar todos los datos',
        buttons: ['Aceptar']
      });
  
      await alert.present();
      return;
    }

    var usuario = {
      usuario: f.usuario,
      nombre: f.nombre,
      password: f.password
    }
    
    localStorage.setItem('usuario',JSON.stringify(usuario));
    
    const alert = await this.alerta.create({
      header: 'Exito',
      message: 'Usuario Registrado',
      buttons: ['Aceptar']
    });

    await alert.present();
    return;
    
  }
  

}

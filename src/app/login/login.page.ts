import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import {  Router } from '@angular/router';
import { AlertController } from '@ionic/angular';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {
  formularioLogin: FormGroup;

  a = false;
  intentos = 0;

  constructor(private router: Router, public fb: FormBuilder,public alerta: AlertController) {
    this.formularioLogin = this.fb.group({
      'usuario': new FormControl("",Validators.required),
      'password': new FormControl("",Validators.required)
    });
  } 
  ngOnInit() {
  }

  async iniciarSesion(){
    var f = this.formularioLogin.value;

    var usuarioStr = localStorage.getItem('usuario');

    if (usuarioStr !== null) {
      var usuario = JSON.parse(usuarioStr);
  
      if (usuario.usuario === f.usuario && usuario.password === f.password) {
        this.router.navigate(['/home']); 
        localStorage.setItem('ingresado','true');
        
      } else {
        this.intentos++;
        const alert = await this.alerta.create({
          header: 'Datos incorrectos',
          message: 'Los datos que ingresaste son incorrectos.',
        });
        if (this.intentos >= 3) {
          this.a = true; 
        }
        await alert.present();
        setTimeout(() => {
          alert.dismiss();
        }, 500);
        
      }
    } else {
      this.intentos++;
      const alert = await this.alerta.create({
        header: 'Datos incorrectos',
        message: 'Los datos que ingresaste son incorrectos.',
      });
      if (this.intentos >= 3) {
        this.a = true; 
      }
      await alert.present();
      setTimeout(() => {
        alert.dismiss();
      }, 500);
      console.error("No se encontró el objeto 'usuario' en localStorage");
    }
  }

  registrar(){
    this.router.navigate(['registro']);
  }

  olvido(){
    this.router.navigate(['reestablecer']);
  }
}

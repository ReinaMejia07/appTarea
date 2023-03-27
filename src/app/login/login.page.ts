import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AlertController } from '@ionic/angular';
@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

  formLogin : FormGroup;

  constructor(public formBuilder: FormBuilder, public alertController: AlertController, public router:Router) {
    //Inicializar el formulario
    this.formLogin = this.formBuilder.group({
      'nombre': new FormControl("",Validators.required),
      'password': new FormControl("",Validators.required)
    })
   }

  ngOnInit() {
  }

  async ingresar(){
     
    var form = this.formLogin.value;

    var usuario = JSON.parse(localStorage.getItem('usuario') || "[]");

    if(usuario.nombre == form.nombre && usuario.password == form.password){
      this.router.navigate(['/menu']);
      
    } else{
      const alert = await this.alertController.create({
        message: 'Usuario o Contraseña incorrectos',
        buttons: ['Aceptar']
      });
      await alert.present();
      return;
    }
  }
   

}

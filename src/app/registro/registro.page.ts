import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AlertController, IonButtons } from '@ionic/angular';

@Component({
  selector: 'app-registro',
  templateUrl: './registro.page.html',
  styleUrls: ['./registro.page.scss'],
})
export class RegistroPage implements OnInit {

  formRegistro: FormGroup;

  constructor( public formBuild:FormBuilder,public alertController: AlertController, public router: Router) { 
    this.formRegistro = this.formBuild.group({
      'nombre': new FormControl("",Validators.required),
      'password': new FormControl("",Validators.required),
      'confPassword':new FormControl("",Validators.required)
    })
  }

  ngOnInit() {
  }

  async guardar(){
    var form = this.formRegistro.value;

    if(this.formRegistro.invalid){
      const alert = await this.alertController.create({
        message: 'Debes completar todos los campos',
        buttons: ['Aceptar']
      });
      await alert.present();
      return;
    }else{
      this.router.navigate(['/login']);
    }

    var usuario = {
      nombre: form.nombre,
      password: form.password
    }
    
    localStorage.setItem('usuario',JSON.stringify(usuario));
  }

}

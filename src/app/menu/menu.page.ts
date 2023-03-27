import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AlertController, ModalController } from '@ionic/angular';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.page.html',
  styleUrls: ['./menu.page.scss'],
})
export class MenuPage implements OnInit {
  message = 'Cerrar Sesion';
  constructor(public alertController: AlertController, public router: Router) { }

  ngOnInit() {
  }

  async cerrarSesion(){
    const alert = await this.alertController.create({
      message: 'Seguro que desea cerrar la sesion',
      buttons: [{
        text: 'Cancelar',
        role: 'cancel'
      },
      {
        text: 'Confirmar',
        handler: ()=>{
          this.router.navigate(['/login']);
        }
      }]
      
    });
    await alert.present();
  }

  total!: Number;
  result1!: Number;
  m1 = "";

  checkm1(){
    switch (this.m1) {
      case "1": this.result1 = 0.25;
        
        break;

      case "2": this.result1= 0.75
        
        break;

      case "3": this.result1= 0.5
        break;

      case "4": this.result1= 0.5
        break;

      case "5": this.result1= 2.00
        break;
    
      default:
        break;
    }
    this.total=Number(this.result1) + Number(this.result2) + Number(this.result3)
  }

  result2!: Number;
  m2 = "";

  checkm2(){
    switch (this.m2) {
      case "1": this.result2= 1.00
        
        break;

      case "2": this.result2= 5.00
        
        break;

      case "3": this.result2= 3.00
        break;

      case "4": this.result2= 3.00
        break;

      case "5": this.result2= 2.5
        break;
    
      default:
        break;
    }
    this.total=Number(this.result1) + Number(this.result2) + Number(this.result3)
  }

  result3! : Number;
  m3 = "";

  checkm3(){
    switch (this.m3) {
      case "1": this.result3= 2.5
        
        break;

      case "2": this.result3= 0.30
        
        break;

      case "3": this.result3= 1.5
        break;

      case "4": this.result3= 1.00
        break;

      case "5": this.result3= 2.5
        break;
    
      default:
        break;
    }
    this.total=Number(this.result1) + Number(this.result2) + Number(this.result3)
  }
}

import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  public alert = false;
  public alertSuccess = false;
  public hover = true;

  public obj = {pesquisa: ''};

 salvar() {
  this.alert = false;
  this.alertSuccess = false;
   const valid = this.vefiryForm();
   if (valid) {
    const queryString = `?${Object.keys(this.obj)[0]}=${this.obj.pesquisa}`;
    console.log(queryString);
    this.alertSuccess = true;
   } else {
     this.alert = true;
   }
 }

 vefiryForm() {
   if (this.obj.pesquisa.trim() === '') {
    return false;
   }

   return true;
 }

 hoverBtn() {
  this.hover = !this.hover;
 }
}

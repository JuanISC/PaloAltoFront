import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import { map } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})


export class AppComponent {

  title = 'angularProyecto';
  dataReady = ""
  
  ContarPalabas(data: String) {

    this.dataReady = "";
    var validado: string[] = [];
    var total: number[] = [];

    for (let index = 0; index < data.length; index++) {
      const element = data.charAt(index);
      if (!validado.includes(element)) {
        var contador = 0;
        let aux = data.split('');
        aux.forEach(a => {
          if (a === element)
            contador++
        });
        validado.push(element)
        total.push(contador)
        console.log(element + "repetido" + contador)
      }
    }


    var repetido = Math.max.apply(this, total);
    console.log(repetido)
    var pos = 0;
    for (let index = 0; index < total.length; index++) {
      if (total[index] === repetido) {
        pos = index;
        this.dataReady += "caracater: " + validado[index] + " repetido: " + total[index] + " veces\n";
      }
    }

  }
}




//scabral@palo-it.com

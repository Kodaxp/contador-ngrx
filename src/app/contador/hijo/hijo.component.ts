import {Component} from '@angular/core';
import {Store} from "@ngrx/store";
import {AppState} from "../../app.reducer";
import {dividir, multiplicar} from "../contador.actions";

@Component({
  selector: 'app-hijo',
  templateUrl: './hijo.component.html',
  styles: []
})
export class HijoComponent {

  contador: number;

  constructor(private store: Store<AppState>) {
    store.select('contador').subscribe( contador => this.contador = contador );
  }

  multiplicar() {
    this.store.dispatch( multiplicar({numero: 2}) );
  }

  dividir() {
    this.store.dispatch( dividir({numero: 2}) );
  }

}

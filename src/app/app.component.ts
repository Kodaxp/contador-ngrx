import { Component } from '@angular/core';
import {Store} from "@ngrx/store";
import * as actions from "./contador/contador.actions";
import {AppState} from "./app.reducer";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  contador: number;

  constructor(private store: Store<AppState>) {
    store.select('contador').subscribe( contador => this.contador = contador );
  }

  incrementar() {
    this.store.dispatch( actions.incrementar() );
  }

  decrementar() {
    this.store.dispatch( actions.decrementar() );
  }
}

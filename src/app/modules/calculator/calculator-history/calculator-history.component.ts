import {Component, OnInit} from '@angular/core';
import {BitacoraService} from "../services/bitacora.service";
import {Bitacora} from "../../../model/interfaces/Bitacora";

@Component({
  selector: 'app-calculator-history',
  templateUrl: './calculator-history.component.html',
  styleUrls: ['./calculator-history.component.css']
})
export class CalculatorHistoryComponent implements OnInit {

  constructor(public bitacoraService: BitacoraService) {
  }

  ngOnInit(): void {
  }

  limpiar() {
    this.bitacoraService.resetRegistry();
  }

}

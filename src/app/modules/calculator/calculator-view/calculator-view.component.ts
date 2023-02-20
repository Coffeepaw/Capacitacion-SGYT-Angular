import {Component, OnInit} from '@angular/core';
import {CalculatorRequest} from "../../../model/interfaces/CalculatorRequest";
import {Operation} from "../../../model/enums/Operation";
import {OperationNames} from "../../../model/enums/Operation";
import {OperationSymbol} from "../../../model/enums/Operation";
import {CalculadoraService} from "../services/calculadora.service";
import {Bitacora} from "../../../model/interfaces/Bitacora";
import {BitacoraService} from "../services/bitacora.service";

@Component({
  selector: 'app-calculator-view',
  templateUrl: './calculator-view.component.html',
  styleUrls: ['./calculator-view.component.css']
})
export class CalculatorViewComponent implements OnInit {

  actualNumber = 1;

  calculatorRequest: CalculatorRequest = {
    number1: 0,
    number2: 0,
    operation: Operation.ADDITION
  };

  operation = Operation;
  operationNames = OperationNames;
  operationSymbols = OperationSymbol;

  constructor(private calculadoraService: CalculadoraService,
              private bitacoraService: BitacoraService) {
    this.actualNumber = 1;
  }

  ngOnInit(): void {
    this.actualNumber = 1;
    let bitacora = this.bitacoraService.getBitacora();
    if (bitacora.length != 0) {
      let lastOperation = bitacora[0];
      this.calculatorRequest.number1 = lastOperation.result;
    }
  }

  reset(): void {
    console.log("RESET!");
    this.calculatorRequest = {
      number1: 0,
      number2: 0,
      operation: Operation.ADDITION
    }
    this.actualNumber = 1;
  }

  delete() {
    let number = "";
    if (this.actualNumber == 1) {
      number = this.calculatorRequest.number1.toString();
    } else {
      number = this.calculatorRequest.number2.toString();
    }
    if (number == "0") {
      return;
    }

    number = number.substring(0, number.length - 1);

    if (this.actualNumber == 1) {
      this.calculatorRequest.number1 = Number(number);
    } else {
      this.calculatorRequest.number2 = Number(number);
    }

  }

  calculate() {
    console.log("Calculate!");
    console.log(this.calculatorRequest);

    let registry: Bitacora = {
      number1: 0,
      number2: 0,
      result: 0,
      operationName: "",
      operationSymbol: "",
      comment: ""
    }
    let result = 0;
    if (this.calculatorRequest.operation == this.operation.DIVISION
      && this.calculatorRequest.number2 == 0) {
      result = 0
      registry.comment = "SYNTAX ERROR, RETURN 0";
    } else {
      result = this.calculadoraService.operate(this.calculatorRequest);
    }


    registry.number1 = this.calculatorRequest.number1;
    registry.number2 = this.calculatorRequest.number2;
    registry.result = result;
    registry.operationName = this.operationNames[this.calculatorRequest.operation];
    registry.operationSymbol = this.operationSymbols[this.calculatorRequest.operation];

    this.calculatorRequest.number1 = result;
    this.calculatorRequest.number2 = 0;
    this.calculatorRequest.operation = this.operation.ADDITION;
    this.bitacoraService.addRegistry(registry);
  }

  setOperation(operationChosed: number) {
    console.log("Se cambia a operacion: " + this.operationNames[operationChosed]);
    this.calculatorRequest.operation = operationChosed;
    this.actualNumber = 2;
  }

  setNumber(num: number) {
    console.log(num);
    if (this.actualNumber == 1) {
      this.calculatorRequest.number1 = Number(this.calculatorRequest.number1 + String(num));
    } else {
      this.calculatorRequest.number2 = Number(this.calculatorRequest.number2 + String(num));
    }
  }

}

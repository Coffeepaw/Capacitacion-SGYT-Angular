import {Injectable} from '@angular/core';
import {CalculatorRequest} from '../../../model/interfaces/CalculatorRequest';
import {Operation} from "../../../model/enums/Operation";

@Injectable({
  providedIn: 'root'
})
export class CalculadoraService {

  constructor() {
  }

  operate(calculatorRequest: CalculatorRequest): number {
    switch (calculatorRequest.operation) {

      case Operation.ADDITION: {
        return this.add(calculatorRequest.number1, calculatorRequest.number2);
      }

      case Operation.SUBTRACTION: {
        return this.substract(calculatorRequest.number1, calculatorRequest.number2);
      }

      case Operation.MULTIPLICATION: {
        return this.multiply(calculatorRequest.number1, calculatorRequest.number2);
      }

      case Operation.DIVISION: {
        return this.divition(calculatorRequest.number1, calculatorRequest.number2);
      }

      case Operation.POWER: {
        return this.power(calculatorRequest.number1, calculatorRequest.number2);
      }

      default: {
        return 0;
      }
    }
  }

  add(num1: number, num2: number): number {
    return num1 + num2;
  }

  substract(num1: number, num2: number): number {

    return num1 - num2;
  }

  multiply(num1: number, num2: number): number {

    return num1 * num2;
  }

  divition(num1: number, num2: number): number {
    return num1 / num2;
  }

  power(num1: number, num2: number): number {

    return Math.pow(num1, num2);
  }
}

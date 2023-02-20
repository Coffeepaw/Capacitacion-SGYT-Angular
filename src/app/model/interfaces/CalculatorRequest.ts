import {Operation} from "../enums/Operation";


export interface CalculatorRequest {
  number1: number;
  number2: number;
  operation: Operation;
}

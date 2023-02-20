import {NgModule} from '@angular/core';
import {CommonModule, FormStyle} from '@angular/common';
import {CalculatorViewComponent} from './calculator-view/calculator-view.component';
import {FormsModule} from "@angular/forms";
import {CalculatorHistoryComponent} from './calculator-history/calculator-history.component';


@NgModule({
  declarations: [
    CalculatorViewComponent,
    CalculatorHistoryComponent
  ],
  imports: [
    CommonModule,
    FormsModule
  ],
  exports: [
    CalculatorViewComponent,
    CalculatorHistoryComponent
  ]
})
export class CalculatorModule {
}

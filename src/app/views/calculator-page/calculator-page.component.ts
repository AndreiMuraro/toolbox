import { Component, OnInit } from '@angular/core';
import { CalculatorService } from './calculator.service';

@Component({
  selector: 'app-calculator-page',
  templateUrl: './calculator-page.component.html',
  styleUrls: ['./calculator-page.component.scss'],
})
export class CalculatorPageComponent implements OnInit {
  keys: number[] = [7, 8, 9, 4, 5, 6, 1, 2, 3, 0];
  valor: any = '';

  constructor(private calculator: CalculatorService) {}

  ngOnInit(): void {}

  addNumber(numero: number[]) {
    this.calculator.getNumber(numero);
    this.showCurrentKey();
  }

  showCurrentKey() {
    this.valor = this.calculator.getCurrentKey();
  }

  showFirstOperand() {
    this.valor = this.calculator.getFirstOperand();
  }

  operator(operador: string) {
    this.calculator.getOperation(operador);
    this.showFirstOperand();
  }

  decimal() {
    this.calculator.getDecimal();
  }
  clear() {
    this.valor = this.calculator.clear();
  }
}

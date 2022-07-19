import { Component, OnInit } from '@angular/core';
import { CalculatorService } from './calculator.service';

@Component({
  selector: 'app-calculator-page',
  templateUrl: './calculator-page.component.html',
  styleUrls: ['./calculator-page.component.scss'],
})
export class CalculatorPageComponent implements OnInit {
  keys: number[] = [1, 2, 3, 4, 5, 6, 7, 8, 9, 0];
  valor: string = '';

  constructor(private calculator: CalculatorService) {}

  ngOnInit(): void {}

  addNumber(numero: number[]) {
    this.calculator.getNumber(numero);
    this.showDisplay();
  }

  showDisplay() {
    this.valor = this.calculator.currentKey;
  }

  operator(operador: string) {
    this.showDisplay();
  }
}

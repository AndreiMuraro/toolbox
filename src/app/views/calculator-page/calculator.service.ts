import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class CalculatorService {
  currentKey: string = '0';
  firstOperand: number = -1;
  waitSecondNumber: boolean = false;
  operator!: string;

  constructor() {}

  getNumber(numero: number[]) {
    if (this.waitSecondNumber) {
      this.currentKey = numero.toString();
      this.waitSecondNumber = false;
    } else {
      this.currentKey === '0'
        ? (this.currentKey = numero.toString())
        : (this.currentKey += numero.toString());
    }
  }

  getDecimal() {
    if (!this.currentKey.includes('.')) {
      this.currentKey += '.';
    }
  }
  private doCalculation(op: string, secondNum: number): any {
    switch (op) {
      case '+':
        return (this.firstOperand += secondNum);
      case '-':
        return (this.firstOperand -= secondNum);
      case '*':
        return (this.firstOperand *= secondNum);
      case '/':
        return (this.firstOperand /= secondNum);
      case '=':
        return secondNum;
    }
  }
  getOperation(op: string) {
    console.log(op);
    if (this.firstOperand === -1) {
      this.firstOperand = Number(this.currentKey);
    } else if (this.operator) {
      const result = this.doCalculation(this.operator, Number(this.currentKey));
      this.currentKey = String(result);
      this.firstOperand = result;
    }
    this.operator = op;
    this.waitSecondNumber = true;
    console.log(this.firstOperand);
  }
  clear() {
    this.currentKey = '';
    this.firstOperand = 0;
    this.operator = '';
    this.waitSecondNumber = false;
  }
  getCurrentKey() {
    return this.currentKey;
  }

  getFirstOperand() {
    return this.firstOperand;
  }
}

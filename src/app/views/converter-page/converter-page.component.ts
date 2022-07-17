import { Component, OnInit } from '@angular/core';
import { ConverterPageService } from './converter-page.service';

@Component({
  selector: 'app-converter-page',
  templateUrl: './converter-page.component.html',
  styleUrls: ['./converter-page.component.scss'],
})
export class ConverterPageComponent implements OnInit {
  valor: number = 0;
  resultado: number = 0;
  constructor(private converterService: ConverterPageService) {}

  ngOnInit(): void {}

  // Function for set number in service template
  convert() {
    this.valor = this.converterService.convert(this.valor);
    this.resultado = this.valor;
  }
}

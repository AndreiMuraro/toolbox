import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CalculatorPageComponent } from './views/calculator-page/calculator-page.component';
import { ConverterPageComponent } from './views/converter-page/converter-page.component';

const routes: Routes = [
  {
    path: 'converter',
    component: ConverterPageComponent,
    title: 'Conversor de Binário',
  },
  {
    path: 'calculator',
    component: CalculatorPageComponent,
    title: 'Calculadora',
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}

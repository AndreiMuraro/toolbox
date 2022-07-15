import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ConverterPageComponent } from './views/converter-page/converter-page.component';

const routes: Routes = [
  {
    path: '',
    component: ConverterPageComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}

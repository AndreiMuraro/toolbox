import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PoModule } from '@po-ui/ng-components';
import { RouterModule } from '@angular/router';
import { ConverterPageComponent } from './views/converter-page/converter-page.component';
import { PoFieldModule } from '@po-ui/ng-components';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [AppComponent, ConverterPageComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    PoModule,
    RouterModule.forRoot([]),
    PoFieldModule,
    FormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
